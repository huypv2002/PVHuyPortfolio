import React, { useState, useEffect, useRef } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const sunRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      // Start the spinning animation
      gsap.to(sunRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: 'linear',
      });
    } else {
      document.documentElement.classList.remove('dark');
      // Stop the spinning animation
      gsap.killTweensOf(sunRef.current);
    }
  }, [darkMode]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'd' || event.key === 'D' || event.key === 'l' || event.key === 'L' || event.key === 'n' || event.key === 'N') {
        setDarkMode(prevMode => !prevMode);
        console.log("done");
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='mr-5'>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black transition-transform duration-300 transform hover:scale-110 dark:drop-shadow-customPurpleDropShadow dark:shadow-customPurpleBoxShadow dark:border-white relative"
      >
        {/* Moon Icon */}
        <FontAwesomeIcon
          icon={faMoon}
          className={`text-xl ${darkMode ? 'hidden' : 'block'} transition-transform duration-500`}
        />
        {/* Sun Icon */}
        <FontAwesomeIcon
          icon={faSun}
          className={`text-xl ${darkMode ? 'block' : 'hidden'} absolute`}
          ref={sunRef}
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
