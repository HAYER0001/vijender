import { VerticalTimeline } from "@/components/VerticalTimeline"

export const metadata = {
  title: "About Me",
  description: "A legacy of service since 1993.",
}

export default function JourneyPage() {
  return (
    <div className="bg-[var(--page-bg)] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-green">
            About Me
          </h1>
          <p className="mt-4 text-fg/70 max-w-2xl mx-auto text-lg">
            A timeline of dedication, public service, and working alongside the people.
          </p>
        </div>
        <VerticalTimeline />
      </div>
    </div>
  )
}
