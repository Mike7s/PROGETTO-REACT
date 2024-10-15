/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/ImgVegetarian.jpeg')", 
      },
      colors: {
        'Bright-green': '#4f8952',
      },
    },
  },
  plugins: [],
}