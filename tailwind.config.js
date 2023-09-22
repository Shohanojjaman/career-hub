/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: "'Manrope', sans-serif",
      },
      colors: {
        heading: '#1A1919',
        body: '#757575',
        'medium-white': '#FFFFFFB2',
        'light-white': '#FFFFFF66',
      },
    },
  },
  plugins: [require('daisyui')],
};
