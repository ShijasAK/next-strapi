import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import axios from "axios";
import cheerio from "cheerio";

const CelebrateEmployees = ({ data }) => {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const $ = cheerio.load(data.title);
  $("span").addClass(`${rel.display_inline}`);
  const cleanedTitle = $("div.raw-html-embed").html();

  useEffect(() => {
    const showThankYouState = localStorage.getItem("showThankYou");
    if (showThankYouState === "true") {
      setShowThankYou(true);
      localStorage.removeItem("showThankYou");
    }
  }, []);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    businessEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    fullName: "",
    businessEmail: "",
    phonePrefix: "",
    phoneNumber: "",
    message: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("Form values being submitted:", values);

        const data = {
          fullName: values.fullName,
          businessEmail: values.businessEmail,
          phonePrefix: values.phonePrefix,
          phoneNumber: values.phoneNumber,
          message: values.message,
        };

        const response = await axios.post(
          "https://rel8hrdev.e8demo.com/api/contacts",
          { data }
        );

        if (response.status === 200) {
          setSuccessMessage(true);
          resetForm();
          setShowThankYou(true);
          localStorage.setItem("showThankYou", "true");
          setTimeout(() => {
            setSuccessMessage(false);
          }, 2000);
        } else {
          console.error("API call failed:", response);
        }
      } catch (error) {
        console.error("Error making API call:", error);
      }
    },
  });

  useEffect(() => {
    if (data) {
      formik.setValues({
        ...formik.values,
        phonePrefix: data.phonePrefix ? `+${data.phonePrefix[0].prefix}` : "",
      });
    }
  }, [data]);

  if (!data) {
    return null;
  }

  return (
    <section style={{ background: `#c2b2ef` }} id="contact">
      <div className={`${rel.container} ${rel.rel}`}>
        <div
          className={`${rel.pt_100} ${rel.pb_100} ${rel.empower_sec} ${rel.w_100} ${rel.d_flex} ${rel.two_col}`}
        >
          {!showThankYou ? (
            <>
              <div className={`${rel.txt_block_empower} ${rel.flex_center}`}>
                <div
                  className={`${rel.w_100} ${rel.pe_0} ${rel.left_txt_block}`}
                >
                  <div className={`${rel.w_100} ${rel.text_black}`}>
                    <div
                      className={`${rel.w_100} ${rel.title_52} ${rel.title_black} ${rel.mb_2}`}
                    >
                      <div className={`${rel.title_52}`}>
                        <h3
                          dangerouslySetInnerHTML={{ __html: cleanedTitle }}
                        ></h3>
                      </div>
                      <form name="contact-form" onSubmit={formik.handleSubmit}>
                        <ul className={`${rel.form_ul}`}>
                          <li>
                            <input
                              type={data.nameField.type}
                              name={data.nameField.name}
                              placeholder={
                                data.nameField.placeholder || "Your Full Name"
                              }
                              className={`${rel.form_fld}`}
                              {...formik.getFieldProps("fullName")}
                            />
                            {formik.touched.fullName &&
                              formik.errors.fullName && (
                                <div className="error">
                                  {formik.errors.fullName}
                                </div>
                              )}
                          </li>
                          <li className={`${rel.w_50}`}>
                            <input
                              type={data.emailField.type}
                              name={data.emailField.name}
                              placeholder={
                                data.emailField.placeholder || "Business Email"
                              }
                              className={`${rel.form_fld}`}
                              {...formik.getFieldProps("businessEmail")}
                            />
                            {formik.touched.businessEmail &&
                              formik.errors.businessEmail && (
                                <div className="error">
                                  {formik.errors.businessEmail}
                                </div>
                              )}
                          </li>
                          <li className={`${rel.w_50}`}>
                            <div className={`${rel.w_100} ${rel.d_flex}`}>
                              <select
                                name="phonePrefix"
                                className={`${rel.phone_select} ${rel.form_fld}`}
                                {...formik.getFieldProps("phonePrefix")}
                              >
                                {data.phonePrefix.map((item, index) => (
                                  <option key={index} value={`+${item.prefix}`}>
                                    {`+${item.prefix}`}
                                  </option>
                                ))}
                              </select>
                              <input
                                type={data.phoneNumberField.type}
                                name={data.phoneNumberField.name}
                                placeholder={
                                  data.phoneNumberField.placeholder ||
                                  "Phone Number"
                                }
                                className={`${rel.phone_input} ${rel.form_fld}`}
                                {...formik.getFieldProps("phoneNumber")}
                              />
                            </div>
                            {formik.touched.phoneNumber &&
                              formik.errors.phoneNumber && (
                                <div className="error">
                                  {formik.errors.phoneNumber}
                                </div>
                              )}
                          </li>
                          <li>
                            <textarea
                              name={data.messageField.type}
                              placeholder={
                                data.messageField.placeholder || "Your Message"
                              }
                              className={`${rel.form_fld}`}
                              {...formik.getFieldProps("message")}
                            />
                            {formik.touched.message &&
                              formik.errors.message && (
                                <div className="error">
                                  {formik.errors.message}
                                </div>
                              )}
                          </li>
                        </ul>

                        <button
                          type="submit"
                          className={`${rel.but_01} ${rel.but_yellow} ${rel.mt_10}`}
                        >
                          {data.submit.name}
                        </button>
                        {/* {successMessage && (
                          <div className="success">
                            Thank you for getting in touch! We will get back to
                            you shortly.
                          </div>
                        )} */}
                      </form>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000"></div>
                  </div>
                </div>
              </div>
              <div className={`${rel.empower_img_right}`}>
                <Image
                  className={`${rel.fit_img_max}`}
                  src={`https://rel8hrdev.e8demo.com${data.logo.data.attributes.url}`}
                  alt="e8"
                  loading="lazy"
                  quality={40}
                  width={675}
                  height={603}
                />
              </div>
            </>
          ) : (
            <div className={rel.centered_container}>
              <div className={rel.not_found}>
                <h3
                  className={rel.qodef_404_subtitle}
                  style={{ color: "#000" }}
                >
                  Thank you for reaching out.
                </h3>
                <p className={rel.qodef_404_text} style={{ color: "#000" }}>
                  We will get back to you very soon.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CelebrateEmployees;
