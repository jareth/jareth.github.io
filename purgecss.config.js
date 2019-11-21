module.exports = {
    content: ["./_site/**/*.html"],

    // Tailwind CSS config
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};
