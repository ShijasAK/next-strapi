import React from "react";
import Image from "next/image";
import rel from "@/styles/rel.module.scss";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import cheerio from "cheerio";

const CompleteHR = ({ data }) => {
  const router = useRouter();

  const goToContact = () => {
    router.push("/#contact");
  };

  if (!data) {
    return null;
  }

  const $ = cheerio.load(data.payrollTitle);
  const cleanedPayrollTitle = $("div.raw-html-embed").html();

  return (
    <section>
      <div className={`${rel.container} ${rel.pt_100}`}>
        <div className={`${rel.title_52} ${rel.text_center}`}>
          <h3
            className="split_txt1"
            dangerouslySetInnerHTML={{ __html: cleanedPayrollTitle }}
          ></h3>
          <div data-aos="fade-up" data-aos-duration="1000">
            <p>{parse(data.description)}</p>
          </div>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={goToContact}
            className={`${rel.but_01} ${rel.but_yellow} ${rel.mt_20}`}
          >
            {data?.reqDemoButtonLink?.name}
          </span>
        </div>
        <div
          className={`${rel.margin_} ${rel.d_flex} ${rel.mt_100} ${rel.margin_mob}`}
        >
          <div className={`${rel.better_block} ${rel.px_1}`}>
            <div
              className={`${rel.w_100} ${rel.radius_20}`}
              style={{ background: "#8A3BF8" }}
            >
              <div className={`${rel.text_block_02}`}>
                <h4 className="split_txt1">{data.card01.title}</h4>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <p>{data.card01.description}</p>
                </div>
              </div>
              <div className={`${rel.w_100}`}>
                <Image
                  className={`${rel.d_flex}`}
                  src={`https://rel8hrdev.e8demo.com${data.card01.image.data.attributes.url}`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  alt="e8"
                  loading="lazy"
                  quality={70}
                  width={628}
                  height={449}
                />
              </div>
            </div>
          </div>

          <div className={`${rel.employee_block} ${rel.d_flex} ${rel.px_1}`}>
            <div
              className={`${rel.w_100} ${rel.radius_20} ${rel.d_flex}`}
              style={{ background: "#F0ECFD" }}
            >
              <div className={`${rel.text_block_02} ${rel.text_dark}`}>
                <h4 className="split_txt1">{data.card02.title}</h4>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <p>{data.card02.description}</p>
                </div>
              </div>
              <div className={`${rel.w_100} ${rel.mob_l_p} ${rel.mt_auto}`}>
                <Image
                  className={`${rel.fit_img_max} ${rel.m_start_auto}`}
                  src={`https://rel8hrdev.e8demo.com${data.card02.image.data.attributes.url}`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  alt="e8"
                  loading="lazy"
                  quality={40}
                  width={463}
                  height={449}
                />
              </div>
            </div>
          </div>

          <div className={`${rel.w_100} ${rel.mt_50}`}>
            <div
              className={`${rel.text_block_02} ${rel.pb_0} ${rel.text_dark} ${rel.radius_20}`}
              style={{ background: "#BBA9FF" }}
            >
              <div className={`${rel.w_100}`}>
                <h4 className="split_txt1">{data.card03.title}</h4>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <p>{data.card03.description}</p>
                </div>
              </div>
              <div className={`${rel.w_100} ${rel.mt_50} ${rel.text_center}`}>
                <Image
                  src={`https://rel8hrdev.e8demo.com${data.card03.image.data.attributes.url}`}
                  className={`${rel.fit_img_max} ${rel.mx_auto}`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  alt="e8"
                  loading="lazy"
                  quality={90}
                  width={998}
                  height={443}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteHR;
