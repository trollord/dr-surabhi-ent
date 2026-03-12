export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Dr. Surabhi, I'd like to book a consultation."
  );
  const whatsappUrl = `https://wa.me/919876543210?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dr. Surabhi on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-40"
        style={{ backgroundColor: "#25D366" }}
      />

      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        width="28"
        height="28"
        className="relative z-10"
        aria-hidden="true"
      >
        <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.664 4.802 1.82 6.807L2 30l7.395-1.79A13.934 13.934 0 0016.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.5a11.44 11.44 0 01-5.84-1.6l-.42-.25-4.39 1.06 1.1-4.27-.27-.44A11.44 11.44 0 014.5 16.003C4.5 9.66 9.66 4.5 16.003 4.5S27.5 9.66 27.5 16.003 22.343 27.5 16.003 27.5zm6.27-8.47c-.344-.172-2.036-1.004-2.352-1.118-.317-.115-.547-.172-.777.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.913-1.712-2.04-1.912-2.384-.2-.344-.021-.53.15-.702.154-.153.344-.4.517-.6.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.602-.086-.172-.777-1.876-1.065-2.57-.28-.673-.565-.582-.777-.593l-.66-.012c-.23 0-.603.086-.918.43-.317.344-1.205 1.177-1.205 2.87s1.234 3.328 1.406 3.557c.172.23 2.43 3.71 5.888 5.202.823.355 1.465.568 1.965.727.826.263 1.578.226 2.172.137.663-.1 2.036-.832 2.322-1.635.287-.803.287-1.492.2-1.635-.086-.144-.316-.23-.66-.4z" />
      </svg>
    </a>
  );
}
