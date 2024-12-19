import React from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { useRouter } from "next/router";
import cheerio from "cheerio";

const Benefits = ({ data }) => {
  const router = useRouter();

  if (!data) {
    return null;
  }

  const $ = cheerio.load(data.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  const goToContact = (e) => {
    e.preventDefault();
    router.push("/#contact");
  };

  return (
    <section className={`${rel.bg_gradient}`}>
      <div
        className={`${rel.pt_200}`}
        style={{
          background: `url(/images/benefits-bg.png) center bottom no-repeat`,
          height: "100%",
        }}
      >
        <div className={`${rel.container}`}>
          <div className={`${rel.max_850} ${rel.text_center}`}>
            <div className={`${rel.title_52} ${rel.mb_20}`}>
              <h3
                className="split_txt1"
                dangerouslySetInnerHTML={{ __html: cleanedTitle }}
              ></h3>
              <p>{data.description}</p>
            </div>
          </div>

          <div className={`${rel.w_100} ${rel.pt_30} ${rel.text_center}`}>
            <ul className={`${rel.benefit_ul}`}>
              {data.benefits.map((feature, index) => (
                <li key={index}>{feature.feature}</li>
              ))}
            </ul>

            <span
              data-aos="fade-up"
              onClick={goToContact}
              data-aos-duration="1000"
              className={`${rel.but_01} ${rel.but_black} ${rel.mt_50}`}
            >
              {data.demo.name}
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={`${rel.w_100}`}
        >
          <Image
            src={`https://rel8hrdev.e8demo.com${data.image.data.attributes.url}`}
            alt="Benefits Image"
            loading="lazy"
            className={`${rel.img_mx_fluid} ${rel.w_100}`}
            quality={100}
            sizes="(max-width: 1600px) 100vw, 1600px"
            width={1600}
            height={376}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
