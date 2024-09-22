import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import resume from "../assets/resume.pdf"

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Yash Kamble.pdf'; // Custom file name
    link.click();
  };

  const buttonRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Buttons animation with scale and pulse effect
    gsap.fromTo(
      buttonRef.current,
      {
        scale: 0.9,
        opacity: 0,
        y: 50,
        willChange: "transform, opacity", // Hint for optimization
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: 1,
        ease: "power1.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: buttonRef.current, // Trigger animation when the button enters the viewport
            start: "top 100%", // Adjust this value to control when the animation starts
            toggleActions: "play reverse play reverse", // Repeat on scroll
          },
      }
    );

    // Adding interactive effect for buttons (scale and shadow on hover)
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.3,
      paused: true,
      ease: "power1.inOut",
      repeat: 3,
      yoyo: true,
    });
  }, []);

  return (
    <section
      id="resume"
    >
      <button
        ref={buttonRef}
        onClick={handleDownload}
        className="px-6 py-3 shadow-customPurpleBoxShadow bg-customPurple hover:bg-opacity-80 transition-all duration-300 rounded-lg font-bold text-lg cursor-pointer"
      >
        Resume &nbsp; <FontAwesomeIcon icon={faDownload} />
      </button>
    </section>
  );
};

export default Resume;
