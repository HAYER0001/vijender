import { ParallaxGrid } from "@/components/ParallaxGrid"

export const metadata = {
  title: "Sri Karanpur Constituency",
  description: "Grassroots development and infrastructure projects in Sri Karanpur.",
}

export default function SriKaranpurPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-green">
            Sri Karanpur
          </h1>
          <p className="mt-4 text-fg/70 max-w-2xl mx-auto text-lg">
            Delivering concrete infrastructure and changing lives through Sabka Sath, Sabka Vikas.
          </p>
        </div>
      </div>
      <ParallaxGrid />
    </div>
  )
}
