import React, { useState } from 'react';
import { User, MapPin, Mail, Phone, Edit2, Package, Clock, CheckCircle } from 'lucide-react';
import pic1 from '../assets/newarrival_1.png';
import pic2 from '../assets/newarrival_2.png';

const ProfilePage = () => {
    // Mock User Data
    const [userInfo] = useState({
        name: "john doe",
        email: "john@example.com",
        phone: "+91 98765 43210",
        address: "123, Innovation Tower, Tech Park, Bangalore, India - 560001"
    });

    // Mock Order Data
    const currentOrders = [
        {
            id: "ORD-2026-001",
            date: "Jan 18, 2026",
            status: "Out for Delivery",
            total: "₹265",
            items: [
                { name: "Urban Glide", qty: 2, img: pic1 },
                { name: "Forest Trek", qty: 1, img: pic2 }
            ]
        }
    ];

    const pastOrders = [
        {
            id: "ORD-2025-884",
            date: "Dec 25, 2025",
            status: "Delivered",
            total: "₹120",
            items: [
                { name: "Urban Glide", qty: 1, img: pic1 }
            ]
        },
        {
            id: "ORD-2025-756",
            date: "Nov 10, 2025",
            status: "Delivered",
            total: "₹450",
            items: [
                { name: "Forest Trek", qty: 3, img: pic2 }
            ]
        }
    ];

    const [activeTab, setActiveTab] = useState('current');

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 bg-transparent flex flex-col items-center gap-12">

            <h1 className="text-4xl font-bold text-brand-dark uppercase tracking-widest text-center">
                My Profile
            </h1>

            {/* User Info Card - No Shadow */}
            <div className="w-full max-w-4xl bg-white border border-brand-brown/20 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center gap-4 border-b border-brand-brown/10 pb-4">
                        <div className="p-3 bg-brand-cream/30 rounded-full text-brand-dark">
                            <User size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-brand-dark">{userInfo.name}</h2>
                            <p className="text-brand-brown/70 text-sm">Member since 2024</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-2">
                        <div className="flex items-center gap-3 text-brand-dark/80">
                            <Mail size={18} className="text-brand-brown" />
                            <span>{userInfo.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-brand-dark/80">
                            <Phone size={18} className="text-brand-brown" />
                            <span>{userInfo.phone}</span>
                        </div>
                        <div className="flex items-start gap-3 text-brand-dark/80 md:col-span-2">
                            <MapPin size={18} className="text-brand-brown mt-1 flex-shrink-0" />
                            <span>{userInfo.address}</span>
                        </div>
                    </div>
                </div>

                <button className="flex items-center gap-2 px-6 py-2 border border-brand-dark text-brand-dark rounded-full hover:bg-brand-dark hover:text-white transition-colors self-start md:self-center flex-shrink-0">
                    <Edit2 size={16} />
                    <span>Edit Info</span>
                </button>
            </div>

            {/* Orders Section */}
            <div className="w-full max-w-4xl">
                {/* Tabs */}
                <div className="flex gap-8 mb-8 border-b border-brand-brown/20 pb-1">
                    <button
                        onClick={() => setActiveTab('current')}
                        className={`text-lg font-bold pb-2 px-2 transition-all relative ${activeTab === 'current'
                            ? 'text-brand-dark'
                            : 'text-brand-brown/50 hover:text-brand-brown'
                            }`}
                    >
                        Current Orders
                        {activeTab === 'current' && (
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-dark"></div>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('past')}
                        className={`text-lg font-bold pb-2 px-2 transition-all relative ${activeTab === 'past'
                            ? 'text-brand-dark'
                            : 'text-brand-brown/50 hover:text-brand-brown'
                            }`}
                    >
                        Past Orders
                        {activeTab === 'past' && (
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-dark"></div>
                        )}
                    </button>
                </div>

                {/* Orders List */}
                <div className="flex flex-col gap-6">
                    {(activeTab === 'current' ? currentOrders : pastOrders).length > 0 ? (
                        (activeTab === 'current' ? currentOrders : pastOrders).map((order) => (
                            <div key={order.id} className="bg-white border border-brand-brown/10 rounded-xl p-6 hover:border-brand-brown/30 transition-colors">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4 border-b border-brand-brown/10 pb-4">
                                    <div>
                                        <p className="text-xs text-brand-brown font-bold uppercase tracking-wider mb-1">Order ID</p>
                                        <p className="font-semibold text-brand-dark">{order.id}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-brown font-bold uppercase tracking-wider mb-1">Date</p>
                                        <p className="text-brand-dark">{order.date}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-brown font-bold uppercase tracking-wider mb-1">Total</p>
                                        <p className="font-bold text-brand-dark text-lg">{order.total}</p>
                                    </div>
                                    <div className={`px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2 ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                        }`}>
                                        {order.status === 'Delivered' ? <CheckCircle size={14} /> : <Clock size={14} />}
                                        {order.status}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-sm font-bold text-brand-brown/70 uppercase">Items</p>
                                    {order.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-brand-cream/20 rounded p-1 flex items-center justify-center">
                                                <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-brand-dark">{item.name}</p>
                                                <p className="text-sm text-brand-brown">Qty: {item.qty}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 text-brand-brown/50 bg-white/50 border border-brand-brown/10 rounded-xl">
                            <Package size={48} className="mx-auto mb-4 opacity-30" />
                            <p>No orders found in this section.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;