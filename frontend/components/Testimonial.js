import React, { useEffect } from "react";
import Image from "next/image";
import rel from "@/styles/rel.module.scss";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import parse from "html-react-parser";
import cheerio from "cheerio";

const Testimonial = ({ data }) => {
  useEffect(() => {
    const targetElements = document.querySelectorAll(".padding_left");
    const sourceElements = document.querySelectorAll(".container");

    sourceElements.forEach((sourceElement) => {
      const offsetLeft = sourceElement.offsetLeft;

      targetElements.forEach((target) => {
        target.style.paddingLeft = `${offsetLeft}px`;
      });
    });
  }, [data]);

  if (!data) return null;

  const $ = cheerio.load(data.title);
  const cleanedTitle = $("div.raw-html-embed").html();

  return (
    <section
      style={{
        background: `url(../images/about_bg.jpg) no-repeat center top #E2D8FF`,
        height: "100%",
      }}
      className={`${rel.pt_100} ${rel.pb_100} ${rel.about_sec} ${rel.testimonial_block} ${rel.mb_100}`}
    >
      <div className={`${rel.w_100} `}>
        <div className={`${rel.container} ${rel.rel} container`}>
          <div className={`${rel.title_52} ${rel.testi_title_block}`}>
            <h3
              className="split_txt1"
              dangerouslySetInnerHTML={{
                __html: cleanedTitle,
              }}
            ></h3>
          </div>
          <div
            className={`${rel.swipper_nav_box}`}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              className={`${rel.slider_nav} ${rel.icon_arrow_left} ${rel.prev} ${rel.trans} prev`}
            >
              <Image
                src="/images/arrow_left.png"
                alt="e8"
                loading="lazy"
                quality={40}
                width={66}
                height={66}
              />
            </div>
            <div
              className={`${rel.slider_nav} ${rel.icon_arrow_right} ${rel.next} ${rel.trans} next`}
            >
              <Image
                src="/images/arrow-right.png"
                alt="e8"
                loading="lazy"
                quality={40}
                width={66}
                height={66}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${rel.container}`}>
        <div
          className={`${rel.about_slider_block}`}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Swiper
            modules={[Navigation, Scrollbar, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
                autoplay: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
                autoplay: true,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{ prevEl: ".prev", nextEl: ".next", clickable: true }}
          >
            <SwiperSlide className={`${rel.item}`}>
              <div className={`${rel.testi_title} `}>
                <div className={`${rel.testi_name} `}>
                  <div className={`${rel.testi_user}`}>
                    <Image
                      src={`https://rel8hrdev.e8demo.com${data.feedback01.userImage.data.attributes.url}`}
                      alt="e8"
                      loading="lazy"
                      quality={40}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className={`${rel.testi_user_det}`}>
                    <h5>{data.feedback01.userName}</h5>
                    <p>{data.feedback01.role}</p>
                  </div>
                </div>
                <div className={`${rel.testi_logo}`}>
                  <Image
                    src={`https://rel8hrdev.e8demo.com${data.feedback01.companyLogo.data.attributes.url}`}
                    alt="e8"
                    loading="lazy"
                    quality={40}
                    width={149}
                    height={17}
                  />
                </div>
              </div>
              <div
                className={`${rel.testi_txt}`}
                style={{
                  background: `url(../images/testi_bg.png) no-repeat 7% 18px`,
                }}
              >
                <p>{parse(data.feedback01.feedback)}</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={`${rel.item}`}>
              <div className={`${rel.testi_title} `}>
                <div className={`${rel.testi_name} `}>
                  <div className={`${rel.testi_user}`}>
                    <Image
                      src={`https://rel8hrdev.e8demo.com${data.feedback02.userImage.data.attributes.url}`}
                      alt="e8"
                      loading="lazy"
                      quality={40}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className={`${rel.testi_user_det}`}>
                    <h5>{data.feedback02.userName}</h5>
                    <p>{data.feedback02.role}</p>
                  </div>
                </div>
                <div className={`${rel.testi_logo}`}>
                  <Image
                    src={`https://rel8hrdev.e8demo.com${data.feedback02.companyLogo.data.attributes.url}`}
                    alt="e8"
                    loading="lazy"
                    quality={40}
                    width={54}
                    height={54}
                  />
                </div>
              </div>
              <div
                className={`${rel.testi_txt}`}
                style={{
                  background: `url(../images/testi_bg.png) no-repeat 7% 18px`,
                }}
              >
                <p>{parse(data.feedback02.feedback)}</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={`${rel.item}`}>
              <div className={`${rel.testi_title} `}>
                <div className={`${rel.testi_name} `}>
                  <div className={`${rel.testi_user}`}>
                    <Image
                      src={`https://rel8hrdev.e8demo.com${data.feedback03.userImage.data.attributes.url}`}
                      alt="e8"
                      loading="lazy"
                      quality={40}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className={`${rel.testi_user_det}`}>
                    <h5>{data.feedback03.userName}</h5>
                    <p>{data.feedback03.role}</p>
                  </div>
                </div>
                <div className={`${rel.testi_logo}`}>
                  <Image
                    src={`https://rel8hrdev.e8demo.com${data.feedback03.companyLogo.data.attributes.url}`}
                    alt="e8"
                    loading="lazy"
                    quality={40}
                    width={54}
                    height={54}
                  />
                </div>
              </div>
              <div
                className={`${rel.testi_txt}`}
                style={{
                  background: `url(../images/testi_bg.png) no-repeat 7% 18px`,
                }}
              >
                <p>{parse(data.feedback03.feedback)}</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial
