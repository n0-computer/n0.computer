module.exports = {
  content: [
      './templates/**/*.html',
      './static/js/**/*.js',
  ],
 darkMode: 'class', // or 'media' or 'class'
 theme: {
   extend: {
    fontFamily: {
      'space': ['Space Grotesk', 'sans-serif'], 
      'space-mono': ['Space Mono', 'sans-serif'] 
    },
    colors: {
     'n0pink': {
        100: '#FFF4F3',
        200: '#FFE9E6',
        300: '#FFD2CC',
        400: '#FFBCB3',
        500: '#FFAC9C',
        600: '#E2847D',
        700: '#CC6E66',
        800: '#AF584F',
        900: '#99463D',
     },
     'n0gray': {
        50 : "#FAFAFA",
        100 : "#F4F4F5",
        200 : "#E4E4E7",
        300 : "#D4D4D8",
        400 : "#A1A1AA",
        500 : "#71717A",
        600 : "#52525B",
        700 : "#3F3F46",
        800 : "#27272A",
        900 : "#18181B",
        1000 : "#0E0E0F",
     },
     'irohPurple': {
        500: "#7C7CFF",
     }
    },
   },
 },
 variants: {
   extend: {},
 },
 plugins: [],
}