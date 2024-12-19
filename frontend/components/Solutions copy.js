// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import rel from "@/styles/rel.module.scss";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// const Solutions = () => {
//   useEffect(() => {
//     if (window.innerWidth > 479) {
//       var pinnedSection = gsap.utils.toArray(".pinned-element");
//       pinnedSection.forEach(function (pinElement) {
//         var parentNode = pinElement.parentNode;
//         var scrollingElement = parentNode.querySelector(".scrolling-element");

//         var pinnedScene = ScrollTrigger.create({
//           trigger: pinElement,
//           //start: "top top-=-50px",
//           start: function () {
//             const startPin = (window.innerHeight - pinElement.offsetHeight) / 2;
//             return "top +=" + startPin;
//           },
//           end: () =>
//             `+=${scrollingElement.offsetHeight - pinElement.offsetHeight}`,
//           pin: pinElement,
//         });
//       });
//     }

//     let x = document.getElementById("infoProduto");
//     let galeria = document.getElementById("scrollGaleria");
//     let section = document.getElementById("containerAround");
//     gsap.to(galeria, {
//       y: () => -(galeria.scrollHeight - document.documentElement.clientHeight),
//       ease: "none",
//       scrollTrigger: {
//         trigger: section,
//         pin: true,
//         scrub: 1,
//         invalidateOnRefresh: true,
//       },
//     });
//   }, []);
//   return (
//     <section
//       className={`${rel.rel} ${rel.z_100} containerProduto`}
//       id="containerProduto"
//     >
//       <div className={`${rel.d_flex}`} id="containerAround">
//         <div className={`${rel.d_flex} pinned-section`}>
//           <div className="pinned-element left">
//             <h4>
//               <em>Pinned</em> Section
//             </h4>
//           </div>
//           <div className="scrolling-element right">fdf</div>
//         </div>

