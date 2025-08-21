import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Github, MessageCircle, Send } from 'lucide-react';

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: 'Message sent successfully!',
        description: data.message || 'Thank you for your message! I will get back to you soon.',
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error sending message',
        description: error.message || 'An error occurred while sending your message. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Lahore, Punjab, Pakistan',
      color: 'blue',
      link: null
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'sheikhali12332@gmail.com',
      color: 'emerald',
      link: 'mailto:sheikhali12332@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 325 5005950',
      color: 'amber',
      link: 'https://wa.me/923255005950'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/muhammad-ali-551929261',
      color: 'bg-blue-600 hover:bg-blue-700',
      testId: 'link-linkedin-contact'
    },
    {
      icon: Github,
      href: 'https://github.com/muhammad-ali',
      color: 'bg-gray-700 hover:bg-gray-800',
      testId: 'link-github-contact'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/923255005950',
      color: 'bg-green-600 hover:bg-green-700',
      testId: 'link-whatsapp-contact'
    },
    {
      icon: Mail,
      href: 'mailto:sheikhali12332@gmail.com',
      color: 'bg-red-600 hover:bg-red-700',
      testId: 'link-email-contact'
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In{' '}
            <span className="text-amber-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300">
            Let's discuss your next project or opportunity
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="glass-effect border-white/20 dark:border-slate-700/50 bg-white/10 dark:bg-slate-800/20"
                data-testid={`card-contact-${info.title.toLowerCase()}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      info.color === 'blue' ? 'bg-blue-500' :
                      info.color === 'emerald' ? 'bg-emerald-500' :
                      'bg-amber-500'
                    }`}>
                      <info.icon className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1" data-testid={`text-contact-title-${info.title.toLowerCase()}`}>
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className={`transition-colors ${
                            info.color === 'emerald' ? 'text-emerald-400 hover:text-emerald-300' :
                            'text-amber-400 hover:text-amber-300'
                          }`}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          data-testid={`link-contact-${info.title.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300" data-testid={`text-contact-value-${info.title.toLowerCase()}`}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="glass-effect border-white/20 dark:border-slate-700/50 bg-white/10 dark:bg-slate-800/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-white" data-testid="text-connect-title">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center transition-colors`}
                      data-testid={social.testId}
                    >
                      <social.icon className="text-white h-5 w-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="glass-effect border-white/20 dark:border-slate-700/50 bg-white/10 dark:bg-slate-800/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center text-white" data-testid="text-form-title">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your first name"
                      required
                      data-testid="input-firstName"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your last name"
                      required
                      data-testid="input-lastName"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter message subject"
                    required
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Enter your message"
                    rows={5}
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:transform-none"
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
