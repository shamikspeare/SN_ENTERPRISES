import { useLocation, Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import NavbarButton from "./NavbarButtons";

const Navbar = () => {
    const location = useLocation();

    const links = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Product" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <div className="sticky top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 bg-brand-bg/20 backdrop-blur-sm">
            {/* Left Spacer to balance the layout and keep links centered */}
            <div className="flex-1 hidden sm:flex">
                {/* Optional: Add Logo here if needed in future */}
            </div>

            <nav className="flex justify-center space-x-2 sm:space-x-8">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className={`relative px-1 sm:px-3 py-1 text-sm sm:text-base font-medium transition-colors duration-300 group
                        ${isActive(link.href) ? "text-brand-dark" : "text-brand-brown hover:text-brand-dark"}`}
                    >
                        {link.label}
                        {/* Underline for Hover and Active */}
                        <span
                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.15rem] bg-brand-dark transition-all duration-300 ease-out
                            ${isActive(link.href) ? "w-1/2" : "w-0 group-hover:w-1/2"}`}
                        />
                    </Link>
                ))}
            </nav>

            {/* Right Side Buttons */}
            <div className="flex-1 flex items-center justify-end space-x-3">
                <NavbarButton Icon={Search} />
                <NavbarButton Icon={Heart} path="/wishlist" />
                <NavbarButton Icon={ShoppingCart} path="/cart" />
                <NavbarButton Icon={User} path="/profile" />
            </div>
        </div>
    );
};

export default Navbar;
