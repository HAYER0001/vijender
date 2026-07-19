"use client"

import { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, ContactShadows, Sparkles, Float, SpotLight } from "@react-three/drei"
import * as THREE from "three"
import Image from "next/image"
import { getTheme } from "@/lib/themeStore"

function AbstractMesh() {
  const groupRef = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const scrollProgress = useRef(0)

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.current = max > 0 ? window.scrollY / max : 0
    }
    window.addEventListener("mousemove", onMouse, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("mousemove", onMouse)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useFrame((_state, delta) => {
    if (!groupRef.current) return
    const g = groupRef.current
    g.rotation.x += (mouse.current.y * 0.2 - g.rotation.x) * delta * 4
    g.rotation.y += (mouse.current.x * 0.2 - g.rotation.y) * delta * 4
    g.position.y = Math.sin(scrollProgress.current * Math.PI * 2) * 0.2
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshPhysicalMaterial
            color="#FF9933"
            transmission={0.4}
            thickness={1}
            roughness={0.2}
            metalness={0.3}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={1.2}
          />
        </mesh>
      </Float>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#0F523A" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

const darkAmbColor = new THREE.Color("#1F2937")
const lightAmbColor = new THREE.Color("#ffffff")

function Scene() {
  const ambientRef = useRef<THREE.AmbientLight>(null!)
  const directionalRef = useRef<THREE.DirectionalLight>(null!)
  const spotRef = useRef<THREE.SpotLight>(null!)

  useFrame((state, delta) => {
    if (spotRef.current) {
      const x = state.pointer.x * state.viewport.width * 0.5
      const y = state.pointer.y * state.viewport.height * 0.5 + 1
      spotRef.current.target.position.set(x, y, 0)
      spotRef.current.target.updateMatrixWorld()
    }

    const theme = getTheme()
    const isDark = theme === "dark"
    const speed = delta * 3

    ambientRef.current.intensity = THREE.MathUtils.lerp(
      ambientRef.current.intensity,
      isDark ? 0.15 : 0.4,
      speed
    )
    ambientRef.current.color.lerp(isDark ? darkAmbColor : lightAmbColor, speed)

    directionalRef.current.intensity = THREE.MathUtils.lerp(
      directionalRef.current.intensity,
      isDark ? 0.6 : 1.5,
      speed
    )

    spotRef.current.intensity = THREE.MathUtils.lerp(
      spotRef.current.intensity,
      isDark ? 10 : 6,
      speed
    )
  })

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0.4} />
      <directionalLight ref={directionalRef} intensity={1.5} color="#FDFBF7" position={[2, 3, 4]} />
      <SpotLight
        ref={spotRef}
        angle={0.5}
        penumbra={0.8}
        intensity={6}
        color="#FF9933"
        distance={12}
        position={[0, 4, 6]}
        castShadow
      />
      <Suspense fallback={null}>
        <AbstractMesh />
        <Sparkles
          count={200}
          scale={4}
          size={0.04}
          speed={0.3}
          opacity={0.6}
          color="#FF9933"
          noise={0.3}
        />
        <Environment preset="city" />
      </Suspense>
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.35}
        scale={10}
        blur={2.5}
        far={4}
      />
    </>
  )
}

function FallbackImage() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
        style={{
          clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
        }}
      >
        <Image
          src="/hero-portrait.jpg"
          alt="Vijender Pal Singh"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw0NDQ8NDw0NDw0NDQ0NDQ0NDQ0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ0PFSsdFR0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBBgMBIgACEQEDEQH..."
        />
      </div>
    </div>
  )
}

export function HeroCanvas() {
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
  if (!webglOk) return <FallbackImage />

  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
