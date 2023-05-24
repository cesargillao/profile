/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        'sf-mono': ['SF Mono', 'mono'],
        'calibre': ['Calibre', 'sans-serif'],
      },
      colors: {
        'dark-navy': '#020c1b',
        'navy': '#171719',
        'light-navy': '#232229',
        'lightest-navy': '#233554',
        'navy-shadow': 'rgba(2, 12, 27, 0.7)',
        'dark-slate': '#495670',
        'slate': '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'white': '#e6f1ff',
        'green': '#64ffda',
        'green-tint': 'rgba(100, 255, 218, 0.1)',
        'pink': '#f57dff',
        'blue': '#13d3fb',
      }
    },
  },
  plugins: [],
}
