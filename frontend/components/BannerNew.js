import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { useRouter } from "next/router";
import gsap from "gsap";

const BannerNew = ({ goToContact, data }) => {
  const router = useRouter();

  useEffect(() => {
    let tl = gsap.timeline();

    tl.from(
      ".banner_el_01_n",
      {
        duration: 0.75,
        x: 300,
        autoAlpha: 0,
        ease: "elastic.out(1, 1)",
        stagger: {
          each: 0.75,
          amount: 0.5,
        },
      },
      "+=0.10"
    );

    tl.from(
      ".banner_el_02_n",
      {
        duration: 0.75,
        x: -200,
        autoAlpha: 0,
        ease: "elastic.out(1, 1)",
        stagger: {
          each: 0.75,
          amount: 0.5,
        },
      },
      "+=0.5"
    );

    tl.from(
      ".banner_el_03_n",
      {
        duration: 0.75,
        x: 300,
        autoAlpha: 0,
        ease: "elastic.out(1, 1)",
        stagger: {
          each: 0.75,
          amount: 0.5,
        },
      },
      "+=0.15"
    );

    tl.from(
      ".banner_el_04_n",
      {
        duration: 0.5,
        x: -150,
        autoAlpha: 0,
        ease: "elastic.out(1, 1)",
        stagger: {
          each: 0.5,
          amount: 0.5,
        },
      },
      "+=0.10"
    );

    tl.from(
      ".banner_el_05_n",
      {
        duration: 0.5,
        x: 200,
        autoAlpha: 0,
        ease: "elastic.out(1, 1)",
        stagger: {
          each: 0.5,
          amount: 0.5,
        },
      },
      "+=0.2"
    );
  }, []);

  if (!data) {
    return null;
  }

  return (
    <section
      className={`${rel.banner_main} ${rel.banner_main_new}`}
      style={{
        background: `url(/images/circle-1.png) no-repeat center top #E2D8FF`,
        height: "100%",
      }}
    >
      <div id="container" className={`${rel.container} ${rel.text_center}`}>
        <div className={`${rel.banner_title_block}`}>
          <h3 className={`${rel.title_font} ${rel.h2}`} title_font>
            {data.HeroPage.title}
          </h3>
          <h1 className={`${rel.title_font} ${rel.h1} ${rel.bold_txt}`}>
            {data.HeroPage.subTitle}
          </h1>

          <h4 className="split_txt1" data-aos="fade-up" data-aos-duration="500">
            {data.HeroPage.description}
          </h4>
          <div className={`${rel.banner_but_block}`}>
            <ul>
              <li>
                <Link href='/#contact' legacyBehavior>
                  <a
                    onClick={() => goToContact(true)}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className={`${rel.but_01} ${rel.mt_32} ${rel.but_gray}`}
                  >
                    {data.link?.name}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${rel.banner_new_block} ${rel.rel}`}>
          <div className={`${rel.banner_shade_1}`}>
            <Image
              className={`${rel.fit_img} ${rel.z_10} ${rel.rel}`}
              src="/images/ellipse-1.png"
              alt="e8"
              loading="lazy"
              quality={90}
              width={612}
              height={612}
            />
          </div>
          <div className={`${rel.banner_shade_2}`}>
            <Image
              className={`${rel.fit_img} ${rel.z_10} ${rel.rel}`}
              src="/images/ellipse-1.png"
              alt="e8"
              loading="lazy"
              quality={90}
              width={612}
              height={612}
            />
          </div>

          <div
            className={`${rel.banner_el_01_n} `}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <Image
              className={`${rel.fit_img} ${rel.z_10} ${rel.rel}`}
              src={`https://rel8hrdev.e8demo.com${data.banner_01.data.attributes.url}`}
              alt="e8"
              loading="lazy"
              quality={70}
              width={244}
              height={383}
            />
          </div>

          <div
            className={`${rel.banner_el_02_n} `}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="150"
          >
            <Image
              className={`${rel.fit_img} ${rel.rel}`}
              src={`https://rel8hrdev.e8demo.com${data.banner_02.data.attributes.url}`}
              alt="e8"
              loading="lazy"
              quality={100}
              width={362}
              height={112}
            />
          </div>

          <div
            className={`${rel.banner_el_03_n} `}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Image
              className={`${rel.fit_img} ${rel.rel}`}
              src={`https://rel8hrdev.e8demo.com${data.banner_03.data.attributes.url}`}
              alt="e8"
              loading="lazy"
              quality={70}
              width={176}
              height={153}
            />
          </div>

          <div
            className={`${rel.banner_el_04_n} `}
            data-aos="fade-up"
            data-aos-duration="1300"
            data-aos-delay="50"
          >
            <Image
              className={`${rel.fit_img} ${rel.rel}`}
              src={`https://rel8hrdev.e8demo.com${data.banner_04.data.attributes.url}`}
              alt="e8"
              loading="lazy"
              quality={90}
              width={232}
              height={306}
            />
          </div>

          <div
            className={`${rel.banner_el_05_n} `}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <Image
              className={`${rel.fit_img} ${rel.rel}`}
              src={`https://rel8hrdev.e8demo.com${data.banner_05.data.attributes.url}`}
              alt="e8"
              loading="lazy"
              quality={70}
              width={193}
              height={83}
            />
          </div>

          <div
            className={`${rel.banner_el_06_n}`}
            data-aos="fade-up"
            data-aos-duration="1300"
            data-aos-delay="70"
          >
            <Image
              className={`${rel.fit_img} ${rel.rel}`}
              src={`https://rel8hrdev.e8demo.com${data.banner_06.data.attributes.url}`}
              alt="e8"
              loading="lazy"
              quality={90}
              width={113}
              height={100}
            />
          </div>

          <Image
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`${rel.fit_img} ${rel.z_10} ${rel.rel}`}
            src={`https://rel8hrdev.e8demo.com${data.banner_07.data.attributes.url}`}
            alt="e8"
            loading="lazy"
            quality={70}
            width={522}
            height={825}
          />

          <div className={`${rel.banner_shade_01}`}>
            <Image
              className={`${rel.fit_img}`}
              src="/images/screen_ellipse-1.webp"
              alt="e8"
              loading="lazy"
              quality={100}
              width={612}
              height={612}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerNew;
