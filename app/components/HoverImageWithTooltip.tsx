'use client';

import { useState, MouseEvent } from 'react';
import Image from 'next/image';

interface HoverImageWithTooltipProps {
  imageSrc: string;
  tooltipText: string;
  name: string;
  description: string;
}

const HoverImageWithTooltip: React.FC<HoverImageWithTooltipProps> = ({
  imageSrc,
  tooltipText,
  name,
  description,
}) => {
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-12 w-full">
      {/* Image Section */}
      <div
        className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showTooltip && (
          <div
            className="absolute bg-black text-white text-xs px-2 py-1 rounded pointer-events-none z-10 transition duration-100"
            style={{
              top: tooltipPos.y,
              left: tooltipPos.x,
              transform: 'translate(10px, -100%)',
              whiteSpace: 'nowrap',
            }}
          >
            {tooltipText}
          </div>
        )}
        <Image src={imageSrc} alt={name} fill style={{ objectFit: 'contain' }} />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left md:max-w-lg">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">{name}</h1>
        <p className="text-lg md:text-xl">{description}</p>
      </div>
    </div>
  );
};

export default HoverImageWithTooltip;
