module.exports = {
    plugins: [
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('cssnano')(),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [require('@fullhuman/postcss-purgecss')({
                content: ['./_site/**/*.html']
              })]
            : []
    ]
};
