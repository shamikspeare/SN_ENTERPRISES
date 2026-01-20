import React from 'react';

const NewArrivals_Card = ({ image, price, title }) => {
    return (
        <div className="w-[300px] h-[400px] bg-brand-cream/20 p-4 flex flex-col items-center justify-between">

            {/* Image Container */}
            <div className="w-full h-[60%] overflow-hidden flex items-center justify-center mb-4">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center w-full gap-3">
                <h3 className="text-lg font-semibold text-brand-dark">{title}</h3>
                <p className="text-xl font-bold text-brand-brown">{price}</p>

                {/* Buy Button */}
                <button className="w-1/2 py-2 bg-brand-dark text-white font-medium rounded-full hover:bg-brand-brown transition-colors">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default NewArrivals_Card;
