import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialLinks from "../data/socialLinks";

import Resume from "./Resume";

const Contact = () => {
  const headerRef = useRef(null);
  const emailRef = useRef(null);
  const socialRefs = useRef([]);
  const paragraphRef = useRef(null);
  const connectHeadingRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      {
        x: -275, // Start from offscreen (left)
        willChange: "transform", // Hint for optimization
      },
      {
        x: 0, // End at original position
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 90%", // Trigger animation when the header enters viewport
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Email
    gsap.fromTo(
      emailRef.current,
      {
        opacity: 0,
        scale: 0.5, // Start small
        y: -50, // Move up slightly for initial position
        skewY: 10, // Add a skew for some distortion
        rotation: -180, // Start with rotation for a twist effect
        willChange: "transform, opacity", // Hint for optimization
      },
      {
        opacity: 1,
        scale: 1, // Scale up in the middle
        y: 0, // Move to the center vertically
        rotation: 0, // Rotate back to normal
        skewY: 0, // Reset skew
        duration: 0.1, // Short duration for quick, snappy motion
        ease: "back.out(2)", // Easing with some overshoot
        scrollTrigger: {
          trigger: emailRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        onComplete: () => {
          // Color change pulse effect
          gsap.to(emailRef.current, {
            scale: 1, // Return to original size
            duration: 0.1, // Quick return
            ease: "power1.out",
            yoyo: true, // Make the color pulse back to original
            repeat: 8, // Pulse once
          });
        },
      }
    );

    // Paragraph and Connect Heading: 3D zoom-in with slight rotation
    gsap.fromTo(
      [paragraphRef.current, connectHeadingRef.current],
      { scale: 0.7, opacity: 0, rotateX: 30, willChange: "transform, opacity" }, // Start small with a 3D tilt
      {
        scale: 1, // Zoom in
        opacity: 1,
        rotateX: 0, // Straighten out as it zooms
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Social Media Links: Each social icon appears in an arc pattern
    socialRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        {
          x: index % 2 === 0 ? -100 : 100, // Alternate arcs from left/right
          y: -100, // Start above the screen
          opacity: 0,
          rotate: index % 2 === 0 ? -30 : 30, // Alternate slight rotation
          willChange: "transform, opacity", // Hint for optimization
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotate: 0, // Straighten the rotation
          duration: 0.5,
          delay: index * 0.1, // Stagger the appearance of each icon
          ease: "elastic.out(1, 0.75)", // Elastic bounce effect for dynamic entrance
          scrollTrigger: {
            trigger: ref,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="contact"
      className="pb-24 text-center dark:drop-shadow-customPurpleDropShadow"
    >
      <div className="flex flex-row items-center pb-8 -ml-1.5">
        <div className="border-r-8 border-customPurple bg-white dark:bg-black rounded-lg pb-8 z-10">
          &nbsp;
        </div>
        <h1
          ref={headerRef}
          className="text-4xl transition-colors duration-500 font-bold text-start pl-8 z-0 dark:drop-shadow-customPurpleDropShadow"
        >
          Contact Me
        </h1>
      </div>
      <div className="container mx-auto px-4">
        {/* Paragraph */}
        <p
          ref={paragraphRef}
          className="text-lg mb-4 transition-colors duration-500"
        >
          Have a project in mind? Drop me a message!
        </p>

        {/* Email Contact */}
        <a
          href="mailto:huy.nguyen.hytek@gmail.com"
          ref={emailRef}
          className="block text-xl font-semibold text-purple-600 dark:text-purple-400 hover:underline mb-4 transition-transform transform hover:scale-105"
        >
          Email: huy.nguyen.hytek@gmail.com
        </a>

        {/* Connect Heading */}
        <h4
          ref={connectHeadingRef}
          className="font-semibold transition-colors duration-500 text-gray-800 dark:text-gray-100 mb-4"
        >
          Wanna connect? Find me on social.
        </h4>
        <div className="flex flex-col items-center gap-6">
          {/* Social Media Links */}
          <div className="flex gap-8 justify-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`${link.color} hover:scale-110 transition-transform`}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (socialRefs.current[index] = el)} // Store ref for each social link
              >
                {link.icon ? (
                  <FontAwesomeIcon icon={link.icon} size="2x" />
                ) : (
                  <img src={link.imgSrc} alt={link.alt} className="w-8 h-8" />
                )}
              </a>
            ))}
          </div>
          <Resume />
        </div>
      </div>
    </section>
  );
};

export default Contact;
