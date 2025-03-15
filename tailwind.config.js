/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00BE7A',
          dark: '#00915D',
          light: '#99EACD'
        }
      }
    },
  },
  plugins: [],
};