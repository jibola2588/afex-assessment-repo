/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'gray': '#5F6D7E',
        'primary': '#D71E0E',
        'secondary': '#1F1F1F',
        'lightRed': '#E2341D',
        'gRed': '#FFF2F0',
        'DRed': '#F04438',
        'green': '#2D8A39',
        'gGreen': '#F0FAF0',
        'DGreen': '#5DC264',
        'sideNav': '#EAEBF0',
        'gIcons': '#F3F9FE',
         'content':'#FAFBFC',
         'topBorder':'#DAE0E6'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
