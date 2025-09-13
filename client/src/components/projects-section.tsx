import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { ExternalLink, Github, Eye, Play, Sun, Globe } from 'lucide-react';

const allProjects = [
  {
    id: 'moaqa-job-portal',
    title: 'MOAQA Job Portal',
    subtitle: 'Recruitment & Hiring Platform',
    description: 'Comprehensive job portal and recruitment platform for MOAQA, featuring job search, applicant tracking, HR management, and talent analytics. Connects job seekers with top employers and provides enterprises with powerful recruitment tools.',
    image: '/jbPortal.jpg',
    tags: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Node.js', 'Recruitment', 'HR Management', 'Job Portal'],
    primaryTag: 'Full-Stack',
    secondaryTag: 'Recruitment',
    year: '2025',
    demoIcon: Globe,
    gradient: 'from-blue-600 to-indigo-600',
    status: 'delivered',
    demoUrl: 'http://jbportal.moaqa.com/',
    githubUrl: 'https://github.com/sheikh-ali3/moaqa-job-portal'
  },
  {
    id: 'autism-therapy-platform',
    title: 'Autism Therapy Platform',
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
    githubUrl: 'https://github.com/sheikh-ali3/autism-therapy-platform'
  },
];

export function ProjectsSection() {
  const [, setLocation] = useLocation();
  
  // Filter to show only 2 delivered projects for the home page
  const highlightedProjects = allProjects
    .filter(project => project.status === 'delivered' || project.status === 'ongoing')
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
            Selected delivered and ongoing projects showcasing my skills
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
                    {project.demoIcon === Play? 'Play Game' : 
                     project.demoIcon === Sun ? 'View Weather' :
                     project.demoIcon === Globe ? 'Live Demo' : 'View'}
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