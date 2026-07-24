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
          <h1 className="font-display text-5xl md:text-7xl font-bold text-green">
            About Me
          </h1>
          <p className="mt-4 text-fg/70 max-w-2xl mx-auto text-lg font-sans">
            A timeline of dedication, public service, and working alongside the people.
          </p>
        </div>
        <VerticalTimeline />

        {/* Comprehensive Profile Section */}
        <section className="mt-24 bg-white/50 dark:bg-white/5 rounded-3xl p-8 md:p-12 shadow-sm border border-green/10">
          <div className="prose prose-lg dark:prose-invert max-w-none font-sans text-fg/80 space-y-8">
            
            {/* ABOUT */}
            <div>
              <h2 className="font-display font-bold text-4xl text-saffron mb-6">About</h2>
              <p>Public life, for me, is not about holding positions—it is about creating positive change.</p>
              <p>For more than two decades, I have worked at the intersection of technology, media, public communication, and grassroots social service. My journey has been guided by one simple belief: leadership is measured by service, not by status.</p>
              <p>Inspired by the vision of Hon'ble Prime Minister Shri Narendra Modi, I have dedicated myself to nation-building through digital empowerment, social harmony, transparent governance, and community participation.</p>
              <p>Whether working with people at the grassroots, leading digital initiatives, or contributing to organizational responsibilities, my commitment remains the same—to serve society with integrity, innovation, and accountability.</p>
              <p className="font-semibold text-fg">I believe India's greatest strength lies in its people, and meaningful leadership begins by listening to them.</p>
            </div>

            <hr className="border-green/20" />

            {/* ROOTED IN BJP VALUES */}
            <div>
              <h3 className="font-display font-bold text-3xl text-green mb-4">Rooted in BJP Values</h3>
              <p>My commitment to the Bharatiya Janata Party is not recent—it is part of my upbringing.</p>
              <p>I come from a family that has remained actively associated with the BJP for decades. My father formally joined the party in 1992 during the visit of Shri Bhairon Singh Shekhawat to Padampur, after years of dedicated work for the organization. He has served in several important organizational roles, including Vice-President of Padampur Rural Mandal, responsibilities in the District Working Committee, BJP Kisan Morcha, and has continuously served as the Booth President of our village since 1993.</p>
              <p>Growing up in this environment instilled in me the values of discipline, nationalism, organizational commitment, and selfless public service. Since 1993, I have actively participated in party activities, social initiatives, and grassroots outreach, strengthening my bond with both the organization and the people.</p>
            </div>

            <hr className="border-green/20" />

            {/* PUBLIC LEADERSHIP */}
            <div>
              <h3 className="font-display font-bold text-3xl text-green mb-4">Public Leadership</h3>
              <div className="mb-6">
                <h4 className="font-bold text-xl text-saffron-dark">State Co-Incharge, BJP Minority Morcha, Rajasthan (Present)</h4>
                <p>As State Co-Incharge, I work to strengthen dialogue with minority communities while advancing the vision of "Sabka Saath, Sabka Vikas, Sabka Vishwas, Sabka Prayas." My focus remains on inclusive development, social harmony, and expanding public participation in nation-building.</p>
              </div>
              <div>
                <h4 className="font-bold text-xl text-saffron-dark">Former Member, Zonal Railway Users' Consultative Committee (ZRUCC) - North Western Railway</h4>
                <p>As a member of ZRUCC, I represented public concerns and contributed to discussions aimed at improving passenger facilities, railway services, and regional connectivity.</p>
              </div>
            </div>

            <hr className="border-green/20" />

            {/* ORGANIZATIONAL RESPONSIBILITIES */}
            <div>
              <h3 className="font-display font-bold text-3xl text-green mb-4">Organizational Responsibilities</h3>
              <p>Over the years, I have been entrusted with several responsibilities within the party and public organizations, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>State Co-Incharge, BJP Minority Morcha, Rajasthan (Present)</li>
                <li>Former Member, Rajasthan Community Leader Panel, National Commission for Minorities</li>
                <li>Former Member, BJP District Working Committee</li>
                <li>Former District IT Coordinator, BJP Kisan Morcha, Sri Ganganagar</li>
                <li>Former Member, BJP Kisan Morcha Rajasthan Social Media Team</li>
                <li>Former Bikaner Division In-charge, BJP Kisan Morcha Social Media</li>
                <li>Former District Media In-charge &amp; District Vice-President, Bharat Tibet Sahyog Manch, Sri Ganganagar</li>
              </ul>
              <p className="mt-4">I also had the privilege of managing the Election War Room and Digital Media War Room for Union Minister Shri Arjun Ram Meghwal during the 2019 and 2024 Lok Sabha Elections, contributing to strategic communication and digital outreach.</p>
            </div>

            <hr className="border-green/20" />

            {/* PROFESSIONAL JOURNEY */}
            <div>
              <h3 className="font-display font-bold text-3xl text-green mb-4">Professional Journey</h3>
              <p>Alongside public service, I have built a professional career spanning more than 24 years in Information Technology, media, and digital communication.</p>
              <p>As Senior IT Head at Rajasthan Patrika, one of Rajasthan's leading media organizations, I gained extensive experience in technology leadership, digital transformation, media systems, and organizational management.</p>
              <p>I also write the Punjabi column "Gallan Baatan" in Rajasthan Patrika, highlighting social concerns, public issues, and regional perspectives.</p>
              <p>My professional experience has strengthened my understanding of digital governance, strategic communication, technology-enabled public service, and citizen engagement.</p>
            </div>

            <hr className="border-green/20" />

            {/* LEADERSHIP PHILOSOPHY */}
            <div>
              <h3 className="font-display font-bold text-3xl text-green mb-4">Leadership Philosophy</h3>
              <p className="font-semibold text-lg text-fg">True leadership is not about authority—it is about responsibility.</p>
              <p>It is about listening before speaking, serving before seeking recognition, and building institutions that outlast individuals.</p>
              <p className="mt-4">My work is guided by the principles of:</p>
              <div className="flex flex-wrap gap-3 mt-4">
                {['Strategic Thinking', 'Organizational Leadership', 'Public Communication', 'Digital Innovation', 'Media Strategy', 'Technology-driven Governance', 'Team Building', 'Problem Solving'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-saffron/10 text-saffron-dark font-medium rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <hr className="border-green/20" />

            {/* VISION FOR VIKSIT BHARAT 2047 */}
            <div>
              <h3 className="font-display font-bold text-3xl text-green mb-4">Vision for Viksit Bharat 2047</h3>
              <p>India stands at a defining moment in its history.</p>
              <p>The vision of Viksit Bharat 2047 represents more than economic progress—it reflects the aspiration to build a nation that is innovative, self-reliant, inclusive, secure, and globally respected.</p>
              <p className="mt-4">I aspire to contribute to this national journey by promoting:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 list-disc pl-6">
                <li>Transparent and accountable governance</li>
                <li>Technology-driven public services</li>
                <li>Youth leadership and entrepreneurship</li>
                <li>Farmer empowerment</li>
                <li>Strong community participation</li>
                <li>Inclusive social development</li>
                <li>Digital transformation at the grassroots</li>
              </ul>
              <p className="mt-4 font-semibold text-fg">I believe technology should bridge the gap between citizens and governance, creating opportunities for every section of society.</p>
            </div>

            <hr className="border-green/20" />

            {/* CORE VALUES */}
            <div>
              <h3 className="font-display font-bold text-3xl text-green mb-4">Core Values</h3>
              <ul className="space-y-4">
                <li><strong className="text-saffron-dark text-xl block mb-1">Nation First</strong> Every decision should strengthen India and serve its people.</li>
                <li><strong className="text-saffron-dark text-xl block mb-1">Integrity</strong> Honesty, transparency, and accountability remain non-negotiable.</li>
                <li><strong className="text-saffron-dark text-xl block mb-1">Service</strong> Public service is both a responsibility and a privilege.</li>
                <li><strong className="text-saffron-dark text-xl block mb-1">Inclusive Development</strong> Progress is meaningful only when it benefits every citizen.</li>
                <li><strong className="text-saffron-dark text-xl block mb-1">Innovation</strong> Technology is a catalyst for better governance and better lives.</li>
                <li><strong className="text-saffron-dark text-xl block mb-1">Grassroots Empowerment</strong> Strong communities build a strong nation.</li>
                <li><strong className="text-saffron-dark text-xl block mb-1">Continuous Learning</strong> Leadership demands humility, adaptability, and lifelong learning.</li>
              </ul>
            </div>

            <hr className="border-green/20" />

            {/* A PERSONAL COMMITMENT */}
            <div className="bg-green/5 p-8 rounded-2xl border-l-4 border-green">
              <h3 className="font-display font-bold text-2xl text-green mb-4">A Personal Commitment</h3>
              <p className="font-sans italic text-lg leading-relaxed text-fg/90">
                "I believe leadership begins with listening, grows through service, and earns trust through action. My commitment is to work with integrity, embrace innovation, and dedicate myself to building a stronger, more inclusive, and developed India—where every citizen has the opportunity to grow with dignity and contribute to the nation's progress."
              </p>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  )
}
