function WhatsAppButton() {
  return (
    <div className="whatsapp-float">
      <a
        href="https://wa.me/919935203521?text=Hello%20AKB%20Engineering%2C%20I%20need%20service%20support"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-4 text-sm font-semibold text-slate-950 shadow-glow shadow-emerald-400/35 transition hover:scale-105"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-emerald-600">📱</span>
        WhatsApp Support
      </a>
    </div>
  );
}

export default WhatsAppButton;
