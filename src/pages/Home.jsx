import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const trustedBrands = ['Uttarakhand Water Board', 'AgroTech Industries', 'RiverLine Pumps', 'Himalayan Projects'];
const services = [
  { title: 'Pump Installation', description: 'End-to-end water pump installation for homes and industries.', icon: '⚙️' },
  { title: 'Borewell Setup', description: 'Safe and efficient borewell pump systems for reliable water access.', icon: '💧' },
  { title: 'Pump Repair', description: 'Fast troubleshooting and repair for all pump models.', icon: '🔧' },
  { title: 'Industrial Solutions', description: 'Robust industrial pump systems for heavy-duty operations.', icon: '🏭' },
];

function Home() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex rounded-full border border-brand-500 bg-brand-900/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-brand-300">
              Industry leader • Uttarakhand & India-ready
            </span>
            <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              India’s Trusted Water Pump Installation & Service Network
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              AKB ENGINEERING delivers premium water pump systems, borewell setups, and industrial water solutions with fast emergency support and nationwide growth plans.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">
                Book Service
              </Link>
              <Link to="/partners" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-7 py-4 text-sm font-semibold text-slate-100 transition hover:border-brand-400 hover:text-white">
                Become Partner
              </Link>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-glow">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Service Regions</p>
                <p className="mt-3 text-3xl font-semibold text-white">Uttarakhand today</p>
              </div>
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-glow">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Expansion Target</p>
                <p className="mt-3 text-3xl font-semibold text-white">Nationwide India</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-slate-800/90 bg-slate-900 shadow-glow">
              <img
                src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&w=1200&q=80"
                alt="Industrial water pump installation"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-slate-950/90 p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Premium pump installation</p>
                <p className="mt-3 text-lg font-semibold text-white">Reliable Grundfos and industrial pump solutions with modern execution.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-slate-800/80 bg-slate-950/80 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 text-center text-slate-400 sm:grid-cols-2 lg:grid-cols-4">
            {trustedBrands.map((brand) => (
              <div key={brand} className="rounded-3xl border border-slate-800/90 bg-slate-900/70 p-6">
                <p className="text-lg font-semibold text-white">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Services overview</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Comprehensive solutions for every water system need.</h2>
          </div>
          <Link to="/services" className="inline-flex rounded-full border border-brand-500 bg-brand-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-200 transition hover:bg-brand-500/20">
            View all services
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-8 shadow-glow transition hover:-translate-y-1 hover:border-brand-500">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-900 text-2xl shadow-inner">{item.icon}</div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800/80 bg-slate-950/80 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Why choose AKB ENGINEERING</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Trusted performance, strong results, and lasting support.</h2>
              <p className="mt-6 max-w-xl text-slate-300">
                Our engineering teams combine modern pump technology, precise installation standards, emergency readiness, and an expansion mindset to deliver premium outcomes across Uttarakhand and India.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Rapid response emergency support',
                'Certified borewell & pump experts',
                'Nationwide partner growth program',
                'Future-ready industrial water systems',
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-6 shadow-glow">
                  <p className="text-base font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-brand-400">How we work</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">A smooth process for every pump project.</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Consultation', detail: 'Technical assessment and scope planning.' },
            { title: 'Design & Setup', detail: 'Tailored pump solutions for every site.' },
            { title: 'Support & Maintenance', detail: 'Always-on care and AMC service plans.' },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-8 shadow-glow">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800/80 bg-slate-950/80 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Real work gallery</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Hydro pneumatic, industrial, and hotel water solutions.</h2>
              <p className="mt-4 max-w-2xl text-slate-400">
                See examples of our hydro pneumatic pump installations, industrial water system projects, and hotel pressure boosting solutions, with key specifications for each application.
              </p>
            </div>
            <Link to="/gallery" className="inline-flex rounded-full border border-brand-500 bg-brand-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-200 transition hover:bg-brand-500/20">
              Explore gallery
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                src: 'https://images.unsplash.com/photo-1631609784248-5d72b9f4d8f2?auto=format&fit=crop&w=1200&q=80',
                alt: 'Hydro pneumatic water pump system installation',
                title: 'Hydro Pneumatic Pump',
                specs: ['Pressure range 2-10 bar', 'Auto start/stop control', 'Stainless steel pressure tank'],
              },
              {
                src: 'https://images.unsplash.com/photo-1522199670076-2852f80289c0?auto=format&fit=crop&w=1200&q=80',
                alt: 'Large industrial pump and piping system',
                title: 'Industrial Pump System',
                specs: ['Heavy-duty 3-phase motors', 'High flow capacity', 'IP55 rated design'],
              },
              {
                src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
                alt: 'Hotel water pressure boosting installation',
                title: 'Hotel Water Boosting',
                specs: ['Constant pressure for multi-story buildings', 'Sanitary grade piping', 'Backup pump configuration'],
              },
            ].map((item, idx) => (
              <div key={idx} className="overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-900/70">
                <img src={item.src} alt={item.alt} className="h-80 w-full object-cover transition duration-500 hover:scale-105" />
                <div className="space-y-3 bg-slate-950/95 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-brand-400">{item.title}</p>
                  <ul className="mt-3 text-sm leading-7 text-slate-300">
                    {item.specs.map((spec) => (
                      <li key={spec} className="list-disc pl-5">{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800/80 bg-brand-900/95 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center text-white lg:px-8">
          <h2 className="text-4xl font-semibold">Emergency pump support across the region.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            24/7 emergency repair and service coordination for critical water systems. Call us any time and our field team will mobilize immediately.
          </p>
          <a href="tel:+918000000000" className="mt-8 inline-flex rounded-full bg-emerald-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
            Call Emergency Support
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/80 p-10 shadow-glow lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Partner network</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Join our expanding network of pump professionals.</h2>
            <p className="mt-6 max-w-xl text-slate-300">
              We are recruiting experienced technicians and service partners across India to support our national growth and deliver premium water system services.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 lg:justify-end">
            <Link to="/partners" className="rounded-full border border-brand-500 px-6 py-4 text-sm font-semibold text-brand-200 transition hover:bg-brand-500/20">
              Partner Program
            </Link>
            <Link to="/contact" className="rounded-full bg-brand-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">
              Partner Inquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800/80 bg-slate-950/80 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-white">Ready to power your next water project?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Connect with AKB ENGINEERING for reliable installations, repairs, and nationwide service partnerships.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/contact" className="inline-flex rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">
              Contact Us
            </Link>
            <Link to="/partners" className="inline-flex rounded-full border border-slate-700 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:border-brand-400">
              Join As Partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
