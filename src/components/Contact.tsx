import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_m3jrmef', // Service ID
        'template_znfe5eg', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Aditya Mulay',
        },
        '7ioYubbunoB29GDyt' // Public Key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card className="glass glass-hover neon-glow rounded-2xl group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">Contact Information</h3>
                
                <div className="space-y-6">
                  <motion.a 
                    whileHover={{ x: 10 }}
                    href="tel:+919561244811" 
                    className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-all duration-300 p-3 rounded-xl hover:bg-white/5"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center glow">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm">+91 9561244811</p>
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ x: 10 }}
                    href="mailto:adityamulay1@gmail.com" 
                    className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-all duration-300 p-3 rounded-xl hover:bg-white/5"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center glow">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm">adityamulay1@gmail.com</p>
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ x: 10 }}
                    href="https://linkedin.com/in/aditya-mulay1" 
                    className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-all duration-300 p-3 rounded-xl hover:bg-white/5"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center glow">
                      <Linkedin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm">linkedin.com/in/aditya-mulay1</p>
                    </div>
                  </motion.a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass glass-hover rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Let's Connect!</h3>
                <p className="text-gray-300 leading-relaxed">
                  Always interested in discussing new opportunities, innovative projects, 
                  or connecting with fellow tech enthusiasts. Let's build something amazing together!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass glass-hover rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass border-white/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:glow"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass border-white/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:glow"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="glass border-white/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:glow resize-none"
                    placeholder="Tell me about your project or how we can collaborate..."
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-gray-300">
              © 2025 Aditya Mulay. Built with passion for innovation and technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
