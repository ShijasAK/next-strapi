"use strict";

/**
 * contact controller
 */
const axios = require('axios');
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::contact.contact", ({ strapi }) => ({
  async translateToArabic(ctx) {
    try {
      const { component, fields } = ctx.request.body;

      let prompt = '';
      let fieldsToTranslate = {};

      switch (component) {
        case 'about-us':
          fieldsToTranslate = {
            title: fields.title,
            subTitle: fields.subTitle,
            feedback01: {
              userName: fields.feedback01.userName,
              role: fields.feedback01.role,
              feedback: fields.feedback01.feedback,
            },
            feedback02: {
              userName: fields.feedback02.userName,
              role: fields.feedback02.role,
              feedback: fields.feedback02.feedback,
            },
            feedback03: {
              userName: fields.feedback03.userName,
              role: fields.feedback03.role,
              feedback: fields.feedback03.feedback,
            },
          };
          prompt = `Please translate the following fields into Arabic: ${JSON.stringify(fieldsToTranslate)}`;
          break;
        
        case 'ai':
          fieldsToTranslate = {
            title1: fields.title1,
            title2: fields.title2,
            title3: fields.title3,
            subTitle1: fields.subTitle1,
            subTitle2: fields.subTitle2,
            description: fields.description,
            getStartedButtonLink: {
              name: fields.getStartedButtonLink.name,
            },
            aiFeaturesGrid: Array.isArray(fields.aiFeaturesGrid) ? fields.aiFeaturesGrid.map((item) => ({
              title: item.title,
              description: item.description,
            })) : [],
          };
          prompt = `Please translate the following fields into Arabic: ${JSON.stringify(fieldsToTranslate)}`;
          break;
          case 'fav-app':
            fieldsToTranslate = {
              title1: fields.title1,
              title2: fields.title2,
              title3: fields.title3,
              subTitle1: fields.subTitle1,
              subTitle2: fields.subTitle2,
              description: fields.description,
              getStartedButtonLink: {
                name: fields.getStartedButtonLink.name,
              },
              aiFeaturesGrid: Array.isArray(fields.aiFeaturesGrid) ? fields.aiFeaturesGrid.map((item) => ({
                title: item.title,
                description: item.description,
              })) : [],
            };
            prompt = `Please translate the following fields into Arabic: ${JSON.stringify(fieldsToTranslate)}`;
            break;

        // Add more cases for other components as needed
        default:
          ctx.throw(400, `Unsupported component type: ${component}`);
      }

      const response = await axios.post('https://exportx-api-ai.e8demo.com/openAI/text', {
        prompt
      });

      // Log the entire response to debug
      console.log('Translation API Response:', response.data);

      // Check if the response contains the translated text
      if (!response.data) {
        ctx.throw(500, 'Invalid response from the translation API');
      }

      const translatedFields = response.data;

      // Log the translated fields for debugging
      console.log('Translated Fields:', translatedFields);

      // Return the translated fields
      ctx.send({ translatedFields });
    } catch (error) {
      console.error(error);
      ctx.send({ error: error.message });
    }
  },
}));
