import React from 'react';

const Marketing_Cards = ({ Icon, Title, Description }) => {
    return (
        <div className='w-full md:w-[350px] h-[350px] bg-brand-brown p-8 flex flex-col items-start relative overflow-hidden group'>
            {/* Top aligned Icon */}
            <div className='mb-16 relative z-10'>
                <div className='relative'>
                    <Icon size={100} strokeWidth={1.5} className="text-white" />
                </div>
            </div>

            {/* Bottom aligned text */}
            <div className='flex flex-col items-start gap-2 relative z-10'>
                <h3 className='text-3xl font-bold text-white tracking-wide'>{Title}</h3>
                <p className='text-md text-white/60 font-light italic leading-relaxed'>{Description}</p>
            </div>
        </div>
    );
};

export default Marketing_Cards;