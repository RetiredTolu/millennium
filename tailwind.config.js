/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      backgroundImage: {
        'bg-jet': "url('../assets/images/bg-jet.png')",
        'lambo': "url('../assets/images/millennium_lambo.png')",
        'luxury': "url('../assets/images/millennium_luxury.png')",
        'yatch': "url('../assets/images/millennium_yatch.png')",
        'jets': "url('../assets/images/millennium_jet.png')",
        'igNewYear': "url('../assets/images/ig_newyear.jpg')",
        'igNewMonth': "url('../assets/images/ig_newmonth.jpg')",
        'igLusry': "url('../assets/images/ig_lusry.jpg')",
        'igFerrari': "url('../assets/images/ig_ferrari.jpg')",
        'igYatch': "url('../assets/images/ig_yatch.jpg')",
        'about': "url('../assets/images/bg-about.png')",
        'services': "url('../assets/images/bg-services.png')",
        'md-services': "url('../assets/images/md-services.png')",
        'jet': "url('../assets/images/jet.png')",
        'property': "url('../assets/images/property.png')",
        'travel': "url('../assets/images/travel.png')",
        'villa': "url('../assets/images/villa.png')",
        'art': "url('../assets/images/art.png')",
        'hotels': "url('../assets/images/hotels.png')",
        'gifting': "url('../assets/images/gifting.png')",
        'yatching': "url('../assets/images/yatching.png')",
      },

      colors: {
        main: '#1E1E1E',
        paleGold: '#B6862B',
        veryPaleGold: '#BF9A53',
        lightPaleGold: '#D8A950',
        veryLightPaleGold: '#FFE6B7',
        milkyWay: '#DFBF81',
        gradi: '#D8A950',
        milk: '#D9D9D9'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        allenoire: ["ALLENOIRE", "cursive"],
      },
    },
  },
  plugins: [],

}