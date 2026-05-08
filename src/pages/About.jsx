import { motion } from 'framer-motion';

const team = [
  { name: 'KHUSHI BAJPAI', title: 'Operations Head' },
  { name: 'ANURODH BAJPAI', title: 'Service and Sales Manager' },
  { name: 'AMULYA SHUKLA', title: 'Project Manager' },
];

function About() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <section className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-400">About AKB ENGINEERING</p>
        <h1 className="text-5xl font-semibold text-white">Premium water pump and industrial support for every region.</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Founded in Uttarakhand, AKB ENGINEERING delivers trusted water pump installation, repair, and borewell services with a modern, nationwide growth mindset.
        </p>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-start">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-10 shadow-glow">
          <h2 className="text-3xl font-semibold text-white">Our history</h2>
          <p className="mt-6 text-slate-300 leading-8">
            AKB ENGINEERING started as a regional water pump specialist in Uttarakhand and quickly scaled into a trusted partner for industrial water systems, emergency repairs, and borewell solutions.
          </p>
          <p className="mt-4 text-slate-300 leading-8">
            Our commitment to quality, safety, and fast response has helped us build long-term client relationships and prepare for nationwide expansion.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="grid gap-6">
          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-10 shadow-glow">
            <h3 className="text-2xl font-semibold text-white">Mission</h3>
            <p className="mt-4 text-slate-300 leading-7">
              To deliver high-trust pump and borewell solutions through modern engineering, dependable service, and a partner-led growth model.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-10 shadow-glow">
            <h3 className="text-2xl font-semibold text-white">Vision</h3>
            <p className="mt-4 text-slate-300 leading-7">
              To become India’s most trusted water pump and industrial service network, supporting communities and businesses with premium water system reliability.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mt-20 bg-slate-950/80 px-6 py-16 rounded-[2rem] border border-slate-800/90 shadow-glow lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Team & expertise</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">A hand-picked crew of pump experts and site professionals.</h2>
            <p className="mt-6 text-slate-300 leading-8">
              Our team combines field engineering, operations excellence, and partner coordination to manage every installation and service requirement with care.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-6">
                <p className="text-xl font-semibold text-white">{member.name}</p>
                <p className="mt-2 text-slate-400">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-10 rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-12 shadow-glow lg:grid-cols-[0.95fr_0.7fr]">
        <div>
          <h2 className="text-4xl font-semibold text-white">Nationwide expansion goal</h2>
          <p className="mt-6 text-slate-300 leading-8">
            AKB ENGINEERING is building a scalable partner network so water pump service and borewell expertise can reach every region across India.
          </p>
          <ul className="mt-8 grid gap-4 text-slate-300 sm:grid-cols-2">
            {['Partner-first expansion', 'Standardized service delivery', 'Regional technician onboarding', 'App-ready support process'].map((item) => (
              <li key={item} className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-5">{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Expansion milestone</p>
          <p className="mt-6 text-6xl font-semibold text-white">100+</p>
          <p className="mt-4 text-slate-400">Service partner cities targeted across India.</p>
        </div>
      </section>
    </main>
  );
}

export default About;
