import React, { useRef } from 'react';
import { FaCode, FaCogs, FaPaintBrush, FaWordpress } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: 'easeOut' }
  }),
};

const Services = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: '-100px' });

  return (
    <section className='px-4 py-16 bg-gray-50'>
      <motion.div
        ref={headingRef}
        variants={fadeUp}
        initial="hidden"
        animate={headingInView ? 'visible' : 'hidden'}
        className='font-bold text-center text-4xl mb-12 text-gray-800'
      >
        What we do
      </motion.div>

      <div
        ref={cardsRef}
        className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto cursor-pointer'
      >
        {/* Card 1 */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
        >
          <Link to="/webdev" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='rounded-lg block'>
            <div className='border-2 border-gray-300 rounded-lg aspect-square flex flex-col items-center justify-center text-center p-6 hover:shadow-lg hover:scale-105 transition-transform duration-200'>
              <FaCode className='text-4xl text-blue-700 mb-4' />
              <h3 className='text-xl font-semibold mb-1'>Web Development</h3>
              <p className='text-sm text-gray-600'>Modern, responsive websites</p>
            </div>
          </Link>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
        >
          <Link to="/sofdev" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='rounded-lg block'>
            <div className='border-2 border-gray-300 rounded-lg aspect-square flex flex-col items-center justify-center text-center p-6 hover:shadow-lg hover:scale-105 transition-transform duration-200'>
              <FaCogs className='text-4xl text-green-700 mb-4' />
              <h3 className='text-xl font-semibold mb-1'>Software Development</h3>
              <p className='text-sm text-gray-600'>Custom software builds</p>
            </div>
          </Link>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
        >
          <Link to="/uiuxpg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='rounded-lg block'>
            <div className='border-2 border-gray-300 rounded-lg aspect-square flex flex-col items-center justify-center text-center p-6 hover:shadow-lg hover:scale-105 transition-transform duration-200'>
              <FaPaintBrush className='text-4xl text-pink-600 mb-4' />
              <h3 className='text-xl font-semibold mb-1'>UI/UX Design</h3>
              <p className='text-sm text-gray-600'>Intuitive interfaces</p>
            </div>
          </Link>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
        >
          <Link to="/cmsdev" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='rounded-lg block'>
            <div className='border-2 border-gray-300 rounded-lg aspect-square flex flex-col items-center justify-center text-center p-6 hover:shadow-lg hover:scale-105 transition-transform duration-200'>
              <FaWordpress className='text-4xl text-purple-700 mb-4' />
              <h3 className='text-xl font-semibold mb-1'>CMS Development</h3>
              <p className='text-sm text-gray-600'>Manage your content easily</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
