/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008BDC',
        secondary: '#686868',
        lightGrey: '#EEEEEE'
      }
    },
    fontFamily: {
      'Inter': ['Inter', 'sans', 'serif'],
      'InterIcons': ['inter-icon'],
      'font1' : ['font1']
    }
  },
  plugins: [],
}

