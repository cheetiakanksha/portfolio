import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faBookOpen, faCertificate, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const EducationExperience = () => {
  return (
    <div className="bg-primaryBackground min-h-screen flex flex-col items-center py-12">
      <h1 className="text-textColor text-4xl md:text-5xl font-bold mb-8 fade-in">Education & Experience</h1>
      
      <div className="max-w-6xl w-full px-6 flex flex-col md:flex-row">
        {/* Education Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
          <h2 className="text-textColor text-3xl font-semibold mb-6 text-center">Education</h2>
          <div className="space-y-8">
            {/* Education Entry */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faUniversity} className="text-mainColor text-4xl" />
              </div>
              <div className="bg-secondaryBackground p-6 rounded-lg shadow-lg flex-1 transition-transform duration-500 ease-in-out hover:scale-105">
                <h3 className="text-xl font-bold mb-2 text-textColor">Florida State University</h3>
                <p className="text-gray-300">Master of Science in Computer Science</p>
                <p className="text-gray-400 text-sm">GPA: 3.8</p>
                <p className="text-gray-200 mt-2">2022 - 2024</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faBookOpen} className="text-mainColor text-4xl" />
              </div>
              <div className="bg-secondaryBackground p-6 rounded-lg shadow-lg flex-1 transition-transform duration-500 ease-in-out hover:scale-105">
                <h3 className="text-xl font-bold mb-2 text-textColor">GITAM Deemed University</h3>
                <p className="text-gray-300">Bachelor of Science in Computer Science</p>
                <p className="text-gray-400 text-sm">GPA: 8.7</p>
                <p className="text-gray-200 mt-2">2018 - 2022</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faCertificate} className="text-mainColor text-4xl" />
              </div>
              <div className="bg-secondaryBackground p-6 rounded-lg shadow-lg flex-1 transition-transform duration-500 ease-in-out hover:scale-105">
                <h3 className="text-xl font-bold mb-2 text-textColor">Junior College Intermediate</h3>
                <p className="text-gray-300">Score: 983/1000</p>
                <p className="text-gray-200 mt-2">2016 - 2018</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full md:w-1/2 md:pl-4">
          <h2 className="text-textColor text-3xl font-semibold mb-6 text-center">Experience</h2>
          <div className="space-y-8">
            {/* Experience Entry */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faBriefcase} className="text-mainColor text-4xl" />
              </div>
              <div className="bg-secondaryBackground p-6 w-80 rounded-lg shadow-lg flex-1 transition-transform duration-500 ease-in-out hover:scale-105">
                <h3 className="text-xl font-bold mb-2 text-textColor">TCR Innovations</h3>
                <p className="text-gray-300">Backend Engineer Intern</p>
                <p className="text-gray-200 mt-2">June,2021 - august,2021</p>
                <p className="text-gray-200 mt-2 text-pretty">Simplified e-commerce platform by executing robust CRUD operations for cart management; facilitated seamless item addition, removal, and order placement and increased checkout completion rate by 15%.	Developed interactive application leveraging HTML, CSS, vanilla JavaScript in front end and Django with Python for backend with SQLite for database.
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
