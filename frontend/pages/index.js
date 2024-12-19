import React, { useState } from "react";
import rel from "@/styles/rel.module.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useHome from "@/components/Logic/useHome";
import HTMLHead from "@/components/HTMLHead";
import Stacksection from "@/components/Stacksection";
import BannerNew from "@/components/BannerNew";
import MoreCollaboration from "@/components/MoreCollaboration";
import Solutions from "@/components/Solutions";
import Transform from "@/components/Transform";
import Testimonial from "@/components/Testimonial";
import Elevate from "@/components/Elevate";
import CustomersExperience from "@/components/CustomersExperience";
import Faq from "@/components/Faq";
import CelebrateEmployees from "@/components/CelebrateEmployees";
import CompleteHR from "@/components/CompleteHR";
import MocTab from "@/components/MocTab";
import RecommendedBlog from "@/components/RecommendedBlog";
import Pricing from "@/components/Pricing";
import Benefits from "@/components/Benefits";
import Integrated from "@/components/Integrated";
import CompaniesTrust from "@/components/CompaniesTrust";

import "swiper/scss/navigation";
import "swiper/css";

const componentsMap = {
  header: Header,
  hero: BannerNew,
  count: MoreCollaboration,
  grid: Solutions,
  card: Stacksection,
  ai: Elevate,
  transform: Transform,
  package: MocTab,
  payroll: CompleteHR,
  "fav-app": Integrated,
  benefit: Benefits,
  companies: CompaniesTrust,
  "about-us": Testimonial,
  experience: CustomersExperience,
  faq: Faq,
  "price-tag": Pricing,
  "featured-blogs": RecommendedBlog,
  form: CelebrateEmployees,
  footer: Footer,
};

const Homepage = ({ TemplateListDataAll }) => {
  const { goToContact, title, metaDescription } = useHome();

  return (
    <>
      <HTMLHead title={title} metaDescription={metaDescription} />
      <main className={`${rel.app_main} ${rel.footer_margin}`}>
        <Header />
        {TemplateListDataAll.map((section, index) => {
          const componentName = section.__component.split(".").pop();
          const Component = componentsMap[componentName];

          if (!Component) {
            return null;
          }

          return (
            <Component key={index} data={section} goToContact={goToContact} />
          );
        })}
        <Footer goToContact={goToContact} />
      </main>
    </>
  );
};

export default Homepage;

export async function getServerSideProps(context) {
  const locale = context.query.locale || "en";
  const homePageDataUrl = `https://rel8hrdev.e8demo.com/api/home-page?populate=deep&locale=${locale}`;

  try {
    const response = await fetch(homePageDataUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch template data: ${response.statusText}`);
    }

    const templateData = await response.json();

    const homePageComponents =
      templateData.data.attributes.homePageComponents || [];

    return {
      props: {
        TemplateListDataAll: homePageComponents,
        initialLocale: locale,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
        TemplateListDataAll: [],
        initialLocale: locale,
      },
    };
  }
}
