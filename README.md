# Personal Portfolio Website

A high-performance, responsive personal portfolio website built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Dark Mode Design** - Deep blacks with electric blue/cyan accents
- ✨ **Glassmorphism Effects** - Modern glass-like UI elements
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🖱️ **Interactive Cursor Gradient** - Glowing gradient that follows your cursor
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🔍 **SEO Optimized** - Built-in metadata and semantic HTML
- ⚡ **High Performance** - Next.js App Router for optimal loading

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personalWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
personalWebsite/
├── app/
│   ├── globals.css       # Global styles and utilities
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page component
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects grid
│   ├── ProjectCard.tsx   # Individual project card
│   ├── Skills.tsx        # Skills cloud
│   ├── Experience.tsx    # Experience timeline
│   ├── Contact.tsx       # Contact form and footer
│   └── CursorGradient.tsx # Cursor-following gradient
├── public/               # Static assets
└── package.json
```

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update social media links
   - Add your CV file to `public/cv.pdf`

2. **About Section** (`components/About.tsx`):
   - Modify your background information
   - Update highlights

3. **Projects** (`components/Projects.tsx`):
   - Add/remove projects
   - Update project details, links, and tags

4. **Skills** (`components/Skills.tsx`):
   - Modify skill categories and items

5. **Experience** (`components/Experience.tsx`):
   - Update work experience and education

6. **Contact** (`components/Contact.tsx`):
   - Update email and social links
   - Connect form to your backend/email service

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Color scheme: Update gradient colors in components

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

## License

MIT License - feel free to use this template for your own portfolio!

