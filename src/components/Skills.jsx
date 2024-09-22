import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import skills from "../data/skills"

const Skills = () => {
  const skillRef = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // header
    gsap.fromTo(
        headerRef.current,
        {
          x: -150, // Start from offscreen (left)
          willChange: "transform", // Hint for optimization
        },
        {
          x: 0, // End at original position
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: headerRef.current, // Trigger animation when the header enters the viewport
            start: "top 90%", // Adjust this value to control when the animation starts
            toggleActions: "play reverse play reverse", // Repeat on scroll
          },
        }
      );

    // skill known
    gsap.fromTo(
        skillRef.current,
        {
          opacity: 0,
          y: 50, // Start from below
          willChange: "transform, opacity", // Hint for optimization
        },
        {
          opacity: 1,
          y: 0, // Move to original position
          duration: 1.2, // Animation duration
          ease: "power1.out",
          stagger: 0.2, // Delay between each animation
          scrollTrigger: {
            trigger: skillRef.current[0], // Trigger animation when first element is in the viewport
            start: "top 90%", // Start animation when element enters 90% of the viewport
            toggleActions: "play reverse play reverse" // Repeat on scroll
          },
        }
      );
  }, []);

  return (
    <section className="skills-section pb-20 dark:drop-shadow-customPurpleDropShadow">
      <div className="flex flex-row items-center pb-8 -ml-1.5">
        <div className="border-r-8 border-customPurple bg-white dark:bg-black rounded-lg pb-8 z-10">
          &nbsp;
        </div>
        <h1 ref={headerRef} className="text-4xl font-bold text-start pl-8 z-0 font-black transition-colors duration-500 dark:drop-shadow-customPurpleDropShadow">
          Skills
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 transition-colors duration-500">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRef.current[index] = el)} // Store each ref
              className={`flex items-center gap-2 ${skill.color} ${skill.darkBgColor} ${skill.textColor} ${skill.darkTextColor} px-4 py-2 rounded-full`}
            >
              <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
