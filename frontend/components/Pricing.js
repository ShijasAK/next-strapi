import React from "react";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import cheerio from "cheerio";

const Pricing = ({ data }) => {
  if (!data) {
    return null;
  }
  const parseHtml = (html) => {
    const $ = cheerio.load(html);
    return $("div.raw-html-embed").html();
  };

  const cleanedTitle = parseHtml(data.title);

  return (
    <section className={`${rel.pricing_sec} ${rel.pt_100} ${rel.pb_100}`}>
      <div id="pricing" className={`${rel.container}`}>
        <div className={`${rel.w_100} ${rel.d_flex}`}>
          <div className={`${rel.w_50}`}>
            <div className={`${rel.title_52} ${rel.mb_20}`}>
              <h3
                className="split_txt1"
                dangerouslySetInnerHTML={{ __html: cleanedTitle }}
              ></h3>
            </div>
          </div>
          <div className={`${rel.w_50} ${rel.pt_50}`}>
            <p>{data.description}</p>
          </div>
        </div>

        <div className={`${rel.w_100} ${rel.pt_50} ${rel.pricin_scroll_mob}`}>
          <ul className={`${rel.pricing_ul}`}>
            {data.priceSection.map((plan, index) => (
              <li
                key={index}
                className={`${rel[`pricing_li_${index + 1}`]}`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {plan.isPopular && (
                  <span
                    className={`${rel.plan_tag}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    Popular Plan
                  </span>
                )}
                <div className={`${rel.pricing_li_block}`}>
                  <h3 data-aos="fade-up" data-aos-duration="1000">
                    {plan.planTitle}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    {plan.planDesc}
                  </p>
                  <span
                    className={`${rel.pricing_txt}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    dangerouslySetInnerHTML={{
                      __html: parseHtml(plan.planType),
                    }}
                  />
                  <ul className={`${rel.pricing_list_style}`}>
                    {plan.features.map((feature, i) => (
                      <li key={i} data-aos="fade-up" data-aos-duration="1000">
                        {feature.feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className={`${rel.but_01} ${rel.mt_30} ${rel.w_100} ${rel.but_yellow}`}
                    href='#contact'
                  >
                    {plan.book.name}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
