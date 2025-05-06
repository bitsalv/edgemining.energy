import React from 'react';
import { FileText, BookOpen } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Resources</h2>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Access our comprehensive guides and resources to get the most out of Edge Mining.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-[#262626] p-8 rounded-lg border border-gray-700 transform transition-all hover:scale-[1.02] hover:shadow-xl">
            <div className="flex items-center mb-6">
              <FileText className="h-10 w-10 text-[#BFDEAE] mr-4" />
              <h3 className="text-2xl font-bold">Documentation</h3>
            </div>
            <p className="text-gray-300 mb-8">
              Complete guides and step-by-step tutorials on integrating Edge Mining with your energy system for optimal results.
            </p>
            <a 
              href="https://github.com/edge-mining/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#BFDEAE] text-[#1F1F1F] font-medium px-6 py-3 rounded-md hover:bg-[#A9D39A] transition-colors inline-flex items-center justify-center"
            >
              View
            </a>
          </div>
          
          <div className="bg-[#262626] p-8 rounded-lg border border-gray-700 transform transition-all hover:scale-[1.02] hover:shadow-xl">
            <div className="flex items-center mb-6">
              <BookOpen className="h-10 w-10 text-[#BFDEAE] mr-4" />
              <h3 className="text-2xl font-bold">Blog</h3>
            </div>
            <p className="text-gray-300 mb-8">
              Coming Soon! Stay tuned for insights, updates, and thought leadership on energy optimization.
            </p>
            <button 
              disabled
              className="bg-gray-600 text-gray-300 font-medium px-6 py-3 rounded-md cursor-not-allowed opacity-70 inline-flex items-center justify-center"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;