import React from 'react';
import '../index.css'; // Ensure this path is correct based on your project structure

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Python', 'TailwindCSS', 'Bootstrap', 'Django', 'Git'
  ];

  return (
    <div className="  flex flex-col items-center py-12 bg-gradient-to-b from-secondaryBackground via-transparent to-primaryBackground">
      <h1 className="text-4xl md:text-5xl font-bold mb-24 text-primaryBackground">Skills</h1>
      <div className="bg-secondaryBackground mb-24 py-12 w-[80%] px-6 border-2  rounded-xl">
        <div className="overflow-hidden ">
          <div className="skills-track ">
            {skills.map((skill, index) => (
              <div key={index} className="skill text-accentColor text-lg font-semibold px-6 py-3 rounded-full shadow-md mx-2">
                {skill}
              </div>
            ))}
            {skills.map((skill, index) => (
              <div key={index + skills.length} className="skill text-accentColor text-lg font-semibold px-6 py-3 rounded-full shadow-md mx-2">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
