import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AOS from "aos";

export const metadata = {
  title: "Rel8hr",
  description: "Rel8hr",
};

function useHome() {
  
  const celebrateEmployeesRef = useRef();

  const [title, setTitle] = useState(
    "HRMS Software Solutions in UAE | HR Software in Dubai"
  );

  const [metaDescription, setMetaDescription] = useState(
    "rel8hr offers one of the best HRMS Software solutions in UAE for businesses to handle their daily HR tasks. Check out the best HR software in Dubai which help to monitor all your employee datas."
  );

  useEffect(() => {
    var w = document.documentElement.clientWidth || window.innerWidth;

    const targetElement = document.querySelectorAll(".padding_left");
    const sourceElements = document.querySelectorAll(".container");
    sourceElements.forEach((sourceElement) => {
      const offsetLeft = sourceElement.offsetLeft;
      targetElement.forEach((target) => {
        target.style.paddingLeft = offsetLeft + "px";
      });
    });
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  // ----smooth--scroll--------start--
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });

    let revealContainers = document.querySelectorAll(".split_txt .word");

    revealContainers.forEach((container) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: -15,
        opacity: 0,
        ease: "power1.out",
      });
    });

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const goToContact = () => {
    celebrateEmployeesRef.current.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  };

  const handleContactClick = () => {
    // Handle contact click action
  };

  return {
    goToContact: goToContact,
    handleContactClick: handleContactClick,
    celebrateEmployeesRef: celebrateEmployeesRef,
    title: title,
    metaDescription: metaDescription,
  };
}

export default useHome;
