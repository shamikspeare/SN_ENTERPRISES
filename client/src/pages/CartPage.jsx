import React, { useState, useEffect } from 'react';
import { Trash2, ShoppingCart, Minus, Plus } from 'lucide-react';
import pic1 from '../assets/newarrival_1.png';
import pic2 from '../assets/newarrival_2.png';
import pic3 from '../assets/newarrival_3.png';

const CartPage = () => {
    // Initial Items State
    const [cartItems, setCartItems] = useState([
        { id: 1, img: pic1, price: 120, title: "Urban Glide", units: 2 },
        { id: 2, img: pic2, price: 145, title: "Forest Trek", units: 1 },
        { id: 3, img: pic3, price: 110, title: "City Sprinter", units: 3 },
    ]);

    const [totalPrice, setTotalPrice] = useState(0);

    // Calculate Total Price whenever cart items change
    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + (item.price * item.units), 0);
        setTotalPrice(total);
    }, [cartItems]);

    // Handle Unit Increment
    const increaseUnits = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, units: item.units + 1 } : item
        ));
    };

    // Handle Unit Decrement
    const decreaseUnits = (id) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                // Prevent going below 1 (optional: could remove item if goes to 0)
                return { ...item, units: Math.max(1, item.units - 1) };
            }
            return item;
        }));
    };

    // Handle Remove Item
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen pt-8 pb-12 px-6 md:px-12 bg-transparent flex flex-col items-center">

            {/* Header */}
            <h1 className="text-4xl font-bold text-brand-dark uppercase tracking-widest text-center mb-12">
                Shopping Cart
            </h1>

            {/* Cart Table Container */}
            <div className="w-full max-w-5xl bg-white/50 overflow-hidden border border-brand-brown/10 mb-8">
                {cartItems.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            {/* Table Header */}
                            <thead className="bg-brand-cream/30 text-brand-dark uppercase text-sm tracking-wider font-bold">
                                <tr>
                                    <th className="p-6">Product</th>
                                    <th className="p-6">Price</th>
                                    <th className="p-6">Quantity</th>
                                    <th className="p-6">Total</th>
                                    <th className="p-6 text-right">Actions</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-brand-brown/10">
                                {cartItems.map((item) => (
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
                                        <td className="p-6 text-brand-brown font-medium">
                                            ₹{item.price}
                                        </td>

                                        {/* Quantity Controls */}
                                        <td className="p-6">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => decreaseUnits(item.id)}
                                                    className="p-1 rounded-full bg-brand-cream/50 text-brand-dark hover:bg-brand-dark hover:text-white transition-colors"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="font-bold text-brand-dark w-6 text-center">{item.units}</span>
                                                <button
                                                    onClick={() => increaseUnits(item.id)}
                                                    className="p-1 rounded-full bg-brand-cream/50 text-brand-dark hover:bg-brand-dark hover:text-white transition-colors"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                        </td>

                                        {/* Item Total */}
                                        <td className="p-6 font-bold text-brand-dark text-lg">
                                            ₹{item.price * item.units}
                                        </td>

                                        {/* Actions */}
                                        <td className="p-6 text-right">
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="p-2 text-brand-brown/50 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="p-16 text-center text-brand-brown/50">
                        <ShoppingCart size={48} className="mx-auto mb-4 opacity-30" />
                        <p className="text-xl">Your cart is empty.</p>
                    </div>
                )}
            </div>

            {/* Footer Summary & Checkout */}
            {cartItems.length > 0 && (
                <div className="w-full max-w-5xl flex flex-col items-end gap-6">
                    <div className="flex items-center gap-8 p-6 border border-brand-brown/10">
                        <span className="text-brand-brown font-medium uppercase tracking-wide">Total Amount:</span>
                        <span className="text-3xl font-bold text-brand-dark">₹{totalPrice}</span>
                    </div>

                    <button className="bg-brand-dark text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-brand-brown transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3">
                        <ShoppingCart size={24} />
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;