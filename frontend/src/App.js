// src/App.js
import React, { useEffect, useState } from 'react';
import CircularAnimation from './circularComponent';

function App() {
  const circleSizes = [350, 400, 450, 500]; // Array of circle sizes
  const stayDuration = 3; // Duration each circle stays on screen

  // Array of items to display
  const items = ["food", "places", "music", "movies", "books"];
  
  const [currentItem, setCurrentItem] = useState(items[0]); // Start with the first item
  const [index, setIndex] = useState(0); // Track the current index

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length); // Loop through items
      setCurrentItem(items[(index + 1) % items.length]); // Update current item
    }, stayDuration * 150); // Change item every stayDuration seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index, items, stayDuration]);

  return (
    <div className="flex items-center justify-center h-screen bg-pone relative">
      {circleSizes.map((size, index) => {
        const delay = index * 1; // Delay for appearance
        return (
          <CircularAnimation
            key={index}
            size={size}
            delay={delay}
            stayDuration={stayDuration}
            exitDelay={(circleSizes.length - index - 1) * 1} // Delay for disappearance
          />
        );
      })}
      <div className="text-center z-10">
        <p className="text-1_5xl text-pthree font-sans">Find the best of {currentItem}</p>
        <h1 className="text-8xl font-bold text-ptwo font-sans">Circle</h1>
      </div>
    </div>
  );
}

export default App;
