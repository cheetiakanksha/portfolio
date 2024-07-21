import React from 'react';
import '../index.css'; // Ensure this path is correct based on your project structure
import bg from '../utilis/bg.jpg'; // Import your background image

const About = () => {
  return (
    <div className='relative min-h-screen bg-gradient-to-tr from-red-600 to-yellow-300 overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${bg})`, filter: 'brightness(0.5)' }} // Apply brightness filter
      >
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='text-white p-8 md:p-16 max-w-lg md:max-w-2xl'>
            <h1 className='text-3xl md:text-5xl font-bold mb-6 text-center'>About Me</h1>
            <p className='text-lg md:text-xl text-center'>
              Hello! I'm Akanksha Cheeti, a passionate front-end developer with a love for creating beautiful and functional user interfaces. 
              My journey in the tech world has been exciting, filled with learning and growth. I enjoy solving complex problems, 
              exploring new technologies, and continuously improving my skills. When I'm not coding, you can find me experimenting 
              with design, reading a good book, or trying out new recipes in the kitchen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
