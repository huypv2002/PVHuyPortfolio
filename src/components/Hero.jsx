import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const heroRef = useRef(null);
  const photoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Profile photo animation with a 3D flip effect and pulse
    tl.fromTo(
      photoRef.current,
      {
        opacity: 0,
        scale: 0.7,
        rotateY: 180,
        boxShadow: "0 0 0 rgba(240, 3, 252, 0.5)",
        y: 50,
        willChange: "transform, opacity", // Hint for optimization
      },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        boxShadow: "0 0 20px rgba(240, 3, 252, 0.8)",
        y: 0,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.2,
      }
    )

    // Text animation with a bounce and color transition
    tl.fromTo(
      textRef.current.children,
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
        rotationX: 45,
        willChange: "transform, opacity", // Hint for optimization
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        ease: "bounce.out",
        stagger: 0.3,
      },
      "-=1.2"
    );
  }, []);

  return (
    <div
      ref={heroRef}
      id="hero"
      className="hero min-h-screen flex items-center justify-center"
    >
      <div className="text-center flex flex-col md:flex-row items-center gap-8 md:gap-20 lg:gap-32">
        {/* Profile Photo */}
        <div
          ref={photoRef}
          className="profile_photo rounded-full border-4 border-customPurple mx-auto shadow-customPurpleBoxShadow"
        >
          <img
            className="rounded-full object-cover aspect-[1/1] w-full max-w-[15rem] sm:max-w-[16rem] md:max-w-[16rem] lg:max-w-[20rem]"
            src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/481466288_1746748515901238_8888791767678116362_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tblpjilrz38Q7kNvgHv83sz&_nc_oc=AdhWxBtwSY0GGL4tSKuEvflz5drn1DdI0faSca6n2UoWhxhr4hbP7zZXkl4bcL-DW-c&_nc_zt=23&_nc_ht=scontent.fsgn5-1.fna&_nc_gid=ALx1fgfhnETw_3ZyueSpR5L&oh=00_AYDGKQ_gL8ZPhGgUEbgcojfze43uGv3gdIEuZ0ms6a5IVw&oe=67C75283"
            alt="PHAM VAN HUY - Profile"
            loading="lazy"
          />
        </div>

        {/* About Text */}
        <div ref={textRef} className="flex flex-col gap-3">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold transition-colors duration-500 dark:drop-shadow-customPurpleDropShadow">
            PHAM VAN HUY
          </h1>
          <p className="text-xl sm:text-2xl transition-colors duration-500 dark:drop-shadow-customPurpleDropShadow">
             Frontend Vuejs Developer
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-5 mt-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-6 py-3 shadow-customPurpleBoxShadow bg-customPurple hover:bg-opacity-80 transition-all duration-300 rounded-lg font-bold text-lg cursor-pointer"
            >
              Projects &nbsp; <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              className="px-6 py-3 shadow-customPurpleBoxShadow bg-customPurple hover:bg-opacity-80 transition-all duration-300 rounded-lg font-bold text-lg cursor-pointer"
            >
              Resume &nbsp; <FontAwesomeIcon icon={faDownload} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
