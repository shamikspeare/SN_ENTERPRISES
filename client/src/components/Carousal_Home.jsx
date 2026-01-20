import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pic1 from '../assets/carousal_1.png';
import pic2 from '../assets/carousal_2.png';
import pic3 from '../assets/carousal_3.png';

const Carousal_Home = () => {
    const slides = [pic1, pic2, pic3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Auto-scroll functionality
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="w-full relative">

            {/* Full Width Background Image */}
            <div
                style={{ backgroundImage: `url(${slides[currentIndex]})` }}
                className="w-full h-[600px] bg-center bg-cover bg-no-repeat duration-500"
            ></div>

            {/* Controls Container: Left Arrow | Dots | Right Arrow */}
            <div className="flex justify-center items-center py-6 space-x-6">

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="p-1 rounded-full text-brand-brown hover:text-brand-dark hover:bg-brand-brown/10 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Dots */}
                <div className="flex space-x-3">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? 'scale-125' : 'hover:scale-110'
                                }`}
                        >
                            <div
                                className={`h-3 w-3 rounded-full transition-all duration-300 
                                ${currentIndex === slideIndex ? 'bg-brand-dark w-8' : 'bg-brand-brown/50'}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="p-1 rounded-full text-brand-brown hover:text-brand-dark hover:bg-brand-brown/10 transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default Carousal_Home;