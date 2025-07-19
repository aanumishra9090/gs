import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Portfolio = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "PARDA SANSAR",
      subtitle: "curtains and more",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "UGC CREATION", "META ADS"],
      bgColor: "bg-gradient-to-br from-amber-100 to-amber-200"
    },
    {
      id: 2,
      title: "SOBHAGYA",
      subtitle: "WEBSITE DEVELOPMENT",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["WEBSITE DEVELOPMENT", "SEO OPTIMIZATION"],
      bgColor: "bg-gradient-to-br from-teal-400 to-teal-600"
    },
    {
      id: 3,
      title: "EVENTORA",
      subtitle: "EVENT MADE EASY",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "UGC CREATION", "META ADS"],
      bgColor: "bg-gradient-to-br from-purple-600 to-purple-800"
    },
    {
      id: 4,
      title: "Reeble",
      subtitle: "Welcome to the refurbished revolutionary World",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "BRAND STRATEGY"],
      bgColor: "bg-gradient-to-br from-gray-800 to-black"
    },
    {
      id: 5,
      title: "ANTAH SUKHAM",
      subtitle: "Website Development",
      image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["WEBSITE DEVELOPMENT", "DIGITAL STRATEGY"],
      bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      id: 6,
      title: "Super Polymers",
      subtitle: "PIONEERING MANUFACTURER AND SUPPLIER",
      image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["WEBSITE DEVELOPMENT", "B2B MARKETING"],
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      id: 7,
      title: "RxOne",
      subtitle: "A HealthCare Platform",
      image: "https://images.pexels.com/photos/4164512/pexels-photo-4164512.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "HEALTHCARE"],
      bgColor: "bg-gradient-to-br from-cyan-400 to-teal-500"
    },
    {
      id: 8,
      title: "naturals",
      subtitle: "BHOPAL CHUNABHATTI",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "LEAD GENERATION"],
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      id: 9,
      title: "ARCACIA",
      subtitle: "carrying out excellence",
      image: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "LEAD GENERATION"],
      bgColor: "bg-gradient-to-br from-gray-200 to-gray-400"
    },
    {
      id: 10,
      title: "Bhopal Properties Bazaar",
      subtitle: "BHOPAL",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "REAL ESTATE"],
      bgColor: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      id: 11,
      title: "HIGHWAY K'TCHEN",
      subtitle: "Social Media Marketing",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "RESTAURANT"],
      bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
    },
    {
      id: 12,
      title: "Preet Kitchen",
      subtitle: "Cloud Kitchen and Tiffin Centre",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "LEAD GENERATION"],
      bgColor: "bg-gradient-to-br from-pink-400 to-red-500"
    },
    {
      id: 13,
      title: "SENYLO",
      subtitle: "FINTECH",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "FINTECH"],
      bgColor: "bg-gradient-to-br from-gray-900 to-black"
    },
    {
      id: 14,
      title: "SYH",
      subtitle: "SHAPE YOUR HEALTH",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["WEBSITE DEVELOPMENT", "SOCIAL MEDIA MARKETING", "LEAD GENERATION"],
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      id: 15,
      title: "MyntraDeals",
      subtitle: "E COMMERCE ONLINE STORE",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "LEAD GENERATION"],
      bgColor: "bg-gradient-to-br from-gray-700 to-black"
    },
    {
      id: 16,
      title: "meraix",
      subtitle: "Digital Innovation",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "TECH"],
      bgColor: "bg-gradient-to-br from-blue-800 to-blue-900"
    },
    {
      id: 17,
      title: "Badri Group",
      subtitle: "From Trash to TREASURE!",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["WEBSITE DEVELOPMENT", "LOGO CREATION", "LINKEDIN"],
      bgColor: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      id: 18,
      title: "TOURUNCLE",
      subtitle: "Travel Made Simple",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "UGC CREATION", "META ADS", "WEBSITE"],
      bgColor: "bg-gradient-to-br from-gray-300 to-gray-500"
    },
    {
      id: 19,
      title: "Girraj ji",
      subtitle: "LIGHTS",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SOCIAL MEDIA MARKETING", "UGC CREATION", "META ADS"],
      bgColor: "bg-gradient-to-br from-amber-600 to-orange-700"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#0a0a0a]">
      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-[#a259ff] hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-[#d0d0d0] max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses across various industries achieve remarkable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project) => (
              <div 
                key={project.id}
                className={`${project.bgColor} rounded-2xl p-6 relative overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl`}
              >
                {/* Content */}
                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm font-medium drop-shadow">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="relative z-10 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Device Mockup */}
                <div className="relative z-10 flex justify-end">
                  <div className="w-48 h-60 bg-white rounded-lg shadow-xl overflow-hidden transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Portfolio Impact</h2>
            <p className="text-xl text-[#d0d0d0] max-w-2xl mx-auto">
              Our portfolio represents millions in revenue generated and thousands of satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "250+", label: "Projects Completed" },
              { value: "$10M+", label: "Revenue Generated" },
              { value: "150+", label: "Happy Clients" },
              { value: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-[#d0d0d0]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#5e2ccf] to-[#a259ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results and join our portfolio of successful projects.
          </p>
          <Link 
            to="/lets-talk"
            className="inline-block bg-white text-[#a259ff] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            START YOUR PROJECT
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;