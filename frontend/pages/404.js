"use client";
import React, { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import rel from "@/styles/rel.module.scss";
import InnerBanner from "@/components/InnerBanner";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import CelebrateEmployees from "@/components/CelebrateEmployees";

const Custom404 = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);
  const CelebrateEmployeesRef = useRef(CelebrateEmployees);

  const goToContact = () => {
    CelebrateEmployeesRef.current.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  };

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <main className={`${rel.app_main} ${rel.footer_margin}`}>
        <Header goToContact={goToContact} />
        <InnerBanner pageTitle="404" />
        <div className={rel.not_found}>
          <h2 className={rel.qodef_404_subtitle}>Page not found</h2>
          <p className={rel.qodef_404_text}>
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <Link href="/" className={rel.qodef_404_btn}>
            {" "}
            BACK TO HOME
          </Link> 
        </div>
        <Footer goToContact={goToContact} />
      </main>
    </div>
  );
};

export default Custom404;
