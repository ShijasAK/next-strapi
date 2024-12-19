import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { Modal } from "react-bootstrap";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormContact = (props) => {
  const router = useRouter();
  const handleClose = () => props.onHide();
  const [successMessage, setSuccessMessage] = useState(false);
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    companyName: Yup.string().required("Company Name is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phonePrefix: "",
      phoneNumber: "",
      companyName: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setSuccessMessage(true);
      router.push(`/#thank-you`);
    },
  });

  return (
    <Modal
      closeButton
      className={`${rel.pop_up_form}`}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={`${rel.p_0} ${rel.rel}`}>
        <div className={`${rel.foma_main} ${rel.w_100}`} id="contact">
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
                <span>Contact</span> Us
              </h3>
            </div>
            <form name="contact-form">
              <ul className={`${rel.form_ul}`}>
                <li>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your Full Name"
                    className={`${rel.form_fld}`}
                    {...formik.getFieldProps("fullName")}
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <div className="error">{formik.errors.fullName}</div>
                  )}
                </li>
                <li className={`${rel.w_50}`}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Business Email"
                    className={`${rel.form_fld}`}
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="error">{formik.errors.email}</div>
                  )}
                </li>
                <li className={`${rel.w_50}`}>
                  <div className={`${rel.w_100} ${rel.d_flex}`}>
                    <select
                      name="phonePrefix"
                      className={`${rel.phone_select} ${rel.form_fld}`}
                      {...formik.getFieldProps("phonePrefix")}
                    >
                      <option value="+971">+971</option>
                      <option value="+973">+973</option>
                      <option value="+974">+974</option>
                      <option value="+966">+966</option>
                      <option value="+974">+968</option>
                    </select>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className={`${rel.phone_input} ${rel.form_fld}`}
                      {...formik.getFieldProps("phoneNumber")}
                    />
                  </div>
                  {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <div className="error">{formik.errors.phoneNumber}</div>
                  )}
                </li>
                {/* <li>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Your Company Name"
                  className={`${rel.form_fld}`}
                  {...formik.getFieldProps("companyName")}
                />
                {formik.touched.companyName && formik.errors.companyName && (
                  <div className="error">{formik.errors.companyName}</div>
                )}
              </li> */}
                <li>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className={`${rel.form_fld}`}
                    {...formik.getFieldProps("message")}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <div className="error">{formik.errors.message}</div>
                  )}
                </li>
              </ul>

              <Link
                href="#"
                onClick={formik.handleSubmit}
                className={`${rel.but_01} ${rel.but_yellow} ${rel.mt_50}`}
              >
                Submit Now
              </Link>
              {successMessage && (
                <div className="success">
                  Thank you for getting in touch! we will get back to you
                  shortly.
                </div>
              )}
            </form>
          </div>
        </div>
        <span
          className={`${rel.pop_close}`}
          variant="secondary"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </span>
      </Modal.Body>
      <style jsx>{`
        .success {
          color: #4b980f;
          width: 100%;
          border: 1px solid #4b980f;
          padding: 10px 20px;
          margin-top: 25px;
          font-family: "metropolislight";
        }
        .error {
          color: #dd0000;
          font-family: "metropolislight";
        }
      `}</style>
    </Modal>
  );
};
export default FormContact;
