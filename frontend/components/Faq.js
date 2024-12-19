import React, { useEffect } from "react";
import Image from "next/image";
import rel from "@/styles/rel.module.scss";
import { useRouter } from "next/router";
import cheerio from "cheerio";

const Faq = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    const accSingleTriggers = document.querySelectorAll(".js_acc_single_trigger");

    accSingleTriggers.forEach((trigger) =>
      trigger.addEventListener("click", toggleAccordion)
    );

    return () => {
      accSingleTriggers.forEach((trigger) =>
        trigger.removeEventListener("click", toggleAccordion)
      );
    };
  }, [data]);

  function toggleAccordion(event) {
    const items = document.querySelectorAll(".js_acc_item");
    const thisItem = event.currentTarget.parentNode;

    items.forEach((item) => {
      if (thisItem === item) {
        thisItem.classList.toggle("is_open");
        return;
      }
      item.classList.remove("is_open");
    });
  }

  if (!data) {
    return null;
  }

  const goToContact = () => {
      router.push('/#contact');
    
  };

  let $ = cheerio.load(data.title);
  const cleanedTitle = $("div.raw-html-embed").html();
  $ = cheerio.load(data.description);
  const cleanedDescription = $("div.raw-html-embed").html();

  return (
    <section className={`${rel.pb_100} ${rel.faq_sec}`}>
      <div className={`${rel.container} ${rel.rel}`}>
        <div className={`${rel.w_100} ${rel.d_flex}`}>
          <div className="pinned-section">
            <div
              className={`${rel.h_100vh} ${rel.left_txt_block} ${rel.pl_0} ${rel.elevate_left_block} pinned-element left`}
            >
              <div className={`${rel.faq_left}`}>
                <div className={`${rel.title_52} ${rel.mb_20}`}>
                  <h3
                    className="split_txt1"
                    dangerouslySetInnerHTML={{ __html: cleanedTitle }}
                  ></h3>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  dangerouslySetInnerHTML={{
                    __html: cleanedDescription,
                  }}
                ></div>

                <span
                  onClick={goToContact}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className={`${rel.but_01} ${rel.mt_30} ${rel.but_yellow}`}
                >
                  {data.contactUsButton?.name}
                </span>
              </div>
            </div>

            <div
              className={`${rel.red} ${rel.elevate_right_block} pinned-element scrolling-element right`}
            >
              <div
                className={`${rel.accordion_single} accordion_single js_acc_single`}
              >
                {data.questionsAndAnswers.map((faq, index) => (
                  <div
                    key={index}
                    className={`${rel.accordion_single_item} accordion_single_item js_acc_item`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h4
                      className={`${rel.accordion_single_title} ${rel.js_acc_single_trigger} accordion_single_title js_acc_single_trigger`}
                    >
                      {faq.question}
                      <span className={`${rel.acc_icn}`}>
                        <Image
                          className="plus_icn"
                          src="/images/plus_icn.svg"
                          alt="expand"
                          loading="lazy"
                          quality={40}
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/images/minus_icn.svg"
                          className="minus_icn"
                          alt="collapse"
                          loading="lazy"
                          quality={40}
                          width={24}
                          height={24}
                        />
                      </span>
                    </h4>
                    <div
                      className={`${rel.accordion_single_content} accordion_single_content`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
