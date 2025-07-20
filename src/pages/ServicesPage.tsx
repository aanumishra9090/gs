import React, { useEffect, useState } from 'react';
import { 
  Home as HomeIcon,
  Monitor,
  PenTool,
  Share2,
  Search,
  BarChart3,
  Smartphone,
  ChevronRight
} from 'lucide-react';

interface ServicesPageProps {
  navigateTo: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ navigateTo }) => {
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

  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Cutting-edge web solutions built with modern frameworks, optimized for performance, and engineered to convert visitors into loyal customers.",
      features: ["Responsive Design", "Modern Tech Stack", "SEO-Friendly", "Fast Loading", "Secure & Scalable"],
      color: "from-blue-500 to-purple-600",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: PenTool,
      title: "Graphic Designing",
      description: "Compelling visual narratives that capture your brand essence, engage your audience, and create memorable experiences that drive action.",
      features: ["Logo Design", "Brand Identity", "Marketing Creatives", "Print Design", "Digital Assets"],
      color: "from-pink-500 to-purple-600",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Data-driven social strategies that build authentic communities, amplify your brand voice, and generate high-quality leads across all platforms.",
      features: ["Campaign Strategy", "Content Creation", "Platform Management", "Analytics", "Community Building"],
      color: "from-purple-500 to-pink-600",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Advanced SEO methodologies that establish digital authority, drive qualified organic traffic, and deliver sustainable long-term growth.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Analytics & Reporting"],
      color: "from-green-500 to-purple-600",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Integrated marketing ecosystems that orchestrate every touchpoint, maximize customer lifetime value, and accelerate revenue growth.",
      features: ["Strategy Development", "Multi-Channel Campaigns", "Performance Tracking", "ROI Optimization", "Market Analysis"],
      color: "from-orange-500 to-purple-600",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: Smartphone,
      title: "PPC Advertising",
      description: "Precision-targeted advertising campaigns that maximize ROI, minimize acquisition costs, and deliver immediate, measurable results.",
      features: ["Google Ads", "Facebook Ads", "ROI Tracking", "Ad Copywriting", "Campaign Optimization"],
      color: "from-red-500 to-purple-600",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    }
  ];

  return (
    <div>
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

      {/* Hero Section */}
      <section data-section="hero" className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${
            isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-[#d0d0d0] max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions engineered to accelerate growth, amplify your brand presence, and deliver measurable results that transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section data-section="services" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-[#1a1a1a] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-800 hover:border-[#a259ff]/50 overflow-hidden cursor-pointer ${
                  isVisible('services') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => navigateTo('letstalk')}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-[#d0d0d0] mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-[#a259ff]">
                        <div className="w-2 h-2 bg-[#a259ff] rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] text-white py-3 px-6 rounded-lg font-medium hover:from-[#4a1fa3] hover:to-[#8a47d9] transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Get Started <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section data-section="process" className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible('process') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-[#d0d0d0] max-w-3xl mx-auto">
              Our battle-tested methodology ensures every project delivers breakthrough results while exceeding expectations at every milestone.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep-dive analysis of your business objectives, market landscape, and growth opportunities to craft the perfect strategy."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Custom-built roadmap combining data insights, market intelligence, and proven methodologies to maximize your ROI."
              },
              {
                step: "03",
                title: "Execution",
                description: "Flawless implementation by our expert team, with rigorous quality control and continuous optimization throughout."
              },
              {
                step: "04",
                title: "Optimization",
                description: "Data-driven refinement and scaling strategies that ensure sustained growth and competitive advantage."
              }
            ].map((step, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible('process') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#d0d0d0] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-section="cta" className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${
            isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#d0d0d0] mb-8 max-w-2xl mx-auto">
              Choose the service that best fits your needs and let's discuss how we can help transform your business.
            </p>
            
            <button 
              onClick={() => navigateTo('letstalk')}
              className="bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-[#4a1fa3] hover:to-[#8a47d9] transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;