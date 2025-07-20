import React, { useEffect, useState } from 'react';
import { Home as HomeIcon } from 'lucide-react';

interface TermsConditionsPageProps {
  navigateTo: (page: string) => void;
}

const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({ navigateTo }) => {
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

      {/* Terms & Conditions Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div data-section="header" className={`text-center mb-12 transition-all duration-1000 ${
          isVisible('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms & Conditions
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
              Welcome to Influzo Media. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </section>

          {/* Services */}
          <section data-section="services" className={`transition-all duration-1000 ${
            isVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-[#d0d0d0] leading-relaxed mb-4">
              Influzo Media provides digital marketing services including but not limited to:
            </p>
            <ul className="text-[#d0d0d0] space-y-2">
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Website development and design
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Social media marketing
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Search engine optimization (SEO)
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Digital advertising campaigns
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Graphic design services
              </li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section data-section="responsibilities" className={`transition-all duration-1000 ${
            isVisible('responsibilities') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
            <p className="text-[#d0d0d0] leading-relaxed mb-4">
              When using our services, you agree to:
            </p>
            <ul className="text-[#d0d0d0] space-y-2">
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Provide accurate and complete information
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Use our services in compliance with applicable laws
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Not engage in any fraudulent or harmful activities
              </li>
              <li className="flex items-start">
                <span className="text-[#a259ff] mr-2">•</span>
                Respect intellectual property rights
              </li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section data-section="payment" className={`transition-all duration-1000 ${
            isVisible('payment') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#a259ff] mb-2">Payment Schedule</h3>
                <p className="text-[#d0d0d0] leading-relaxed">
                  Payment terms will be specified in individual service agreements. Generally, a 50% advance payment is required before project commencement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#a259ff] mb-2">Late Payments</h3>
                <p className="text-[#d0d0d0] leading-relaxed">
                  Late payments may result in service suspension and additional charges as specified in the service agreement.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section data-section="ip" className={`transition-all duration-1000 ${
            isVisible('ip') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="text-[#d0d0d0] leading-relaxed mb-4">
              All content, designs, and materials created by Influzo Media remain our intellectual property until full payment is received. Upon completion of payment, specified rights will be transferred to the client as outlined in the service agreement.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section data-section="liability" className={`transition-all duration-1000 ${
            isVisible('liability') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="text-[#d0d0d0] leading-relaxed mb-4">
              Influzo Media shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service.
            </p>
          </section>

          {/* Termination */}
          <section data-section="termination" className={`transition-all duration-1000 ${
            isVisible('termination') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p className="text-[#d0d0d0] leading-relaxed mb-4">
              Either party may terminate services with written notice as specified in the service agreement. Termination does not relieve the client of payment obligations for services already rendered.
            </p>
          </section>

          {/* Governing Law */}
          <section data-section="law" className={`transition-all duration-1000 ${
            isVisible('law') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
            <p className="text-[#d0d0d0] leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in Jaipur, Rajasthan.
            </p>
          </section>

          {/* Changes to Terms */}
          <section data-section="changes" className={`transition-all duration-1000 ${
            isVisible('changes') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
            <p className="text-[#d0d0d0] leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section data-section="contact" className={`transition-all duration-1000 ${
            isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-[#d0d0d0] leading-relaxed mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
              <p className="text-[#d0d0d0] mb-2">
                <strong className="text-white">Email:</strong> businesswithjayesh09@gmail.com
              </p>
              <p className="text-[#d0d0d0] mb-2">
                <strong className="text-white">Phone:</strong> +91 84500 44308
              </p>
              <p className="text-[#d0d0d0]">
                <strong className="text-white">Address:</strong> City Center, Jiwaji University, Mahalgaon, Gwalior, Madhya Pradesh 474002
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;