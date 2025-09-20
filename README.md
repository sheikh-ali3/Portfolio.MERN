# Portfolio Website - Full-Stack Developer Showcase

A modern, responsive portfolio website built with React, TypeScript, and Express.js, showcasing professional projects and skills. This full-stack application features a sleek dark theme design, interactive components, and seamless user experience.

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## ✨ Features

- **Modern UI/UX**: Clean, professional design with dark theme and glass morphism effects
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Interactive Components**: Smooth animations, hover effects, and transitions
- **Project Showcase**: Detailed project cards with live demos and GitHub links
- **Contact Integration**: Google Sheets integration for contact form submissions
- **Performance Optimized**: Fast loading times with optimized assets and code splitting
- **SEO Ready**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Smooth animations and transitions
- **Wouter** - Lightweight client-side routing
- **React Query** - Server state management
- **Lucide React** - Beautiful icons

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Type-safe server development
- **Drizzle ORM** - Type-safe database operations
- **PostgreSQL** - Relational database
- **Google Sheets API** - Contact form integration
- **Session Management** - Express sessions with memory store

### Development Tools
- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Cross-env** - Cross-platform environment variables

## 📁 Project Structure

```
PortfolioRedesign/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # Base UI components (Radix UI)
│   │   │   ├── hero-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── education-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   ├── navigation.tsx
│   │   │   └── footer.tsx
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   └── index.css     # Global styles
│   └── public/           # Static assets
├── server/               # Backend Express application
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── sheets-service.ts # Google Sheets integration
│   └── storage.ts       # Database operations
├── shared/              # Shared types and schemas
│   └── schema.ts        # Database schema
├── dist/               # Production build output
└── attached_assets/    # Project assets and images
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database
- Google Sheets API credentials (for contact form)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-redesign.git
   cd portfolio-redesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   GOOGLE_SHEETS_CREDENTIALS=your_google_sheets_credentials
   PORT=3000
   NODE_ENV=development
   ```

4. **Database Setup**
   ```bash
   npm run db:push
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:netlify` - Build optimized for Netlify deployment
- `npm run build:static` - Build static assets only
- `npm start` - Start production server
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#6366f1 to #4f46e5)
- **Secondary**: Purple accent (#8b5cf6)
- **Background**: Dark slate (#0f172a)
- **Text**: White and gray variants
- **Accents**: Emerald, amber, and blue highlights

### Typography
- **Primary Font**: Inter (sans-serif)
- **Fallback**: System fonts
- **Responsive**: Fluid typography scaling

### Animations
- **Typing Effect**: Dynamic text animation
- **Float Animation**: Subtle element movement
- **Glow Effect**: Interactive hover states
- **Slide In**: Smooth page transitions
- **Fade In**: Content reveal animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

## 🔧 Configuration

### Vite Configuration
- Path aliases for clean imports
- Asset optimization
- Development server setup
- Build optimization

### Tailwind Configuration
- Custom color palette
- Extended animations
- Typography settings
- Component variants

### TypeScript Configuration
- Strict type checking
- Path mapping
- Modern ES features
- React JSX support

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build:netlify`
3. Set publish directory: `dist`
4. Configure environment variables
5. Deploy automatically on push

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure server to serve static files
4. Set up environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**M. Ali (Developer)**
- GitHub: [@sheikh-ali3](https://github.com/sheikh-ali3)
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vite](https://vitejs.dev/) for fast development experience

---

⭐ Star this repository if you found it helpful!