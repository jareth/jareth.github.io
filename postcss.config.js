module.exports = {
    plugins: [
        require('postcss-nested'),
        require('postcss-import'),
        require('tailwindcss'),
        require('cssnano')(),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [require('@fullhuman/postcss-purgecss')()]
            : []
    ]
};
