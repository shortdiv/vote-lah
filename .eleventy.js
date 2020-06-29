const { isModuleDeclaration } = require("babel-types");

module.exports = (eleventyConfig) => {
  return {
    dir: {
      input: "src",
      includes: "views",
      output: "dist"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  }
}