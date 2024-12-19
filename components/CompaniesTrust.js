import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import parse from "html-react-parser";
import MovingGallery from "./MovingGallery";
import { useRouter } from "next/router";
import cheerio from "cheerio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompaniesTrust = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    if (!data) return;

    gsap.utils.toArray(".moving-gallery").forEach((section, index) => {
      const w = section.querySelector(".wrapper-gallery");
      const [x, xEnd] =
        index % 2
          ? [section.offsetWidth - w.scrollWidth, 0]
          : [0, section.offsetWidth - w.scrollWidth];

      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [data]);

  if (!data) {
    return null;
  }

  const $ = cheerio.load(data.trustedCompanies.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  const goToContact = () => {
    router.push("/#contact");
  };

  return (
    <section className={`${rel.pt_100} ${rel.pb_100} ${rel.company_logo}`}>
      <div className={`${rel.title_52} ${rel.text_center}`}>
        <h3
          className="split_txt1"
          dangerouslySetInnerHTML={{ __html: cleanedTitle }}
        ></h3>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p>{data.trustedCompanies.description}</p>
        </div>
      </div>
      <div
        className={`${rel.pt_20} ${rel.overflow_hide} content-row text-align-center full light-section`}
        data-bgcolor="#fff"
      >
        <MovingGallery
          images={data.trustedCompanies.logo.data}
          galleryType="fw-gallery"
        />
        <MovingGallery
          images={data.trustedCompanies.logo.data}
          galleryType="bw-gallery"
        />

        <div className={`${rel.w_100} ${rel.mt_30}`}>
          <div className={`${rel.text_center} ${rel.container}`}>
            <span
              data-aos="fade-up"
              data-aos-duration="1000"
              onClick={goToContact}
              className={`${rel.but_01} ${rel.but_black} ${rel.mt_20}`}
            >
              {data.demo?.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesTrust;
