/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Archivo"'],
      },
      colors: {
        "smart-blue": "#59a4da",
        "smart-blue-2": "#72abd3",
        "smart-black": "#232323",
      },
    },
  },
  plugins: [],
};
