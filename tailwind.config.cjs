/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'kantega-purple': '#27003D',
      },
      fontFamily: {
        'source-sans': ['"Source Sans Pro"', "Regular"],
      }
    },
  },
  plugins: [],
};
