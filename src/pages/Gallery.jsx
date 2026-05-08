import { motion } from 'framer-motion';

const galleryItems = [
  {
    title: 'Installed borewell pump system',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Industrial water project',
    image: 'https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Before & after field service',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Pump maintenance team',
    image: 'https://images.unsplash.com/photo-1517423568366-8b835e5c3f1a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'High-capacity setting',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
];

function Gallery() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <section className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Project showcase</p>
        <h1 className="mt-4 text-5xl font-semibold text-white">Real installations, heavy industry, and site-ready execution.</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Explore our gallery of pump installations, borewell projects, before and after transformations, and industrial site delivery.
        </p>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        {galleryItems.slice(0, 2).map((item) => (
          <motion.div key={item.title} whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-900/70 shadow-glow">
            <img src={item.image} alt={item.title} className="h-[420px] w-full object-cover" />
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {galleryItems.slice(2).map((item) => (
          <motion.div key={item.title} whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-900/70 shadow-glow">
            <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="mt-20 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-10 text-center shadow-glow">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Video case study</p>
        <h2 className="mt-4 text-4xl font-semibold text-white">See the installation process in action.</h2>
        <div className="mt-10 aspect-[16/9] overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900">
          <iframe
            className="h-full w-full"
            title="Pump installation video"
            src="https://www.youtube.com/embed/7sDY4m8KNLc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}

export default Gallery;
