"use client";
import React, { useEffect, useState } from "react";
import rel from "@/styles/rel.module.scss";
import Logo from "./Header/Logo";
import Nav from "./Header/Nav/nav";
import PhoneLink from "./Header/PhoneLink";
import CTAButton from "./Header/CTAButton";
import Switch from "@mui/material/Switch";
import { useRouter } from "next/router";

const Header = ({ data, goToContact }) => {
  const [locale, setLocale] = useState("en");
  const router = useRouter();

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st === 0) {
        document.body.classList.remove("scroll-up");
      } else {
        document.body.classList.add("scroll-up");
      }

      lastScrollTop = st;
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLocaleChange = (event) => {
    const newLocale = event.target.checked ? "ar" : router.push("/");
    setLocale(newLocale);
    router.push(
      { pathname: router.pathname, query: { locale: newLocale } },
      undefined,
      { shallow: false }
    );
  };

  if (!data) {
    return null;
  }

  return (
    <header
      className={`${rel.pt_20} ${rel.pb_20} ${rel.hed_position} ${rel.hed_white} header_main`}
    >
      <Switch
        checked={locale === "ar"}
        onChange={handleLocaleChange}
        inputProps={{ "aria-label": "locale switch" }}
      />
      <div className={`${rel.wrap} ${rel.d_flex}`}>
        <Logo
          className={`${rel.logo_main} ${rel.mr_auto} main_logo`}
          data={data}
        />
        <div className={`${rel.nav_right}`}>
          <PhoneLink data={data} />
          <Nav data={data} />
          {data?.demoButton && (
            <CTAButton
              text={data.demoButton.name}
              link={data.demoButton.link}
              onClick={goToContact}
              className={`${rel.but_01} ${rel.but_yellow} top_but`}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
