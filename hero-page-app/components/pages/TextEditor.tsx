'use client'
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TextEditor = () => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const textareaRef = useRef(null);

  const placeholders = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    'Lorem ipsum dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore',
    'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleKeyDown = (e : any) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      setText(placeholders[currentPlaceholderIndex]);
    } else if (e.key === 'Enter' && !e.shiftKey && text.trim()) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log('Submitted text:', text);
    setText('');
  };

  return (
    <div className="mt-10 flex justify-center w-full px-6 md:px-16 lg:px-24 relative z-20">
      <div className="w-full md:w-2/3 lg:w-3/4 relative">
        <div 
          className={`
            relative bg-[#121826] rounded-xl p-[2px] transition-all duration-300
            ${isFocused 
              ? 'bg-gradient-to-r from-[#FF7750] to-[#4B2494]' 
              : 'bg-gray-600/50'
            }
          `}
        >
          <div className="bg-[#121826] rounded-xl p-4 relative">
            <textarea
              ref={textareaRef}
              className="w-full bg-transparent text-white outline-none resize-none font-mono text-sm placeholder-[#CFD3D8]"
              rows={5}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handleKeyDown}
            />

            {!text && (
                <div className="absolute top-[16px] left-4 pointer-events-none text-gray-500 font-mono text-sm flex items-center gap-2">
                  <span>{placeholders[currentPlaceholderIndex]}</span>
                  <Image src={'/tab.svg'} alt='logo' width={50} height={50} />
                </div>
              )}
            
            <div className="flex justify-end items-center mt-2">
              {text.trim() && (
                <button
                  onClick={handleSubmit}
                >
                  <Image src={'/submit.svg'} alt='logo' width={40} height={40} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;