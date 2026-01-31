# Quick Start Guide

## First Steps

1. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Add Your CV**:
   - Place your CV file in the `public/` directory as `cv.pdf`
   - The download button in the Hero section will link to it

3. **Update Personal Information**:
   - **Email**: Update `your.email@example.com` in:
     - `components/Hero.tsx` (line 89)
     - `components/Contact.tsx` (line 47)
   - **Social Links**: Update GitHub and LinkedIn URLs in:
     - `components/Hero.tsx` (lines 69, 79)
     - `components/Contact.tsx` (lines 95, 103)
   - **Projects**: Customize your projects in `components/Projects.tsx`
   - **Experience**: Update your experience in `components/Experience.tsx`

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Tips

### Colors
- Primary accent: Cyan (#06b6d4) and Blue (#3b82f6)
- Update gradients in components or `tailwind.config.ts`

### Animations
- All animations use Framer Motion
- Adjust timing in component files
- Disable animations by removing `motion.` prefixes

### Contact Form
- Currently uses a mock submission
- Connect to your backend/email service in `components/Contact.tsx` (handleSubmit function)

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

