import React from 'react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </footer>
  );
};

export default Footer;