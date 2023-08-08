/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'golden': '#EF5636',
        'footerbg': '#15161A',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'black': '#000000',
        'pink': '#9d174d',
        'silver': '#ecebff',
        'violet': '#2e1065',
        'bermuda': '#78dcca',
      },
    },
    container:{
      center: true
    }
  },
  plugins: [],
}