//         <div
//           id="infoProduto"
//           className={`${rel.w_50} ${rel.padding_left} ${rel.left_txt_block} ${rel.bg_blue} infoProduto`}
//         >
//           <div className={`${rel.w_100}`}>
//             <h3>
//               <span>
//                 The one <br />
//                 solution for <br />
//                 Managing your
//               </span>
//               Organization & Employees.
//             </h3>
//             <p>
//               HR Portal is a platform for managing, administering, assessing,
//               and accounting for all the operations of the human resources.
//             </p>
//             <Link
//               href="#"
//               className={`${rel.but_01} ${rel.but_black} ${rel.mt_50}`}
//             >
//               Request a demo
//             </Link>
//           </div>
//         </div>
//         <div
//           className={`${rel.w_50} ${rel.right_txt_block} scrollGaleria`}
//           id="scrollGaleria"
//         >
//           <ul className={`${rel.right_scroll_ul}`}>
//             <li className={`${rel.bg_02}`}>
//               <div className={`${rel.ser_img}`}>
//                 <Image
//                   className={`${rel.fit_img_max} ${rel.me_2}`}
//                   src="/images/img-1-1@2x.png"
//                   alt="e8"
//                   loading="lazy"
//                   quality={40}
//                   width={170}
//                   height={161}
//                 />
//               </div>
//               <h5>Payroll & Salary</h5>
//               <p>
//                 Streamline and centralize payroll operations, providing the
//                 tools for quick and easy payments.
//               </p>
//             </li>
//             <li>
//               <div className={`${rel.ser_img}`}>
//                 <Image
//                   className={`${rel.fit_img_max} ${rel.me_2}`}
//                   src="/images/img-2-1@2x.png"
//                   alt="e8"
//                   loading="lazy"
//                   quality={40}
//                   width={170}
//                   height={161}
//                 />
//               </div>
//               <h5>Employee Time Clock</h5>
//               <p>Track and manage employee work hours on jobs, projects.</p>
//             </li>
//             <li>
//               <div className={`${rel.ser_img}`}>
//                 <Image
//                   className={`${rel.fit_img_max} ${rel.me_2}`}
//                   src="/images/img-3-1@2x.png"
//                   alt="e8"
//                   loading="lazy"
//                   quality={40}
//                   width={170}
//                   height={161}
//                 />
//               </div>
//               <h5>Leave Management</h5>
//               <p>
//                 Managing employee vacation & absence requests doesn’t have to be
//                 time consuming.
//               </p>
//             </li>
//             <li className={`${rel.bg_02}`}>
//               <div className={`${rel.ser_img}`}>
//                 <Image
//                   className={`${rel.fit_img_max} ${rel.me_2}`}
//                   src="/images/img-4-1@2x.png"
//                   alt="e8"
//                   loading="lazy"
//                   quality={40}
//                   width={170}
//                   height={161}
//                 />
//               </div>
//               <h5>KPI & Performance</h5>
//               <p>
//                 KPIs provide clarity, direction, and a clear picture of how well
//                 we are doing.
//               </p>
//             </li>
//             <li className={`${rel.bg_02}`}>
//               <div className={`${rel.ser_img}`}>
//                 <Image
//                   className={`${rel.fit_img_max} ${rel.me_2}`}
//                   src="/images/img-4-1@2x.png"
//                   alt="e8"
//                   loading="lazy"
//                   quality={40}
//                   width={170}
//                   height={161}
//                 />
//               </div>
//               <h5>Attendance</h5>
//               <p>
//                 Our software offers a streamlined, automated solution. From
//                 clock-ins to leave requests.
//               </p>
//             </li>
//             <li>
//               <div className={`${rel.ser_img}`}>
//                 <Image
//                   className={`${rel.fit_img_max} ${rel.me_2}`}
//                   src="/images/img-4-1@2x.png"
//                   alt="e8"
//                   loading="lazy"
//                   quality={40}
//                   width={170}
//                   height={161}
//                 />
//               </div>
//               <h5>Training</h5>
//               <p>
//                 We offers comprehensive training modules. Equip your team with
//                 the tools they need to excel.
//               </p>
//             </li>
//             <li className={`${rel.bg_02}`}>
//               <div className={`${rel.ser_img}`}>
//                 <Image
//                   className={`${rel.fit_img_max} ${rel.me_2}`}
//                   src="/images/img-4-1@2x.png"
//                   alt="e8"
//                   loading="lazy"
//                   quality={40}
//                   width={170}
//                   height={161}
//                 />
//               </div>
//               <h5>Employee Management</h5>
//               <p>
//                 Manage employees seamlessly. From onboarding to performance
//                 reviews, our software does it all.
//               </p>
//             </li>
//             <li>
//               <div className={`${rel.ser_img}`}>
//                 <Image
//                   className={`${rel.fit_img_max} ${rel.me_2}`}
//                   src="/images/img-4-1@2x.png"
//                   alt="e8"
//                   loading="lazy"
//                   quality={40}
//                   width={170}
//                   height={161}
//                 />
//               </div>
//               <h5>Recruitment</h5>
//               <p>
//                 Find the right talent, faster. Smarter hiring decisions, reduced
//                 time-to-fill. Transform your hiring process today
//               </p>
//             </li>

//             <li>
//               <div className={`${rel.ser_img}`}>
//                 <Image
//                   className={`${rel.fit_img_max} ${rel.me_2}`}
//                   src="/images/img-4-1@2x.png"
//                   alt="e8"
//                   loading="lazy"
//                   quality={40}
//                   width={170}
//                   height={161}
//                 />
//               </div>
//               <h5>Geo Fencing</h5>
//               <p>
//                 Find the right talent, faster. Smarter hiring decisions, reduced
//                 time-to-fill. Transform your hiring process today
//               </p>
//             </li>

//             <li>
//               <div className={`${rel.ser_img}`}>
//                 <Image
//                   className={`${rel.fit_img_max} ${rel.me_2}`}
//                   src="/images/img-4-1@2x.png"
//                   alt="e8"
//                   loading="lazy"
//                   quality={40}
//                   width={170}
//                   height={161}
//                 />
//               </div>
//               <h5>Multi Lingual</h5>
//               <p>
//                 Find the right talent, faster. Smarter hiring decisions, reduced
//                 time-to-fill. Transform your hiring process today
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Solutions;
