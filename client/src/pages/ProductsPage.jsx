import React, { useState, useMemo } from "react";
import { Search, ArrowUpDown, ShoppingCart, Heart } from "lucide-react";
import pic1 from '../assets/newarrival_1.png';
import pic2 from '../assets/newarrival_2.png';
import pic3 from '../assets/newarrival_3.png';

const ProductsPage = () => {
    const allProducts = [
        { id: 1, img: pic1, price: "₹120", title: "Urban Glide" },
        { id: 2, img: pic2, price: "₹145", title: "Forest Trek" },
        { id: 3, img: pic3, price: "₹110", title: "City Sprinter" },
        { id: 4, img: pic1, price: "₹130", title: "Night Runner" },
        { id: 5, img: pic2, price: "₹145", title: "Forest Trek 2" },
        { id: 6, img: pic3, price: "₹110", title: "City Sprinter 2" },
        { id: 7, img: pic1, price: "₹120", title: "Urban Glide 2" },
        { id: 9, img: pic2, price: "₹145", title: "Forest Trek 2" },
        { id: 10, img: pic1, price: "₹120", title: "Urban Glide" },
        { id: 11, img: pic2, price: "₹145", title: "Forest Trek" },
        { id: 12, img: pic3, price: "₹110", title: "City Sprinter" },
        { id: 13, img: pic1, price: "₹130", title: "Night Runner" },
        { id: 14, img: pic2, price: "₹145", title: "Forest Trek 2" },
        { id: 15, img: pic3, price: "₹110", title: "City Sprinter 2" },
        { id: 16, img: pic1, price: "₹120", title: "Urban Glide 2" },
        { id: 17, img: pic2, price: "₹145", title: "Forest Trek 2" },
        { id: 18, img: pic1, price: "₹120", title: "Urban Glide" },
        { id: 19, img: pic2, price: "₹145", title: "Forest Trek" },
        { id: 20, img: pic3, price: "₹110", title: "City Sprinter" },
        { id: 21, img: pic1, price: "₹130", title: "Night Runner" },
        { id: 22, img: pic2, price: "₹145", title: "Forest Trek 2" },
        { id: 23, img: pic3, price: "₹110", title: "City Sprinter 2" },
        { id: 24, img: pic1, price: "₹120", title: "Urban Glide 2" },
        { id: 25, img: pic2, price: "₹145", title: "Forest Trek 2" },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const filteredAndSortedProducts = useMemo(() => {
        let result = [...allProducts];

        if (searchTerm) {
            result = result.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (sortOrder) {
            result.sort((a, b) => {
                const priceA = parseInt(a.price.replace(/[^0-9]/g, ''), 10);
                const priceB = parseInt(b.price.replace(/[^0-9]/g, ''), 10);
                return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
            });
        }

        return result;
    }, [searchTerm, sortOrder, allProducts]);

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 bg-transparent">
            {/* Header: Search & Sort */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <h1 className="text-4xl font-bold text-brand-dark uppercase tracking-widest text-center md:text-left">
                    All Products
                </h1>

                <div className="flex gap-4 w-full md:w-auto">
                    {/* Search Bar */}
                    <div className="relative flex-1 md:flex-none">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-brown" size={20} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full md:w-64 pl-10 pr-4 py-2 bg-brand-cream/30 border border-brand-brown/20 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-brown/50 text-brand-dark placeholder-brand-brown/50"
                        />
                    </div>

                    {/* Sort Button with Click Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="flex items-center gap-2 px-4 py-2 bg-brand-cream/30 border border-brand-brown/20 rounded-full text-brand-dark transition-colors"
                        >
                            <ArrowUpDown size={18} />
                            <span className="hidden sm:inline">Sort</span>
                        </button>
                        {/* Dropdown */}
                        {isSortOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-xl overflow-hidden z-20 border border-gray-100">
                                <button
                                    onClick={() => { setSortOrder("asc"); setIsSortOpen(false); }}
                                    className={`w-full text-left px-4 py-3 hover:bg-brand-cream/20 text-brand-dark text-sm ${sortOrder === 'asc' ? 'bg-brand-cream/30 font-bold' : ''}`}
                                >
                                    Price: Low to High
                                </button>
                                <button
                                    onClick={() => { setSortOrder("desc"); setIsSortOpen(false); }}
                                    className={`w-full text-left px-4 py-3 hover:bg-brand-cream/20 text-brand-dark text-sm ${sortOrder === 'desc' ? 'bg-brand-cream/30 font-bold' : ''}`}
                                >
                                    Price: High to Low
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredAndSortedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col items-center relative group"
                    >
                        {/* Image Container with Wishlist Button Overlay */}
                        <div className="w-full h-64 mb-4 flex items-center justify-center p-2 relative">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-full object-contain"
                            />
                            {/* Wishlist Button - Top Right Corner */}
                            <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full text-brand-brown hover:text-red-500 hover:bg-white transition-colors shadow-sm opacity-0 group-hover:opacity-100">
                                <Heart size={18} />
                            </button>
                        </div>

                        {/* Minimal Info */}
                        <div className="text-center w-full mb-3">
                            <h3 className="font-semibold text-brand-dark text-base">{product.title}</h3>
                            <p className="text-brand-brown font-bold text-lg">{product.price}</p>
                        </div>

                        {/* Centered Add to Cart Button */}
                        <button className="w-1/2 py-2 bg-green-600/80 hover:bg-green-500 text-white rounded-full flex items-center justify-center gap-2 hover:bg-brand-brown transition-colors text-sm shadow-md">
                            <ShoppingCart size={16} />
                            Add
                        </button>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredAndSortedProducts.length === 0 && (
                <div className="text-center py-20 text-brand-brown/50">
                    <p className="text-xl">No products found matching "{searchTerm}"</p>
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
