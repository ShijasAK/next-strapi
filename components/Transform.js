import React from "react";
import Image from "next/image";
import rel from "@/styles/rel.module.scss";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import cheerio from "cheerio";
import { useRouter } from "next/router";

const Transform = ({ data }) => {
  const router = useRouter()
  if (!data) {
    return null;
  }
  let $ = cheerio.load(data.transformTitle);
  const cleanedTransformTitle = $("div.raw-html-embed").html();
  $ = cheerio.load(data.foster.fosterTitle);
  const cleanedFosterTitle = $("div.raw-html-embed").html();
  const goToContact = () => {
    router.push("/#contact");
  };
  return (
    <>
      <section className={` ${rel.pb_100} ${rel.pt_50} ${rel.bg_mob} `}>
        <div className={`${rel.container} `}>
          <div
            className={`${rel.pt_100} ${rel.w_100} ${rel.d_flex} ${rel.two_col} ${rel.row_reverce}`}
          >
            <div
              className={`${rel.img_block_01}`}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Swiper
                spaceBetween={28}
                loop={true}
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
              >
                <SwiperSlide className={`${rel.item} ${rel.border_radius}`}>
                  <Image
                    className={`${rel.fit_img_max} ${rel.me_2}`}
                    src={`https://rel8hrdev.e8demo.com${data.image.data.attributes.url}`}
                    alt="e8"
                    loading="lazy"
                    quality={80}
                    width={635}
                    height={626}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={`${rel.txt_block_01}  ${rel.flex_center}`}>
              <div
                className={`${rel.w_100} ${rel.text_dark}  ${rel.text_yellow} ${rel.pe_0} ${rel.left_txt_block}`}
              >
                <div className={`${rel.w_100}`}>
                  <div className={`${rel.w_100} ${rel.mb_2}`}>
                    <h3
                      className="split_txt1"
                      dangerouslySetInnerHTML={{
                        __html: cleanedTransformTitle,
                      }}
                    ></h3>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000">
                    <p>{data.transformDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${rel.pt_100} ${rel.w_100} ${rel.d_flex} ${rel.two_col}`}
          >
            <div
              className={`${rel.img_block_01}`}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Swiper
                spaceBetween={28}
                loop={true}
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2600 }}
              >
                {data?.foster.imageCarousel.data.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className={`${rel.item} ${rel.border_radius}`}
                  >
                    <Image
                      className={`${rel.fit_img_max} ${rel.me_2}`}
                      src={`https://rel8hrdev.e8demo.com${image.attributes.url}`}
                      alt="e8"
                      loading="lazy"
                      quality={image.quality}
                      width={626}
                      height={626}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={`${rel.txt_block_01}   ${rel.flex_center}`}>
              <div
                className={`${rel.w_100} ${rel.text_dark}  ${rel.text_yellow} ${rel.pe_0} ${rel.left_txt_block}`}
              >
                <div className={`${rel.w_100}`}>
                  <div className={`${rel.w_100} ${rel.mb_2}`}>
                    <h3
                      className="split_txt1"
                      dangerouslySetInnerHTML={{ __html: cleanedFosterTitle }}
                    ></h3>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000">
                    <p>{data?.foster.fosterDescription}</p>
                  </div>
                  <span
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    onClick={goToContact}
                    className={`${rel.but_01} ${rel.but_black} ${rel.mt_50}`}
                  >
                    {data?.foster.reqDemoButtonLink.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ background: `#eeeeee` }}
        className={` ${rel.text_center} ${rel.mb_100} ${rel.mob_hide} `}
      >
        <Image
          className={`${rel.fit_img_max} ${rel.mx_auto}`}
          src={`https://rel8hrdev.e8demo.com${data.mobileAppImage.data.attributes.url}`}
          data-aos="fade-up"
          data-aos-duration="1000"
          alt="e8"
          loading="lazy"
          quality={100}
          width={1920}
          height={810}
        />
      </section>
    </>
  );
};

export default Transform;
