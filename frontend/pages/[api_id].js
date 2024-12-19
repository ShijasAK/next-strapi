import React from "react";
import rel from "@/styles/rel.module.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
import { useRouter } from "next/router";

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

const DynamicPage = ({
  data,
  title,
  metaDescription,
  headerData,
  footerData,
  formData,
}) => {
  const router = useRouter();

  const handleGoToContact = () => {
    router.push("/#contact");
  };

  return (
    <>
      <HTMLHead title={title} metaDescription={metaDescription} />
      <main className={`${rel.app_main} ${rel.footer_margin}`}>
        <Header data={headerData} />
        {data.map((section, index) => {
          const componentName = section.__component.split(".").pop();
          const Component = componentsMap[componentName];

          if (!Component) {
            return null;
          }

          return (
            <Component
              key={index}
              data={section}
              goToContact={handleGoToContact}
            />
          );
        })}
        {/* <CelebrateEmployees data={formData}  /> */}
        <Footer data={footerData} goToContact={handleGoToContact} />
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  const { api_id } = context.params;
  const locale = context.query.locale || "en";

  // Ensure api_id is defined
  if (!api_id) {
    return {
      notFound: true,
    };
  }

  // Construct the API URL
  const url = `https://rel8hrdev.e8demo.com/api/${api_id}?populate=deep&locale=${locale}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const result = await response.json();
    const pageData = result.data.attributes[api_id] || [];
    const title = result.data.attributes.title || "Default Title";
    const metaDescription =
      result.data.attributes.metaDescription || "Default Description";

    const relatedRes = await fetch(
      `https://rel8hrdev.e8demo.com/api/home-page?populate=deep&locale=${locale}`
    );
    const relatedResult = await relatedRes.json();

    const headerData = relatedResult.data.attributes.homePageComponents.find(
      (item) => item.__component.split(".").pop() === "header"
    );

    const footerData = relatedResult.data.attributes.homePageComponents.find(
      (item) => item.__component.split(".").pop() === "footer"
    );

    const formData = relatedResult.data.attributes.homePageComponents.find(
      (item) => item.__component.split(".").pop() === "form"
    );

    return {
      props: {
        data: pageData,
        title,
        metaDescription,
        headerData,
        footerData,
        formData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
        data: [],
        title: "Error",
        metaDescription: "Error fetching data",
      },
    };
  }
}


export default DynamicPage;
