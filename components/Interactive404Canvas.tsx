"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Sparkles } from "@react-three/drei"
import * as THREE from "three"
import { getTheme } from "@/lib/themeStore"

const FRAGMENT_COUNT = 24

function randomInSphere(radius: number) {
  const theta = Math.random() * Math.PI * 2
  const phi = Math.acos(2 * Math.random() - 1)
  const r = radius * Math.cbrt(Math.random())
  return new THREE.Vector3(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi)
  )
}

function FracturedIcosahedron() {
  const groupRef = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const targets = useRef<{ pos: THREE.Vector3; rot: THREE.Euler }[]>([])
  const origins = useRef<{ pos: THREE.Vector3; rot: THREE.Euler }[]>([])
  const progress = useRef(0)

  const fragments = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.8, 1)
    const pos = geo.getAttribute("position")
    const verts: number[][] = []
    for (let i = 0; i < pos.count; i += 3) {
      verts.push([
        pos.getX(i), pos.getY(i), pos.getZ(i),
        pos.getX(i + 1), pos.getY(i + 1), pos.getZ(i + 1),
        pos.getX(i + 2), pos.getY(i + 2), pos.getZ(i + 2),
      ])
    }
    return verts.slice(0, FRAGMENT_COUNT)
  }, [])

  useEffect(() => {
    if (!groupRef.current) return
    const g = groupRef.current
    const t: { pos: THREE.Vector3; rot: THREE.Euler }[] = []
    const o: { pos: THREE.Vector3; rot: THREE.Euler }[] = []
    g.children.forEach((child) => {
      t.push({
        pos: randomInSphere(4),
        rot: new THREE.Euler(
          (Math.random() - 0.5) * Math.PI * 2,
          (Math.random() - 0.5) * Math.PI * 2,
          (Math.random() - 0.5) * Math.PI * 2,
        ),
      })
      o.push({
        pos: child.position.clone(),
        rot: child.rotation.clone(),
      })
    })
    targets.current = t
    origins.current = o

    const onMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener("mousemove", onMouse, { passive: true })
    return () => window.removeEventListener("mousemove", onMouse)
  }, [])

  useFrame((_state, delta) => {
    if (!groupRef.current) return

    const dist = Math.sqrt(mouse.current.x ** 2 + mouse.current.y ** 2)
    const targetProgress = Math.min(dist * 1.5, 1)
    progress.current += (targetProgress - progress.current) * delta * 3

    const t = targets.current
    const o = origins.current
    const p = progress.current
    const isDark = getTheme() === "dark"

    groupRef.current.children.forEach((child, i) => {
      if (!t[i] || !o[i]) return
      const mid = child as THREE.Mesh
      mid.position.lerpVectors(o[i].pos, t[i].pos, p)
      mid.rotation.x = o[i].rot.x + (t[i].rot.x - o[i].rot.x) * p
      mid.rotation.y = o[i].rot.y + (t[i].rot.y - o[i].rot.y) * p
      mid.rotation.z = o[i].rot.z + (t[i].rot.z - o[i].rot.z) * p

      const mat = mid.material as THREE.MeshPhysicalMaterial
      if (mat) {
        const opacityTarget = isDark ? 0.85 : 0.55
        mat.opacity += (opacityTarget - mat.opacity) * delta * 3
      }
    })

    groupRef.current.rotation.x += (mouse.current.y * 0.08 - groupRef.current.rotation.x) * delta * 3
    groupRef.current.rotation.y += (mouse.current.x * 0.08 - groupRef.current.rotation.y) * delta * 3
  })

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {fragments.map((tri, i) => {
        const geo = new THREE.BufferGeometry()
        const verts = new Float32Array(tri)
        geo.setAttribute("position", new THREE.BufferAttribute(verts, 3))
        geo.computeVertexNormals()

        return (
          <mesh key={i} geometry={geo} position={[0, 0, 0]}>
            <meshPhysicalMaterial
              color={i % 3 === 0 ? "#FF9933" : i % 3 === 1 ? "#0F523A" : "#FDFBF7"}
              metalness={0.3}
              roughness={0.2}
              transparent
              opacity={0.55}
              side={THREE.DoubleSide}
              envMapIntensity={0.6}
            />
          </mesh>
        )
      })}
    </group>
  )
}

const darkAmb = new THREE.Color("#1F2937")
const lightAmb = new THREE.Color("#ffffff")

function Scene() {
  const ambientRef = useRef<THREE.AmbientLight>(null!)


  useFrame((_state, delta) => {
    const isDark = getTheme() === "dark"
    const s = delta * 3

    ambientRef.current.intensity = THREE.MathUtils.lerp(
      ambientRef.current.intensity,
      isDark ? 0.2 : 0.5,
      s
    )
    ambientRef.current.color.lerp(isDark ? darkAmb : lightAmb, s)
  })

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0.5} />
      <directionalLight intensity={1.2} position={[3, 4, 5]} />
      <pointLight position={[-2, 1, 3]} intensity={0.6} color="#FF9933" />
      <FracturedIcosahedron />
      <Sparkles
        count={80}
        scale={8}
        size={0.03}
        speed={0.2}
        opacity={0.4}
        color="#FF9933"
        noise={0.5}
      />
      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.25}
        scale={12}
        blur={3}
        far={5}
      />
    </>
  )
}

export function Interactive404Canvas() {
  const [mounted, setMounted] = useState(false)
  const [webglOk, setWebglOk] = useState(true)

  useEffect(() => {
    setMounted(true)
    try {
      const c = document.createElement("canvas")
      const gl = c.getContext("webgl") || (c.getContext("experimental-webgl") as WebGLRenderingContext | null)
      if (!gl) setWebglOk(false)
    } catch {
      setWebglOk(false)
    }
  }, [])

  if (!mounted) return null
  if (!webglOk) return null

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        performance={{ min: 0.4 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
