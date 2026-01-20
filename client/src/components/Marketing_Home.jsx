import React from 'react'
import Marketing_Cards from './Marketing_Cards'
import { Van, ShoppingCart, Repeat, Clock } from 'lucide-react';


const Marketing_Home = () => {
    return (
        <div className='w-full py-16 px-4 md:px-12'>
            <h2 className='text-4xl font-bold text-center text-brand-dark mb-12 uppercase tracking-widest'>Why Choose Us ?</h2>
            <div className='flex gap-12 justify-between items-center p-8'>

                <Marketing_Cards Icon={Van} Title="Free Shipping" Description=" Free shipping on orders over $100 Free shipping on orders over $100" />
                <Marketing_Cards Icon={ShoppingCart} Title="Easy to Shop" Description="Free shipping on orders over $100 Free shipping on orders over $100" />
                <Marketing_Cards Icon={Repeat} Title="Hastle Free Return Policy" Description="Free shipping on orders over $100 Free shipping on orders over $100" />
                <Marketing_Cards Icon={Clock} Title="24/7 Support" Description="Free shipping on orders over $100 Free shipping on orders over $100" />


            </div>
        </div>
    )
}

export default Marketing_Home