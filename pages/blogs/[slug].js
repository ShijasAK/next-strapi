import React, { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import rel from "@/styles/rel.module.scss";
import InnerBanner from "@/components/InnerBanner";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import RecommendedBlog from "@/components/RecommendedBlog";
import CelebrateEmployees from "@/components/CelebrateEmployees";
import AOS from "aos";
import Yoast from "@/components/Yoast";
import formatDate from "../utils/format-date";

const BlogDetails = (props) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);

  const CelebrateEmployeesRef = useRef();
  const goToContact = () => {
    CelebrateEmployeesRef.current.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  };
  const data = props.data;
  const relatedPosts = props.relatedPosts;
  const headerData =props.headerData
  const footerData=props.footerData
  const formData=props.formData
  if (!data) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{data.pageTitle}</title>
        <Yoast meta={data.yoast_head_json} />
      </Head>

      <main className={`${rel.app_main} ${rel.footer_margin}`}>
        <Header data={headerData} goToContact={goToContact} />
        <InnerBanner pageTitle={data.pageTitle} />
        <div className={`${rel.container} container`}>
          <div className={rel.blog_detail}>
            <div
              className={`${rel.blog_detail_top}`}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={`${rel.blog_detail_left}`}>
                <ul className={`${rel.breadcrumb}`}>
                  {data.linkToHome && (
                    <li>
                      <Link href={data.linkToHome.link}>
                        {data.linkToHome.name}
                      </Link>
                    </li>
                  )}
                  {data.linkToBlogs && (
                    <li>
                      <Link href={data.linkToBlogs.link}>
                        {data.linkToBlogs.name}
                      </Link>
                    </li>
                  )}
                  <li>{data.title}</li>
                </ul>
                <div className={`${rel.desc}`}>
                  <h5>{formatDate(data.date)}</h5>
                  <h2>{data.title}</h2>
                </div>
              </div>
              <div className={`${rel.blog_detail_right}`}>
                <Image
                  src={`https://rel8hrdev.e8demo.com${data.image.data.attributes.url}`}
                  alt="e8"
                  loading="lazy"
                  quality={40}
                  width={665}
                  height={430}
                />
              </div>
            </div>
            <div
              className={`${rel.blog_detail_desc}`}
              dangerouslySetInnerHTML={{
                __html: data.content,
              }}
            ></div>
          </div>
        </div>
        <RecommendedBlog data={relatedPosts} />
        <CelebrateEmployees data={formData}  />
        <Footer data={footerData} goToContact={goToContact} />
      </main>
    </>
  );
};

export default BlogDetails;

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const res = await fetch(
    `https://rel8hrdev.e8demo.com/api/detailed-blog/findOne?slug=${slug}`
  );
  const result = await res.json();

  if (!result) {
    console.error("Blog not found:", result);
    return {
      notFound: true,
    };
  }

  const data = result;

  const relatedRes = await fetch(
    "https://rel8hrdev.e8demo.com/api/home-page?populate=deep"
  );
  const relatedResult = await relatedRes.json();

  const featuredBlogs = relatedResult.data.attributes.homePageComponents.find(
    (item) => item.__component.split(".").pop() === "featured-blogs"
  );

  if (featuredBlogs) {
    featuredBlogs.blogTiles = featuredBlogs.blogTiles.filter(
      (item) => item.slug !== slug
    );
  }

  const staticComponents = await fetch(
    "https://rel8hrdev.e8demo.com/api/home-page?populate=deep"
  );
  const componentRes = await staticComponents.json();

  const headerData = componentRes.data.attributes.homePageComponents.find(
    (item) => item.__component.split(".").pop() === "header"
  );

  const footerData = componentRes.data.attributes.homePageComponents.find(
    (item) => item.__component.split(".").pop() === "footer"
  );

  const formData = componentRes.data.attributes.homePageComponents.find(
    (item) => item.__component.split(".").pop() === "form"
  );

  return {
    props: {
      data,
      relatedPosts: featuredBlogs,
      headerData,
      footerData,
      formData,
    },
  };
}
