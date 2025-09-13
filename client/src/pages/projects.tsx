import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ExternalLink, Github, Eye, Play, Sun, Code, Database, Globe } from 'lucide-react';

const allProjects = [
  {
    id: 'weather-app-rn',
    title: 'Weather App',
    subtitle: 'React Native',
    description: 'Real-time weather application built with React Native, featuring OpenWeather API integration, multi-language support, and location-based forecasts.',
    image: '/icon.jpeg',
    tags: ['React Native', 'OpenWeather API', 'Geolocation', 'Expo'],
    primaryTag: 'React Native',
    secondaryTag: 'API',
    company: 'ByteBrew Technologies',
    year: '2025',
    demoIcon: Eye,
    gradient: 'from-blue-500 to-purple-500',
    status: 'delivered',
    demoUrl: 'https://expo.dev/accounts/the_dragon/projects/weather-app/builds/43967438-c0c8-4547-bf9a-744fdae73816',
    githubUrl: 'https://github.com/moiniyan/weather-app'
  },
  {
    id: 'voice-to-text',
    title: 'Voice-to-Text Converter',
    subtitle: 'Web Speech API',
    description: 'Speech-to-text application with real-time transcription capabilities, responsive UI design, and advanced audio processing features.',
    image: '/work-5.jpg',
    tags: ['Web Speech API', 'JavaScript', 'HTML5', 'CSS3'],
    primaryTag: 'Web Speech API',
    secondaryTag: 'Real-time',
    year: '2025',
    demoIcon: Eye,
    gradient: 'from-emerald-500 to-teal-500',
    status: 'delivered',
    demoUrl: 'https://voicetotextconverterweb.netlify.app/',
    githubUrl: 'https://github.com/Ammarkashifbhatti/voice-to-text-converter'
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe Game',
    subtitle: 'Interactive Web Game',
    description: 'Interactive web-based Tic-Tac-Toe game demonstrating DOM manipulation, event handling, and game logic implementation.',
    image: '/tik-tak-toe.jpg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Game Logic'],
    primaryTag: 'Game',
    secondaryTag: 'Interactive',
    year: '2025',
    demoIcon: Play,
    gradient: 'from-purple-500 to-pink-500',
    status: 'practice',
    demoUrl: 'https://tick-tack-toe-web.netlify.app/',
    githubUrl: 'https://github.com/Ammarkashifbhatti/tik-toe-game'
  },
  {
    id: 'weather-forecasting-web',
    title: 'Weather Forecasting Web App',
    subtitle: 'Responsive Web Application',
    description: 'Comprehensive weather application with real-time data, API integration, and responsive design for optimal user experience.',
    image: '/work-4.jpeg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
    primaryTag: 'Web App',
    secondaryTag: 'Responsive',
    year: '2025',
    demoIcon: Sun,
    gradient: 'from-amber-500 to-orange-500',
    status: 'delivered',
    demoUrl: 'https://what-weather-app.netlify.app/',
    githubUrl: 'https://github.com/Ammarkashifbhatti/weather-app'
  },
  {
    id: 'quiz-platform',
    title: 'Quiz Platform',
    subtitle: 'C++ Application',
    description: 'Interactive quiz platform built with C++ that tests knowledge across different subjects with scoring system and performance tracking.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['C++', 'Console Application', 'Data Structures', 'File Handling'],
    primaryTag: 'C++',
    secondaryTag: 'Desktop',
    year: '2024',
    demoIcon: Code,
    gradient: 'from-indigo-500 to-cyan-500',
    status: 'practice',
    demoUrl: 'https://github.com/sheikh-ali3/quiz-platform',
    githubUrl: 'https://github.com/sheikh-ali3/Online-Quiz-Platform'
  },
  {
    id: 'bank-management',
    title: 'Bank Management System',
    subtitle: 'C++ Desktop Application',
    description: 'Premium banking software providing full account control for users with manager oversight and comprehensive activity monitoring.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['C++','Console Application', 'File Management', 'Object-Oriented', 'Security'],
    primaryTag: 'C++',
    secondaryTag: 'System',
    year: '2024',
    demoIcon: Database,
    gradient: 'from-red-500 to-pink-500',
    status: 'practice',
    demoUrl: 'https://github.com/sheikh-ali3/bank-management',
    githubUrl: 'https://github.com/sheikh-ali3/bank-management'
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    subtitle: 'React + TypeScript',
    description: 'Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring dark theme, smooth animations, and contact functionality.',
    image: '/portfolio.jpg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    primaryTag: 'React',
    secondaryTag: 'Portfolio',
    year: '2025',
    demoIcon: Globe,
    gradient: 'from-violet-500 to-purple-500',
    status: 'practice',
    demoUrl: 'https://developerali.site',
    githubUrl: 'https://github.com/sheikh-ali3/portfolio-website'
  },
  {
    id: 'crm-moaqa',
    title: 'CRM Web App',
    subtitle: 'MERN Stack',
    description: 'Comprehensive Customer Relationship Management system built with MERN stack for MOAQA company, featuring user authentication, real-time updates, and collaborative features for team productivity.',
    image: '/crm.jpg',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Authentication', 'CRM'],
    primaryTag: 'Full-Stack',
    secondaryTag: 'MERN',
    year: '2024',
    demoIcon: Eye,
    gradient: 'from-green-500 to-teal-500',
    status: 'delivered',
    demoUrl: 'https://frontend-moaqa.vercel.app/',
    githubUrl: 'https://github.com/sheikh-ali3/frontend-moaqa'
  },
  {
    id: 'clinical-code-dictionary',
    title: 'CodeQuest',
    subtitle: 'Healthcare Technology',
    description: 'NLP-Based Clinical Code Dictionary. Advanced full-stack web application for searching and managing medical codes across multiple healthcare systems (ICD-9, ICD-10, CPT, HCPCS, SNOMED, LOINC, and HCC). Features NLP-powered search, CSV bulk operations, and comprehensive admin interface.',
    image: '/codeQuest.jpg',
    tags: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'NLP', 'Healthcare', 'Drizzle ORM'],
    primaryTag: 'Healthcare',
    secondaryTag: 'Full-Stack',
    year: '2024',
    demoIcon: Eye,
    gradient: 'from-blue-500 to-indigo-500',
    status: 'delivered',
    demoUrl: 'https://code-quest-taupe-chi.vercel.app/',
    githubUrl: 'https://github.com/sheikh-ali3/CodeQuest'
  },
  {
    id: 'resume-match',
    title: 'ResumeMatch',
    subtitle: 'AI-Powered Resume Analysis',
    description: 'Intelligent full-stack platform that uses Natural Language Processing (NLP) to analyze compatibility between candidate resumes and job descriptions. Features JWT authentication, multi-format file processing, and AI-powered skill matching algorithms.',
    image: '/resumeAI.jpg',
    tags: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'NLP', 'AI', 'JWT', 'Drizzle ORM'],
    primaryTag: 'AI/NLP',
    secondaryTag: 'Full-Stack',
    year: '2025',
    demoIcon: Eye,
    gradient: 'from-purple-500 to-pink-500',
    status: 'delivered',
    demoUrl: 'https://github.com/sheikh-ali3/CompatibilityMatchmaker.io',
    githubUrl: 'https://github.com/sheikh-ali3/CompatibilityMatchmaker'
  },
  {
    id: 'moaqa-job-portal',
    title: 'MOAQA Job Portal',
    subtitle: 'Recruitment & Hiring Platform',
    description: 'Comprehensive job portal and recruitment platform for MOAQA, featuring job search, applicant tracking, HR management, and talent analytics. Connects job seekers with top employers and provides enterprises with powerful recruitment tools.',
    image: '/jbPortal.jpg',
    tags: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Node.js', 'Recruitment', 'HR Management', 'Job Portal'],
    primaryTag: 'Full-Stack',
    secondaryTag: 'Recruitment',
    year: '2024',
    demoIcon: Globe,
    gradient: 'from-blue-600 to-indigo-600',
    status: 'delivered',
    demoUrl: 'http://jbportal.moaqa.com/',
    githubUrl: 'https://github.com/sheikh-ali3/moaqa-job-portal'
  },
  {
    id: 'dispatchnhaul-trucking',
    title: 'Dispatch N Haul',
    subtitle: 'USA Trucking & Logistics Company',
    description: 'Professional website for a USA-based trucking and logistics company. Features comprehensive service information, fleet management, logistics tracking, and client portal functionality for efficient transportation and cargo delivery services.',
    image: '/dnh.jpg',
    tags: ['Web Development', 'Logistics', 'Trucking', 'Transportation', 'Client Portal', 'Fleet Management', 'USA Business'],
    primaryTag: 'Web Development',
    secondaryTag: 'Logistics',
    year: '2024',
    demoIcon: Globe,
    gradient: 'from-orange-500 to-red-500',
    status: 'delivered',
    demoUrl: 'https://dispatchnhaul.com/',
    githubUrl: 'https://github.com/sheikh-ali3/dispatchnhaul-website'
  },
  {
    id: 'swiftrcm-platform',
    title: 'SwiftRCM',
    subtitle: 'Revenue Cycle Management Platform',
    description: 'Comprehensive Revenue Cycle Management (RCM) platform designed to streamline healthcare billing, claims processing, and revenue optimization. Features advanced analytics, automated workflows, and integrated payment processing for healthcare providers.',
    image: '/swift.jpg',
    tags: ['Healthcare', 'Revenue Cycle Management', 'Billing', 'Claims Processing', 'Analytics', 'Payment Processing', 'Healthcare IT'],
    primaryTag: 'Healthcare',
    secondaryTag: 'RCM',
    year: '2024',
    demoIcon: Globe,
    gradient: 'from-cyan-500 to-blue-500',
    status: 'delivered',
    demoUrl: 'https://swiftrcm.com/',
    githubUrl: 'https://github.com/sheikh-ali3/swiftrcm-platform'
  },
  {
    id: 'autism-therapy-platform',
    title: 'Mosaic Mind',
    subtitle: 'Healthcare & Support Services',
    description: 'Comprehensive digital platform providing therapies and support services for individuals with autism. Features specialized therapy programs, progress tracking, family support resources, and professional guidance for autism care and development.',
    image: '/logo.jpg',
    tags: ['Healthcare', 'Therapy', 'Support Services', 'Accessibility', 'Family Care'],
    primaryTag: 'Healthcare',
    secondaryTag: 'Therapy',
    year: '2025',
    demoIcon: Globe,
    gradient: 'from-teal-500 to-cyan-500',
    status: 'ongoing',
    demoUrl: 'https://nimble-horse-a37b81.netlify.app/',
    githubUrl: 'https://github.com/Shahzaib8250/MosaicMind'
  },
  {
    id: 'quickcart-grocery-app',
    title: 'QuickCart',
    subtitle: 'Modern Grocery Delivery App',
    description: 'A beautiful, feature-rich grocery delivery app built with React Native and Expo. Features modern UI/UX design, real-time cart management, flying animations, tab navigation, and comprehensive grocery shopping experience with instant/scheduled delivery options.',
    image: '/icon.png',
    tags: ['React Native', 'Expo', 'TypeScript', 'Mobile App', 'E-commerce', 'Grocery Delivery', 'Animations', 'Context API'],
    primaryTag: 'React Native',
    secondaryTag: 'Mobile App',
    year: '2025',
    demoIcon: Globe,
    gradient: 'from-green-500 to-emerald-500',
    status: 'ongoing',
    demoUrl: 'https://expo.dev/@sheikh-ali3/quickcart',
    githubUrl: 'https://github.com/moiniyan/quick-cart'
  }
];

