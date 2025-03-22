'use client';

import HoverImageWithTooltip from './HoverImageWithTooltip'; // adjust path as needed

const Section4 = () => {
  const sections = [
    {
      imageSrc: '/ai.png',
      tooltipText: 'Rahul Here',
      name: 'Rahul Singh',
      description:
        'I’m Rishabh, a designer-turned-developer who’s obsessed with building products that actually make an impact. I dove into code to bring those ideas to life. Now, I focus on crafting seamless user experiences with Next.js, React, and Web3 technologies.',
      bg: 'bg-white',
      text: 'text-black',
      z: 'z-10',
    },
    {
      imageSrc: '/ai.png',
      tooltipText: 'Amit Here',
      name: 'Amit Suthar',
      description:
        'I’m Rishabh, a designer-turned-developer who’s obsessed with building products that actually make an impact...',
      bg: 'bg-[#961424]',
      text: 'text-white',
      z: 'z-20',
    },
    {
      imageSrc: '/ai.png',
      tooltipText: 'Rishabh Here',
      name: 'Rishabh Pandey',
      description:
        'I’m Rishabh, a designer-turned-developer who’s obsessed with building products that actually make an impact...',
      bg: 'bg-white',
      text: 'text-black',
      z: 'z-30',
    },
  ];

  return (
    <div className="relative h-[300vh]">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`sticky top-0 h-screen flex items-center justify-center px-6 md:px-20 text ${section.bg} ${section.text} ${section.z}`}
        >
          <HoverImageWithTooltip
            imageSrc={section.imageSrc}
            tooltipText={section.tooltipText}
            name={section.name}
            description={section.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Section4;
