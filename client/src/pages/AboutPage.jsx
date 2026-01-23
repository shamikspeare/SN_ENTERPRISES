import React from "react";

const AboutPage = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Decorative Circle - Top Right */}
            <div className="absolute -top-[400px] -right-[300px] w-[1000px] h-[1000px] bg-brand-brown rounded-full -z-10 opacity-90"></div>

            <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col items-center">

                {/* Heading - Center Aligned */}
                <h1 className="text-5xl md:text-7xl font-bold text-brand-dark mb-12 text-center uppercase tracking-wider">
                    About Us
                </h1>

                {/* Content Container - Centered on page */}
                <div className="max-w-3xl w-full">

                    {/* Paragraph Content - Left Aligned */}
                    <p className="text-lg md:text-xl text-brand-dark/90 leading-relaxed text-left font-light">
                        Welcome to SN Enterprises, where innovation meets elegance. Founded with a vision to redefine everyday styling, we have grown from a small passion project into a global destination for premium footwear. Our journey began with a simple idea: that comfort shouldn't come at the cost of style.
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br /><br />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
