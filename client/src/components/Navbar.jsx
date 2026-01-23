import { useLocation, Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import NavbarButton from "./NavbarButtons";

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

    // Close menu when route changes
    React.useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <div className="sticky top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-brown/10">
            {/* Logo / Brand - Visible on all screens */}
            <div className="flex-1 flex items-center">
                {/* Placeholder for Logo if needed, or just spacers */}
                <Link to="/" className="text-xl font-bold tracking-widest text-brand-dark md:hidden">
                    SN
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-center space-x-8">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className={`relative px-3 py-1 text-base font-medium transition-colors duration-300 group
                        ${isActive(link.href) ? "text-brand-dark" : "text-brand-brown hover:text-brand-dark"}`}
                    >
                        {link.label}
                        <span
                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.15rem] bg-brand-dark transition-all duration-300 ease-out
                            ${isActive(link.href) ? "w-1/2" : "w-0 group-hover:w-1/2"}`}
                        />
                    </Link>
                ))}
            </nav>

            {/* Right Side Buttons & Mobile Toggle */}
            <div className="flex-1 flex items-center justify-end space-x-3">
                <div className="hidden sm:flex items-center space-x-3">
                    <NavbarButton Icon={Search} />
                    <NavbarButton Icon={Heart} path="/wishlist" />
                    <NavbarButton Icon={ShoppingCart} path="/cart" />
                    <NavbarButton Icon={User} path="/profile" />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-brand-dark focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-5 flex flex-col justify-between relative">
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-brand-bg z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <nav className="flex flex-col space-y-6 text-center">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`text-2xl font-medium transition-colors duration-300
                            ${isActive(link.href) ? "text-brand-dark" : "text-brand-brown/70 hover:text-brand-dark"}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-12 flex justify-center space-x-6">
                    <NavbarButton Icon={Search} />
                    <NavbarButton Icon={Heart} path="/wishlist" />
                    <NavbarButton Icon={ShoppingCart} path="/cart" />
                    <NavbarButton Icon={User} path="/profile" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
