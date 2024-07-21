import React from 'react';
import '../index.css'; // Ensure this path is correct based on your project structure
import sideImage from '../utilis/bg3.png'; // Import your side image
import TypingEffect from './TypingEffect';
const Body = () => {
  return (
    <div className='relative min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-tr from-primaryBackground to-secondaryBackground overflow-hidden'>
      <div className='flex-1 flex justify-center items-center p-4 order-2 md:order-1'>
        <div className='max-w-md md:max-w-lg text-center md:text-left'>
          <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl text-accentColor fade-in'>
            Hello I'm Akanksha Cheeti
          </h1>
          <div className='py-4 md:py-8'>
          <TypingEffect text='Front end developer enthusiast!!' />

          </div>
          <p className='text-base md:text-lg lg:text-xl text-textColor slide-in'>
          I recently graduated with a Master’s degree in Computer Science and am currently seeking full-time opportunities as a Front-End Developer. What sets me apart is my ability to quickly learn new technologies and solve complex problems efficiently.

I have solid experience in UI/UX design principles and am proficient in data structures and algorithms. My background also includes working with various IDEs and an enthusiasm for data science and back-end development. Check out my UI/UX designer <a className="text-slate-300 " href="https://www.figma.com/proto/GOLh95phlS7ntC2ZDb7GP0/Akanksha-cheeti-portfolio?node-id=7-191&t=09iyQkZQUwfdgua6-1&starting-point-node-id=7%3A191">portfolio</a> Let’s build something awesome together!
          </p>
          <button className=' mt-4 py-2 border-2 bg-accentColor '>
            <a
              href='https://drive.google.com/file/d/1QevFEfN8m2rDongQyzl4nXxgwnWNgPPF/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className=' border-2 border-accentColor text-slate-200 font-bold py-4 px-6 rounded-full '>View Resume
            </a>
          </button>


        </div>
      </div>
      <div className='flex-1 flex justify-center items-center p-4 order-1 md:order-2'>
        <div className='relative w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full mt-16 md:mt-0 border-8 border-accentColor shadow-image'>
          <img
            src={sideImage}
            alt='Side'
            className='relative transition-transform duration-500 ease-in-out transform hover:scale-110 object-cover w-full h-full'
          />
        </div>
      </div>

      {/* Animated objects */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute w-20 h-20 md:w-24 md:h-24 bg-gradient-to-t from-primaryBackground via-transparent to-secondaryBackground rounded-full opacity-90 animate-float ' style={{ top: '10%', left: '5%' }}></div>
        <div className='absolute w-24 h-24 md:w-32 md:h-32 bg-gradient-to-b from-secondaryBackground via-transparent to-primaryBackground rounded-full opacity-90 animate-float-slow' style={{ top: '30%', right: '10%' }}></div>
        <div className='absolute w-16 h-16 md:w-20 md:h-20 bg-gradient-to-b from-secondaryBackground via-transparent to-primaryBackground rounded-full opacity-90 animate-float' style={{ bottom: '20%', left: '50%' }}></div>
        <div className='absolute w-20 h-20 md:w-28 md:h-28 bg-gradient-to-b from-secondaryBackground via-transparent to-primaryBackground rounded-full opacity-90 animate-float-slow' style={{ top: '50%', left: '40%' }}></div>
        <div className='absolute w-32 h-32 md:w-40 md:h-40 bg-gradient-to-b from-secondaryBackground via-transparent to-primaryBackground rounded-full opacity-90 animate-float' style={{ bottom: '10%', right: '5%' }}></div>
      </div>
    </div>
  );
};

export default Body;
