import { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const whatsappNumber = '919935203521';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const orderData = {
      id: Date.now().toString(),
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      service: formState.service,
      message: formState.message,
      status: 'pending',
      timestamp: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem('akb_orders') || '[]');
    existingOrders.push(orderData);
    localStorage.setItem('akb_orders', JSON.stringify(existingOrders));

    const whatsappMessage = encodeURIComponent(
      `New inquiry from ${formState.name}%0AEmail: ${formState.email}%0APhone: ${formState.phone}%0AService: ${formState.service}%0AMessage: ${formState.message}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

    alert(`Thank you ${formState.name}, your inquiry has been received and opened in WhatsApp.`);
  };

  const getWhatsappMessage = () =>
    encodeURIComponent(
      `New inquiry from ${formState.name}%0AEmail: ${formState.email}%0APhone: ${formState.phone}%0AService: ${formState.service}%0AMessage: ${formState.message}`
    );

  const handleWhatsappSend = () => {
    if (!formState.name || !formState.email || !formState.phone || !formState.service || !formState.message) {
      alert('Please complete all inquiry fields before sending via WhatsApp.');
      return;
    }

    window.open(`https://wa.me/${whatsappNumber}?text=${getWhatsappMessage()}`, '_blank');
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <section className="grid gap-12 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Contact support</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">Reach AKB ENGINEERING for service, quotes, and support.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Send your request, call our emergency support line, or chat with WhatsApp support for fast pump service and partner inquiries.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Phone</p>
              <p className="mt-4 text-3xl font-semibold text-white">+91 9935203521</p>
              <p className="mt-3 text-slate-400">Emergency line available 24/7</p>
            </div>
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-400">Email</p>
              <p className="mt-4 text-3xl font-semibold text-white">akbengineering99@gmail.com</p>
              <p className="mt-3 text-slate-400">Response within one business day</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-10 shadow-glow">
          <h2 className="text-3xl font-semibold text-white">Send an inquiry</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm text-slate-300">Name</span>
                <input type="text" name="name" required value={formState.name} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-500" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">Email</span>
                <input type="email" name="email" required value={formState.email} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-500" />
              </label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm text-slate-300">Phone</span>
                <input type="tel" name="phone" required value={formState.phone} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-500" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">Service needed</span>
                <select name="service" required value={formState.service} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-500">
                  <option value="">Choose service</option>
                  <option value="installation">Water Pump Installation</option>
                  <option value="borewell">Borewell Pump Setup</option>
                  <option value="repair">Repair & Maintenance</option>
                  <option value="industrial">Industrial Pump Solutions</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="amc">AMC</option>
                </select>
              </label>
            </div>
            <label className="block">
              <span className="text-sm text-slate-300">Message</span>
              <textarea name="message" required rows="5" value={formState.message} onChange={handleChange} className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-500" />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">
                Submit Inquiry
              </button>
              <button type="button" onClick={handleWhatsappSend} className="inline-flex w-full items-center justify-center rounded-full border border-brand-500 bg-slate-900/90 px-8 py-4 text-sm font-semibold text-brand-200 transition hover:bg-slate-800">
                Send via WhatsApp
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Submit to save the inquiry locally, or use WhatsApp to send the order directly to your phone.
            </p>
          </form>
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
        <div className="space-y-6 rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-10 shadow-glow">
          <h2 className="text-3xl font-semibold text-white">Emergency support</h2>
          <p className="text-slate-300 leading-8">
            Our emergency support line is active 24/7 for urgent pump failures and water system breakdowns. We dispatch technicians immediately to minimize downtime.
          </p>
          <div className="rounded-3xl bg-brand-500/10 p-6 text-brand-100">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Emergency line</p>
            <p className="mt-4 text-3xl font-semibold">+91 9935203521</p>
            <p className="mt-2 text-slate-100">Quick access to emergency pump repair and restoration support.</p>
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-10 shadow-glow">
          <h2 className="text-3xl font-semibold text-white">Visit our office</h2>
          <p className="text-slate-300 leading-8">AKB ENGINEERING, Bhurarani, Rudrapur(U.S. Nagar) Uttarakhand-263153.</p>
          <div className="aspect-[16/9] overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950">
            <iframe
              title="AKB Engineering Google Map"
              className="h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5!2d79.3821042!3d28.9932367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07fff0faa7a33%3A0x1c46e6b18fb600bd!2sBhurarani%2C%20Rudrapur%2C%20Uttarakhand%20263153!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
