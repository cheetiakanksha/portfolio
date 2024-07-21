/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: '#081b29', // Main background color
        secondaryBackground: '#112e42', // Secondary background color
        textColor: '#708090', // Text color
        accentColor: '#009bf0', 
      },
    },
  },
  plugins: [],
}

