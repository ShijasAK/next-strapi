import React, { useEffect } from "react";
import rel from "@/styles/rel.module.scss";
import Counter from "./Counter";
import cheerio from "cheerio";
import AOS from "aos";

const CustomersExperience = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  if (!data) {
    return null;
  }

  const $ = cheerio.load(data.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  return (
    <section className={`${rel.pb_100}`}>
      <div className={`${rel.container} ${rel.rel}`}>
        <div className={`${rel.title_52} ${rel.text_center}`}>
          <h3
            className="split_txt1"
            dangerouslySetInnerHTML={{ __html: cleanedTitle }}
          ></h3>
        </div>
        <div className={`${rel.counder_block} ${rel.mt_50}`}>
          <ul>
            {data.experience.map((item, index) => (
              <Counter
                key={index}
                target={item.count}
                symbol={"%"}
                description={item.countTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CustomersExperience;
