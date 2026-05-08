import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar({ items }) {
  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/95 backdrop-blur-xl"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-100">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 shadow-glow text-white">
            AK
          </span>
          AKB ENGINEERING
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {items.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="/contact" className="rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">
            Book Service
          </a>
          <a href="/partners" className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-brand-400 hover:text-brand-200">
            Become Partner
          </a>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
