/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs'  : '240px',
      '2sm'  : '576px',
      'sm'  : '640px',
      'md'  : '768px',
      '2lg'  : '992px',
      'lg'  : '1024px',
      'xl'  : '1280px',
      '2xl' : '1536px'
    },
    extend: {
      fontFamily : {
        fontAwesome : ['Font Awesome 5 Free']
      }
    },
  },
  plugins: [],
}
