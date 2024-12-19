"use strict"

module.exports = {
    routes: [
      {
        method: "GET",
        path: "/detailed-blog/findOne",
        handler: "detailed-blog-page.findContentBySlug",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };