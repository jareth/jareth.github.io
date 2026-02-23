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

  // Ignore manifest.yml to prevent infinite loop when Webpack writes it
  eleventyConfig.watchIgnores.add("_data/manifest.yml");

  // Collections
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_projects/*.md");
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/*.md");
  });

  // Custom date filter (supports Jekyll-style formats)
  eleventyConfig.addFilter("date", function(dateObj, format) {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    if (format === "%Y-%m-%d") {
      return d.toISOString().split("T")[0];
    } else if (format === "%b %d, %Y") {
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      });
    }
    return d.toISOString();
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
    templateFormats: ["html", "md", "liquid", "njk"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};
