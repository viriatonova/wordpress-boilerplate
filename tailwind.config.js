module.exports = {
  mode: 'jit',
  purge: [
    '**/*.php',
    '*.php',
    'assets/js/**/*.js',
    'assets/css/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
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
