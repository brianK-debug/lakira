# Lakira Partners Website - Quick Start Guide

## Development Setup

### Prerequisites
- Node.js 18+ installed
- pnpm package manager (recommended)

### Running Locally
```bash
# Install dependencies (automatic in v0 environment)
pnpm install

# Start development server
pnpm dev

# Open in browser
# http://localhost:3000
```

## Project Structure

### Pages
- `/` - Home page with hero, business areas, impact metrics
- `/about` - Company mission, vision, values, timeline
- `/business-areas` - Detailed solutions and benefits
- `/products` - Product catalog with features
- `/impact` - Impact metrics and success stories
- `/partnerships` - Partnership opportunities
- `/contact` - Contact form and information
- `/404` - Custom error page (any unknown route)

### Key Files to Customize

#### 1. Update Contact Information
**Files to modify:**
- `components/footer.tsx` - Lines with email, phone
- `components/whatsapp-button.tsx` - WhatsApp number
- `components/contact-form.tsx` - Contact details

#### 2. Replace Images
**Replace these placeholders:**
- `/public/hero-farmer.jpg` - Main hero image
- `/public/solar-installation.jpg` - Solar section
- `/public/renewable-energy.jpg` - Energy section
- `/public/irrigation-system.jpg` - Water management

#### 3. Update Company Details
**In pages, update:**
- Company name and descriptions
- Partner information in `partners-carousel.tsx`
- Team member details in `/about`
- Product descriptions in `/products`

#### 4. Configure Contact Form
Currently logs submissions to console. To use a backend:

```typescript
// In components/contact-form.tsx, replace the handleSubmit function
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  // Send to your backend
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  // Handle response...
};
```

## Customization Guide

### Colors
All colors defined in `/app/globals.css`:
```css
:root {
  --color-primary-green: #1B5C3F;
  --color-primary-brown: #8B6F47;
  --background: #FEFDF5;
  --foreground: #1a1a1a;
}
```

### Fonts
Uses Geist Sans for body, Georgia/Garamond for headings. Update in:
- `tailwind.config.ts` - Font family definitions
- `app/layout.tsx` - Font imports

### SEO Metadata
Update in each page:
- `title` - Page title (appears in browser tab)
- `description` - Meta description
- `keywords` - SEO keywords

Example:
```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for search engines',
};
```

## Component Guide

### Hero Section
```tsx
<HeroSection /> // Animated hero with fade-in effects
```

### Impact Counters
Auto-animates numbers when scrolled into view:
```tsx
<ImpactCounters /> // Shows 4 key metrics with animations
```

### Contact Form
Includes validation and feedback:
```tsx
<ContactForm /> // Full contact form with success/error states
```

### Navigation
Sticky navbar with mobile menu:
```tsx
<Navbar /> // Auto-appears on all pages via root layout
```

## Animations

### Scroll-Triggered Fade-In
Wrap any content to fade in on scroll:
```tsx
<FadeInOnScroll>
  <div>Content fades in when scrolled into view</div>
</FadeInOnScroll>
```

### Animation Classes
Add to any element for effects:
- `animate-slide-up` - Slides up with fade
- `animate-fade-in` - Simple fade
- `animate-scale-in` - Scales in
- `hover-lift` - Lifts on hover with shadow

## Performance Tips

1. **Images** - Always use `OptimizedImage` component for lazy loading
2. **Animations** - Use CSS animations, not JavaScript for better performance
3. **Components** - Keep 'use client' to minimum, prefer server components
4. **Bundling** - Next.js automatically optimizes code splitting

## Deployment

### To Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables
None required for current setup. If adding features:
1. Create `.env.local`
2. Add variables
3. Reference with `process.env.VARIABLE_NAME`

## Troubleshooting

### Port 3000 Already in Use
```bash
# Use different port
pnpm dev --port 3001
```

### Build Errors
```bash
# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Animations Not Working
- Check browser support (Chrome 76+, Firefox 55+, Safari 12+)
- Verify CSS is loaded: Check `/app/globals.css`
- Test in different browser

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Next.js Image**: https://nextjs.org/docs/api-reference/next/image

## Common Customizations

### Change Primary Color
1. Open `/app/globals.css`
2. Find `--primary: #1B5C3F;`
3. Replace with new hex color
4. All primary elements update automatically

### Add New Page
1. Create `app/newpage/page.tsx`
2. Import components
3. Add to navbar in `components/navbar.tsx`
4. Update sitemap in `/public/sitemap.xml`

### Modify Contact Form Fields
1. Open `components/contact-form.tsx`
2. Add new field to `formData` state
3. Add input element in JSX
4. Update backend handler

## Version Info
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui components

---

**Need help?** Check the IMPLEMENTATION_SUMMARY.md for detailed technical documentation.
