'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - in production, connect to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Log form data for demonstration
      console.log('[v0] Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('[v0] Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-border p-8 max-w-2xl mx-auto">
      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
        Send us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              placeholder="+254 (0) 712 345 678"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="farming">Sustainable Farming</option>
              <option value="energy">Renewable Energy</option>
              <option value="partnership">Partnership</option>
              <option value="investment">Investment</option>
              <option value="career">Career Opportunity</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
            placeholder="Tell us more about your inquiry..."
          />
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
            <p className="font-medium">Thank you for your message!</p>
            <p className="text-sm">We'll get back to you within 24 hours.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
            <p className="font-medium">Something went wrong</p>
            <p className="text-sm">Please try again or contact us directly.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 disabled:bg-primary/50 transition-colors flex items-center justify-center gap-2 group"
        >
          <Send size={20} />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
            <Mail size={24} />
          </div>
          <p className="text-sm text-foreground/70 mb-1">Email</p>
          <a href="mailto:info@lakirapartners.com" className="font-medium text-primary hover:underline">
            info@lakirapartners.com
          </a>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
            <Phone size={24} />
          </div>
          <p className="text-sm text-foreground/70 mb-1">Phone</p>
          <a href="tel:+254712345678" className="font-medium text-primary hover:underline">
            +254 (0) 712 345 678
          </a>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
            <MapPin size={24} />
          </div>
          <p className="text-sm text-foreground/70 mb-1">Location</p>
          <p className="font-medium">Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
}
