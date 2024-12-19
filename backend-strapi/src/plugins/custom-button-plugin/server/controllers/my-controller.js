'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('custom-button-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
