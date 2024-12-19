import { useEffect, useRef, useState } from "react";
import AOS from "aos";

function useThankYou() {
    
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);

  const goToContact = () => {
    CelebrateEmployeesRef.current.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  };

  return {
    goToContact: goToContact,
  };
}

export default useThankYou;
