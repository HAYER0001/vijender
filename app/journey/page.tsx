import { VerticalTimeline } from "@/components/VerticalTimeline"
import { TheStackTestimonial } from "@/components/TheStackTestimonial"

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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <h3 className="font-display font-bold text-3xl text-green">Organizational Responsibilities</h3>
                <span className="text-xs font-mono font-medium text-saffron bg-saffron/10 px-3 py-1 rounded-full self-start sm:self-auto">
                  Over 3 Decades of Grassroots Dedication
                </span>
              </div>
              <p className="text-fg/80 mb-6">
                Over the years, I have been entrusted with key leadership responsibilities within the Bharatiya Janata Party and allied public service bodies:
              </p>

              {/* Responsibilities Grid Filling the Space Beautifully */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 not-prose mb-6">
                <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-saffron/20 shadow-sm hover:border-saffron hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 text-saffron text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                    Present Leadership
                  </div>
                  <h4 className="font-display font-bold text-lg text-green dark:text-emerald-400 mb-1">
                    State Co-Incharge
                  </h4>
                  <p className="text-xs text-fg/70 font-sans">
                    BJP Minority Morcha, Rajasthan
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:border-saffron hover:shadow-md transition-all">
                  <span className="text-xs font-mono text-fg/50 block mb-2">National Body</span>
                  <h4 className="font-display font-bold text-lg text-green dark:text-emerald-400 mb-1">
                    Community Leader Panel
                  </h4>
                  <p className="text-xs text-fg/70 font-sans">
                    National Commission for Minorities (Rajasthan Panel)
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:border-saffron hover:shadow-md transition-all">
                  <span className="text-xs font-mono text-fg/50 block mb-2">District Committee</span>
                  <h4 className="font-display font-bold text-lg text-green dark:text-emerald-400 mb-1">
                    District Working Committee
                  </h4>
                  <p className="text-xs text-fg/70 font-sans">
                    Former Member, BJP District Working Committee
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:border-saffron hover:shadow-md transition-all">
                  <span className="text-xs font-mono text-fg/50 block mb-2">Kisan Morcha</span>
                  <h4 className="font-display font-bold text-lg text-green dark:text-emerald-400 mb-1">
                    District IT Coordinator
                  </h4>
                  <p className="text-xs text-fg/70 font-sans">
                    BJP Kisan Morcha, Sri Ganganagar
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:border-saffron hover:shadow-md transition-all">
                  <span className="text-xs font-mono text-fg/50 block mb-2">State Social Media</span>
                  <h4 className="font-display font-bold text-lg text-green dark:text-emerald-400 mb-1">
                    State Social Media Team
                  </h4>
                  <p className="text-xs text-fg/70 font-sans">
                    BJP Kisan Morcha Rajasthan
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:border-saffron hover:shadow-md transition-all">
                  <span className="text-xs font-mono text-fg/50 block mb-2">Division Incharge</span>
                  <h4 className="font-display font-bold text-lg text-green dark:text-emerald-400 mb-1">
                    Bikaner Division In-charge
                  </h4>
                  <p className="text-xs text-fg/70 font-sans">
                    BJP Kisan Morcha Social Media
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:border-saffron hover:shadow-md transition-all md:col-span-2 lg:col-span-3">
                  <span className="text-xs font-mono text-fg/50 block mb-2">Nationalist Outreach</span>
                  <h4 className="font-display font-bold text-lg text-green dark:text-emerald-400 mb-1">
                    District Media In-charge &amp; District Vice-President
                  </h4>
                  <p className="text-xs text-fg/70 font-sans">
                    Bharat Tibet Sahyog Manch, Sri Ganganagar
                  </p>
                </div>
              </div>

              {/* Highlight Card: Lok Sabha War Room */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-saffron/10 via-saffron/5 to-transparent border-l-4 border-saffron not-prose">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-saffron-dark dark:text-saffron">
                    Election Strategy &amp; War Room Leadership
                  </span>
                </div>
                <p className="text-sm sm:text-base text-fg/85 leading-relaxed">
                  Entrusted with managing the <strong>Election War Room</strong> and <strong>Digital Media War Room</strong> for Union Minister Shri Arjun Ram Meghwal during the 2019 and 2024 Lok Sabha Elections, spearheading strategic communication, real-time polling operations, and digital grassroots mobilization across Bikaner and regional constituencies.
                </p>
              </div>
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
              <p className="font-semibold text-base sm:text-[1.02rem] text-fg/90 italic">
                &ldquo;True leadership is not about authority—it is about responsibility.&rdquo;
              </p>
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

            {/* CORE VALUES & PERSONAL COMMITMENT — THE STACK TESTIMONIAL (JITTER STYLE) */}
            <div className="not-prose">
              <TheStackTestimonial />
            </div>
            
          </div>
        </section>
      </div>
    </div>
  )
}
