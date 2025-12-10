# Mauricio Lizama — Portfolio

A modern, full-stack portfolio website built with Next.js, TypeScript, and Contentful CMS. Features server-side rendering, smooth animations, dark mode support, and a responsive design with SEO optimization.

## 🚀 Features

- **Server-Side Rendering**: Built with Next.js App Router for optimal performance
- **Headless CMS**: Contentful integration for dynamic content management
- **Dark Mode**: Automatic theme detection with manual override support
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for polished UI interactions
- **Blog System**: Dynamic blog posts with rich text formatting
- **Accessible**: Built with Radix UI primitives for WCAG compliance
- **Type Safe**: Full TypeScript support throughout the project

## Table of Contents

- [Mauricio Lizama — Portfolio](#mauricio-lizama--portfolio)
  - [🚀 Features](#-features)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [Key Features Explained](#key-features-explained)
    - [Navigation](#navigation)
    - [Blog System](#blog-system)
    - [Theming](#theming)
  - [Contact](#contact)
  - [License](#license)

## Tech Stack

**Frontend:**

- TypeScript
- Next.js
- React
- Tailwind CSS
- Framer Motion
- Shadcn/ui & Radix UI

**Backend & CMS:**

- Contentful (Headless CMS)
- Next.js Server Components

**Tools & Libraries:**

- Class Variance Authority (CVA)
- React Icons
- Sonner (Toast notifications)
- next/image for optimization

**Development:**

- ESLint
- Prettier with Tailwind plugin
- TypeScript strict mode

**Deployment:**

- Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Contentful account and API keys

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mlizama/lizamaportfolio.git
cd lizamaportfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Add your Contentful credentials to `.env.local`:

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   ├── blog/              # Blog pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Shadcn/Radix UI components
│   ├── layout/           # Layout components
│   └── ...               # Feature components
├── contentful/           # Contentful SDK setup
├── constants/            # Site constants
├── lib/                  # Utility functions
└── types/                # TypeScript types
```

## Key Features Explained

### Navigation

- Responsive menu system with smooth animations
- Hash-based navigation that works across all pages
- Draft mode indicator for content editors

### Blog System

- Server-rendered blog posts from Contentful
- Rich text support with embedded images
- Date formatting and metadata display
- Preview mode for draft content

### Theming

- System preference detection
- Manual light/dark mode toggle
- Smooth transitions between themes

## Contact

**Mauricio Lizama**

- Email: mlizamaoliger@gmail.com
- GitHub: https://github.com/mlizama
- LinkedIn: https://www.linkedin.com/in/mauriciolizama/
- Website: https://www.mlizama.eu

## License

This project is available under the MIT License. See LICENSE for details.
