import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAboutUs extends Schema.Component {
  collectionName: 'components_blocks_about_uses';
  info: {
    displayName: 'What People Are Saying About Us Section';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    feedback01: Attribute.Component<'component.about-us'>;
    feedback02: Attribute.Component<'component.about-us'>;
    feedback03: Attribute.Component<'component.about-us'>;
  };
}

export interface BlocksBenefit extends Schema.Component {
  collectionName: 'components_blocks_benefits';
  info: {
    displayName: 'Employee Benefits Section';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    description: Attribute.Text;
    benefits: Attribute.Component<'component.text-box', true>;
    demo: Attribute.Component<'component.button'>;
    image: Attribute.Media;
  };
}

export interface BlocksBlogTiles extends Schema.Component {
  collectionName: 'components_blocks_blog_tiles';
  info: {
    displayName: 'Blog Tiles';
    icon: 'grid';
  };
  attributes: {
    image: Attribute.Media;
    date: Attribute.Date;
    title: Attribute.String;
    description: Attribute.Text;
    readMore: Attribute.Component<'buttons.read-more-button'>;
    slug: Attribute.String;
  };
}

export interface BlocksBlogsAndNews extends Schema.Component {
  collectionName: 'components_blocks_blogs_and_news';
  info: {
    displayName: 'Blogs & News';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.RichText;
    viewAllButton: Attribute.Component<'component.button'>;
    featuredBlogs: Attribute.Component<'component.blog', true>;
  };
}

export interface BlocksExperienceCount extends Schema.Component {
  collectionName: 'components_blocks_experience_counts';
  info: {
    displayName: 'experienceCount';
    icon: 'cloud';
  };
  attributes: {
    count: Attribute.Integer;
    countTitle: Attribute.String;
  };
}

export interface BlocksExperience extends Schema.Component {
  collectionName: 'components_blocks_experiences';
  info: {
    displayName: 'What\u2019s Our Customers Experience Section';
    icon: 'earth';
    description: '';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    experience: Attribute.Component<'blocks.experience-count', true>;
  };
}

export interface BlocksFaq extends Schema.Component {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'Frequently Asked Questions Section';
    icon: 'question';
    description: '';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    contactUsButton: Attribute.Component<'component.button'>;
    questionsAndAnswers: Attribute.Component<'component.faq', true>;
  };
}

export interface BlocksFavApp extends Schema.Component {
  collectionName: 'components_blocks_fav_apps';
  info: {
    displayName: 'Integrated With Your Favorite Apps Section';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    appImage: Attribute.Media;
  };
}

