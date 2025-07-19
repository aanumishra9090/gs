import React, { useEffect, useRef, useState } from 'react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  Monitor,
  Share2,
  Search,
  Smartphone,
  PenTool,
  BarChart3,
  ArrowUp,
  CheckCircle,
  Star,
  ChevronLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Linkedin,
  Instagram,
  Facebook,
  Home as HomeIcon,
  Check,
  Sparkles
} from 'lucide-react';

// Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import LetsTalkPage from './pages/LetsTalkPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage navigateTo={navigateTo} />;
      case 'services':
        return <ServicesPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage navigateTo={navigateTo} />;
      case 'letstalk':
        return <LetsTalkPage navigateTo={navigateTo} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage navigateTo={navigateTo} />;
      case 'terms-conditions':
        return <TermsConditionsPage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => navigateTo('home')}
            >
              
 <img 
  src="/influzo-logo.png" 
  alt="Influzo Media Logo" 
  className="w-10 h-10 object-contain"
/>


            
              <span className="text-xl font-bold text-white">Influzo Media</span>
            </div>
           
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigateTo('home')}
                className={`font-medium transition-colors ${
                  currentPage === 'home' ? 'text-[#a259ff]' : 'text-[#d0d0d0] hover:text-[#a259ff]'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => navigateTo('about')}
                className={`font-medium transition-colors ${
                  currentPage === 'about' ? 'text-[#a259ff]' : 'text-[#d0d0d0] hover:text-[#a259ff]'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => navigateTo('services')}
                className={`font-medium transition-colors ${
                  currentPage === 'services' ? 'text-[#a259ff]' : 'text-[#d0d0d0] hover:text-[#a259ff]'
                }`}
              >
                Our Services
              </button>
             
              <button 
                onClick={() => navigateTo('contact')}
                className={`font-medium transition-colors ${
                  currentPage === 'contact' ? 'text-[#a259ff]' : 'text-[#d0d0d0] hover:text-[#a259ff]'
                }`}
              
              >
                Contact
              </button>
              <button 
                onClick={() => navigateTo('letstalk')}
                className="bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] text-white px-6 py-2 rounded-lg hover:from-[#4a1fa3] hover:to-[#8a47d9] transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Let's Talk <ChevronRight className="inline w-4 h-4 ml-1" />
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-[#0a0a0a] border-t border-gray-800`}>
          <div className="px-4 py-2 space-y-1">
            <button 
              onClick={() => navigateTo('home')}
              className="block w-full text-left px-3 py-2 text-[#d0d0d0] hover:text-[#a259ff] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className="block w-full text-left px-3 py-2 text-[#d0d0d0] hover:text-[#a259ff] transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => navigateTo('services')}
              className="block w-full text-left px-3 py-2 text-[#d0d0d0] hover:text-[#a259ff] transition-colors"
            >
              Our Services
            </button>
            
            <button 
              onClick={() => navigateTo('contact')}
              className="block w-full text-left px-3 py-2 text-[#d0d0d0] hover:text-[#a259ff] transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => navigateTo('letstalk')}
              className="w-full mt-2 bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] text-white px-6 py-2 rounded-lg hover:from-[#4a1fa3] hover:to-[#8a47d9] transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-16 flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer navigateTo={navigateTo} />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] text-white p-3 rounded-full shadow-lg hover:from-[#4a1fa3] hover:to-[#8a47d9] transition-all duration-300 transform hover:scale-110 z-40"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;
