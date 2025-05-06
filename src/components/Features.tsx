import React from 'react';
import { Cpu, Thermometer, Scale, Code } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="h-8 w-8 text-[#BFDEAE]" />,
      title: "Smart automation",
      description: "Intelligent automation based on energy availability to maximize efficiency"
    },
    {
      icon: <Thermometer className="h-8 w-8 text-[#BFDEAE]" />,
      title: "Heat recovery",
      description: "Advanced heat recovery systems for practical applications"
    },
    {
      icon: <Scale className="h-8 w-8 text-[#BFDEAE]" />,
      title: "Versatile sizing",
      description: "Designed for small to medium energy installations"
    },
    {
      icon: <Code className="h-8 w-8 text-[#BFDEAE]" />,
      title: "100% open-source",
      description: "Fully open-source with no licensing fees"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">Key Features</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#262626] p-8 rounded-lg border border-gray-700 flex flex-col items-center transform transition-all hover:scale-105 hover:bg-[#2A2A2A]"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;