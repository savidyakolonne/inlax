import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/herovideo.mp4';
import { Link } from 'react-router-dom';

const phrases = [
  'We build your Business to the Next Level',
  'We build your Software Solution',
  'We build your website',
  'We build your E-Commerce Website',
  'We build your Business Solution',
];

const TYPING_SPEED = 50;
const DISPLAY_TIME = 2000;

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < phrases[currentPhraseIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + phrases[currentPhraseIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText('');
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, DISPLAY_TIME);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentPhraseIndex]);

 

  return (
    <section className='flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-40 bg-white w-full overflow-hidden'>

      {/* Left Side - Text */}
      <div className='md:w-1/2 text-center md:text-left mb-8 md:mb-0 pl-4 sm:pl-6 md:pl-12 flex flex-col items-center md:items-start'>

  <motion.h1
    className='text-3xl md:text-5xl font-bold text-gray-800 leading-snug h-[120px]'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {displayedText}
    <span className='blinking-cursor'>|</span>
  </motion.h1>

  <p className='mt-4 text-gray-600 max-w-md mx-auto md:mx-0'>
    Let’s build something amazing together. 
    At Inlax, we collaborate with startups, enterprises, and governments worldwide to design
     future.Craft modern e-commerce platforms and smart web software solutions powered by AI — helping our clients grow, scale, and stay ahead in the digital world.
  </p>

  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <button className='shake-see-projects mt-6 px-6 py-3 rounded-2xl bg-blue-800 text-white hover:bg-blue-700 transition cursor-pointer'>
      Start Project
    </button>
  </Link>
</div>


      {/* Right Side - Video */}
      <div className='md:w-1/2 flex justify-center w-full'>
        <video
          autoPlay
          loop
          muted
          className='w-full max-w-md rounded-lg shadow-lg object-cover'
        >
          <source src={heroVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Cursor animation */}
      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1.5rem;
          color: #333;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from, to { opacity: 0 }
          50% { opacity: 1 }
        }
      `}</style>
    </section>
  );
};

export default Hero;