// Helper component for rendering project cards
function ProjectCard({ project, isLarge = false }: { project: any; isLarge?: boolean }) {
  return (
    <Card 
      className="glass-effect border-slate-700/50 bg-slate-800/20 overflow-hidden group hover:scale-105 transition-all duration-300"
      data-testid={`card-project-${project.id}`}
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={`${project.title} Development`} 
          className={`w-full ${isLarge ? 'h-64' : 'h-48'} object-cover`}
          data-testid={`img-project-${project.id}`}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={`bg-blue-500 hover:bg-blue-600 text-white ${isLarge ? '' : 'text-xs'}`}>
            {project.primaryTag}
          </Badge>
          <Badge className={`bg-emerald-500 hover:bg-emerald-600 text-white ${isLarge ? '' : 'text-xs'}`}>
            {project.secondaryTag}
          </Badge>
        </div>
        {project.year && (
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className={`bg-white/20 border-white/30 text-white ${isLarge ? '' : 'text-xs'}`}>
              {project.year}
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className={isLarge ? "p-8" : "p-6"}>
        <h3 className={`font-bold mb-${isLarge ? '3' : '2'} text-white ${isLarge ? 'text-2xl' : 'text-xl'}`} data-testid={`text-project-title-${project.id}`}>
          {project.title}
        </h3>
        
        <p className={`text-gray-300 mb-${isLarge ? '6' : '4'} leading-relaxed ${isLarge ? '' : 'text-sm'}`} data-testid={`text-project-description-${project.id}`}>
          {project.description}
        </p>
        
        <div className={`flex flex-wrap gap-${isLarge ? '2' : '1'} mb-${isLarge ? '6' : '4'}`}>
          {project.tags.slice(0, isLarge ? project.tags.length : 3).map((tag: string, tagIndex: number) => (
            <Badge 
              key={tagIndex}
              variant="secondary" 
              className="bg-gray-700 text-gray-300 text-xs"
              data-testid={`tag-${project.id}-${tagIndex}`}
            >
              {tag}
            </Badge>
          ))}
          {!isLarge && project.tags.length > 3 && (
            <Badge variant="secondary" className="bg-gray-600 text-gray-400 text-xs">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
        
        <div className={`flex ${isLarge ? 'space-x-4' : 'space-x-2'}`}>
          <Button 
            size={isLarge ? "default" : "sm"}
            onClick={() => window.open(project.demoUrl, '_blank')}
            className={`flex-1 ${isLarge ? 'py-3' : 'py-2'} bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all text-white`}
            data-testid={`button-demo-${project.id}`}
          >
            <project.demoIcon className={`${isLarge ? 'w-4 h-4' : 'w-3 h-3'} mr-${isLarge ? '2' : '1'}`} />
            {isLarge ? (
              project.demoIcon === Play ? 'Play Game' : 
              project.demoIcon === Sun ? 'View Weather' : 'Live Demo'
            ) : 'View'}
          </Button>
          <Button 
            variant="outline"
            size={isLarge ? "default" : "sm"}
            onClick={() => window.open(project.githubUrl, '_blank')}
            className={`${isLarge ? 'px-6 py-3' : 'px-3 py-2'} glass-effect border-slate-700/50 hover:bg-slate-800/20 transition-all`}
            data-testid={`button-code-${project.id}`}
          >
            <Github className={isLarge ? "w-4 h-4" : "w-3 h-3"} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  const ongoingProjects = allProjects.filter(project => project.status === 'ongoing');
  const deliveredProjects = allProjects.filter(project => project.status === 'delivered');
  const practiceProjects = allProjects.filter(project => project.status === 'practice');

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              My{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive showcase of my software development work, from web applications 
              to mobile apps and desktop software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ongoing{' '}
              <span className="text-orange-400">Projects</span>
            </h2>
            <p className="text-lg text-gray-300">
              Projects currently in development, featuring active work and continuous improvements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isLarge={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Delivered Projects */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Delivered{' '}
              <span className="text-green-400">Projects</span>
            </h2>
            <p className="text-lg text-gray-300">
              Completed projects delivered to clients and users, showcasing production-ready solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {deliveredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isLarge={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Practice Projects */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Practice{' '}
              <span className="text-purple-400">Projects</span>
            </h2>
            <p className="text-lg text-gray-300">
              Learning projects and experimental work demonstrating diverse technical skills and creativity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isLarge={false} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}