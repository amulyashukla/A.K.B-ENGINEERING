import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
];

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-400">AKB ENGINEERING</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Industrial water systems for India’s future.</h2>
          <p className="mt-4 max-w-xl text-slate-400">
            Premium pump installation, borewell projects, repairs, and industrial support with nationwide expansion readiness.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <div className="grid gap-2 text-sm text-slate-400 sm:grid-cols-2">
            {footerLinks.map((item) => (
              <Link key={item.label} to={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="text-sm text-slate-400">Email: akbengineering99@gmail.com</p>
          <p className="text-sm text-slate-400">Phone: +91 9935203521</p>
          <p className="text-sm text-slate-400">Address: Bhurarani, Rudrapur(U.S. Nagar) Uttarakhand-263153</p>
          <div className="flex gap-3 pt-2">
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition hover:bg-brand-500">
              f
            </a>
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition hover:bg-brand-500">
              in
            </a>
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition hover:bg-brand-500">
              t
            </a>
          </div>
          <Link to="/admin" className="inline-flex items-center gap-2 mt-4 rounded-lg bg-slate-800/50 px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-700 hover:text-white">
            <span className="text-lg">⚙️</span>
            Admin Panel
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-800/80 bg-slate-950 px-6 py-6 text-center text-sm text-slate-500 lg:px-8">
        © 2026 AKB ENGINEERING. All rights reserved. Built for trusted pump performance across India.
      </div>
    </footer>
  );
}

export default Footer;
