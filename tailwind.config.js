module.exports = {
  mode: 'jit',
  content: [
    './stricto/**/*.php',
    './stricto/*.php',
    './stricto/assets/js/**/*.js',
    './stricto/assets/css/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        'open': ['"Open Sans"', 'sans-serif'],
        'roboto': ['"Roboto Condensed"', 'sans-serif'],
        'didone': ['"Antic Didone"', 'serif']
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
