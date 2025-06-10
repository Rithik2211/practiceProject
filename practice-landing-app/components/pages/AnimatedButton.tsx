import { ArrowRight } from 'lucide-react';
import React from 'react'

const AnimatedButton = () => {
    return (
        <>
          <button className="relative overflow-hidden bg-black text-white px-3 py-[6px] mb-4 rounded-xl transition-all duration-300 ease-in-out group">
            <div className="absolute inset-0 bg-[#4368E3] transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
            
            <span className="relative z-10 flex items-center gap-2">
              Start free trial 
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </>
      );
}

export default AnimatedButton