/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          light: '#3B82F6',
          dark: '#1E3A70'
        },
        secondary: {
          DEFAULT: '#0891B2',
          light: '#06B6D4',
          dark: '#0E7490'
        },
        accent: {
          DEFAULT: '#FB923C',
          light: '#FDBA74',
          dark: '#EA580C'
        }
      }
    },
  },
  plugins: [],
};