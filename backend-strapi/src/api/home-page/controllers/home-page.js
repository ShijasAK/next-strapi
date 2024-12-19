"use strict";

/**
 * home-page controller
 */
const axios = require("axios");
const cheerio = require("cheerio");
const formatDate = require("../../../common/format-date");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home-page.home-page");
