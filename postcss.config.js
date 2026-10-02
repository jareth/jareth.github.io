module.exports = {
    plugins: [
        require('@tailwindcss/postcss'),
        ...process.env.NODE_ENV === 'production'
            ? [require('@fullhuman/postcss-purgecss')({
                // purgecss 8 import()s this CJS file and ignores it, so pass it explicitly
                ...require('./purgecss.config.js')
              })]
            : []
    ]
};
