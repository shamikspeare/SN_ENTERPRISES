import React from 'react';
import heroShoe from '../assets/hero_shoe.png';

const Hero_Home = () => {
    return (
        <section className="min-h-[100vh] grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 py-12 gap-12 md:gap-8">
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-center md:items-start space-y-8 md:ml-16 text-center md:text-left order-2 md:order-1">
                <h1 className="text-5xl md:text-7xl font-bold text-brand-dark leading-tight">
                    Step Into <br />
                    <span className="text-brand-brown">Style & Comfort</span>
                </h1>
                <p className="text-lg text-brand-brown/80 max-w-md">
                    Discover the perfect blend of fashion and function.
                    Our latest collection brings you premium footwear designed for everyday elegance.
                </p>
                <button className="px-8 py-3 bg-brand-dark text-white font-medium rounded-full hover:bg-brand-brown transition-colors duration-300 shadow-lg">
                    Shop Now
                </button>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center items-center relative order-1 md:order-2">
                {/* Decorative Circle Background */}
                <div className="absolute w-[90%] h-[90%] bg-brand-cream/20 rounded-full -z-10 blur-3xl"></div>

                <div className="flex flex-col items-center md:mr-16 relative">
                    <img
                        src={heroShoe}
                        alt="Premium Shoe"
                        className="w-full max-w-xl object-contain drop-shadow-2xl relative z-10"
                    />
                    {/* Elliptical Shadow */}
                    <div className="w-[80%] h-8 bg-black/40 blur-2xl rounded-[100%] -mt-12 z-0"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero_Home;