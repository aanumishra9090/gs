import React, { useEffect, useState } from 'react';
import { 
  ChevronRight, 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  Monitor,
  Share2,
  Search,
  CheckCircle,
  Star,
  ChevronLeft
} from 'lucide-react';

interface HomePageProps {
  navigateTo: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Evelyn",
      role: "Founder",
      company: "Thamaara",
      rating: 5,
      text: "Jayesh Uchadiya and his team have done good job in developing my website. Answered all questions very promptly. Overall very happy with their work.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Richard Thompson",
      role: "CEO",
      company: "TechStart Inc",
      rating: 5,
      text: "Exceptional service and outstanding results. The team delivered beyond our expectations and helped transform our digital presence completely.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Sarah devra",
      role: "Marketing Director",
      company: "GrowthCorp",
      rating: 5,
      text: "Professional, reliable, and innovative. Their digital marketing strategies increased our online visibility by 300% in just 6 months.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <div>
      {/* Hero Section */}
      <section data-section="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Digital Marketing Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/80 to-[#1a1a1a]/90"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#a259ff]/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#5e2ccf]/15 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#a259ff]/10 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-[#5e2ccf]/10 rounded-full animate-pulse" style={{ animationDuration: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
          <div className={`transition-all duration-1000 ${
            isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Enhanced Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#5e2ccf]/20 to-[#a259ff]/20 text-[#a259ff] rounded-full text-xs font-medium border border-[#a259ff]/40 backdrop-blur-sm shadow-lg">
                <span className="w-2 h-2 bg-[#a259ff] rounded-full mr-2 animate-pulse"></span>
                🚀 Powering Growth for 500+ Global Brands
              </span>
            </div>
            
            {/* Enhanced Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
              Scale Your Business {' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#5e2ccf] via-[#a259ff] to-[#8a47d9] bg-clip-text text-transparent">
                  Beyond Limits
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] rounded-full"></div>
              </span>
            </h1>
            
            {/* Enhanced Subheading */}
            <p className="text-lg md:text-xl text-[#d0d0d0] mb-12 max-w-2xl lg:mx-0 mx-auto leading-relaxed font-light">
              We help businesses grow their online presence through innovative digital marketing strategies, stunning web development, and data-driven solutions.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 lg:justify-start justify-center items-center mb-16">
              <button 
                onClick={() => navigateTo('letstalk')}
                className="group relative bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] text-white px-10 py-5 rounded-xl text-base font-semibold hover:from-[#4a1fa3] hover:to-[#8a47d9] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative flex items-center">
                  Get Free Consultation
                </span>
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigateTo('services')}
                className="group px-10 py-5 text-[#a259ff] font-semibold text-base hover:text-white transition-all duration-300 border-2 border-[#a259ff]/40 rounded-xl hover:border-[#a259ff] hover:bg-gradient-to-r hover:from-[#5e2ccf]/20 hover:to-[#a259ff]/20 backdrop-blur-sm"
              >
                <span className="flex items-center">
                  View Our Services
                </span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl lg:mx-0 mx-auto">
              {[
                { number: "50+", label: "Happy Clients" },
                { number: "98%", label: "Success Rate" },
                { number: "90%", label: "Avg ROI Increase" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-xl md:text-2xl font-bold text-[#a259ff] mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#d0d0d0] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
            </div>
            
            {/* Right Column - Digital Marketing Image */}
            <div className={`relative transition-all duration-1000 ${
              isVisible('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5e2ccf]/20 to-[#a259ff]/20 rounded-2xl blur-xl"></div>
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="Digital Marketing Analytics Dashboard"
                  className="relative w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl border border-[#a259ff]/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent rounded-2xl"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-[#a259ff] text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                  Live Analytics
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
                  📈 +300% Growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section data-section="services" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-[#d0d0d0] max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your brand, engage your audience, and drive sustainable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Website Development",
                description: "Cutting-edge websites built with modern frameworks, optimized for performance, and designed to convert visitors into customers.",
                features: ["Responsive Design", "Modern Tech Stack", "SEO-Friendly"],
                color: "from-[#5e2ccf] to-[#a259ff]",
                image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
              },
              {
                icon: Share2,
                title: "Social Media Marketing",
                description: "Data-driven social strategies that build authentic connections, amplify your brand voice, and generate qualified leads.",
                features: ["Campaign Strategy", "Content Creation", "Platform Management"],
                color: "from-[#5e2ccf] to-[#a259ff]",
                image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
              },
              {
                icon: Search,
                title: "SEO Optimization",
                description: "Advanced SEO techniques that boost your search visibility, drive organic traffic, and establish long-term digital authority.",
                features: ["Keyword Research", "On-Page SEO", "Analytics"],
                color: "from-[#5e2ccf] to-[#a259ff]",
                image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`group bg-[#1a1a1a] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-800 hover:border-[#a259ff]/50 overflow-hidden cursor-pointer ${
                  isVisible('services') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => navigateTo('services')}
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
                      <div key={idx} className="flex items-center text-sm text-[#d0d0d0]">
                        <CheckCircle className="w-4 h-4 text-[#a259ff] mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="text-[#a259ff] font-medium hover:text-[#8a47d9] transition-colors group-hover:translate-x-2 duration-300 flex items-center">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-1000 ${
            isVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '600ms' }}>
            <button 
              onClick={() => navigateTo('services')}
              className="bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-[#4a1fa3] hover:to-[#8a47d9] transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ChevronRight className="inline w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section data-section="stats" className="py-20 bg-gradient-to-r from-[#5e2ccf] to-[#a259ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: 500, label: "Happy Clients", suffix: "+" },
              { icon: Target, value: 1200, label: "Projects Completed", suffix: "+" },
              { icon: Award, value: 5, label: "Years Experience", suffix: "+" },
              { icon: TrendingUp, value: 98, label: "Success Rate", suffix: "%" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`text-center text-white transition-all duration-700 ${
                  isVisible('stats') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section data-section="testimonials" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-[#d0d0d0] max-w-3xl mx-auto">
              Discover how we've helped businesses like yours achieve remarkable digital transformation and measurable growth.
            </p>
          </div>

          <div className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible('testimonials') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="bg-[#1a1a1a] rounded-2xl shadow-xl p-8 md:p-12 border border-gray-800">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#a259ff] fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-[#d0d0d0] text-center mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-[#d0d0d0]">{testimonials[currentTestimonial].role}</p>
                  <p className="text-[#a259ff] font-medium">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#1a1a1a] border border-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-[#a259ff]" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#1a1a1a] border border-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-[#a259ff]" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#a259ff]' : 'bg-gray-600'
                  }`}
                />
              ))}
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-[#d0d0d0] mb-8 max-w-2xl mx-auto">
              Join 500+ successful businesses who've accelerated their growth with our proven digital strategies and innovative solutions.
            </p>
            
            <button 
              onClick={() => navigateTo('letstalk')}
              className="bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-[#4a1fa3] hover:to-[#8a47d9] transition-all duration-300 transform hover:scale-105"
            >
              Start Your Growth Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;