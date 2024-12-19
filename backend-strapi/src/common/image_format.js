// utils/imageFormat.js
const baseUrl = strapi.config.get("server.url");

function imageFormat(images) {
  if (Array.isArray(images)) {
    return images.map(img => {
      if (img && img.attributes) {
        return {
          id: img.id,
          name: img.attributes.name,
          alternativeText: img.attributes.alternativeText,
          url: baseUrl + img.attributes.url,
          width: img.attributes.width,
          height: img.attributes.height,
        };
      }
      return null;
    }).filter(img => img !== null);
  } else if (images && images.attributes) {
    return {
      id: images.id,
      name: images.attributes.name,
      alternativeText: images.attributes.alternativeText,
      url: baseUrl + images.attributes.url,
      width: images.attributes.width,
      height: images.attributes.height,
    };
  } else {
    return [];
  }
}

module.exports = imageFormat;
