/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#53B175',
        google: '#5383EC',
        facebook: '#4A66AC',
        darkGray: '#181725',
        lightGray: '#7C7C7C',
      },
    },
  },
  plugins: [],
}