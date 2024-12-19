import React, { useEffect } from "react";
import Image from "next/image";
import rel from "@/styles/rel.module.scss";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import parse from "html-react-parser";
import cheerio from "cheerio";
import gsap from "gsap";

const MocTab = ({ data }) => {
  useEffect(() => {
    const btns = document.querySelectorAll(".tab_btn");
    const tabs = document.querySelectorAll("[data-tab]");

    const handleTabClick = (btnIndex) => {
      tabs.forEach((tab, tabIndex) => {
        if (btnIndex === tabIndex) {
          if (tab.classList.contains("hidden")) {
            tab.classList.remove("hidden");
            gsap.from(tab, { opacity: 0, scale: 0.95 });
          }
        } else {
          tab.classList.add("hidden");
        }
      });

      btns.forEach((btn, bi) => {
        if (bi === btnIndex) {
          btn.classList.add("bg-green-500");
        } else {
          btn.classList.remove("bg-green-500");
        }
      });
    };

    btns.forEach((btn, index) => {
      btn.addEventListener("click", () => handleTabClick(index));
    });

    // Cleanup event listeners on unmount
    return () => {
      btns.forEach((btn) => btn.removeEventListener("click", handleTabClick));
    };
  }, [data]);

  if (!data) {
    return null;
  }

  // Parse and sanitize heading
  const $ = cheerio.load(data.heading);
  const cleanedHeading = $("div.raw-html-embed").html();

  const tabContent = data.pages?.map((tab, index) => (
    <div
      key={index}
      data-tab
      className={`${rel.tab_container} ${index === 0 ? "grid" : "hidden"}`}
    >
      <div
        className={`${rel.w_100} ${rel.text_center} ${rel.tab_bot_txt} ${rel.desk_show}`}
      >
        <h5>{tab?.description}</h5>
      </div>
      <div className={rel.tab_container_img}>
        <Image
          className={rel.fit_img_max}
          src={`https://rel8hrdev.e8demo.com${tab?.image.data.attributes.url}`}
          alt="e8"
          loading="lazy"
          quality={80}
          width={1183}
          height={764}
        />
      </div>
      <div
        className={`${rel.w_100} ${rel.text_center} ${rel.tab_bot_txt} ${rel.mob_show}`}
      >
        <h5>{tab?.description}</h5>
      </div>
    </div>
  ));

  return (
    <section className={`${rel.text_center} ${rel.tab_section}`}>
      <div className={rel.container}>
        <div className="p-4">
          <div className={rel.title_52}>
            <h3
              className="split_txt1"
              dangerouslySetInnerHTML={{ __html: cleanedHeading }}
            ></h3>
          </div>
          <div className="max-w-5xl mx-auto">
            <div
              className="flex lg:justify-evenly flex-wrap gap-3 mb-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <ul className={rel.tab_but_row}>
                {data?.pages?.map((tab, index) => (
                  <li
                    key={index}
                    className={`tab_btn transition-all text-xl py-2 px-8 bg-white/25 flex justify-center items-center border rounded-full ${
                      index === 0 ? "bg-green-500 text-white" : ""
                    }`}
                  >
                    {tab?.title}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="w-full overflow-hidden rounded-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {tabContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MocTab;
