import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { ExternalLink, Github, Eye, Play, Sun, Globe } from 'lucide-react';

const allProjects = [
  {
    id: 'weather-app-rn',
    title: 'Weather App',
    subtitle: 'React Native',
    description: 'Real-time weather application built with React Native, featuring OpenWeather API integration, multi-language support, and location-based forecasts.',
    image: '/icon.jpeg',
    tags: ['React Native', 'OpenWeather API', 'Geolocation', 'Expo'],
    primaryTag: 'Mobile App',
    secondaryTag: 'Android | ios',
    company: 'ByteBrew Technologies',
    year: '2025',
    demoIcon: Eye,
    gradient: 'from-blue-500 to-purple-500',
    status: 'ongoing',
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
    year: '2024',
    demoIcon: Eye,
    gradient: 'from-purple-500 to-pink-500',
    status: 'delivered',
    demoUrl: 'https://github.com/sheikh-ali3/CompatibilityMatchmaker.io',
    githubUrl: 'https://github.com/sheikh-ali3/CompatibilityMatchmaker'
  },
  {
    id: 'autism-therapy-platform',
    title: 'Autism Therapy Platform',
    subtitle: 'Healthcare & Support Services',
    description: 'Comprehensive digital platform providing therapies and support services for individuals with autism. Features specialized therapy programs, progress tracking, family support resources, and professional guidance for autism care and development.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['Healthcare', 'Therapy', 'Support Services', 'Accessibility', 'Family Care'],
    primaryTag: 'Healthcare',
    secondaryTag: 'Therapy',
    year: '2025',
    demoIcon: Globe,
    gradient: 'from-teal-500 to-cyan-500',
    status: 'ongoing',
    demoUrl: 'https://nimble-horse-a37b81.netlify.app/',
    githubUrl: 'https://github.com/sheikh-ali3/autism-therapy-platform'
  },
  {
    id: 'quickcart-grocery-app',
    title: 'QuickCart',
    subtitle: 'Modern Grocery Delivery App',
    description: 'A beautiful, feature-rich grocery delivery app built with React Native and Expo. Features modern UI/UX design, real-time cart management, flying animations, tab navigation, and comprehensive grocery shopping experience with instant/scheduled delivery options.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['React Native', 'Expo', 'TypeScript', 'Mobile App', 'E-commerce', 'Grocery Delivery', 'Animations', 'Context API'],
    primaryTag: 'React Native',
    secondaryTag: 'Mobile App',
    year: '2025',
    demoIcon: Play,
    gradient: 'from-green-500 to-emerald-500',
    status: 'ongoing',
    demoUrl: 'https://expo.dev/@sheikh-ali3/quickcart',
    githubUrl: 'https://github.com/sheikh-ali3/quickcart-grocery-app'
  }
];

export function ProjectsSection() {
  const [, setLocation] = useLocation();
  
  // Filter to show only 2 delivered projects for the home page
  const highlightedProjects = allProjects
    .filter(project => project.status === 'delivered')
    .slice(0, 2);
  
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Highlighted{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Selected delivered projects showcasing my completed work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {highlightedProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="glass-effect border-slate-700/50 bg-slate-800/20 overflow-hidden group hover:scale-105 transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={`${project.title} Development`} 
                  className="w-full h-64 object-cover"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                    {project.primaryTag}
                  </Badge>
                  <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    {project.secondaryTag}
                  </Badge>
                </div>
                {project.year && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/20 border-white/30 text-white">
                      {project.year}
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary" 
                      className="bg-gray-700 text-gray-300 text-xs"
                      data-testid={`tag-${project.id}-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className={`flex-1 py-3 bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all text-white`}
                    data-testid={`button-demo-${project.id}`}
                  >
                    <project.demoIcon className="w-4 h-4 mr-2" />
                    {project.demoIcon === Play ? 'Play Game' : 
                     project.demoIcon === Sun ? 'View Weather' : 'Live Demo'}
                  </Button>
                  <Button 
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    variant="outline"
                    className="px-6 py-3 glass-effect border-slate-700/50 hover:bg-slate-800/20 transition-all"
                    data-testid={`button-code-${project.id}`}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={() => setLocation('/projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            data-testid="button-view-all-projects"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}