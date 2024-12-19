import React, { useEffect } from "react";
import Image from "next/image";
import rel from "@/styles/rel.module.scss";
import cheerio from "cheerio";
import { useRouter } from "next/router";

const Elevate = ({ data }) => {
  const router = useRouter()
  useEffect(() => {
    const targetElement = document.querySelectorAll(".padding_left");
    const sourceElements = document.querySelectorAll(".container");

    sourceElements.forEach((sourceElement) => {
      const offsetLeft = sourceElement.offsetLeft;

      targetElement.forEach((target) => {
        target.style.paddingLeft = offsetLeft + "px";
      });
    });
  }, []);

  if (!data) return null;
  const goToContact = () => {
    router.push("/#contact");
  };
  let $ = cheerio.load(data.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  $ = cheerio.load(data.subTitle);
  const cleanedSubTitle = $("div.raw-html-embed").html();

  $ = cheerio.load(data.description);
  const cleanedDescription = $("div.raw-html-embed").html();

  return (
    <section
      className={`${rel.bg_gray} ${rel.z_100} content-row row_padding_bottom light-section`}
      data-bgcolor="#fff"
    >
      <div className={`${rel.container}`}>
        <div className="pinned-section">
          <div
            className={`${rel.h_100vh} ${rel.left_txt_block} ${rel.pl_0} ${rel.elevate_left_block} pinned-element left`}
          >
            <div
              className={`${rel.text_dark} ${rel.pe_0} ${rel.left_txt_block}`}
            >
              <div className={`${rel.w_100}`}>
                <h3
                  className="split_txt1"
                  dangerouslySetInnerHTML={{ __html: cleanedTitle }}
                ></h3>

                <h4
                  className="split_txt1"
                  dangerouslySetInnerHTML={{ __html: cleanedSubTitle }}
                ></h4>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  dangerouslySetInnerHTML={{ __html: cleanedDescription }}
                ></div>

                <span
                  data-aos="fade-up"
                  onClick={goToContact}
                  data-aos-duration="1000"
                  className={`${rel.but_01} ${rel.but_yellow} ${rel.mt_50}`}
                >
                  {data.getStartedButtonLink?.name}
                </span>
              </div>
            </div>
          </div>
          <div
            className={`${rel.red} ${rel.elevate_right_block} pinned-element scrolling-element right`}
          >
            <ul
              className={`${rel.right_scroll_ul} ${rel.right_elevate_ul} ${rel.ul_100}`}
            >
              {data.aiFeaturesGrid?.map((item, index) => (
                <li key={index} className={`${rel.elevate}`}>
                  <div className={`${rel.ser_img} ${rel.mb_20}`}>
                    <Image
                      className={`${rel.fit_img_max} ${rel.me_2}`}
                      src={`https://rel8hrdev.e8demo.com${item.image.data.attributes.url}`}
                      alt="e8"
                      loading="lazy"
                      quality={40}
                      width={index === 6 ? 168 : 170}
                      height={index === 6 ? 154 : 161}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    />
                  </div>
                  <h5 className="split_txt1">{item.title}</h5>
                  <div data-aos="fade-up" data-aos-duration="1000">
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Elevate;
