import React from 'react';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import pic1 from '../assets/newarrival_1.png';
import pic2 from '../assets/newarrival_2.png';
import pic3 from '../assets/newarrival_3.png';

const WishlistPage = () => {

    const Wishlist = [
        { id: 1, img: pic1, price: "₹120", title: "Urban Glide", status: "In Stock", units: 42 },
        { id: 2, img: pic2, price: "₹145", title: "Forest Trek", status: "Out of Stock", units: 20 },
        { id: 3, img: pic3, price: "₹110", title: "City Sprinter", status: "In Stock", units: 13 },
    ];

    return (
        <div className="min-h-screen pt-4 pb-12 px-6 md:px-12 bg-transparent flex flex-col items-center">

            {/* Header Section */}
            <div className="flex flex-col items-center mb-12">
                <Heart size={48} className="text-brand-brown mb-4" />
                <h1 className="text-4xl font-bold text-brand-dark uppercase tracking-widest text-center">
                    Wishlist
                </h1>
            </div>

            {/* Wishlist Table Container */}
            <div className="w-full max-w-5xl bg-white/50 overflow-hidden border border-brand-brown/10">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        {/* Table Header */}
                        <thead className="bg-brand-cream/30 text-brand-dark uppercase text-sm tracking-wider font-bold">
                            <tr>
                                <th className="p-6">Product</th>
                                <th className="p-6">Price</th>
                                <th className="p-6">Units</th>
                                <th className="p-6">Status</th>
                                <th className="p-6 text-right">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-brand-brown/10">
                            {Wishlist.map((item) => (
                                <tr key={item.id} className="hover:bg-brand-cream/10 transition-colors duration-200">
                                    {/* Product Info */}
                                    <td className="p-6">
                                        <div className="flex items-center gap-6">
                                            <div className="w-20 h-20 bg-brand-cream/20 rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                                                <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
                                            </div>
                                            <h3 className="font-semibold text-lg text-brand-dark">{item.title}</h3>
                                        </div>
                                    </td>

                                    {/* Price */}
                                    <td className="p-6 font-bold text-brand-brown text-lg">
                                        {item.price}
                                    </td>

                                    {/* Units */}
                                    <td className="p-6 text-brand-dark font-medium">
                                        {item.units}x
                                    </td>

                                    {/* Status */}
                                    <td className="p-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${item.status === 'In Stock'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="p-6">
                                        <div className="flex items-center justify-end gap-3">
                                            <button
                                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-bold shadow-sm"
                                                disabled={item.status === 'Out of Stock'}
                                            >
                                                <ShoppingCart size={18} />
                                                <span className="hidden sm:inline">Add to Cart</span>
                                            </button>

                                            <button className="p-2 text-brand-brown/50 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {Wishlist.length === 0 && (
                    <div className="p-12 text-center text-brand-brown/50">
                        <p className="text-xl">Your wishlist is currently empty.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistPage;