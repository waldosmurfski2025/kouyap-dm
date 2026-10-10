module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    pathPrefix: "/kouyap-dm/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};