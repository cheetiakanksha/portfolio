import React, { useState } from 'react';
import netflixgpt from "../utilis/netflixgpt.png";
import foodImg from "../utilis/food-ordering app .png";
import ytImg from "../utilis/Youtubeapp.png";

const projects = [
  {
    title: 'Netflix-gpt',
    description: 'Netflix-GPT is a Netflix clone that provides users with a familiar interface to browse movies. The application is integrated with TMDB to fetch movie details and with Firebase for authentication. Users can watch trailers on YouTube by clicking on a movie. Additionally, there\'s a section for specialized movie suggestions, where users can search the movies using OpenAI API and get the results.',
    image: netflixgpt,
    clickedDescription:'Designed Netflix-GPT, a Netflix clone using React.js and Tailwind CSS, integrated with TMDB for movie details and Firebase for authentication, including YouTube trailers and GPT-powered movie search via OpenAI API.Featured seamless login with Firebase, multi-language support (English, Hindi, Spanish), and efficient UI components leveraging Redux Toolkit for state management.Enhanced application performance with memoized API calls and created intelligent movie search functionality using OpenAI GPT, ensuring a smooth and responsive user experience.',
    keyFeatures:'',
    github: 'https://github.com/cheetiakanksha/Netflix-Gpt',
    live: 'https://gptmoviesearch.netlify.app/'
  },
  {
    title: 'My-Youtube',
    description: 'In this project, users can dive into an immersive experience where they can search for any specific video they desire. But that\'s not all - I\'ve also integrated a live chat feature where users can engage in real-time discussions while watching their favorite videos. What makes this chat even more dynamic is the ability to add nested comments, facilitating deeper conversations and interactions within the community.',
    image: ytImg,
    clickedDescription:'Developed My-YouTube, a YouTube-like application using React.js and Tailwind CSS, featuring optimized search with debouncing, cached search results, infinite nested comments, and real-time live chat via API polling.Implemented efficient state management using redux store, ensuring a seamless user experience and smooth navigation with React Router DOM.Integrated YouTube API to fetch video data and search results, enhancing the interactive user experience.Improved application performance through Hooks and caching techniques and gained insights into complex state management and real-time feature implementation.',
    keyFeatures:'Seamless Authentication With Google Login from Firebase Multi-Language Support: English, Hindi, Spanish Efficient UI with React.js and Redux Toolkit TMDB Integration for a vast movie collection  Memoized API Calls for boosted performance OpenAI GPT Search Functionality for intelligent movie searches ',
    github: 'https://github.com/cheetiakanksha/My-Youtube',
    live: 'https://my-youtubestreaming.netlify.app'
  },
  {
    title: 'Food Ordering App',
    description: 'Food Ordering Application! It\'s more than a Swiggy clone, it\'s a dynamic food ordering platform where I explored the depths of development.',
    image: foodImg,
    clickedDescription:'Simplified Food Ordering Application, like Swiggy featuring real-world data integration from Swiggy live APIs and efficient bundling with Parcel.Created key features such as easy restaurant search, top restaurant filtering, dedicated menu pages, a convenient shopping cart, checkout process, and responsive design with smooth Shimmer UI transitions.Optimized state management using Redux Toolkit, enhancing cart flow efficiency and contributing to a 50% reduction in load times, improving overall user experience.Explored advanced topics like React Hooks, functional and class-based components, virtual DOM, React Fiber, routing, context API, and performance optimization techniques like lazy loading and higher-order components.',
    keyFeatures:'Easy restaurant search & top restaurant filtering Dedicated menu pages for each restaurant Convenient shopping cart & checkout Responsive design for all devices Smooth Shimmer UI transitions',
    github: 'https://github.com/cheetiakanksha/React',
    live: 'https://food-ordering-ui-app.netlify.app'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };

  const closeOverlay = () => {
    setSelectedProject(null);
  };

  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    }
    return text;
  };

  return (
    <div className='bg-primaryBackground min-h-screen py-12'>
      <h1 className='font-bold text-4xl text-center text-textColor mb-12'>Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12 lg:px-36'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='border-2 border-accentColor rounded-md shadow-md transition-transform transform hover:scale-105 hover:z-10 cursor-pointer'
            onClick={() => handleProjectClick(index)}
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
          >
            <div className='p-10 md:p-8 lg:px-10 border-2 bg-secondaryBackground border-white h-full flex flex-col'>
              <h1 className='text-center font-bold text-xl text-textColor mb-4'>{project.title}</h1>
              <p className='text-center text-textColor text-base md:text-lg lg:text-xl mb-4'>
                {truncateText(project.description, 150)}
              </p>
              <img className='w-full h-auto rounded-md border-2 border-accentColor' alt={project.title} src={project.image} />
            </div>
          </div>
        ))}
      </div>

      {selectedProject !== null && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 z-50'>
          <div className='relative bg-secondaryBackground p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg text-textColor max-w-5xl mx-auto overflow-y-auto'>
            <button
              className='absolute top-2 right-2 text-3xl font-bold text-white'
              onClick={closeOverlay}
            >
              &times;
            </button>
            <h2 className='text-2xl font-bold mb-4'>{projects[selectedProject].title}</h2>
            <p className='mb-4'>{projects[selectedProject].clickedDescription}</p>
            <p className='mb-4'>{projects[selectedProject].keyFeatures}</p>
            <div className='flex flex-col md:flex-row gap-4'>
              <a href={projects[selectedProject].github} target="_blank" rel="noopener noreferrer" className='bg-accentColor text-white border border-transparent px-6 py-2 rounded-3xl hover:bg-blue-700 transition-colors duration-300'>GitHub Code</a>
              <a href={projects[selectedProject].live} target="_blank" rel="noopener noreferrer" className='bg-accentColor text-white border border-transparent px-6 py-2 rounded-3xl hover:bg-blue-700 transition-colors duration-300'>Live Project</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
