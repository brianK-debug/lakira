'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import { OptimizedImage } from './optimized-image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <OptimizedImage
                src="/logo.jpeg"
                alt="Lakira Partners Limited"
                className="h-12 w-auto rounded-lg bg-background p-1"
                width={48}
                height={48}
              />
              <div>
                <div className="font-serif text-xl font-bold">Lakira Partners</div>
                <div className="text-xs text-background/70">Limited</div>
              </div>
            </Link>
            <p className="text-background/80 leading-relaxed mb-6">
              Sustainable agribusiness and renewable energy solutions driving prosperity across Africa through innovation and community empowerment.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Facebook, href: '#', label: 'Facebook' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Business Areas', href: '/business-areas' },
                { label: 'Products', href: '/products' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200 group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'Partnerships', href: '/partnerships' },
                { label: 'Impact', href: '/impact' },
                { label: 'Contact', href: '/contact' },
                { label: 'Careers', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200 group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-background/60 mb-1">Email</div>
                  <a
                    href="mailto:info@lakirapartnersltd.co.ke"
                    className="text-background/90 hover:text-white transition-colors text-sm"
                  >
                    info@lakirapartnersltd.co.ke
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-background/60 mb-1">Phone</div>
                  <a
                    href="tel:+254712875127"
                    className="text-background/90 hover:text-white transition-colors text-sm"
                  >
                    +254 712 875 127
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-background/60 mb-1">Location</div>
                  <span className="text-background/90 text-sm">
                    Nairobi, Kenya
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/70">
              &copy; {currentYear} Lakira Partners Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-background/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-background/70 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
