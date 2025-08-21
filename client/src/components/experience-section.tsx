import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 'bytebrew',
    title: 'Associate Software Engineer - React Native',
    company: 'ByteBrew Technologies',
    duration: 'August 2025 - Present',
    location: 'Lahore, Pakistan',
    status: 'current',
    description: [
      'Designed and developed cross-platform mobile apps using React Native for iOS and Android',
      'Integrated RESTful APIs and third-party libraries, ensuring seamless performance',
      'Built modular, reusable components with optimized performance',
      'Deployed and maintained apps using Expo'
    ],
    color: 'emerald'
  },
  {
    id: 'moaqa',
    title: 'Full-Stack Developer - MERN',
    company: 'MOAQA Pvt Ltd',
    duration: 'May 2025 - Present',
    location: 'Lahore, Pakistan',
    status: 'current',
    description: [
      'Built and maintained end-to-end web applications using MongoDB, Express.js, React.js, Node.js',
      'Developed scalable backend APIs and responsive frontend UIs',
      'Improved application performance and enhanced code quality through best practices',
      'Collaborated with cross-functional teams in an Agile/Scrum environment'
    ],
    color: 'blue'
  },
  {
    id: 'smc',
    title: 'Data Entry Specialist',
    company: 'SMC Pvt Ltd',
    duration: 'May 2025 - July 2025',
    location: 'Lahore, Pakistan',
    status: 'completed',
    description: [
      'Managed high-volume data entry across cloud platforms with focus on accuracy and compliance',
      'Maintained integrity and reliability of business-critical records',
      'Ensured quality control processes and data validation standards'
    ],
    color: 'purple'
  },
  {
    id: 'navttc',
    title: 'Course Instructor - Amazon VA',
    company: 'NAVTTC (National Vocational & Technical Training Commission)',
    duration: 'November 2024 - January 2025',
    location: 'Lahore, Pakistan',
    status: 'completed',
    description: [
      'Trained students on Amazon VA operations: product research, inventory, customer support',
      'Delivered hands-on, practical knowledge to prepare students for real-world e-commerce roles',
      'Strengthened communication and mentorship skills by guiding diverse learners'
    ],
    color: 'amber'
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            My career journey and achievements
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative flex items-center">
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'} ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Card 
                    className="glass-effect border-slate-700/50 bg-slate-800/20 inline-block max-w-lg w-full hover:scale-105 transition-transform"
                    data-testid={`card-experience-${experience.id}`}
                  >
                    <CardContent className="p-8">
                      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                        {experience.status === 'current' && (
                          <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white">
                            Current
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2 text-white" data-testid={`text-title-${experience.id}`}>
                        {experience.title}
                      </h3>
                      
                      <p className={`font-semibold mb-2 ${
                        experience.color === 'emerald' ? 'text-emerald-500' :
                        experience.color === 'blue' ? 'text-blue-500' :
                        experience.color === 'purple' ? 'text-purple-500' :
                        'text-amber-500'
                      }`} data-testid={`text-company-${experience.id}`}>
                        {experience.company}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-4 text-gray-300 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span data-testid={`text-duration-${experience.id}`}>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span data-testid={`text-location-${experience.id}`}>{experience.location}</span>
                        </div>
                      </div>
                      
                      <ul className={`space-y-2 text-gray-200 ${index % 2 === 0 ? 'text-left' : ''}`}>
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} data-testid={`text-description-${experience.id}-${itemIndex}`}>
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-900 hidden lg:block ${
                  experience.color === 'emerald' ? 'bg-emerald-500' :
                  experience.color === 'blue' ? 'bg-blue-500' :
                  experience.color === 'purple' ? 'bg-purple-500' :
                  'bg-amber-500'
                }`}></div>
                
                <div className={`flex-1 ${index % 2 !== 0 ? 'pr-8' : 'pl-8'} ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                  {/* Empty space for alternating layout */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
