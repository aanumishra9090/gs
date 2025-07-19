import React, { useEffect, useState } from 'react';
import { 
  Home as HomeIcon,
  Monitor,
  Smartphone,
  PenTool,
  BarChart3,
  Users,
  Target,
  CheckCircle
} from 'lucide-react';

interface AboutPageProps {
  navigateTo: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
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

      

      <section data-section="hero" className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${
            isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] bg-clip-text text-transparent">
                Influzo Media
              </span>
            </h1>
            <p className="text-xl text-[#d0d0d0] max-w-3xl mx-auto leading-relaxed">
              We're a dynamic team of digital strategists, creative designers, and growth experts committed to turning your business vision into measurable digital success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section data-section="story" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible('story') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-[#d0d0d0] mb-6 leading-relaxed">
                Born from a passion for digital innovation, Influzo Media emerged as the bridge between ambitious business goals and cutting-edge digital solutions. We've evolved from a boutique agency to a trusted growth partner for forward-thinking companies.
              </p>
              <p className="text-lg text-[#d0d0d0] mb-8 leading-relaxed">
                Our mission is clear: democratize access to enterprise-level digital strategies. We believe every business, regardless of size, deserves marketing that moves the needle. Today, we've empowered 500+ companies to achieve breakthrough digital growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#a259ff] mb-2">500+</div>
                  <div className="text-[#d0d0d0]">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#a259ff] mb-2">5+</div>
                  <div className="text-[#d0d0d0]">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 ${
              isVisible('story') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-xl border border-gray-800">
                <div className="w-full h-64 bg-gradient-to-br from-[#5e2ccf]/20 to-[#a259ff]/20 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
                    alt="Our Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-[#d0d0d0]">
                  To accelerate business growth through strategic digital innovation, creating meaningful connections between brands and their audiences while delivering measurable ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section data-section="why-choose" className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible('why-choose') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Partner With Influzo Media?
            </h2>
            <p className="text-xl text-[#d0d0d0] max-w-3xl mx-auto">
              We blend strategic thinking, creative excellence, and technical mastery to deliver digital solutions that don't just meet expectations—they shatter them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Custom Web Development",
                description: "Bespoke digital experiences crafted with cutting-edge technology, optimized for performance, and designed to convert."
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                description: "Intuitive mobile solutions that engage users, drive retention, and extend your brand's reach across all platforms."
              },
              {
                icon: PenTool,
                title: "Digital Marketing Solutions",
                description: "Integrated marketing ecosystems that amplify your brand, attract ideal customers, and accelerate revenue growth."
              },
              {
                icon: BarChart3,
                title: "SEO & Performance Optimization",
                description: "Advanced optimization strategies that boost search visibility, enhance user experience, and maximize conversion rates."
              },
              {
                icon: Users,
                title: "24/7 Support & Maintenance",
                description: "Proactive monitoring and continuous optimization to ensure your digital investments deliver consistent, peak performance."
              },
              {
                icon: Target,
                title: "Scalable Cloud Solutions",
                description: "Enterprise-grade cloud architecture that scales seamlessly with your growth and adapts to evolving market needs."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`bg-[#0a0a0a] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-800 hover:border-[#a259ff]/50 ${
                  isVisible('why-choose') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#d0d0d0] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section data-section="values" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-[#d0d0d0] max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and team members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the competition."
              },
              {
                title: "Transparency",
                description: "We believe in open communication and provide clear, honest reporting on all projects, ensuring our clients are always informed."
              },
              {
                title: "Quality",
                description: "We never compromise on quality. Every project undergoes rigorous testing and review to ensure it meets our high standards."
              },
              {
                title: "Client Success",
                description: "Our success is measured by our clients' success. We're committed to delivering results that drive real business growth."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-4 transition-all duration-700 ${
                  isVisible('values') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: ${index * 200}ms }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-[#a259ff]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-[#d0d0d0] leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section data-section="partners" className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible('partners') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Partners, Certifications & Awards</h2>
            <p className="text-xl text-[#d0d0d0] max-w-3xl mx-auto">
              Trusted partnerships and industry recognition that validate our expertise and commitment to excellence.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 ${
            isVisible('partners') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              <img
                src="https://cdn.worldvectorlogo.com/logos/hubspot.svg"
                alt="HubSpot"
                className="h-12 mx-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/google-1-1.svg"
                alt="Google"
                className="h-12 mx-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg"
                alt="Google Analytics"
                className="h-12 mx-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/godaddy-1.svg"
                alt="GoDaddy"
                className="h-12 mx-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="h-12 mx-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                alt="Shopify"
                className="h-12 mx-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-[#d0d0d0] mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our proven digital solutions and strategic expertise.
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

export default AboutPage; 