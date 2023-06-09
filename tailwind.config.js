/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins']
      },
      colors: {
        primary: '#CAC9FF',
        secondary: '#ADCDFE',
        tertiary: '#FAC2AE',
        quaternary: '#FAC3D1',
        quinary: '#9FD2D8',
        'background-primary': '#16355B',
        'background-secondary': '#455D7C',
        'light': '#F4F4F4',
        'dark': '#16355B'
      }
    },
  },
  plugins: [],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}

