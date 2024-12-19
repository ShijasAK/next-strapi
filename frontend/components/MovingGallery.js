import React from "react";
import Image from "next/image";
import rel from "@/styles/rel.module.scss";

const MovingGallery = ({ images, galleryType }) => {
  return (
    <div className={`${rel.red} moving-gallery ${galleryType}`}>
      <ul className={`${rel.logo_marqr} wrapper-gallery`}>
        {images.map((image) => (
          <li key={image.id}>
            <div className={`${rel.logo_box_marqe}`}>
              <Image
                className={`${rel.fit_img_max}`}
                src={`https://rel8hrdev.e8demo.com${image.attributes.url}`}
                alt="e8"
                loading="lazy"
                quality={40}
                width={image.attributes.width}
                height={image.attributes.height}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovingGallery;
