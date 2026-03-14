import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Lakira Partners',
  description: 'Get in touch with Lakira Partners. We\'re here to answer your questions about our agribusiness and renewable energy solutions.',
};

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-[#f5f1e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-center">
            Get In Touch
          </h1>
          <p className="text-xl text-foreground/70 text-center max-w-2xl mx-auto">
            Have questions about our services? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: 'Email',
                value: 'info@lakirapartners.com',
                link: 'mailto:info@lakirapartners.com',
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: 'Phone',
                value: '+254 (0) 712 345 678',
                link: 'tel:+254712345678',
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Location',
                value: 'Nairobi, Kenya',
                link: '#',
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: 'Hours',
                value: 'Mon - Fri, 9AM - 6PM EAT',
                link: '#',
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-primary font-medium">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 border-t border-border flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🗺️</div>
          <p className="text-foreground/60 font-medium">Interactive Map Coming Soon</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'What regions do you operate in?',
                answer: 'We currently operate in Kenya, Nigeria, Uganda, Ghana, and Tanzania. We are continuously expanding to other African countries.',
              },
              {
                question: 'How can farmers access your programs?',
                answer: 'Farmers can reach out through our website, WhatsApp, or contact our field officers directly. We conduct community outreach programs regularly.',
              },
              {
                question: 'What are the payment options for your products?',
                answer: 'We offer flexible payment plans including cash, installment payments, and financing options for larger projects. Contact us for details.',
              },
              {
                question: 'Do you provide training and support?',
                answer: 'Yes, all our products and services include comprehensive training and ongoing technical support for 24 months after installation.',
              },
              {
                question: 'How can organizations partner with Lakira?',
                answer: 'We welcome partnerships with NGOs, government agencies, and private sector organizations. Please contact us to discuss partnership opportunities.',
              },
              {
                question: 'What is your response time for inquiries?',
                answer: 'We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <summary className="font-semibold text-foreground flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-foreground/70 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
