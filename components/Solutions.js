import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import parse from "html-react-parser";
import cheerio from "cheerio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";


const Solutions = ({ data }) => {
  const router = useRouter();
  useEffect(() => {

    var w = document.documentElement.clientWidth || window.innerWidth;

    if (w >= 480) {
      var pinnedSection = gsap.utils.toArray(".pinned-element");
      pinnedSection.forEach(function (pinElement) {
        var parentNode = pinElement.parentNode;
        var scrollingElement = parentNode.querySelector(".scrolling-element");
        var pinnedScene = ScrollTrigger.create({
          trigger: pinElement,
          //start: "top top-=-50px",
          start: function () {
            const startPin = (window.innerHeight - pinElement.offsetHeight) / 2;
            return "top +=" + startPin;
          },
          end: () =>
            `+=${scrollingElement.offsetHeight - pinElement.offsetHeight}`,
          pin: pinElement,
        });
      });
    }

    const targetElement = document.querySelectorAll(".padding_left");
    const sourceElements = document.querySelectorAll(".container");
    sourceElements.forEach((sourceElement) => {
      const offsetLeft = sourceElement.offsetLeft;
      targetElement.forEach((target) => {
        target.style.paddingLeft = offsetLeft + "px";
      });
    });
  }, [data]);

  if (!data) return null;

  const $ = cheerio.load(data.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  const goToContact = () => {
    router.push("/#contact");
  };
  return (
    <div
      className="content-row row_padding_bottom light-section"
      data-bgcolor="#fff"
    >
      <div className="pinned-section">
        <div
          className={`${rel.left_txt_block} ${rel.bg_blue} ${rel.h_100vh} pinned-element left`}
        >
          <div
            className={`${rel.w_100} padding_left`}
            // style={{ paddingLeft: "353px" }}
          >
            <h3
              className="split_txt1"
              dangerouslySetInnerHTML={{ __html: cleanedTitle }}
            ></h3>

            <div data-aos="fade-up" data-aos-duration="1000">
              <p>{parse(data.description)}</p>
            </div>

            <span
              data-aos="fade-up"
              data-aos-duration="1000"
              onClick={goToContact}
              className={`${rel.but_01} ${rel.but_black} ${rel.mt_50}`}
            >
              {data.reqDemoButton.name}
            </span>
          </div>
        </div>

        <div
          className={`${rel.right_scroll_block} pinned-element scrolling-element right`}
        >
          <ul className={`${rel.right_scroll_ul}`}>
            {data?.featuresGrid?.map((service, index) => (
              <li
                key={index}
                className={[0, 3, 4, 7, 8, 11].includes(index) ? rel.bg_02 : ""}
              >
                <div className={`${rel.ser_img}`}>
                  <Image
                    className={`${rel.fit_img_max} ${rel.me_2}`}
                    src={`https://rel8hrdev.e8demo.com${service.image.data.attributes.url}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    alt="e8"
                    loading="lazy"
                    quality={70}
                    width={170}
                    height={170}
                  />
                </div>
                <h5 className="split_txt1">{service.title}</h5>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
