/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./*.html","./company/*.html","./src/**/*.html","./pages/**/*.html","./components/**/*.html"],
  content: [
    "./*.html",
    "./*/**/*.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        'primary': '#E57716',
        'secondary':"#29166F",
        'dark':"#7A7A7A",
        'light':'#F8F8F8',
      },
      boxShadow:{
        custom:"0px 5px 15px 0px rgba(0, 0, 0, 0.15)"
      }
    },
  },
  plugins: [],
}

