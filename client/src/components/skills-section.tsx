import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'text-blue-400',
    skills: [
      { name: 'React JS', level: 90 },
      { name: 'React Native', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript/TypeScript', level: 88 }
    ]
  },
  {
    title: 'Backend',
    color: 'text-emerald-400',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'RESTful APIs', level: 87 }
    ]
  },
  {
    title: 'Languages',
    color: 'text-amber-400',
    skills: [
      { name: 'C++', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 78 }
    ]
  }
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical{' '}
            <span className="text-amber-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="glass-effect border-slate-700/50 bg-slate-800/20"
              data-testid={`card-skills-${category.title.toLowerCase()}`}
            >
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold mb-6 ${category.color}`}>
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white" data-testid={`skill-name-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                          {skill.name}
                        </span>
                        <span className={`${category.color} font-semibold`} data-testid={`skill-level-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={isVisible ? skill.level : 0} 
                        className="h-3 skill-bar bg-white/20"
                        data-testid={`progress-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
