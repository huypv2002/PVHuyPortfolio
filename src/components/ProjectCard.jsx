import React from "react";
import Slider from "react-slick";

const ProjectCard = ({ project, index, addToRefs, settings }) => (
  <div
    ref={addToRefs}
    className={`project flex flex-col pt-8 mb-16 rounded-lg items-center shadow-customPurpleBoxShadow lg:flex-row md:flex-row md:gap-5 ${
      index % 2 !== 0 ? "lg:flex-row-reverse md:flex-row-reverse" : ""
    } items-center mb-10`}
  >
    <div className="project-images mb-6 lg:w-1/4 md:w-1/2 w-full">
      <Slider {...settings}>
        {project.img.map((image, i) => (
          <div key={i}>
            <img
              src={image}
              alt={`${project.title} - ${i}`}
              loading="lazy"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        ))}
      </Slider>
    </div>
    <div
      className={`description  lg:w-3/4 md:w-1/2 w-full p-6 ${
        index % 2 !== 0
          ? "lg:text-end md:text-end"
          : "lg:text-start md:text-start"
      }`}
    >
      <h3 className="text-2xl font-bold">{project.title}</h3>
      <p className="text-justify mt-4">{project.description}</p>
      <div className="mt-4 flex flex-col md:flex-row gap-4 items-center">
        <strong>Technologies Used: </strong>
        <div className={`flex flex-wrap gap-4 transition-colors duration-500 sm:justify-center ${
      index % 2 !== 0 ? "lg:flex-row-reverse md:flex-row-reverse" : ""
    }`}>
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className={`flex w-max items-center gap-2 ${tech.color} ${tech.darkBgColor} ${tech.textColor} ${tech.darkTextColor} px-4 py-2 rounded-full`}
            >
              <img src={tech.logo} alt={tech.name} className="w-6 h-6" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4">
        <a
          href={project.liveLink}
          className="text-blue-600 dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Link
        </a>{" "}
        |
        <a
          href={project.githubLink}
          className="text-blue-600 dark:text-blue-400 ml-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </p>
    </div>
  </div>
);

export default ProjectCard;
