import { useState } from 'react';

const partnerBenefits = [
  'Competitive service commissions',
  'Dedicated support and training',
  'Lead sharing across India',
  'Access to premium pump clients',
  'Fast onboarding process',
];

const requirements = [
  'Mechanic or technician experience',
  'Own service vehicle and tools',
  'Willingness to work on emergency calls',
  'Strong customer support focus',
  'Legal business or service identity',
];

const cities = ['Dehradun', 'Haridwar', 'Rishikesh', 'Haridwar', 'Roorkee', 'Haldwani', 'Nainital', 'Lucknow', 'Kolkata', 'Mumbai'];

function Partners() {
  const [formState, setFormState] = useState({ name: '', phone: '', city: '', experience: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you ${formState.name}, your partner registration request has been sent.`);
    setFormState({ name: '', phone: '', city: '', experience: '', message: '' });
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <section className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Partner program</p>
        <h1 className="mt-4 text-5xl font-semibold text-white">Join AKB ENGINEERING as a service partner.</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Be part of our nationwide network by offering pump installation, repair, and maintenance services in your city.
        </p>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-10 shadow-glow">
          <h2 className="text-3xl font-semibold text-white">Benefits of joining</h2>
          <ul className="mt-8 space-y-4 text-slate-300">
            {partnerBenefits.map((item) => (
              <li key={item} className="flex gap-4 rounded-3xl border border-slate-800/90 bg-slate-950/80 p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-brand-500 text-xl text-slate-950">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-10 shadow-glow">
          <h2 className="text-3xl font-semibold text-white">Cities we need partners</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cities.map((city) => (
              <div key={city} className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-5 text-slate-300">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-10 shadow-glow">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Apply now</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Partner registration form</h2>
            <p className="mt-4 text-slate-300 leading-7">
              Share your details and our team will contact you to onboard you into the AKB ENGINEERING partner network.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm text-slate-300">Name</span>
                <input type="text" name="name" required value={formState.name} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-500" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">Phone</span>
                <input type="tel" name="phone" required value={formState.phone} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-500" />
              </label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm text-slate-300">City</span>
                <input type="text" name="city" required value={formState.city} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-500" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">Experience</span>
                <input type="text" name="experience" required value={formState.experience} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-500" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm text-slate-300">Message</span>
              <textarea name="message" required value={formState.message} onChange={handleChange} rows="5" className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-500" />
            </label>
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">
              Submit Registration
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Partners;
