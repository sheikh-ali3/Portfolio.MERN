import { useTypingAnimation } from '@/hooks/use-typing-animation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, MessageCircle, Download } from 'lucide-react';
import profileImage from '@assets/enhanced_1755780756458.jpg';

const typingTexts = [
  'Software Engineer',
  'Full-Stack Developer (MERN/React Native)',
  'E-commerce Specialist',
  'Mobile App Developer',
  'Problem Solver'
];

export function HeroSection() {
  const typingText = useTypingAnimation(typingTexts, 100, 50, 2000);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 dark:bg-purple-400/10 rounded-full animate-float"></div>
        <div className="absolute top-40 -left-40 w-60 h-60 bg-blue-500/20 dark:bg-blue-400/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-500/20 dark:bg-emerald-400/10 rounded-full animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slideInUp">
            <div className="flex justify-center lg:justify-start mb-4">
              <Badge className="glass-effect border-white/30 dark:border-slate-700/50 text-white bg-white/10 dark:bg-slate-800/20">
                Available for new opportunities
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Muhammad Ali
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl mb-8 h-16 text-gray-200">
              <span className="typing-text font-medium" data-testid="typing-text">
                {typingText}
              </span>
            </div>
            
            <p className="text-lg mb-8 text-gray-300 max-w-2xl leading-relaxed">
              Innovative Software Engineer from Lahore, Pakistan, specializing in full-stack development, 
              mobile applications, and e-commerce solutions. Passionate about transforming complex 
              challenges into elegant, user-centric experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-4 glass-effect border-white/30 dark:border-slate-700/50 text-white hover:bg-white/20 dark:hover:bg-slate-800/20 font-semibold rounded-full transform hover:scale-105 transition-all"
                data-testid="button-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="https://www.linkedin.com/in/muhammad-ali-551929261" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-blue-400 transition-colors transform hover:scale-110"
                data-testid="link-linkedin"
              >
                <Linkedin />
              </a>
              <a 
                href="https://github.com/muhammad-ali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-gray-400 transition-colors transform hover:scale-110"
                data-testid="link-github"
              >
                <Github />
              </a>
              <a 
                href="mailto:sheikhali12332@gmail.com"
                className="text-2xl text-white hover:text-red-400 transition-colors transform hover:scale-110"
                data-testid="link-email"
              >
                <Mail />
              </a>
              <a 
                href="https://wa.me/923255005950" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-green-400 transition-colors transform hover:scale-110"
                data-testid="link-whatsapp"
              >
                <MessageCircle />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fadeIn">
            <div className="relative">
              <div className="w-80 h-80 rounded-full glass-effect p-2 animate-glow">
                <img 
                  src={profileImage} 
                  alt="Muhammad Ali - Software Engineer" 
                  className="w-full h-full object-cover rounded-full"
                  data-testid="img-profile"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
