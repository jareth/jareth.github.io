const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginNavigation);

  // Support YAML data files
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy("dist");

  // Watch targets
  eleventyConfig.addWatchTarget("./assets/css/");
  eleventyConfig.addWatchTarget("./dist/");

  // Collections
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_projects/*.md");
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/*.md");
  });

  // Liquid options (for Jekyll compatibility)
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["html", "md", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};
