import React from 'react';

const NavbarButton = ({ Icon }) => {
    return (
        <button
            className={`p-2 rounded-full flex items-center justify-center transition-all duration-300 
            bg-brand-dark text-brand-light text-white hover:bg-brand-brown
            focus:outline-none focus:ring-2 focus:ring-brand-muted `}
        >
            {Icon && <Icon size={20} strokeWidth={2} />}
        </button>
    );
};

export default NavbarButton;
