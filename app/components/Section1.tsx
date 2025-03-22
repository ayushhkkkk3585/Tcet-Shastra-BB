import Image from 'next/image'
import React from 'react'
import { ChevronDown } from 'lucide-react';

const Section1 = () => {
    return (
        <div className="h-screen bg-[#961424] flex flex-col text">
            {/* Navbar */}
            <nav className="px-6 py-2 flex items-center justify-between font-medium">
                {/* Logo */}
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                {/* Navigation Items */}
                <div className="flex items-center space-x-4">
                    <p className="text-white text-base md:text-lg">What are we?</p>
                    <button className="bg-white text-[#961424] px-4 py-2 rounded-full text-sm md:text-base">
                        Socials
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-grow px-6 md:px-20 text-center md:text-left">
                {/* Text Content */}
                <div className="mb-6 md:mb-0">
                    <h1 className="text-white text-4xl md:text-8xl  font-semibold mb-2">
                        Beyond Basics
                    </h1>
                    <p className="text-white text-lg md:text-xl">
                        by TCET Shastra Coding Club
                    </p>
                </div>

                {/* Image Section */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72">
                    <Image
                        src="/ai.png"
                        alt="Coding illustration"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center items-center mb-6">
                <ChevronDown color="white" size={36} />
            </div>
        </div>
    );
};

export default Section1;
