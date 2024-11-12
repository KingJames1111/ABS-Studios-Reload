# ABS Studios Website Backup
Version: 1.0.0
Last Updated: 2024-01-09

## Project Structure
```
├── sections/
│   ├── hero/
│   ├── transitions/
│   │   ├── ImagineTransition
│   │   └── ProcessToContent
│   ├── process/
│   ├── content-pool/
│   ├── testimonials/
│   ├── faq/
│   └── cta/
├── components/
│   └── ui/
├── lib/
│   ├── core/
│   ├── design-system/
│   └── utils/
└── styles/
```

## Restore Instructions

1. **Import Dependencies**
```bash
npm install framer-motion@latest lucide-react@latest tailwind-merge@latest clsx@latest
```

2. **File Placement**
- Copy all section components to their respective directories
- Ensure transitions are placed in `sections/transitions/`
- Verify core utilities are in `lib/` directory

3. **Section Order**
```tsx
// app/page.tsx
import { Hero } from '@/components/sections/hero';
import { ImagineTransition } from '@/components/sections/transitions/ImagineTransition';
import { Process } from '@/components/sections/process';
import { ProcessToContent } from '@/components/sections/transitions/ProcessToContent';
import { ContentPool } from '@/components/sections/content-pool';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <ImagineTransition />
      <Process />
      <ProcessToContent />
      <ContentPool />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
```

4. **Verification Steps**
- [ ] All sections render in correct order
- [ ] Transitions appear between appropriate sections
- [ ] Styles and animations work correctly
- [ ] Background effects and gradients display properly
- [ ] Typography hierarchy is maintained
- [ ] Interactive elements function as expected

5. **Common Issues**
- If transitions don't appear, check imports and component placement
- If animations don't work, verify framer-motion installation
- If styles break, ensure tailwind classes are properly configured

## Design System Integration

1. **Color Tokens**
```css
:root {
  --royal-purple-dark: 270 50% 20%;
  --royal-purple-light: 270 50% 40%;
  --flame-orange: 25 100% 50%;
  --flame-red: 0 100% 50%;
  --electric-green: 120 100% 50%;
  --bg-dark: 270 50% 5%;
}
```

2. **Typography**
```css
.font-orbitron {
  font-family: 'Orbitron', sans-serif;
}
.font-inter {
  font-family: 'Inter', sans-serif;
}
```

3. **Animation Standards**
```css
.transition-base {
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}
```

## Backup Contents

1. **Core Components**
- Section components with full functionality
- Transition components with animations
- UI components and utilities

2. **Design System**
- Color tokens and typography
- Animation configurations
- Layout patterns

3. **Utils and Helpers**
- Seeded random generator
- Animation utilities
- Style helpers

## Import Process

1. Clone the backup repository
2. Install dependencies
3. Copy section components
4. Verify design system integration
5. Test all transitions and animations

## Technical Requirements

- Node.js 18+
- React 18+
- Next.js 14+
- TypeScript 5+
- Tailwind CSS 3+

## Support

For issues during restore:
1. Verify file structure matches documentation
2. Check all dependencies are installed
3. Confirm design tokens are properly configured
4. Test transitions in isolation first
5. Validate section order and spacing