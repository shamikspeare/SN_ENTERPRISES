import React from 'react';
import { Link } from 'react-router-dom';

const NavbarButton = ({ Icon, path }) => {
    const ButtonContent = (
        <button
            className={`p-2 rounded-full flex items-center justify-center transition-all duration-300 
            bg-brand-dark text-white hover:bg-brand-brown hover:scale-105 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-brand-brown/50`}
        >
            {Icon && <Icon size={20} strokeWidth={2} />}
        </button>
    );

    if (path) {
        return (
            <Link to={path}>
                {ButtonContent}
            </Link>
        );
    }

    return ButtonContent;
};

export default NavbarButton;
