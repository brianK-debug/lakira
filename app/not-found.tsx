import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-9xl font-bold text-primary mb-4">404</div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              We couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
          </div>

          {/* Helpful Navigation */}
          <div className="bg-background rounded-xl border border-border p-8 mb-12">
            <h2 className="font-semibold text-foreground mb-6">Where would you like to go?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'Home', href: '/', icon: '🏠' },
                { label: 'About', href: '/about', icon: '📖' },
                { label: 'Business Areas', href: '/business-areas', icon: '💼' },
                { label: 'Products', href: '/products', icon: '📦' },
                { label: 'Impact', href: '/impact', icon: '📊' },
                { label: 'Contact', href: '/contact', icon: '📧' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="p-4 rounded-lg border border-border hover:bg-white dark:hover:bg-card hover:shadow-md transition-all text-center font-medium"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors group"
            >
              <Home size={20} />
              Back to Home
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-foreground/60">
              Still need help?{' '}
              <Link href="/contact" className="text-primary font-semibold hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
