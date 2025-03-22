import Image from 'next/image'
import React from 'react'

const Section2 = () => {
    return (
        <div className="h-screen text-black flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 text">
            {/* Image Section (Left) */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72">
                <Image
                    src="/ai.png"
                    alt="Coding illustration"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>

            {/* Text Section (Right) */}
            <div className="text-center md:text-right md:max-w-lg">
                <h1 className=" text-4xl md:text-7xl font-semibold mb-4">
                    About Us
                </h1>
                <p className=" text-lg md:text-xl">
                    We make sure that your learning experience is as smooth as possible. Our team of experts are always ready to help you with any queries you may have.
                </p>
            </div>
        </div>
    )
}

export default Section2
