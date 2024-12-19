import React from "react";
import Image from "next/image";
import rel from "@/styles/rel.module.scss";
import cheerio from 'cheerio'

const Integrated = ({ data }) => {
  if (!data) {
    return null;
  }
  const $ = cheerio.load(data.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  return (
    <section className={` ${rel.pt_150} ${rel.pb_150}`}>
      <div className={`${rel.container}`}>
        <div className={`${rel.max_850} ${rel.text_center}`}>
          <div className={`${rel.title_52} ${rel.mb_20}`}>
            <h3
              className="split_txt1"
              data-aos="fade-up"
              data-aos-duration="1000"
              dangerouslySetInnerHTML={{ __html:cleanedTitle}}
            ></h3>
          </div>
        </div>

        <ul className={`${rel.fav_apps_ul}`}>
          {data?.appImage.data?.map((app, index) => (
            <li key={index} data-aos="fade-up" data-aos-duration="1000">
              <Image
                className={`${rel.fit_img_max} ${rel.me_2}`}
                src={`https://rel8hrdev.e8demo.com${app.attributes.url}`}
                alt="e8"
                loading="lazy"
                quality={50}
                width={
                  index === 0
                    ? 189
                    : index === 1
                    ? 90
                    : index === 2
                    ? 194
                    : index === 3
                    ? 189
                    : index === 4
                    ? 162
                    : index === 5
                    ? 216
                    : app.width
                }
                height={
                  index === 0
                    ? 47
                    : index === 1
                    ? 90
                    : index === 2
                    ? 53
                    : index === 3
                    ? 47
                    : index === 4
                    ? 80
                    : index === 5
                    ? 80
                    : app.height
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Integrated;
