import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Pressure Boosting Pump Installation',
    icon: '💧',
    description: 'Professional installation and setup of pressure boosting pumps for residential and commercial water systems.',
    benefits: ['Optimal pressure regulation', 'Energy-efficient operation', 'System reliability'],
  },
  {
    title: 'Hydro Pneumatic System Setup',
    icon: '🕳️',
    description: 'Complete hydro pneumatic system installation with automatic pressure control and water storage solutions.',
    benefits: ['Automatic pressure maintenance', 'Water hammer prevention', 'Compact design'],
  },
  {
    title: 'All Types Pump Service & Spare Parts',
    icon: '🌊',
    description: 'Comprehensive service and spare parts supply for all pump types including submersible, centrifugal, and booster pumps.',
    benefits: ['Genuine spare parts', 'Expert technical support', 'Fast delivery'],
  },
  {
    title: 'Pump Repair & Maintenance',
    icon: '🔧',
    description: 'Expert repair services for all pump systems with diagnostics, troubleshooting, and preventive maintenance.',
    benefits: ['Fast fault detection', 'Component replacement', 'Performance optimization'],
  },
  {
    title: 'Industrial Pump Solutions',
    icon: '🏭',
    description: 'Heavy-duty pumping systems for factories, plants, and industrial projects with custom engineering.',
    benefits: ['Custom system design', 'High-capacity installations', 'Process reliability'],
  },
  {
    title: 'Emergency Pump Service',
    icon: '🚨',
    description: '24/7 emergency response for pump failures, breakdowns, and urgent water system issues.',
    benefits: ['Rapid mobilization', 'On-site troubleshooting', 'Quick restoration'],
  },
  {
    title: 'AMC (Annual Maintenance Contract)',
    icon: '📄',
    description: 'Comprehensive AMC plans for recurring maintenance and guaranteed pump performance.',
    benefits: ['Customized plans', 'Priority service', 'Cost savings'],
  },
];

function Services() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <section className="mb-16 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Service portfolio</p>
        <h1 className="mt-4 text-5xl font-semibold text-white">Engineered water pump services built for India.</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          AKB ENGINEERING provides an end-to-end range of pump services from installation and borewell setup to industrial systems, AMC, and emergency repair.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        {services.map((service) => (
          <motion.article
            key={service.title}
            whileHover={{ y: -8 }}
            className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-8 shadow-glow"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-900 text-3xl text-brand-200">
              {service.icon}
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-white">{service.title}</h2>
            <p className="mt-4 text-slate-300">{service.description}</p>
            <div className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <p key={benefit} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-brand-500 text-sm font-semibold text-slate-950">✓</span>
                  {benefit}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">
                Inquire now
              </Link>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}

export default Services;
