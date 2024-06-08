/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",   //we have to enable this for changing it into home screen
  theme: {
    extend: {},
  },
  plugins: [],
}

