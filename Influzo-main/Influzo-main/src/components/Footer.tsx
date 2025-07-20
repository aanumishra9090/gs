import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact us</h3>
            <div className="space-y-4">
              <div className="flex items-center text-[#d0d0d0]">
                <Phone className="w-5 h-5 mr-3 text-[#a259ff]" />
                <div>
                  <p className="text-sm text-[#a0a0a0]">Call:</p>
                  <a href="tel:+918450044308" className="hover:text-[#a259ff] transition-colors">
                    +91 84500 44308
                  </a>
                </div>
              </div>
              <div className="flex items-center text-[#d0d0d0]">
                <Mail className="w-5 h-5 mr-3 text-[#a259ff]" />
                <div>
                  <p className="text-sm text-[#a0a0a0]">Email:</p>
                  <a href="mailto:businesswithjayesh09@gmail.com" className="hover:text-[#a259ff] transition-colors">
                    businesswithjayesh09@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center text-[#d0d0d0]">
                <Phone className="w-5 h-5 mr-3 text-[#a259ff]" />
                <div>
                  <p className="text-sm text-[#a0a0a0]">WhatsApp:</p>
                  <a href="https://wa.me/917732972282" className="hover:text-[#a259ff] transition-colors">
                    +91 84500 44308
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#a259ff] transition-colors">
                <Facebook className="w-5 h-5 text-[#d0d0d0] hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#a259ff] transition-colors">
                <Twitter className="w-5 h-5 text-[#d0d0d0] hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#a259ff] transition-colors">
                <Instagram className="w-5 h-5 text-[#d0d0d0] hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#a259ff] transition-colors">
                <Linkedin className="w-5 h-5 text-[#d0d0d0] hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => navigateTo('home')}
                className="block text-[#a259ff] hover:text-white transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('about')}
                className="block text-[#a259ff] hover:text-white transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="block text-[#a259ff] hover:text-white transition-colors font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => navigateTo('privacy-policy')}
                className="block text-[#a259ff] hover:text-white transition-colors font-medium"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigateTo('terms-conditions')}
                className="block text-[#a259ff] hover:text-white transition-colors font-medium"
              >
                Terms & Conditions
              </button>
            </div>
          </div>

          {/* Company Description Section */}
         
             <div>
            <div className="flex items-center mb-6">
              
                
                
                 <img 
  src="/influzo-logo.png" 
  alt="Influzo Media Logo" 
  className="w-10 h-10 object-contain"
/>
              </div>
              <span className="text-lg font-bold text-white">Influzo Media</span>
            </div>
            <p className="text-[#d0d0d0] leading-relaxed">
              At Influzo Media, the best digital marketing company, we pride ourselves on helping businesses unlock their true potential. From small startups to established enterprises, our tailored strategies deliver measurable success.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            {/* Privacy Policy and Terms & Conditions Links */}
            <div className="flex items-center justify-center space-x-4 mb-4">
              <button
                onClick={() => navigateTo('privacy-policy')}
                className="text-[#d0d0d0] hover:text-white transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                Privacy Policy
              </button>
              <div className="text-[#d0d0d0] text-sm sm:text-base">|</div>
              <button
                onClick={() => navigateTo('terms-conditions')}
                className="text-[#d0d0d0] hover:text-white transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                Terms & Conditions
              </button>
            </div>
            
            {/* Copyright Notice */}
            <div className="text-[#d0d0d0] text-xs sm:text-sm">
              © 2025 Influzo Media. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;