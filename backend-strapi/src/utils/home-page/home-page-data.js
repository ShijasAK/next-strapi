"use strict";

const formatDate = require("../../common/format-date");
const imageFormat = require("../../common/image_format");
const cheerio = require("cheerio");

const formatAboutUs = async (component) => {
  const $ = cheerio.load(component.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  return {
    id: component.id,
    title: cleanedTitle,
    feedback01: {
      name: component.feedback01.userName,
      role: component.feedback01.role,
      userImage: imageFormat(component.feedback01.userImage.data),
      companyLogo: imageFormat(component.feedback01.companyLogo.data),
      feedback: component.feedback01.feedback,
    },
    feedback02: {
      name: component.feedback02.userName,
      role: component.feedback02.role,
      userImage: imageFormat(component.feedback02.userImage.data),
      companyLogo: imageFormat(component.feedback02.companyLogo.data),
      feedback: component.feedback02.feedback,
    },
    feedback03: {
      name: component.feedback03.userName,
      role: component.feedback03.role,
      userImage: imageFormat(component.feedback03.userImage.data),
      companyLogo: imageFormat(component.feedback03.companyLogo.data),
      feedback: component.feedback03.feedback,
    },
  };
};

const formatAiSection = async (component) => {
  let $ = cheerio.load(component.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  $ = cheerio.load(component.subTitle);
  const cleanedSubTitle = $("div.raw-html-embed").html();
  $ = cheerio.load(component.description);
  const cleanedDescription = $("div.raw-html-embed").html();
  return {
    id: component.id,
    title: cleanedTitle,
    subTitle: cleanedSubTitle,
    description: cleanedDescription,
    button: component.getStartedButtonLink,
    details: Array.isArray(component.aiFeaturesGrid)
      ? component.aiFeaturesGrid.map((item) => ({
          title: item.title,
          description: item.description,
          image: item.image ? imageFormat(item.image.data) : null,
        }))
      : [],
  };
};

const formatFavAppsSection = async (component) => {
  let $ = cheerio.load(component.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  return {
    id: component.id,
    title: cleanedTitle,
    images: imageFormat(component.appImage.data),
  };
};

const formatFormSection = async (component) => {
  let $ = cheerio.load(component.title);
  $("span").addClass("rel.display_inline");
  const cleanedTitle = $("div.raw-html-embed").html();
  return {
    id: component.id,
    title: cleanedTitle,
    logo: component.logo ? imageFormat(component.logo.data) : null,
    phonePrefix: component.phonePrefix,
    nameField: component.nameField,
    emailField: component.emailField,
    phoneNumberField: component.phoneNumberField,
    messageField: component.messageField,
    button: component.submit,
  };
};

const formatFeaturedBlogsSection = async (component) => {
  let $ = cheerio.load(component.mainTitle);
  const cleanedTitle = $("div.raw-html-embed").html();

  return {
    id: component.id,
    mainTitle: cleanedTitle,
    viewAllButton: component.viewAll,
    blogs: Array.isArray(component.blogTiles)
      ? component.blogTiles.map((blog) => ({
          title: blog.title,
          image: blog.image ? imageFormat(blog.image.data) : null,
          description: blog.description,
          date: formatDate(blog.date),
          button: blog.readMore,
          slug: blog.slug,
        }))
      : [],
  };
};

const formatCompaniesSection = async (component) => {
  const $ = cheerio.load(component.trustedCompanies.title);
  const cleanedTitle = $("div.raw-html-embed").html();
  return {
    id: component.id,
    title: cleanedTitle,
    description: component.trustedCompanies.description,
    logo: imageFormat(component.trustedCompanies.logo.data),
    button: component.demo,
  };
};
const formatCountSection = async (component) => {
  return {
    id: component.id,
    description: component.description,
    countInfo: Array.isArray(component.countInfo)
      ? component.countInfo.map((item) => {
          const $ = cheerio.load(item.countTitle);
          const cleanedTitle = $("div.raw-html-embed").html();
          return {
            title: cleanedTitle,
            count: item.count,
          };
        })
      : [],
  };
};

const formatBenefitSection = async (component) => {
  const $ = cheerio.load(component.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  return {
    id: component.id,
    title: cleanedTitle,
    description: component.description,
    button: component.demo,
    image: component.image ? imageFormat(component.image.data) : null,
    features: Array.isArray(component.benefits)
      ? component.benefits.map((blog) => ({
          title: blog.feature,
        }))
      : [],
  };
};
const formatCardsSection = async (component) => {
  let $ = cheerio.load(component.card01.title);
  const cleanedTitle1 = $("div.raw-html-embed").html();

  $ = cheerio.load(component.card02.title);
  const cleanedTitle2 = $("div.raw-html-embed").html();

  $ = cheerio.load(component.card03.title);
  const cleanedTitle3 = $("div.raw-html-embed").html();

  return {
    id: component.id,
    card01: {
      title: cleanedTitle1,
      description: component.card01.description,
      img01: imageFormat(component.card01.image01.data),
      img02: imageFormat(component.card01.image02.data),
      img03: imageFormat(component.card01.image03.data),
    },
    card02: {
      title: cleanedTitle2,
      description: component.card02.description,
      img01: imageFormat(component.card02.image01.data),
      img02: imageFormat(component.card02.image02.data),
    },
    card03: {
      title: cleanedTitle3,
      description: component.card03.description,
      img01: imageFormat(component.card03.image01.data),
      img02: imageFormat(component.card03.image02.data),
    },
  };
};

const formatExperienceSection = async (component) => {
  let $ = cheerio.load(component.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  return {
    id: component.id,
    title: cleanedTitle,
    percentage: Array.isArray(component.experience)
      ? component.experience.map((item) => ({
          title: item.countTitle,
          count: item.count,
        }))
      : [],
  };
};

const formatFaqSection = async (component) => {
  let $ = cheerio.load(component.title);
  const cleanedTitle = $("div.raw-html-embed").html();
  $ = cheerio.load(component.description);
  const cleanedDescription = $("div.raw-html-embed").html();

  return {
    id: component.id,
    title: cleanedTitle,
    description: cleanedDescription,
    button: component.contactUsButton,
    qAndA: Array.isArray(component.questionsAndAnswers)
      ? component.questionsAndAnswers.map((item) => ({
          question: item.question,
          answer: item.answer,
          isAnswerHidden: item.isAnsHidden,
        }))
      : [],
  };
};
const formatFooterSection = async (component) => {
  return {
    id: component.id,
    link: component.logoLink,
    copyrights: component.copyrights,
    telephone: component.footerTelephone,
    whatsApp: component.footerWhatsapp,
    email: component.footerEmail,
    options: Array.isArray(component.footerOptions)
      ? component.footerOptions.map((item) => ({
          name: item.name,
          link: item.link,
          slug: item.slug,
          isExternal: item.isExternal,
        }))
      : [],
  };
};

const formatHeaderSection = async (component) => {
  return {
    id: component.id,
    logoLink: component.logoLink,
    button: component.demoButton,
    phoneLogo: component.headerPhoneLogo,
    options: Array.isArray(component.navItem)
      ? component.navItem.map((item) => ({
          name: item.name,
          link: item.link,
          page: item.api_ID,
          isExternal: item.isExternal,
        }))
      : [],
  };
};
const formatHeroSection = async (component) => {
  return {
    id: component.id,
    title: component.HeroPage?.title,
    subTitle: component.HeroPage?.subTitle,
    description: component.HeroPage?.description,
    button: component.link,
    bannerImage01: imageFormat(component.banner_01?.data),
    bannerImage02: imageFormat(component.banner_02?.data),
    bannerImage03: imageFormat(component.banner_03?.data),
    bannerImage04: imageFormat(component.banner_04?.data),
    bannerImage05: imageFormat(component.banner_05?.data),
    bannerImage06: imageFormat(component.banner_06?.data),
    bannerImage07: imageFormat(component.banner_07?.data),
  };
};
const formatPayrollSection = async (component) => {
  const $ = cheerio.load(component.payrollTitle);
  const cleanedPayrollTitle = $("div.raw-html-embed").html();
  return {
    id: component.id,
    title: cleanedPayrollTitle,
    description: component.description,
    button: component.reqDemoButtonLink,
    card01: {
      title: component.card01.title,
      description: component.card01.description,
      image: imageFormat(component.card01.image.data),
    },
    card02: {
      title: component.card02.title,
      description: component.card02.description,
      image: imageFormat(component.card02.image.data),
    },
    card03: {
      title: component.card03.title,
      description: component.card03.description,
      image: imageFormat(component.card03.image.data),
    },
  };
};

const formatGridSection = async (component) => {
  let $ = cheerio.load(component.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  return {
    id: component.id,
    title: cleanedTitle,
    description: component.description,
    button: component.reqDemoButton,
    gridFeatures: Array.isArray(component.featuresGrid)
      ? component.featuresGrid.map((item) => ({
          title: item.title,
          description: item.description,
          image: imageFormat(item.image.data),
        }))
      : [],
  };
};
const formatPriceSection = async (component) => {
  let $ = cheerio.load(component.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  return {
    id: component.id,
    title: cleanedTitle,
    description: component.description,
    priceCards: Array.isArray(component.priceSection)
      ? component.priceSection.map((item) => ({
          title: item.planTitle,
          description: item.planDesc,
          type: item.planType,
          isPopular: item.isPopular,
          button: item.book,
          features: Array.isArray(item.features)
            ? item.features.map((item) => ({
                feature: item.feature,
              }))
            : [],
        }))
      : [],
  };
};

const formatSoftwarePackageSection = async (component) => {
  const $ = cheerio.load(component.heading);
  const cleanedHeading = $("div.raw-html-embed").html();
  return {
    id: component.id,
    title: cleanedHeading,
    pages: Array.isArray(component.pages)
      ? component.pages.map((item) => ({
          title: item.title,
          description: item.description,
          image: imageFormat(item.image.data),
        }))
      : [],
  };
};
const formatTransformOrgSection = async (component) => {
  let $ = cheerio.load(component.transformTitle);
  const cleanedTransformTitle = $("div.raw-html-embed").html();
  $ = cheerio.load(component.foster.fosterTitle);
  const cleanedFosterTitle = $("div.raw-html-embed").html();
  return {
    id: component.id,
    transformTitle: cleanedTransformTitle,
    transformDescription: component.transformDescription,
    image: component.image ? imageFormat(component.image?.data) : null,
    fosterTitle: cleanedFosterTitle,
    fosterDescription: component.foster.fosterDescription,
    button: component.foster.reqDemoButtonLink,
    imageCarousel: imageFormat(component.foster.imageCarousel.data),
    mobileAppImage: component.mobileAppImage
      ? imageFormat(component.mobileAppImage.data)
      : null,
  };
};

module.exports = {
  formatAboutUs,
  formatAiSection,
  formatFavAppsSection,
  formatFormSection,
  formatFeaturedBlogsSection,
  formatCompaniesSection,
  formatCountSection,
  formatBenefitSection,
  formatCardsSection,
  formatExperienceSection,
  formatFaqSection,
  formatFooterSection,
  // formatFosterSection,
  formatHeaderSection,
  formatHeroSection,
  formatPayrollSection,
  formatGridSection,
  formatPriceSection,
  formatSoftwarePackageSection,
  formatTransformOrgSection,
};
