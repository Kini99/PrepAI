/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'icon-sm': '20px',
        'icon-md': '30px',
        'icon-lg': '40px',
      }
    },
  },
  plugins: [],
}

