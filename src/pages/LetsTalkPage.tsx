import React, { useEffect, useState } from 'react';
import { 
  Home as HomeIcon,
  Check,
  Sparkles,
  Send
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database';

interface LetsTalkPageProps {
  navigateTo: (page: string) => void;
}

type ConsultantRequestInsert = Database['public']['Tables']['consultant_requests']['Insert'];

const LetsTalkPage: React.FC<LetsTalkPageProps> = ({ navigateTo }) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Prepare data for Supabase
      const consultantRequestData: ConsultantRequestInsert = {
        name: formData.name,
        email: formData.email,
        company_name: formData.company_name || null,
        phone: formData.phone || null,
        message: formData.message
      };
      
      // Insert into Supabase
      const { error } = await supabase
        .from('consultant_requests')
        .insert([consultantRequestData]);
      
      if (error) {
        throw error;
      }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company_name: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f1efe3' }}>
      {/* Back to Home Button */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center text-purple-600 hover:text-purple-700 transition-colors font-medium"
          >
            <HomeIcon className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Main Content */}
      <section data-section="main" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className={`transition-all duration-1000 ${
              isVisible('main') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Ready to Accelerate Your Revenue Growth?
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Partner with Influzo Media and watch us transform your digital presence into a revenue-generating powerhouse. We handle the complexity, you enjoy the results.
              </p>

              <div className="space-y-4">
                {[
                  "Comprehensive Digital Strategy & Execution",
                  "Performance-Driven Marketing Campaigns",
                  "Custom Web Development & Brand Design",
                  "Real-Time Analytics & ROI Tracking"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-3 transition-all duration-700 ${
                      isVisible('main') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className={`transition-all duration-1000 ${
              isVisible('main') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                {/* Sparkle Icon */}
                <div className="absolute -top-3 -right-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Your Free Growth Consultation
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                     name="company_name"
                     value={formData.company_name}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message / Inquiry Box"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        GET MY FREE PROPOSAL
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section data-section="cta" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${
            isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Smart Businesses Choose Influzo Media
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're not just another agency—we're your growth accelerator, combining strategic expertise with proven execution to deliver results that matter.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Proven Results",
                  description: "500+ successful transformations with average 300% ROI improvement within 6 months"
                },
                {
                  title: "Expert Team",
                  description: "Elite team of certified strategists, designers, and developers with 5+ years expertise"
                },
                {
                  title: "24/7 Support",
                  description: "Dedicated account management and proactive optimization to ensure peak performance"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`bg-gray-50 p-6 rounded-xl transition-all duration-700 ${
                    isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LetsTalkPage;