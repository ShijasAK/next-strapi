import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import cheerio from "cheerio";
import parse from "html-react-parser";
import rel from "@/styles/rel.module.scss";
import Image from "next/image";


const Stacksection = ({ data }) => {
  useEffect(() => {
    var w = document.documentElement.clientWidth || window.innerWidth;

    if (w >= 480) {
      let revealContainers = document.querySelectorAll(".pinned_image");

      gsap.utils.toArray(".pinned_gallery").forEach((pinnedGallery) => {
        if (
          pinnedGallery &&
          pinnedGallery.classList.contains("random-img-ratation")
        ) {
          const rotatedImages = pinnedGallery.querySelectorAll(
            ".pinned-image:not(:first-child):not(:last-child)",
          );
          gsap.utils.toArray(rotatedImages).forEach((pImage, i, arr) => {
            let rotation =
              i % 2 === 0 ? gsap.utils.random(-4, 0) : gsap.utils.random(0, 4);
            gsap.set(pImage.querySelector("img"), { rotation: rotation });
          });
        }

        const pinnedImages = pinnedGallery.querySelectorAll(".pinned_image");

        pinnedImages.forEach((pImage, i, arr) => {
          if (i < arr.length - 1) {
            const durationMultiplier = arr.length - i - 1;
            ScrollTrigger.create({
              trigger: pImage,

              opacity: 1,
              start: function () {
                const centerPin =
                  (window.innerHeight -
                    pImage.querySelector(".crd_block").offsetHeight) /
                  2;
                return "top +=" + centerPin;
              },
              end: function () {
                const durationHeight = pImage.offsetHeight * durationMultiplier;
                return "+=" + durationHeight;
              },
              pin: true,
              pinSpacing: false,
              scrub: true,

              animation: gsap.to(pImage.querySelector(".crd_block"), {
                scale: 0.6,
                opacity: 0,
                zIndex: 0,
                duration: 1,
              }),
            });
          }
        });
      });
    }

    const cards = gsap.utils.toArray(".card");
    const spacer = 0;
    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top+=0px`,
        endTrigger: ".pin-panel",
        end: `bottom top+=${cards.length * spacer}`,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
        animation: gsap.to(card.querySelector(".pin-panel"), {
          // scale: 0.3,
          opacity: 1,
          // zIndex: 0,
          duration: 1,
        }),
      });
    });
  }, [data]);



  const parseHtml = (html) => {
    const $ = cheerio.load(html);
    return $("div.raw-html-embed").html();
  };

  const cleanedTitle1 = parseHtml(data.card01.title);
  const cleanedTitle2 = parseHtml(data.card02.title);
  const cleanedTitle3 = parseHtml(data.card03.title);

  const cardData = [
    {
      title: cleanedTitle1,
      description: data.card01.description,
      images: [
        {
          src: `https://rel8hrdev.e8demo.com${data.card01.image01.data.attributes.url}`,
          className: rel.stack_el_03,
          alt: "e8",
          quality: 40,
          width: 351,
          height: 98,
        },
        {
          src: `https://rel8hrdev.e8demo.com${data.card01.image02.data.attributes.url}`,
          className: rel.stack_el_04,
          alt: "e8",
          quality: 40,
          width: 246,
          height: 75,
        },
        {
          src: `https://rel8hrdev.e8demo.com${data.card01.image03.data.attributes.url}`,
          className: rel.img_mx_fluid,
          alt: "e8",
          quality: 60,
          width: 694,
          height: 660,
        },
      ],
      leftAnimationDelay: 300,
      rightAnimationDelay: 500,
    },
    {
      title: cleanedTitle2,
      description: data.card02.description,
      images: [
        {
          src: `https://rel8hrdev.e8demo.com${data.card02.image01.data.attributes.url}`,
          className: rel.stack_el_02,
          alt: "e8",
          quality: 60,
          width: 149,
          height: 243,
        },
        {
          src: `https://rel8hrdev.e8demo.com${data.card02.image02.data.attributes.url}`,
          className: rel.img_mx_fluid,
          alt: "e8",
          quality: 60,
          width: 809,
          height: 660,
        },
      ],
      leftAnimationDelay: 300,
      rightAnimationDelay: 500,
    },
    {
      title: cleanedTitle3,
      description: data.card03.description,
      images: [
        {
          src: `https://rel8hrdev.e8demo.com${data.card03.image01.data.attributes.url}`,
          className: rel.stack_el_01,
          alt: "e8",
          quality: 40,
          width: 145,
          height: 145,
        },
        {
          src: `https://rel8hrdev.e8demo.com${data.card03.image02.data.attributes.url}`,
          className: rel.img_mx_fluid,
          alt: "e8",
          quality: 60,
          width: 809,
          height: 660,
        },
      ],
      leftAnimationDelay: 300,
      rightAnimationDelay: 300,
    },
  ];

 

  const renderCard = (card, index) => (
    <div key={index} className="pinned_image">
      <div
        className={`${rel.card_block} ${rel.card_02} ${rel.card_bg} ${rel.d_flex} ${rel.mb_stack} crd_block`}
      >
        <div className={rel.card_left_block}>
          <div className={`${rel.w_100} ${rel.title_52} ${rel.mb_2}`}>
            <h3
              className="split_txt1"
              dangerouslySetInnerHTML={{ __html: card.title }}
            ></h3>
            <p>{card.description}</p>
          </div>
        </div>
        <div className={`${rel.card_right_block} ${rel.rel}`}>
          {card.images.map((image, imgIndex) => (
            <div
              key={imgIndex}
              className={image.className}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay={card.leftAnimationDelay}
              data-aos-duration="1000"
            >
              <Image
                src={image.src}
                className={rel.img_mx_fluid}
                alt={image.alt}
                loading="lazy"
                quality={image.quality}
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className={`${rel.pt_50} ${rel.pb_100} pinned_gallery`}>
      {cardData.map((card, index) => renderCard(card, index))}
    </section>
  );
};

export default Stacksection;
