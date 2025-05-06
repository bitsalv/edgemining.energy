import React from 'react';
import { Leaf, AlertTriangle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#222222]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Edge Mining</h2>
          
          <div className="mb-16">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Edge Mining is a research-driven, open-source initiative transforming surplus energy into Bitcoin-powered digital value, 
              unlocking new economic possibilities from otherwise wasted resources.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#2A2A2A] p-8 rounded-lg border border-gray-700 transform transition-transform hover:scale-[1.02]">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Leaf className="h-6 w-6 text-[#BFDEAE] mr-2" />
                Why We Exist
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Energy often goes unused during low-demand periods. Instead of selling cheaply, 
                investing in costly storage, or wasting this energy, Edge Mining converts it directly into Bitcoin, 
                creating value sustainably and intelligently.
              </p>
            </div>
            
            <div className="bg-[#2A2A2A] p-8 rounded-lg border border-gray-700 transform transition-transform hover:scale-[1.02]">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-[#BFDEAE] mr-2" />
                We're in Alpha
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Edge Mining is currently in an early, alpha stage of development. Our research-driven approach 
                is rapidly evolving, and features, performance, and reliability are continuously improving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;