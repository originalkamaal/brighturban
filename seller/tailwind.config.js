const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    minWidth:{
      'card' : '200px',
      'button' : '100px',
    },
    extend: {
      fontFamily:{
       // sans : ['Inter', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
