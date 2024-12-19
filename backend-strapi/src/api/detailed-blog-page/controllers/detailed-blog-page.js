"use strict";

/**
 * detailed-blog-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::detailed-blog-page.detailed-blog-page",
  ({ strapi }) => ({
    async findContentBySlug(ctx) {
      const { locale = "en", slug } = ctx.query;
      const baseUrl = strapi.config.get("server.url");
      const detailedBlogs = await fetch(
        `${baseUrl}/api/detailed-blog-page?populate=deep&locale=${locale}`
      );
      const result = await detailedBlogs.json();

      const singleBlogPageData = result.data.attributes.content.find(
        (item) =>
          item.__component === "section.detailed-blog-information" &&
          item.slug === slug
      );

      return singleBlogPageData;
    }, 
  })
);
