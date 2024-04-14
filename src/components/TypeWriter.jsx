import React, { useState, useEffect } from 'react';

export default function TypeWriter({ text, delaym, className }) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = text.length;

    useEffect(() => {


        if (currentIndex === length) {
            return;
        }

        const interval = setInterval(() => {
            setCurrentText((prev) => prev + text[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
        }, delaym);

        return () => clearInterval(interval);
    })

    return <div
        className={`flex items-center ${className}`}
    >
        {currentText}
        <div className='w-[2px] transition-all duration-150 h-full bg-blue-500 animate-blink'>

        </div>
    </div>;
};
