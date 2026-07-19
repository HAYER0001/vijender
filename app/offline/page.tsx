import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Offline",
  robots: { index: false, follow: false },
}

export default function OfflinePage() {
  return (
    <section className="flex min-h-[80dvh] items-center justify-center px-6 py-24">
      <div className="text-center max-w-md">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FF9933] text-4xl text-white">
          🪷
        </div>
        <div className="mx-auto mb-5 h-12 w-12 rounded-full border-3 border-dashed border-[#FF9933] motion-safe:animate-pulse" />
        <h1 className="font-heading text-3xl font-semibold text-[#0F523A] sm:text-4xl">
          अभी ऑफलाइन हैं
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Vijender Pal Singh का पोर्टफोलियो लोड करने के लिए इंटरनेट कनेक्शन की
          आवश्यकता है। कृपया दोबारा कनेक्ट होने पर पुनः प्रयास करें।
        </p>
        <p className="mt-2 text-sm text-gray-400">
          पहले से कैश की गई सामग्री (गैलरी, टाइमलाइन) अभी भी देखी जा सकती है।
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#FF9933] px-8 py-4 font-heading text-lg font-semibold text-white transition-colors hover:bg-[#e68a00] focus-visible:outline-3 focus-visible:outline-[#0F523A] focus-visible:outline-offset-2"
        >
          ⟳ पुनः प्रयास करें
        </a>
      </div>
    </section>
  )
}
