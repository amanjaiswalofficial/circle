// src/CircularAnimation.js
import React from 'react';
import { motion } from 'framer-motion';

const CircularAnimation = ({ size, delay, stayDuration, exitDelay }) => {
  return (
    <motion.div
      className="absolute border-4 border-pfour rounded-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: stayDuration,
        repeat: Infinity,
        repeatType: "reverse",
        delay,
        when: "beforeChildren", // Ensure the exit happens after the appear animation
      }}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CircularAnimation;
