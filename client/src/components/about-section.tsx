import { Card, CardContent } from '@/components/ui/card';
import { Code, Smartphone, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable and efficient code',
    color: 'text-blue-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Responsive design for all devices',
    color: 'text-purple-500'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimized and fast applications',
    color: 'text-emerald-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Team player and mentor',
    color: 'text-amber-500'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Passionate about creating innovative digital solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="glass-effect border-white/20 dark:border-slate-700/50 bg-white/10 dark:bg-slate-800/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-500 dark:text-blue-400" data-testid="text-journey">
                My Journey
              </h3>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-700 dark:text-gray-200">
                  I am a dynamic and dedicated software engineer from the vibrant city of Lahore, Pakistan. 
                  My journey in technology is fueled by a passion for innovation and problem-solving. 
                  Armed with relentless curiosity and a love for coding, I thrive on turning complex 
                  challenges into elegant solutions.
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  Currently pursuing my Bachelor's in Software Engineering at Superior University, I serve as 
                  Student Vice Leader while gaining hands-on experience as an Associate Software Engineer at 
                  ByteBrew Technologies and Full-Stack Developer at MOAQA Pvt Ltd.
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  With a strong foundation in full-stack development, I blend creativity and precision to 
                  craft seamless, user-centric experiences. Join me on this exciting adventure where lines 
                  of code transform into pathways of possibility!
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="glass-effect border-white/20 dark:border-slate-700/50 bg-white/10 dark:bg-slate-800/20 text-center hover:scale-105 transition-transform"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(' ', '-')}`}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 flex justify-center">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
