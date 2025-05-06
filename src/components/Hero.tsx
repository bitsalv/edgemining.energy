import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#BFDEAE]">Edge Mining:</span> 
              <br />
              maximizing 
              <br />
              energy value
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A research-driven, open-source project turning surplus energy into Bitcoin-powered digital value.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://github.com/edge-mining"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#BFDEAE] text-[#BFDEAE] font-medium px-6 py-3 rounded-md hover:bg-[#BFDEAE]/10 transition-colors inline-flex items-center justify-center"
              >
                <span>GitHub</span>
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="https://app.formbricks.com/s/cma4k1hfj0jn7vw019sizlnio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#BFDEAE] text-[#1F1F1F] font-medium px-6 py-3 rounded-md hover:bg-[#A9D39A] transition-colors inline-flex items-center justify-center"
              >
                <span>Fill the form!</span>
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;