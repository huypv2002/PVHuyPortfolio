import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InternshipCard from "./InternshipCard";
import internships from "../data/internships";

const Internships = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // header
    gsap.fromTo(
      headerRef.current,
      {
        x: -270, // Start from offscreen (left)
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

    // internship cards
    cardsRef.current.forEach((card, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });
  
      tl.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.7,
          rotateX: -45, // Adding more rotation for complexity
          rotateY: 90,
          z: 200, // Starting it further out
          willChange: "transform, opacity", // Hint for optimization
        },
        {
          opacity: 1,
          scale: 1.1, // Slightly overscale before settling to 1
          rotateX: 0,
          rotateY: 0,
          z: 0,
          duration: 1.5,
          ease: "power1.out",
          delay: index * 0.3,
        }
      )
        .to(
          card,
          {
            scale: 1, // Return to normal scale after overscale
            duration: 0.3,
            ease: "back.out(1.7)", // Adds a bounce-like effect
          },
          "-=0.3" // Overlap with the previous animation
        )
        .to(
          card,
          {
            duration: 0.5,
            ease: "power1.out",
          },
          "-=1" // Sync with the earlier part of the animation
        );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="internships" className="pb-20 text-start dark:drop-shadow-customPurpleDropShadow">
      <div className="flex flex-row items-center pb-8 -ml-1.5">
        <div className="border-r-8 border-customPurple bg-white dark:bg-black rounded-lg pb-8 z-10">
          &nbsp;
        </div>
        <h1 ref={headerRef} className="text-4xl font-bold text-start pl-8 z-0 transition-colors duration-500 dark:drop-shadow-customPurpleDropShadow">
          Internships
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              internship={internship}
              addToRefs={addToRefs} // Pass ref to track the card
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
