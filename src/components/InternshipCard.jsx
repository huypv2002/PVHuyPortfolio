import React from "react";

const InternshipCard = ({ internship, addToRefs }) => {
  return (
    <div
      ref={addToRefs} // Attach ref here for GSAP animation
      className="p-6 rounded-lg shadow-customPurpleBoxShadow"
    >
      <h3 className="transition-colors duration-500 text-xl font-semibold ">
        {internship.company}
      </h3>
      <p className="transition-colors duration-500 text-sm ">
        {internship.location} | {internship.duration} | {internship.mode}
      </p>
      <div className="mt-4">
        <h4 className="transition-colors duration-500 text-lg font-medium ">
          Projects:
        </h4>
        <ul className="transition-colors duration-500 list-disc list-inside mt-2 ">
          {internship.projects.map((project, index) => (
            <li className="pb-4" key={index}>
              <strong>{project.name}:</strong> {project.description}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="transition-colors duration-500 text-lg font-medium ">
          Description:
        </h4>
        <p className="transition-colors duration-500">{internship.description}</p>
      </div>
      <div className="mt-4 flex flex-col md:flex-row gap-2 items-center">
        <h4 className="transition-colors duration-500 text-lg font-medium">
          Skills:
        </h4>
        <div className="flex flex-wrap gap-4 transition-colors duration-500 sm:justify-center">
          {internship.skills.map((skill, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 ${skill.color} ${skill.darkBgColor} ${skill.textColor} ${skill.darkTextColor} px-4 py-2 rounded-full`}
            >
              <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
