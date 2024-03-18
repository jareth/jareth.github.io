const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./_site/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: []
};
