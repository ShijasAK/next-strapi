import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { Modal } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css'

const Form = (props) => {
  useEffect(() => {}, []);
  return (
    <Modal
      closeButton
      className={`${rel.pop_up_form}`}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={`${rel.p_0}`}>
        <div className={`${rel.foma_main} ${rel.w_100}  `}>
          <div className={`${rel.foma_left}`}>
            <Image
              className={`${rel.fit_img_max} ${rel.me_2}`}
              src="/images/form-img.png"
              alt="e8"
              loading="lazy"
              quality={40}
              width={334}
              height={496}
            />
          </div>
          <div className={`${rel.foma_right}`}>
            <div className={`${rel.title_52}`}>
              <h3>
                <span>Book a</span> Demo
              </h3>
            </div>
            <ul className={`${rel.form_ul}`}>
              <li>
                <input
                  className={`${rel.form_fld}`}
                  type="text"
                  placeholder="Your Full Name"
                ></input>
              </li>
              <li className={`${rel.w_50}`}>
                <input
                  className={`${rel.form_fld}`}
                  type="text"
                  placeholder="Business Email"
                ></input>
              </li>
              <li className={`${rel.w_50}`}>
                <div className={`${rel.w_100} ${rel.d_flex}`}>
                  <select
                    className={`${rel.phone_select} ${rel.form_fld}`}
                    id="cars"
                    name="cars"
                  >
                    <option value="volvo">+971</option>
                    <option value="saab">+971</option>
                    <option value="fiat">+971</option>
                    <option value="audi">+971</option>
                  </select>
                  <input
                    className={`${rel.phone_input} ${rel.form_fld}`}
                    type="text"
                    placeholder="Phone Number"
                  ></input>
                </div>
              </li>
              <li>
                <input
                  className={` ${rel.form_fld}`}
                  type="text"
                  placeholder="Your Company Name"
                ></input>
              </li>
              <li>
                <textarea
                  className={`${rel.form_fld}`}
                  placeholder="Your Message"
                ></textarea>
              </li>
            </ul>

            <Link
              href="#"
              className={`${rel.but_01} ${rel.but_yellow} ${rel.mt_50}`}
            >
              Submit Now
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default Form;
