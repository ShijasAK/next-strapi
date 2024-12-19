import React, { useEffect } from "react";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import AOS from "aos";
import Image from "next/image";
import parse from "html-react-parser";
import formatDate from "@/pages/utils/format-date";
import cheerio from "cheerio";

const RecommendedBlog = ({ data }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);

  if (!data) {
    return null;
  }

  const $ = cheerio.load(data.mainTitle);
  const cleanedTitle = $("div.raw-html-embed").html();

  return (
    <section className={`${rel.blog_container} blog_container`}>
      <div
        className={`${rel.container} container`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={`${rel.w_100} ${rel.d_flex} ${rel.pt_100}`}>
          <div className={`${rel.related_title}`}>
            <div className={`${rel.title_52} ${rel.mb_20}`}>
              <h3 dangerouslySetInnerHTML={{ __html: cleanedTitle }}></h3>
            </div>
          </div>

          <div className={`${rel.related_but} ${rel.d_flex}`}>
            <Link
              data-aos="fade-up"
              data-aos-duration="1000"
              className={`${rel.but_01} ${rel.mt_30} ${rel.ms_auto} ${rel.but_yellow}`}
              href='/blogs'
            >
              {data.viewAll.name}
            </Link>
          </div>
        </div>

        <div className={`${rel.blog_rec_sec}`}>
          <ul className={rel.blog_list}>
            {data.blogTiles.map((blog, index) => (
              <li key={index} data-aos="fade-up" data-aos-duration="1000">
                <Link href={blog.readMore.link} className={`${rel.blog_img}`}>
                  <Image
                    style={{
                      color: "transparent",
                      backgroundImage: `url(https://rel8hrdev.e8demo.com${blog.image.data.attributes.url})`,
                    }}
                    src="/images/10x6_place.webp"
                    alt="e8"
                    loading="lazy"
                    quality={40}
                    width={10}
                    height={6}
                  />
                </Link>
                <div className={`${rel.blog_cnt}`}>
                  <h5>{formatDate(blog.date)}</h5>
                  <Link href={blog.readMore.link}>
                    <h2>{blog.title}</h2>
                  </Link>
                  <p>{blog.description && parse(blog.description)}</p>
                </div>
                <Link href={blog.readMore.link} className={`${rel.readMore}`}>
                  {blog.readMore.name}
                  <span>
                    <Image
                      src="/images/arw_readmr.png"
                      alt="Arrow"
                      loading="lazy"
                      quality={40}
                      width={20}
                      height={14}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecommendedBlog;
