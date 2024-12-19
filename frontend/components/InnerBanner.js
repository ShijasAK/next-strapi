import React from "react";
import Image from "next/image";
import rel from "@/styles/rel.module.scss";

const InnerBanner = ({ pageTitle }) => {
  return (
    <div className={rel.innerBg}>
      <h1>{pageTitle}</h1>
    </div>
  );
};

export default InnerBanner;
