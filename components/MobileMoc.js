import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import rel from "@/styles/rel.module.scss";
import useMobileMoc from "./Logic/useMobileMoc";

const MobileMoc = () => {
  const { image } = useMobileMoc();
  return (
    <section
      style={{ background: `#eeeeee` }}
      className={` ${rel.text_center} ${rel.mb_100} ${rel.mob_hide} `}
    >
      <Image
        className={`${rel.fit_img_max} ${rel.mx_auto}`}
        src={image}
        data-aos="fade-up"
        data-aos-duration="1000"
        alt="e8"
        loading="lazy"
        quality={100}
        width={1920}
        height={810}
      />
    </section>
  );
};
export default MobileMoc;
