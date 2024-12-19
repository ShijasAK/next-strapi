import React, { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import rel from "@/styles/rel.module.scss";
import InnerBanner from "@/components/InnerBanner";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import CelebrateEmployees from "@/components/CelebrateEmployees";
import AOS from "aos";
import Yoast from "@/components/Yoast";
import formatDate from "../utils/format-date";

const perPage = 10;

const Blogs = (props) => {
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

  const { postsCount, pageData, headerData, footerData, formData } = props;
  const pages = Math.ceil(postsCount / perPage);

  return (
    <>
      <Head>
        <title>{pageData.pageTitle}</title>
        <Yoast meta={pageData?.yoast_head_json} />
      </Head>

      <main className={`${rel.app_main} ${rel.footer_margin}`}>
        <Header goToContact={goToContact} data={headerData} />
        <InnerBanner pageTitle={pageData.pageTitle} />
        <div className={rel.blog_sec}>
          <div className={`${rel.container} container`}>
            <ul className={rel.blog_list}>
              {pageData?.listOfBlogs.map((blog, index) => (
                <li key={index} data-aos="fade-up" data-aos-duration="1000">
                  {blog.slug && (
                    <>
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className={rel.blog_img}
                      >
                        <Image
                          src="/images/10x6_place.webp"
                          alt="Blog image"
                          loading="lazy"
                          quality={40}
                          width={665}
                          height={430}
                          layout="responsive"
                          style={{
                            color: "transparent",
                            backgroundImage: `url(https://rel8hrdev.e8demo.com${blog.image.data.attributes.url})`,
                          }}
                        />
                      </Link>
                      <div className={rel.blog_cnt}>
                        <h5>{formatDate(blog.date)}</h5>
                        <Link href={`/blogs/${blog.slug}`}>
                          <h2>{blog.title}</h2>
                        </Link>
                        <p>{blog.description}</p>
                      </div>
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className={rel.readMore}
                      >
                        {blog.readMore?.name}
                        <span>
                          <Image
                            src="/images/arw_readmr.png"
                            alt="Read More"
                            loading="lazy"
                            quality={40}
                            width={20}
                            height={14}
                          />
                        </span>
                      </Link>
                    </>
                  )}
                </li>
              ))}
            </ul>

            <ul className={rel.pagination}>
              {Array.from(Array(pages), (e, i) => (
                <li key={i}>
                  <Link
                    className={`${props.page === i + 1 ? rel.active : ""}`}
                    href={`/blogs?page=${i + 1}`}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <CelebrateEmployees data={formData} ref={CelebrateEmployeesRef} />
        <Footer data={footerData} goToContact={goToContact} />
      </main>
    </>
  );
};

export default Blogs;

export async function getServerSideProps(context) {
  const page = context.query.page > 0 ? context.query.page : 1;
  const locale = context.query.locale || "en";
  const offset = page === 1 ? 0 : (page - 1) * perPage;

  const res = await fetch(
    `https://rel8hrdev.e8demo.com/api/blog-page?populate=deep&locale=${locale}`
  );
  const result = await res.json();
  const blogInfo = result.data.attributes;

  const postsCount = blogInfo.listOfBlogs.length;

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
      page,
      pageData: blogInfo,
      postsCount,
      headerData,
      footerData,
      formData,
    },
  };
}
