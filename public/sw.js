const CACHE_NAME = "vps-offline-assets-v1"
const OFFLINE_PAGE = "/offline.html"

const CACHE_FIRST_PATTERNS = [
  /\.(glb|gltf|bin)$/i,
  /\.(webp|jpg|jpeg|png|svg)$/i,
  /\.(woff2?)$/i,
]

const NETWORK_ONLY_PATTERNS = [
  /^\/api\//,
  /^\/connect/,
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([OFFLINE_PAGE])
    }).then(() => self.skipWaiting())
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    }).then(() => self.clients.claim())
  )
})

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url)

  // Skip non-GET
  if (event.request.method !== "GET") return

  // Network Only: API and connect routes
  if (NETWORK_ONLY_PATTERNS.some((p) => p.test(url.pathname))) {
    return
  }

  // Cache First: 3D assets, images, fonts
  if (CACHE_FIRST_PATTERNS.some((p) => p.test(url.pathname))) {
    event.respondWith(cacheFirst(event.request))
    return
  }

  // Network First: navigation and everything else
  if (event.request.mode === "navigate") {
    event.respondWith(networkFirst(event.request))
    return
  }

  // Stale-While-Revalidate for other static resources
  event.respondWith(staleWhileRevalidate(event.request))
})

async function cacheFirst(request: Request): Promise<Response> {
  const cached = await caches.match(request)
  if (cached) return cached

  try {
    const response = await fetch(request)
    if (response.ok) {
      const clone = response.clone()
      caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
    }
    return response
  } catch {
    return new Response("Offline", { status: 503 })
  }
}

async function networkFirst(request: Request): Promise<Response> {
  try {
    const response = await fetch(request)
    if (response.ok) {
      const clone = response.clone()
      caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
    }
    return response
  } catch {
    const cached = await caches.match(request)
    if (cached) return cached
    const offline = await caches.match(OFFLINE_PAGE)
    if (offline) return offline
    return new Response("Offline", { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } })
  }
}

async function staleWhileRevalidate(request: Request): Promise<Response> {
  const cached = await caches.match(request)
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      const clone = response.clone()
      caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
    }
    return response
  }).catch(() => cached)
  return cached ?? fetchPromise
}
