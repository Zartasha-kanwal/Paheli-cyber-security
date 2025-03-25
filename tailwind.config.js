/** @type {import('tailwindcss').Config} */
 module.exports = {
  content: [
    "./src/Paheli.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        spin: "spin 1s linear infinite", // Custom animation
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
}

