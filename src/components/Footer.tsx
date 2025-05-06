import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191919] py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex space-x-8 mb-8">
            <a href="#about" className="text-gray-400 hover:text-[#BFDEAE] transition-colors">
              About
            </a>
            <a href="https://discord.gg/VQa9UY5SsS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#BFDEAE] transition-colors">
              Discord
            </a>
            <a href="https://github.com/edge-mining/docs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#BFDEAE] transition-colors">
              Docs
            </a>
            <a href="https://github.com/edge-mining" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#BFDEAE] transition-colors">
              GitHub
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-500">
              FOSS project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;