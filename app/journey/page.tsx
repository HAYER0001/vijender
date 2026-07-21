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
          <h1 className="font-priestacy text-5xl md:text-7xl font-bold text-green">
            About Me
          </h1>
          <p className="mt-4 text-fg/70 max-w-2xl mx-auto text-lg font-rustic">
            A timeline of dedication, public service, and working alongside the people.
          </p>
        </div>
        <VerticalTimeline />

        {/* SEO Rich Biography Section */}
        <section className="mt-24 bg-white/50 dark:bg-white/5 rounded-3xl p-8 md:p-12 shadow-sm border border-green/10">
          <h2 className="font-rockybilly text-4xl text-saffron mb-6 text-center">Vijender Pal Singh - A Legacy of Grassroots Service in Sri Karanpur</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none font-eagle text-fg/80 space-y-6">
            <p>
              Welcome to the official digital presence of <strong>Vijender Pal Singh</strong>, a highly dedicated Bharatiya Janata Party (BJP) Karyakarta whose life and career have been intrinsically linked with the progress and development of <strong>Sri Karanpur</strong> and the broader Rajasthan region. Since beginning his public service journey in 1993, Vijender Pal Singh has established himself as a stalwart of community development, rural infrastructure enhancement, and social justice.
            </p>
            <p>
              Under the guiding philosophy of <em>Sabka Sath, Sabka Vikas, Sabka Vishwas</em>, Vijender Pal Singh's political trajectory is marked by unwavering commitment to the grassroots. His deep understanding of local agricultural issues, having roots in the 3 CC Padampur area, allows him to advocate effectively for farmer welfare, fair crop pricing, and the implementation of advanced agricultural practices. His role in facilitating the 'Kisan Train' is just one of many testaments to his dedication to the agricultural backbone of Sri Karanpur.
            </p>
            <h3 className="font-priestacy text-3xl text-green mt-8 mb-4">Championing Infrastructure and Minority Welfare</h3>
            <p>
              Beyond agriculture, Vijender Pal Singh has been a pivotal figure in modernizing regional infrastructure. His tenure as a ZRUCC Member for North Western Railways showcases his capability in liaising between local communities and central authorities to secure vital transport and connectivity improvements. Better railways mean better trade, easier travel for students, and a more robust local economy.
            </p>
            <p className="font-rustic text-xl text-saffron-dark p-4 bg-saffron/10 rounded-xl my-8">
              "True leadership is found not in the corridors of power, but in the dusty lanes of our villages, standing shoulder-to-shoulder with the common man." - Vijender Pal Singh
            </p>
            <p>
              Furthermore, his extensive work with the BJP Minority Morcha highlights a commitment to inclusive growth. Vijender Pal Singh believes that true regional development can only occur when every community, regardless of background, has access to education, healthcare, and economic opportunities. He has tirelessly worked to ensure government schemes reach the most marginalized sectors of Sri Karanpur, bridging the gap between policy and implementation.
            </p>
            <h3 className="font-rockybilly text-3xl text-green mt-8 mb-4">Looking Towards the Future of Rajasthan Politics</h3>
            <p>
              As Rajasthan continues to evolve, leaders like Vijender Pal Singh provide the necessary stability and vision. His extensive network, cultivated over three decades of active political engagement, positions him uniquely to address modern challenges—from digital literacy in rural areas to sustainable water management in agriculture. This website serves as a transparent platform to track his ongoing initiatives, connect directly with his office, and participate in the democratic process of building a stronger, more prosperous Sri Karanpur.
            </p>
            <p>
              For comprehensive updates on regional developments, upcoming community events, and direct avenues for grievance redressal, this portal remains the definitive source. Join Vijender Pal Singh in the shared mission of propelling Sri Karanpur towards unprecedented growth and harmony.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
