'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <span className="font-serif text-xl font-bold">Lakira</span>
            </div>
            <p className="text-background/80 text-sm">
              Sustainable agribusiness and renewable energy solutions for a prosperous Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About', href: '/about' },
                { label: 'Business Areas', href: '/business-areas' },
                { label: 'Products', href: '/products' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Partnerships', href: '/partnerships' },
                { label: 'Contact', href: '/contact' },
                { label: 'Careers', href: '#careers' },
                { label: '404', href: '/404' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@lakirapartners.com"
                  className="text-background/80 hover:text-white transition-colors"
                >
                  info@lakirapartners.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="tel:+254712345678"
                  className="text-background/80 hover:text-white transition-colors"
                >
                  +254 (0) 712 345 678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span className="text-background/80">
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/80">
            &copy; {currentYear} Lakira Partners Limited. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
              { icon: Twitter, href: '#twitter', label: 'Twitter' },
              { icon: Facebook, href: '#facebook', label: 'Facebook' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-background/80 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
