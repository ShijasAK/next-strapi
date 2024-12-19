import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import $ from "jquery";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Pinning = () => {
  useEffect(() => {
    gsap.utils.toArray(".pinned-gallery").forEach((pinnedGallery) => {
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

      const pinnedImages = pinnedGallery.querySelectorAll(".pinned-image");

      pinnedImages.forEach((pImage, i, arr) => {
        if (i < arr.length - 1) {
          const durationMultiplier = arr.length - i - 1;

          ScrollTrigger.create({
            trigger: pImage,
            start: function () {
              const centerPin =
                (window.innerHeight -
                  pImage.querySelector(".pinblock1").offsetHeight) /
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
            animation: gsap.to(pImage.querySelector(".pinblock1"), {
              scale: 0.3,
              opacity: 1,
              zIndex: 0,
              duration: 1,
            }),
          });
        }
      });
    });
  }, []);
  return (
    <section>
      <div id="container" className={`${rel.container}`}>
        <div className={`pinned-gallery`}>
          <div className={`pinned-image`}>
            <div className="pinblock1">
              <div className={`${rel.card_block} ${rel.card_01} ${rel.d_flex}`}>
                <div className={`${rel.card_left_block}`}>
                  <div className={`${rel.w_100} ${rel.title_52} ${rel.mb_2}`}>
                    <h3>
                      <span>Appreciate Your </span>
                      Employees On Their Achievements.
                    </h3>
                    <p>
                      Award employees efforts with badges as a testament of
                      achievements Encourage employees to be in sprint.
                    </p>
                  </div>
                </div>
                <div className={`${rel.card_right_block}`}>
                  <Image
                    src="/images/carg-img-1.jpg"
                    alt="e8"
                    loading="lazy"
                    quality={40}
                    width={809}
                    height={660}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`pinned-image`}>
            <div className="pinblock1">
              <div className={`${rel.card_block} ${rel.card_01} ${rel.d_flex}`}>
                <div className={`${rel.card_left_block}`}>
                  <div className={`${rel.w_100} ${rel.title_52} ${rel.mb_2}`}>
                    <h3>
                      <span>Appreciate Your </span>
                      Employees On Their Achievements.
                    </h3>
                    <p>
                      Award employees efforts with badges as a testament of
                      achievements Encourage employees to be in sprint.
                    </p>
                  </div>
                </div>
                <div className={`${rel.card_right_block}`}>
                  <Image
                    src="/images/carg-img-1.jpg"
                    alt="e8"
                    loading="lazy"
                    quality={40}
                    width={809}
                    height={660}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`pinned-image`}>
            <div className="pinblock1">
              <div className={`${rel.card_block} ${rel.card_01} ${rel.d_flex}`}>
                <div className={`${rel.card_left_block}`}>
                  <div className={`${rel.w_100} ${rel.title_52} ${rel.mb_2}`}>
                    <h3>
                      <span>Appreciate Your </span>
                      Employees On Their Achievements.
                    </h3>
                    <p>
                      Award employees efforts with badges as a testament of
                      achievements Encourage employees to be in sprint.
                    </p>
                  </div>
                </div>
                <div className={`${rel.card_right_block}`}>
                  <Image
                    src="/images/carg-img-1.jpg"
                    alt="e8"
                    loading="lazy"
                    quality={40}
                    width={809}
                    height={660}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pinning;
