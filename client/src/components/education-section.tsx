import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    id: 'bachelor',
    degree: 'Bachelor of Software Engineering',
    institution: 'Superior University, Lahore',
    duration: 'Expected 2026',
    status: 'In Progress',
    details: [
      'Student Vice Leader (SVL) - Leadership role in student body',
      'Active member of Software Engineering Club',
      'Focus on full-stack development and software architecture'
    ],
    color: 'blue'
  },
  {
    id: 'intermediate',
    degree: 'Intermediate',
    institution: 'Kips College, Thokar Campus',
    duration: '2022',
    status: 'Completed',
    details: [
      'Pre-engineering track with focus on mathematics and physics',
      'Foundation for technical education'
    ],
    color: 'purple'
  },
  {
    id: 'matriculation',
    degree: 'Matriculation',
    institution: 'Dar-e-Arqam School, Westwood Campus',
    duration: '2020',
    status: 'Completed',
    details: [
      'Science group with strong academic performance',
      'Built foundational knowledge in core subjects'
    ],
    color: 'emerald'
  }
];

const certifications = [
  {
    id: 'ai-ml',
    title: 'AI and Machine Learning',
    issuer: 'NAVTTC',
    duration: 'August 2023 - December 2023',
    description: 'Comprehensive training in artificial intelligence and machine learning fundamentals, including neural networks, data analysis, and predictive modeling',
    color: 'emerald'
  },
  {
    id: 'amazon-va',
    title: 'Amazon Virtual Assistant',
    issuer: 'NAVTTC',
    duration: '2024',
    description: 'E-commerce operations, product research, inventory management, and customer support for Amazon marketplace',
    color: 'amber'
  }
];

export function EducationSection() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Education &{' '}
            <span className="text-amber-400">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300">
            Academic background and professional development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="glass-effect border-white/20 dark:border-slate-700/50 bg-white/10 dark:bg-slate-800/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400" data-testid="text-education-title">
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={edu.id}
                    className={`border-l-4 pl-6 ${
                      edu.color === 'blue' ? 'border-blue-500' :
                      edu.color === 'purple' ? 'border-purple-500' :
                      'border-emerald-500'
                    }`}
                    data-testid={`card-education-${edu.id}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-semibold text-white" data-testid={`text-degree-${edu.id}`}>
                        {edu.degree}
                      </h4>
                      {edu.status === 'In Progress' && (
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                          {edu.status}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mb-2 text-gray-300">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <p className={`font-medium ${
                          edu.color === 'blue' ? 'text-blue-400' :
                          edu.color === 'purple' ? 'text-purple-400' :
                          'text-emerald-400'
                        }`} data-testid={`text-institution-${edu.id}`}>
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-3 text-gray-300">
                      <Calendar className="h-4 w-4" />
                      <p data-testid={`text-duration-${edu.id}`}>
                        {edu.duration}
                      </p>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {edu.details.map((detail, detailIndex) => (
                        <li key={detailIndex} data-testid={`text-detail-${edu.id}-${detailIndex}`}>
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Certifications */}
          <Card className="glass-effect border-white/20 dark:border-slate-700/50 bg-white/10 dark:bg-slate-800/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <Award className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400" data-testid="text-certifications-title">
                  Certifications
                </h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.id}
                    className={`border-l-4 pl-6 ${
                      cert.color === 'emerald' ? 'border-emerald-500' : 'border-amber-500'
                    }`}
                    data-testid={`card-certification-${cert.id}`}
                  >
                    <h4 className="text-xl font-semibold mb-2 text-white" data-testid={`text-cert-title-${cert.id}`}>
                      {cert.title}
                    </h4>
                    <p className={`font-medium mb-2 ${
                      cert.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'
                    }`} data-testid={`text-cert-issuer-${cert.id}`}>
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-1 mb-3 text-gray-300">
                      <Calendar className="h-4 w-4" />
                      <p className="text-sm" data-testid={`text-cert-duration-${cert.id}`}>
                        {cert.duration}
                      </p>
                    </div>
                    <p className="text-gray-300 text-sm" data-testid={`text-cert-description-${cert.id}`}>
                      {cert.description}
                    </p>
                  </div>
                ))}
                
                {/* Future certifications placeholder */}
                <div className="glass-effect rounded-2xl p-6 text-center border-2 border-dashed border-gray-400">
                  <div className="text-gray-400 mb-2">
                    <Award className="h-8 w-8 mx-auto mb-2" />
                    <p data-testid="text-future-certs">More certifications coming soon...</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
