import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NewArrivals_Card from './NewArrivals_Card';
import pic1 from '../assets/newarrival_1.png';
import pic2 from '../assets/newarrival_2.png';
import pic3 from '../assets/newarrival_3.png';

const NewArrivals_Home = () => {
    const newArrivals = [
        { id: 1, img: pic1, price: "₹120", title: "Urban Glide" },
        { id: 2, img: pic2, price: "₹145", title: "Forest Trek" },
        { id: 3, img: pic3, price: "₹110", title: "City Sprinter" },
        { id: 4, img: pic1, price: "₹130", title: "Night Runner" },
        { id: 5, img: pic2, price: "₹145", title: "Forest Trek 2" },
        { id: 6, img: pic3, price: "₹110", title: "City Sprinter 2" },
        { id: 7, img: pic1, price: "₹120", title: "Urban Glide 2" },
        { id: 8, img: pic2, price: "₹145", title: "Forest Trek 2" },
    ];

    const scrollContainerRef = useRef(null);
    const scrollDotsRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -330, behavior: 'smooth' });
            updateActiveIndex(-1);
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 330, behavior: 'smooth' });
            updateActiveIndex(1);
        }
    };

    // Update active index and scroll dots accordingly
    const updateActiveIndex = (direction) => {
        setActiveIndex((prev) => {
            let newIndex = prev + direction;
            if (newIndex < 0) newIndex = 0;
            if (newIndex >= newArrivals.length) newIndex = newArrivals.length - 1;

            // Scroll dots container if the active dot is out of view
            if (scrollDotsRef.current) {
                const dot = scrollDotsRef.current.children[newIndex];
                if (dot) {
                    dot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            }
            return newIndex;
        });
    };

    // Helper to scroll to specific index when dot is clicked
    const scrollToCard = (index) => {
        if (scrollContainerRef.current) {
            const scrollAmount = index * 332;
            scrollContainerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            setActiveIndex(index);
        }
    };

    return (
        <section className="w-full py-16 px-4 md:px-12">
            <h2 className="text-4xl font-bold text-center text-brand-dark mb-12 uppercase tracking-widest">
                New Arrivals
            </h2>
            <p className="text-center text-brand-dark mb-12">Explore our latest arrivals and find the perfect fit for you.</p>
            <div className="flex justify-center">
                <a href="/products">
                    <button className="text-center border border-brand-dark px-6 py-2 rounded-full text-brand-dark mb-12 cursor-pointer hover:text-brand-brown">Browse Collections</button>
                </a>
            </div>

            {/* Scrollable Container with Hidden Scrollbar */}
            <div
                ref={scrollContainerRef}
                className="flex items-center gap-8 overflow-x-auto scrollbar-hide py-4 px-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {newArrivals.map((arrival) => (
                    <div key={arrival.id} className="flex-shrink-0 snap-center">
                        <NewArrivals_Card
                            image={arrival.img}
                            price={arrival.price}
                            title={arrival.title}
                        />
                    </div>
                ))}
            </div>

            {/* Controls: Left Arrow | Scrollable Dots | Right Arrow */}
            <div className="flex justify-center items-center mt-8 space-x-6">
                {/* Left Arrow */}
                <button
                    onClick={scrollLeft}
                    className="p-1 rounded-full text-brand-brown hover:text-brand-dark hover:bg-brand-brown/10 transition-colors flex-shrink-0"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Scrollable Dots Container */}
                <div
                    ref={scrollDotsRef}
                    className="flex space-x-3 overflow-x-auto scrollbar-hide max-w-[150px] px-2 py-2 snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {newArrivals.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => scrollToCard(index)}
                            className={`flex-shrink-0 cursor-pointer transition-all duration-300 snap-center ${activeIndex === index ? 'scale-100' : 'hover:scale-110'
                                }`}
                        >
                            <div
                                className={`h-3 w-3 rounded-full transition-all duration-300 
                                ${activeIndex === index ? 'bg-brand-dark w-8' : 'bg-brand-brown/50'}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={scrollRight}
                    className="p-1 rounded-full text-brand-brown hover:text-brand-dark hover:bg-brand-brown/10 transition-colors flex-shrink-0"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default NewArrivals_Home;