import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
  return (
    <footer className="relative bg-primaryBackground py-8">
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <h2 className="text-textColor text-3xl font-bold mb-4">Contact Me</h2>
        <form 
          action="mailto:cheetiakanksharao1@gmail.com" 
          method="post" 
          encType="text/plain" 
          className="w-full max-w-md bg-secondaryBackground p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-textColor font-medium mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-textColor" 
              placeholder="Your Name" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-textColor font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-textColor" 
              placeholder="Your Email" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-textColor font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-textColor" 
              rows="4" 
              placeholder="Your Message"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-accentColor text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Send
          </button>
        </form>
        <div className="flex space-x-6 mt-6">
          <a href="mailto:cheetiakanksharao1@gmail.com" className="text-accentColor hover:text-blue-300 transition-colors duration-300 ease-in-out">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
          </a>
          <a href="https://x.com/CheetiAkanksha" target="_blank" rel="noopener noreferrer" className="text-accentColor hover:text-blue-300 transition-colors duration-300 ease-in-out">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/cheetiakanksha/" target="_blank" rel="noopener noreferrer" className="text-accentColor hover:text-blue-300 transition-colors duration-300 ease-in-out">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
        </div>
        <p className="text-textColor text-center">© 2024 Akanksha Cheeti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
