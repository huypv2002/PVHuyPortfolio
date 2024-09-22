import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";

import projects from "../data/projects";

const Projects = () => {
  const projectRefs = useRef([]);
  const headerRef = useRef(null)
  projectRefs.current = [];

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

    // header
    gsap.fromTo(headerRef.current, 
      {
        x: -215,     // Start from offscreen (left)
        willChange: "transform", // Hint for optimization
      },
      {
        x: 0,        // End at original position
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: headerRef.current,  // Trigger animation when the header enters the viewport
          start: "top 90%",            // Adjust this value to control when the animation starts
          toggleActions: "play reverse play reverse", // Repeat on scroll
        },
      });

  // projects
  projectRefs.current.forEach((ref, index) => {
    const rotationX = index % 2 === 0 ? 90 : -90; // Alternate rotation on X-axis

    gsap.fromTo(
      ref,
      {
        opacity: 0,
        y: 200, // Dramatic slide-up
        scale: 0.7, // Initial zoom-out
        rotationX, // Dynamic rotation X
        rotationY: 30, // Dynamic rotation Y
        willChange: "transform, opacity", // Hint for optimization
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0, // Reset the tilt
        rotationY: 0,
        duration: 3.5, // Slower animation duration
        ease: "power1.out", // Smooth easing
        stagger: {
          amount: 2.5, // Increased stagger time
          from: "center", // Animate from the center
        },
        scrollTrigger: {
          trigger: ref,
          start: "top 100%", // Trigger even closer to entering viewport
          end: "bottom 70%",
          toggleActions: "play reverse play reverse", // Repeat on scroll
          scrub: 1, // Smooth animation tied to scroll
          markers: false, // Remove markers for production
        },
      }
    );
  });
}, []);

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section id="projects" className="projects-section pb-4 transition-colors duration-500 dark:drop-shadow-customPurpleDropShadow">
      <div className="flex flex-row items-center pb-8 -ml-1.5">
        <div className="border-r-8 border-customPurple bg-white dark:bg-black rounded-lg pb-8 z-10">
          &nbsp;
        </div>
        <h1 ref={headerRef} className="text-4xl font-bold text-start pl-8 z-0 dark:drop-shadow-customPurpleDropShadow">Projects</h1>
      </div>
      <div className="container mx-auto px-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            addToRefs={addToRefs}
            settings={settings}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
