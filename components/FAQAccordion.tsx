'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 max-w-4xl mx-auto ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-sm transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-card-dark border-white/20 shadow-md'
                : 'bg-true-black/40 border-white/10 hover:border-white/20'
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-true-black"
              aria-expanded={isOpen}
            >
              <span className="text-lg md:text-xl font-heading text-white tracking-wide">
                {item.question}
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border transition-colors ${
                  isOpen
                    ? 'border-crimson bg-crimson/20 text-crimson'
                    : 'border-white/20 text-gray-400'
                }`}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-gray-300 font-light text-base leading-relaxed border-t border-white/5">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
