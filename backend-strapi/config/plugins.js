module.exports = ({ env }) => ({
  // "custom-button-plugin": {
  //   enabled: true,
  //   resolve: "./src/plugins/custom-button-plugin",
  // },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5,
    }
  },

  translate: {                                                                                                        
    enabled: true,
    config: {
      provider: "deepl",
      providerOptions: {
        apiKey: env("DEEPL_API_KEY"),
        localeMap: {
          EN: "EN-US",
          AR: "AR",                                                                                     
        },
      },
      translatedFieldTypes: [
        "string",
        { type: "text", format: "plain" },
        { type: "richtext", format: "markdown" },
        "component",
        "dynamiczone",
      ],
      translateRelations: true,
    },
  },
});
