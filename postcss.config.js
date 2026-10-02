module.exports = {
    plugins: [
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('cssnano')(),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [require('@fullhuman/postcss-purgecss')({
                // purgecss 8 import()s this CJS file and ignores it, so pass it explicitly
                ...require('./purgecss.config.js')
              })]
            : []
    ]
};
