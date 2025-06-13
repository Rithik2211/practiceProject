'use client'
import React from 'react'
import { useState } from 'react';

const TextEditor = () => {
    const [text, setText] = useState(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
      );

  return (
    <div className="mt-10 flex justify-center w-full px-6 md:px-16 lg:px-24">
        <div className="bg-[#121826] border border-purple-500/50 shadow-lg rounded-xl p-4 w-full md:w-2/3 lg:w-3/4">
          <textarea
            className="w-full bg-transparent text-white outline-none resize-none font-mono text-sm"
            rows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="text-right text-xs text-gray-400 mt-2">⇥Tab</div>
        </div>
      </div>
  )
}

export default TextEditor