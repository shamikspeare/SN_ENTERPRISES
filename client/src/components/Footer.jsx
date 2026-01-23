import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='w-full bg-brand-dark text-white p-6'>
            {/* Row 1 */}
            <div className='flex flex-col md:flex-row justify-between items-start gap-8 mb-12 border-b border-brand-brown/30 pb-8'>

                {/* Column 1: Brand Info */}
                <div className='max-w-xs'>
                    <h2 className='text-xl font-bold mb-4 tracking-wider'>SN ENTERPRISES</h2>
                    <p className='text-white/50 mb-2 leading-relaxed text-sm '>
                        Crafting innovation with excellence. We bring you premium quality products designed for your modern lifestyle.
                    </p>
                    <Link to="/about">
                        <button className='text-brand-light underline text-sm text-white/50 '>
                            Read More
                        </button>
                    </Link>
                </div>

                {/* Column 2: Links Grid (4 Sub-columns) */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 w-full md:w-auto'>
                    {/* Discover */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-bold text-brand-light uppercase tracking-widest'>Discover</h3>
                        <div className='flex flex-col gap-2 text-sm text-white/50'>
                            <Link to="/products" className='hover:text-white transition-colors'>New Arrivals</Link>
                            <Link to="/products" className='hover:text-white transition-colors'>Best Sellers</Link>
                            <Link to="/products" className='hover:text-white transition-colors'>Featured</Link>
                        </div>
                    </div>

                    {/* About */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-bold text-brand-light uppercase tracking-widest'>About</h3>
                        <div className='flex flex-col gap-2 text-sm text-white/50'>
                            <Link to="/about" className='hover:text-white transition-colors'>Our Story</Link>
                            <Link to="/about" className='hover:text-white transition-colors'>Careers</Link>
                            <Link to="/contact" className='hover:text-white transition-colors'>Contact Us</Link>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-bold text-brand-light uppercase tracking-widest'>Resources</h3>
                        <div className='flex flex-col gap-2 text-sm text-white/50'>
                            <span className='cursor-pointer hover:text-white transition-colors'>FAQ</span>
                            <span className='cursor-pointer hover:text-white transition-colors'>Privacy Policy</span>
                            <span className='cursor-pointer hover:text-white transition-colors'>Terms of Service</span>
                        </div>
                    </div>

                    {/* Social */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-bold text-brand-light uppercase tracking-widest'>Social</h3>
                        <div className='flex flex-col gap-2 text-sm text-white/50'>
                            <a href="#" className='hover:text-white transition-colors'>Instagram</a>
                            <a href="#" className='hover:text-white transition-colors'>Twitter</a>
                            <a href="#" className='hover:text-white transition-colors'>LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2: Tagline */}
            <div className='text-center mb-6'>
                <p className='text-white/50 text-sm tracking-wide'>
                    Elevating your everyday experience with style and substance.
                </p>
            </div>

            {/* Row 3: Copyright */}
            <div className='text-center pt-6 border-t border-brand-brown/30'>
                <p className='text-brand-light/40 text-xs'>
                    &copy; {new Date().getFullYear()} SN Enterprises. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;