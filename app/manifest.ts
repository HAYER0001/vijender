import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vijender Pal Singh — BJP Karyakarta, Sri Karanpur",
    short_name: "VPS",
    description:
      "Working for the people of Sri Karanpur since 1993. BJP karyakarta, social justice advocate, and community servant.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFBF7",
    theme_color: "#FF9933",
    orientation: "portrait-primary",
    categories: ["politics", "community", "social service"],
    lang: "hi",
    scope: "/",
    id: "/",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
    screenshots: [],
    prefer_related_applications: false,
  }
}
