/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        pone: '#FFFAF6',
        ptwo: '#3A6AE8',
        pthree: '#332E2B',
        customColor: '#1DA1F2', // Your custom color
        darkBlue: '#0A74DA',
        lightGreen: '#A0D95C',
        pfour: "#14202E"
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Add Helvetica as the primary font
      },
      fontSize: {
        '1_5xl': '1.40rem', // This is equivalent to 20px
      },
    },
    
  },
  plugins: [],
}

