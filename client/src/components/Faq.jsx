import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
    const questions = [
        {
            id: 1,
            question: "What is your return policy?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 2,
            question: "How long does shipping take?",
            answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 3,
            question: "Do you ship internationally?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 4,
            question: "How can I track my order?",
            answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full py-16 px-4 md:px-12">
            <h2 className="text-4xl font-bold text-center text-brand-dark mb-12 uppercase tracking-widest">
                Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto flex flex-col gap-4">
                {questions.map((q, index) => (
                    <div
                        key={q.id}
                        className="bg-brand-brown overflow-hidden transition-all duration-300"
                    >
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
                        >
                            <span className="text-lg text-white tracking-wide">
                                {q.question}
                            </span>
                            {activeIndex === index ? (
                                <ChevronUp className="text-white flex-shrink-0" size={24} />
                            ) : (
                                <ChevronDown className="text-white flex-shrink-0" size={24} />
                            )}
                        </button>

                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="p-6 pt-0 text-white font-light leading-relaxed border-t border-white/10 mt-4">
                                {q.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;