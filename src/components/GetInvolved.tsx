import React from 'react';
import { MessageSquare, Github } from 'lucide-react';

const GetInvolved: React.FC = () => {
  return (
    <section id="get-involved" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#222222]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Get Involved</h2>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Join our growing community of developers and energy enthusiasts. 
          Together, we're building the future of energy optimization.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-[#2A2A2A] p-8 rounded-lg border border-gray-700 transform transition-all hover:scale-[1.02] hover:shadow-xl">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-10 w-10 text-[#BFDEAE] mr-4" />
              <h3 className="text-2xl font-bold">Discord</h3>
            </div>
            <p className="text-gray-300 mb-8">
              Connect with our community to discuss ideas, ask questions, and collaborate on new features.
            </p>
            <a 
              href="https://discord.gg/VQa9UY5SsS"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#BFDEAE] text-[#1F1F1F] font-medium px-6 py-3 rounded-md hover:bg-[#A9D39A] transition-colors inline-flex items-center justify-center"
            >
              Join
            </a>
          </div>
          
          <div className="bg-[#2A2A2A] p-8 rounded-lg border border-gray-700 transform transition-all hover:scale-[1.02] hover:shadow-xl">
            <div className="flex items-center mb-6">
              <Github className="h-10 w-10 text-[#BFDEAE] mr-4" />
              <h3 className="text-2xl font-bold">GitHub</h3>
            </div>
            <p className="text-gray-300 mb-8">
              Explore our codebase, contribute to development, or fork the project to create your own solution.
            </p>
            <a 
              href="https://github.com/edge-mining"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#BFDEAE] text-[#1F1F1F] font-medium px-6 py-3 rounded-md hover:bg-[#A9D39A] transition-colors inline-flex items-center justify-center"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;