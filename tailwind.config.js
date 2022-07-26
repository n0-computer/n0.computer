module.exports = {
  purge: [
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
     'n0-pink': {
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
    },
   },
 },
 variants: {
   extend: {},
 },
 plugins: [],
}