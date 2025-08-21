import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLocation } from 'wouter';
import { Menu } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home', isRoute: false },
  { href: '#about', label: 'About', isRoute: false },
  { href: '#skills', label: 'Skills', isRoute: false },
  { href: '#experience', label: 'Experience', isRoute: false },
  { href: '/projects', label: 'Projects', isRoute: true },
  { href: '#contact', label: 'Contact', isRoute: false },
];

export function Navigation() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (item: { href: string; isRoute: boolean }) => {
    if (item.isRoute) {
      setLocation(item.href);
    } else {
      // If we're not on the home page and trying to navigate to a section, go to home first
      if (location !== '/') {
        setLocation('/');
        // Wait for navigation to complete, then scroll to section
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // We're on home page, just scroll to section
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-slate-900/10 backdrop-blur-md border-b border-slate-700/50' 
          : 'bg-transparent'
      }`}
      data-testid="navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => setLocation('/')}
            data-testid="logo"
          >
            M.Ali
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item)}
                className="text-gray-300 hover:text-blue-400 transition-colors"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="md:hidden glass-effect hover:bg-slate-800/20"
                  data-testid="mobile-menu-toggle"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="glass-effect border-slate-700/50"
                data-testid="mobile-menu"
              >
                <div className="flex flex-col space-y-6 mt-16">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavigation(item)}
                      className="text-lg text-gray-300 hover:text-blue-400 transition-colors text-left"
                      data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
