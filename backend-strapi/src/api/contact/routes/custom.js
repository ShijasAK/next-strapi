"use strict"

module.exports = {
    routes: [
      {
        method: "POST",
        path: "/translate",
        handler: "contact.translateToArabic",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };