import React, { useEffect } from "react";
import rel from "@/styles/rel.module.scss";
import cheerio from "cheerio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

const MoreCollaboration = ({ data }) => {
  useEffect(() => {
    if (!data) return;

    // Initialize GSAP animations
    const counter = gsap.utils.toArray(".number-counter");
    counter.forEach((countNumber) => {
      gsap.fromTo(
        countNumber,
        { innerText: "0" },
        {
          innerText: () => Math.floor(parseFloat(countNumber.getAttribute("data-target"))),
          duration: 1,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: countNumber,
            start: "top 90%",
          },
        }
      );
    });

    setTimeout(() => {
        // Initialize AOS with custom options
    AOS.init({
      duration: 1000,     // Duration of AOS animations
      easing: 'ease-out', // Easing function for AOS animations
      // offset: 120,        // Offset for triggering animations
      // delay: 0,           // Delay before the animation starts
      once: false,         // Animate only once
      anchorPlacement: 'fade-up', // Anchor placement
    });
    });  
  }, [data]);

  if (!data) return null;

  return (
    <section>
      <div className={rel.container}>
        <div className={`${rel.title_block_03} ${rel.text_center} ${rel.rel}`}></div>

        <div className={`${rel.w_100} ${rel.rel} ${rel.pb_100}`}>
          <div className={`${rel.sub_title}`} data-aos="fade-up">
            <h4>{data.description}</h4>
          </div>
          <ul className={rel.count_ul}>
            {data.countInfo.map((item, index) => {
              const $ = cheerio.load(item.countTitle);
              const cleanedTitle = $("div.raw-html-embed").html();
              return (
                <li key={index} data-aos="fade-up">
                  <div className={rel.count_txt}>
                    <h5
                      className={`number-counter ${index === 2 ? rel.number_counter : ""}`}
                      data-target={item.count}
                      data-symbol="+"
                    >
                      0
                    </h5>
                  </div>
                  <div
                    className={rel.count_dis}
                    dangerouslySetInnerHTML={{ __html: cleanedTitle }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MoreCollaboration;
