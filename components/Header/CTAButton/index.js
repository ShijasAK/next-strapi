import React from "react";
import PropTypes from "prop-types";

const CTAButton = ({ goToContact, className, text, link }) => {
  return (
    <>
      {link === "" ? (
        <span onClick={() => goToContact(true)} className={className}>
          {text}
        </span>
      ) : (
        <a href={link} className={className}>
          {text}
        </a>
      )}
    </>
  );
};



export default CTAButton;
