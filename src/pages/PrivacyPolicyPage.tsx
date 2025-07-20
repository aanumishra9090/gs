import React, { useEffect, useState } from 'react';
import { Home as HomeIcon } from 'lucide-react';

interface PrivacyPolicyPageProps {
  navigateTo: (page: string) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ navigateTo }) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setVisibleSections(prev => new Set([...prev, sectionId]));
          }
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Back to Home Button */}
      <div className="bg-[#1a1a1a] py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center text-[#a259ff] hover:text-[#8a47d9] transition-colors font-medium"
          >
            <HomeIcon className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div data-section="header" className={`text-center mb-12 transition-all duration-1000 ${
          isVisible('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-[#d0d0d0] text-lg">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <section data-section="intro" className={`transition-all duration-1000 ${
            isVisible('intro') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-[#d0d0d0] leading-relaxed mb-4">
              At Influzo Media, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section data-section="collection" className={`transition-all duration-1000 ${
            isVisible('collection') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#a259ff] mb-2">Personal Information</h3>
                <p className="text-[#d0d0d0] leading-relaxed">
                  We may collect personal information such as your name, email address, phone number, and company details when you contact us or use our services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#a259ff] mb-2">Usage Information</h3>
                <p className="text-[#d0d0d0] leading-relaxed">
                  We automatically collect information about how you interact with our website, including IP address, browser type, pages visited, and time spent on our site.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section data-section="usage" className={`transition-all duration-1000 ${
            isVisible('usage') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <ul className="text-[#d0d0d0] space-y-2">
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                To provide and maintain our services
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                To communicate with you about our services
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                To improve our website and services
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                To comply with legal obligations
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section data-section="sharing" className={`transition-all duration-1000 ${
            isVisible('sharing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
            <p className="text-[#d0d0d0] leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with:
            </p>
            <ul className="text-[#d0d0d0] space-y-2">
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Service providers who assist us in operating our website
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Legal authorities when required by law
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section data-section="security" className={`transition-all duration-1000 ${
            isVisible('security') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-[#d0d0d0] leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          {/* Your Rights */}
          <section data-section="rights" className={`transition-all duration-1000 ${
            isVisible('rights') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-[#d0d0d0] leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-[#d0d0d0] space-y-2">
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Access your personal information
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Correct inaccurate information
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Request deletion of your information
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Opt-out of marketing communications
              </li>
            </ul>
          </section>

          {/* Contact Information */}
          <section data-section="contact" className={`transition-all duration-1000 ${
            isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-[#d0d0d0] leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
              <p className="text-[#d0d0d0] mb-2">
                <strong className="text-white">Email:</strong> businesswithjayesh09@gmail.com
              </p>
              <p className="text-[#d0d0d0] mb-2">
                <strong className="text-white">Phone:</strong> +91 84500 44308
              </p>
              <p className="text-[#d0d0d0]">
                <strong className="text-white">Address:</strong>  City Center, Jiwaji University, Mahalgaon, Gwalior, Madhya Pradesh 474002
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;