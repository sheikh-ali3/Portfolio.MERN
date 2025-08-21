import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye, Play, Sun } from 'lucide-react';

const projects = [
  {
    id: 'weather-app-rn',
    title: 'Weather App',
    subtitle: 'React Native',
    description: 'Real-time weather application built with React Native, featuring OpenWeather API integration, multi-language support, and location-based forecasts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['React Native', 'OpenWeather API', 'Geolocation', 'Expo'],
    primaryTag: 'React Native',
    secondaryTag: 'API',
    company: 'ByteBrew Technologies',
    year: '2025',
    demoIcon: Eye,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    id: 'voice-to-text',
    title: 'Voice-to-Text Converter',
    subtitle: 'Web Speech API',
    description: 'Speech-to-text application with real-time transcription capabilities, responsive UI design, and advanced audio processing features.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['Web Speech API', 'JavaScript', 'HTML5', 'CSS3'],
    primaryTag: 'Web Speech API',
    secondaryTag: 'Real-time',
    year: '2025',
    demoIcon: Eye,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe Game',
    subtitle: 'Interactive Web Game',
    description: 'Interactive web-based Tic-Tac-Toe game demonstrating DOM manipulation, event handling, and game logic implementation.',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Game Logic'],
    primaryTag: 'Game',
    secondaryTag: 'Interactive',
    year: '2025',
    demoIcon: Play,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'weather-forecasting-web',
    title: 'Weather Forecasting Web App',
    subtitle: 'Responsive Web Application',
    description: 'Comprehensive weather application with real-time data, API integration, and responsive design for optimal user experience.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
    primaryTag: 'Web App',
    secondaryTag: 'Responsive',
    year: '2025',
    demoIcon: Sun,
    gradient: 'from-amber-500 to-orange-500'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Some of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="glass-effect border-white/20 dark:border-slate-700/50 bg-white/10 dark:bg-slate-800/20 overflow-hidden group hover:scale-105 transition-all duration-300"
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
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary" 
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs"
                      data-testid={`tag-${project.id}-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    className={`flex-1 py-3 bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all text-white`}
                    data-testid={`button-demo-${project.id}`}
                  >
                    <project.demoIcon className="w-4 h-4 mr-2" />
                    {project.demoIcon === Play ? 'Play Game' : 
                     project.demoIcon === Sun ? 'View Weather' : 'Live Demo'}
                  </Button>
                  <Button 
                    variant="outline"
                    className="px-6 py-3 glass-effect border-white/30 dark:border-slate-700/50 hover:bg-white/20 dark:hover:bg-slate-800/20 transition-all"
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
