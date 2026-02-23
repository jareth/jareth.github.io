const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './_site/**/*.{html,js}',
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono]
      },
      boxShadow: {
        'amber': '0 0 20px rgba(245, 158, 11, 0.25)',
        'amber-dot': '0 0 8px rgba(245, 158, 11, 0.6)',
        'amber-glow': '0 0 30px rgba(245, 158, 11, 0.4), 0 0 60px rgba(245, 158, 11, 0.2)',
        'amber-text': '0 0 10px rgba(245, 158, 11, 0.8)'
      }
    }
  },
  variants: {},
  plugins: []
};
