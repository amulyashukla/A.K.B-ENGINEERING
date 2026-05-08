import { Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Gallery from './pages/Gallery.jsx';
import Partners from './pages/Partners.jsx';
import Contact from './pages/Contact.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import { useVisitorTracking } from './hooks/useVisitorTracking.js';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Partners', path: '/partners' },
  { label: 'Contact', path: '/contact' },
];

function App() {
  // Track visitor analytics
  useVisitorTracking();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar items={navItems} />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route
            path="*"
            element={
              <main className="mx-auto max-w-6xl px-6 py-24 text-center">
                <h1 className="text-4xl font-semibold">Page Not Found</h1>
                <p className="mt-4 text-slate-300">The page you requested doesn’t exist yet.</p>
                <NavLink to="/" className="mt-8 inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">
                  Return Home
                </NavLink>
              </main>
            }
          />
        </Routes>
      </motion.div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
