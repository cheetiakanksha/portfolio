import React, { useState, useEffect } from 'react';
import '../index.css'; // Ensure your CSS file includes the necessary styles

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 150); // Adjust the speed of typing here
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, displayedText]);

  return (
    <span className='typing-effect'>
      {displayedText}
      <span className='cursor'>|</span>
    </span>
  );
};

export default TypingEffect;
