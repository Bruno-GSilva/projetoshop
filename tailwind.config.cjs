/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      navbarLi: "#2a73dd",
    },
    fontFamily: {
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      spacing: {
        "size35x25":'35px 25px'
      },
      borderRadius: {
      }
      
    },
  },
  plugins: [],
}
