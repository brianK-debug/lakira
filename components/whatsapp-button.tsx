'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappLink = 'https://wa.me/254712345678?text=Hello%20Lakira%20Partners%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services.';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-pulse hover:animate-none"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
    </a>
  );
}
