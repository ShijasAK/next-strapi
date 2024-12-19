"use client";
import React, { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import rel from "@/styles/rel.module.scss";
import InnerBanner from "@/components/InnerBanner";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import useThankYou from "@/components/Logic/useThankYou";

const Custom404 = () => {
  
  const { goToContact } = useThankYou();

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <main className={`${rel.app_main} ${rel.footer_margin}`}>
        <Header goToContact={goToContact} />
        <InnerBanner pageTitle="Thank you" />
        <div className={rel.not_found}>
          <h3 className={rel.qodef_404_subtitle} style={{ color: "#000" }}>
            Thank you for reaching out.
          </h3>
          <p className={rel.qodef_404_text} style={{ color: "#000" }}>
            We will get back to you very soon.
          </p>
          <Link
            href="/"
            className={rel.qodef_404_btn}
            style={{ color: "#000" }}
          >
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
