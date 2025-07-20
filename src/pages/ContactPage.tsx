import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface ContactPageProps {
  navigateTo: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Back to Home Button */}
      <div className="p-6">
        <button
          onClick={() => navigateTo('home')}
          className="text-[#a259ff] hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          ← Back to Home
        </button>
      </div>

      {/* Hero Section */}
      <div className="text-center py-16 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl text-[#d0d0d0] max-w-3xl mx-auto">
          Ready to transform your digital presence? Get in touch with our team of experts.
        </p>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Office */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#333] shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">Our Office</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] mx-auto rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#a259ff] mt-1 flex-shrink-0" size={20} />
                <p className="text-[#d0d0d0]">
                  City Center Jiwaji University, Mahalgaon<br />
                  Gwalior Madhya Pradesh, 474002<br />
                  India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#a259ff] flex-shrink-0" size={20} />
                <a href="businesswithjayesh09@gmail.com" className="text-[#d0d0d0] hover:text-[#a259ff] transition-colors">
                  businesswithjayesh09@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#a259ff] flex-shrink-0" size={20} />
                <a href="tel:+91 84500 44308" className="text-[#d0d0d0] hover:text-[#a259ff] transition-colors">
                  +91 84500 44308
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] mb-16">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Clock className="text-[#a259ff]" size={24} />
            Business Hours
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-[#d0d0d0] mb-2"><span className="text-white font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
              <p className="text-[#d0d0d0] mb-2"><span className="text-white font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
              <p className="text-[#d0d0d0]"><span className="text-white font-semibold">Sunday:</span> Closed</p>
            </div>
            <div>
              <p className="text-[#d0d0d0] text-sm">
                For urgent matters outside business hours, please email us and we'll respond within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8 text-white">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="Facebooklink"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#a259ff] rounded-full flex items-center justify-center hover:bg-[#8a4bff] transition-colors duration-300"
            >
              <Facebook className="text-white" size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#a259ff] rounded-full flex items-center justify-center hover:bg-[#8a4bff] transition-colors duration-300"
            >
              <Twitter className="text-white" size={20} />
            </a>
            <a
              href="Instagramlink"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#a259ff] rounded-full flex items-center justify-center hover:bg-[#8a4bff] transition-colors duration-300"
            >
              <Instagram className="text-white" size={20} />
            </a>
            <a
              href="LinkedInLink"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#a259ff] rounded-full flex items-center justify-center hover:bg-[#8a4bff] transition-colors duration-300"
            >
              <Linkedin className="text-white" size={20} />
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h3>
          <p className="text-xl text-[#d0d0d0] mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <button
            onClick={() => navigateTo('letstalk')}
            className="bg-[#a259ff] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8a4bff] transition-colors duration-300"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;