export interface BlocksFooterEmail extends Schema.Component {
  collectionName: 'components_blocks_footer_emails';
  info: {
    displayName: 'Footer Email';
    icon: 'arrowUp';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface BlocksFooterTelephone extends Schema.Component {
  collectionName: 'components_blocks_footer_telephones';
  info: {
    displayName: 'Footer Telephone';
    icon: 'phone';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface BlocksFooterWhatsapp extends Schema.Component {
  collectionName: 'components_blocks_footer_whatsapps';
  info: {
    displayName: 'Footer Whatsapp';
    icon: 'picture';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface BlocksFooter extends Schema.Component {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'Footer';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    logoLink: Attribute.String;
    copyrights: Attribute.String;
    footerOptions: Attribute.Component<'component.nav-bar', true>;
    footerTelephone: Attribute.Component<'blocks.footer-telephone'>;
    footerWhatsapp: Attribute.Component<'blocks.footer-whatsapp'>;
    footerEmail: Attribute.Component<'blocks.footer-email'>;
  };
}

export interface BlocksForm extends Schema.Component {
  collectionName: 'components_blocks_forms';
  info: {
    displayName: 'Book a Demo Section';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    logo: Attribute.Media;
    submit: Attribute.Component<'component.button'>;
    phonePrefix: Attribute.Component<'component.phone-prefix', true>;
    nameField: Attribute.Component<'contact-fileds.contact-form-fields'>;
    emailField: Attribute.Component<'contact-fileds.contact-form-fields'>;
    messageField: Attribute.Component<'contact-fileds.contact-form-fields'>;
    phoneNumberField: Attribute.Component<'contact-fileds.contact-form-fields'>;
  };
}

export interface BlocksPhoneLogo extends Schema.Component {
  collectionName: 'components_blocks_phone_logos';
  info: {
    displayName: 'Phone Logo';
    icon: 'code';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface BlocksPriceTag extends Schema.Component {
  collectionName: 'components_blocks_price_tags';
  info: {
    displayName: 'What\u2019s Our Pricing & Plans Section';
    icon: 'priceTag';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    description: Attribute.Text;
    priceSection: Attribute.Component<'component.pricing', true>;
  };
}

export interface ButtonsBlogButton extends Schema.Component {
  collectionName: 'components_buttons_blog_buttons';
  info: {
    displayName: 'Blog Button';
    icon: 'bold';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ButtonsHomeButton extends Schema.Component {
  collectionName: 'components_buttons_home_buttons';
  info: {
    displayName: 'Home Button';
    icon: 'arrowLeft';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ButtonsReadMoreButton extends Schema.Component {
  collectionName: 'components_buttons_read_more_buttons';
  info: {
    displayName: 'Read More Button';
    icon: 'exit';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ButtonsViewAllButton extends Schema.Component {
  collectionName: 'components_buttons_view_all_buttons';
  info: {
    displayName: 'View All Button';
    icon: 'quote';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface CardsAccurateCard extends Schema.Component {
  collectionName: 'components_cards_accurate_cards';
  info: {
    displayName: 'Accurate Card';
    icon: 'check';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    description: Attribute.Text;
    image01: Attribute.Media;
    image02: Attribute.Media;
  };
}

export interface CardsAchievementsCard extends Schema.Component {
  collectionName: 'components_card_01_achievements_cards';
  info: {
    displayName: 'Achievements Card';
    icon: 'chartBubble';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    description: Attribute.Text;
    image01: Attribute.Media;
    image02: Attribute.Media;
    image03: Attribute.Media;
  };
}

export interface CardsBirthdayCard extends Schema.Component {
  collectionName: 'components_cards_birthday_cards';
  info: {
    displayName: 'Birthday Card';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    description: Attribute.Text;
    image01: Attribute.Media;
    image02: Attribute.Media;
  };
}

export interface ComponentAboutUs extends Schema.Component {
  collectionName: 'components_component_aboutuses';
  info: {
    displayName: 'AboutUs';
    icon: 'cog';
  };
  attributes: {
    userImage: Attribute.Media;
    userName: Attribute.String;
    role: Attribute.String;
    companyLogo: Attribute.Media;
    feedback: Attribute.Text;
  };
}

export interface ComponentBlog extends Schema.Component {
  collectionName: 'components_component_blogs';
  info: {
    displayName: 'blog';
    icon: 'crop';
    description: '';
  };
  attributes: {
    date: Attribute.String;
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
    readMoreButton: Attribute.Component<'component.button'>;
    blogContent: Attribute.RichText;
    slug: Attribute.String;
  };
}

export interface ComponentButton extends Schema.Component {
  collectionName: 'components_component_buttons';
  info: {
    displayName: 'button';
    icon: 'bold';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentCollaboration extends Schema.Component {
  collectionName: 'components_component_collaborations';
  info: {
    displayName: 'collaboration';
    icon: 'expand';
    description: '';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    description: Attribute.Text;
    logo: Attribute.Media;
  };
}

export interface ComponentDemoField extends Schema.Component {
  collectionName: 'components_component_demo_fields';
  info: {
    displayName: 'DemoField';
    icon: 'server';
    description: '';
  };
  attributes: {
    type: Attribute.String;
    name: Attribute.String;
    placeHolder: Attribute.String;
  };
}

export interface ComponentDetailedBlog extends Schema.Component {
  collectionName: 'components_component_detailed_blogs';
  info: {
    displayName: 'Detailed Blog';
    icon: 'earth';
    description: '';
  };
  attributes: {
    pageTitle: Attribute.String;
    blogInfo: Attribute.Component<'section.detailed-blog-information'>;
    linkToHome: Attribute.Component<'buttons.home-button'>;
    linkToBlogs: Attribute.Component<'buttons.blog-button'>;
  };
}

export interface ComponentFaq extends Schema.Component {
  collectionName: 'components_component_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'discuss';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
    isAnsHidden: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComponentFeaturedBlogs extends Schema.Component {
  collectionName: 'components_component_featured_blogs';
  info: {
    displayName: 'Latest Blogs & News Featured Section';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    mainTitle: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    viewAll: Attribute.Component<'buttons.view-all-button'>;
    blogTiles: Attribute.Component<'blocks.blog-tiles', true>;
  };
}

export interface ComponentGrid extends Schema.Component {
  collectionName: 'components_component_grids';
  info: {
    displayName: 'Grid';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ComponentGrowth extends Schema.Component {
  collectionName: 'components_component_growths';
  info: {
    displayName: 'growth';
    icon: 'arrowUp';
    description: '';
  };
  attributes: {
    count: Attribute.Integer;
    countTitle: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ComponentLanding extends Schema.Component {
  collectionName: 'components_component_landings';
  info: {
    displayName: 'Landing';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface ComponentNavBar extends Schema.Component {
  collectionName: 'components_component_nav_bars';
  info: {
    displayName: 'navBar';
    icon: 'database';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    api_ID: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComponentPhonePrefix extends Schema.Component {
  collectionName: 'components_component_phone_prefixes';
  info: {
    displayName: 'Phone Prefix';
    icon: 'earth';
  };
  attributes: {
    prefix: Attribute.Integer;
  };
}

export interface ComponentPricing extends Schema.Component {
  collectionName: 'components_component_pricings';
  info: {
    displayName: 'pricing';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    planTitle: Attribute.String;
    planDesc: Attribute.Text;
    planType: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    isPopular: Attribute.Boolean & Attribute.DefaultTo<false>;
    features: Attribute.Component<'component.text-box', true>;
    book: Attribute.Component<'component.button'>;
  };
}

export interface ComponentTextBox extends Schema.Component {
  collectionName: 'components_component_text_boxes';
  info: {
    displayName: 'textBox';
    icon: 'file';
    description: '';
  };
  attributes: {
    feature: Attribute.Text;
  };
}

export interface ContactFiledsContactFormFields extends Schema.Component {
  collectionName: 'components_contact_fileds_contact_form_fields';
  info: {
    displayName: 'Contact Form Fields';
    icon: 'phone';
  };
  attributes: {
    type: Attribute.String;
    name: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface SectionAi extends Schema.Component {
  collectionName: 'components_section_ais';
  info: {
    displayName: 'Elevate Your HR Experience With AI Section';
    icon: 'message';
    description: '';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    subTitle: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    getStartedButtonLink: Attribute.Component<'component.button'>;
    aiFeaturesGrid: Attribute.Component<'component.grid', true>;
  };
}

export interface SectionCard extends Schema.Component {
  collectionName: 'components_section_cards';
  info: {
    displayName: 'Achievements, Tracking & Celebrate Section';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    card01: Attribute.Component<'cards.achievements-card'>;
    card02: Attribute.Component<'cards.accurate-card'>;
    card03: Attribute.Component<'cards.birthday-card'>;
  };
}

export interface SectionCompanies extends Schema.Component {
  collectionName: 'components_section_companies';
  info: {
    displayName: 'Companies That Trust Us Section';
    icon: 'link';
  };
  attributes: {
    trustedCompanies: Attribute.Component<'component.collaboration'>;
    demo: Attribute.Component<'component.button'>;
  };
}

export interface SectionCount extends Schema.Component {
  collectionName: 'components_section_counts';
  info: {
    displayName: 'An intuitive & Powerful HR Software Section';
    icon: 'archive';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    countInfo: Attribute.Component<'component.growth', true>;
  };
}

export interface SectionDetailedBlogInformation extends Schema.Component {
  collectionName: 'components_section_detailed_blog_informations';
  info: {
    displayName: 'Detailed Blog Information';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    pageTitle: Attribute.String;
    linkToHome: Attribute.Component<'buttons.home-button'>;
    linkToBlogs: Attribute.Component<'buttons.blog-button'>;
    date: Attribute.Date;
    title: Attribute.String;
    image: Attribute.Media;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    slug: Attribute.String;
  };
}

export interface SectionFoster extends Schema.Component {
  collectionName: 'components_section_fosters';
  info: {
    displayName: 'Foster';
    icon: 'globe';
    description: '';
  };
  attributes: {
    fosterTitle: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    fosterDescription: Attribute.Text;
    reqDemoButtonLink: Attribute.Component<'component.button'>;
    imageCarousel: Attribute.Media;
  };
}

export interface SectionGrid extends Schema.Component {
  collectionName: 'components_section_grids';
  info: {
    displayName: 'The One Solution for Managing Your Organization & Employees Section';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    description: Attribute.String;
    reqDemoButton: Attribute.Component<'component.button'>;
    featuresGrid: Attribute.Component<'component.grid', true>;
  };
}

export interface SectionHeader extends Schema.Component {
  collectionName: 'components_section_headers';
  info: {
    displayName: 'Header';
    icon: 'layer';
    description: '';
  };
  attributes: {
    logoLink: Attribute.String;
    headerPhoneLogo: Attribute.Component<'blocks.phone-logo'>;
    navItem: Attribute.Component<'component.nav-bar', true>;
    demoButton: Attribute.Component<'component.button'>;
  };
}

export interface SectionHero extends Schema.Component {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'Top HR Software in Dubai Section';
    icon: 'expand';
    description: '';
  };
  attributes: {
    HeroPage: Attribute.Component<'component.landing'>;
    link: Attribute.Component<'component.button'>;
    banner_01: Attribute.Media;
    banner_02: Attribute.Media;
    banner_03: Attribute.Media;
    banner_04: Attribute.Media;
    banner_05: Attribute.Media;
    banner_06: Attribute.Media;
    banner_07: Attribute.Media;
  };
}

export interface SectionPackage extends Schema.Component {
  collectionName: 'components_section_packages';
  info: {
    displayName: 'Transform Your Organization With Our Feature-Packed HRMS Software Section';
    icon: 'cog';
    description: '';
  };
  attributes: {
    heading: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    pages: Attribute.Component<'component.grid', true>;
  };
}

export interface SectionPayroll extends Schema.Component {
  collectionName: 'components_section_payrolls';
  info: {
    displayName: 'Benefits Of A Complete HR & Payroll Platform Section';
    icon: 'file';
    description: '';
  };
  attributes: {
    payrollTitle: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    description: Attribute.Text;
    reqDemoButtonLink: Attribute.Component<'component.button'>;
    card01: Attribute.Component<'component.grid'>;
    card02: Attribute.Component<'component.grid'>;
    card03: Attribute.Component<'component.grid'>;
  };
}

export interface SectionTransform extends Schema.Component {
  collectionName: 'components_section_transforms';
  info: {
    displayName: 'Transform, Foster & Web-App Logo Sections';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    transformTitle: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    transformDescription: Attribute.Text;
    image: Attribute.Media;
    foster: Attribute.Component<'section.foster'>;
    mobileAppImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.about-us': BlocksAboutUs;
      'blocks.benefit': BlocksBenefit;
      'blocks.blog-tiles': BlocksBlogTiles;
      'blocks.blogs-and-news': BlocksBlogsAndNews;
      'blocks.experience-count': BlocksExperienceCount;
      'blocks.experience': BlocksExperience;
      'blocks.faq': BlocksFaq;
      'blocks.fav-app': BlocksFavApp;
      'blocks.footer-email': BlocksFooterEmail;
      'blocks.footer-telephone': BlocksFooterTelephone;
      'blocks.footer-whatsapp': BlocksFooterWhatsapp;
      'blocks.footer': BlocksFooter;
      'blocks.form': BlocksForm;
      'blocks.phone-logo': BlocksPhoneLogo;
      'blocks.price-tag': BlocksPriceTag;
      'buttons.blog-button': ButtonsBlogButton;
      'buttons.home-button': ButtonsHomeButton;
      'buttons.read-more-button': ButtonsReadMoreButton;
      'buttons.view-all-button': ButtonsViewAllButton;
      'cards.accurate-card': CardsAccurateCard;
      'cards.achievements-card': CardsAchievementsCard;
      'cards.birthday-card': CardsBirthdayCard;
      'component.about-us': ComponentAboutUs;
      'component.blog': ComponentBlog;
      'component.button': ComponentButton;
      'component.collaboration': ComponentCollaboration;
      'component.demo-field': ComponentDemoField;
      'component.detailed-blog': ComponentDetailedBlog;
      'component.faq': ComponentFaq;
      'component.featured-blogs': ComponentFeaturedBlogs;
      'component.grid': ComponentGrid;
      'component.growth': ComponentGrowth;
      'component.landing': ComponentLanding;
      'component.nav-bar': ComponentNavBar;
      'component.phone-prefix': ComponentPhonePrefix;
      'component.pricing': ComponentPricing;
      'component.text-box': ComponentTextBox;
      'contact-fileds.contact-form-fields': ContactFiledsContactFormFields;
      'section.ai': SectionAi;
      'section.card': SectionCard;
      'section.companies': SectionCompanies;
      'section.count': SectionCount;
      'section.detailed-blog-information': SectionDetailedBlogInformation;
      'section.foster': SectionFoster;
      'section.grid': SectionGrid;
      'section.header': SectionHeader;
      'section.hero': SectionHero;
      'section.package': SectionPackage;
      'section.payroll': SectionPayroll;
      'section.transform': SectionTransform;
    }
  }
}
