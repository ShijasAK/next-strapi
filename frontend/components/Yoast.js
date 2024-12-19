import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Yoast = (props) => {

  if (props.meta) {
    return (
      <React.Fragment>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="description" content={props.meta.og_description} />
        <meta property="og:locale" content={props.meta.og_locale} />
        <meta property="og:type" content={props.meta.og_type} />
        <meta property="og:title" content={props.meta.og_title} />
        <meta property="og:description" content={props.meta.og_description} />
        <meta property="og:site_name" content={props.meta.og_site_name} />
        <meta
          property="article:modified_time"
          content={props.meta.article_modified_time}
        />
        <meta
          name="google-site-verification"
          content="eISOw7NtKAeZ5O0vgT_tzLl3tnIbKes3707WUxemc4M"
        />

        {/* <link rel="canonical" href={props.meta.og_url} /> */}
        {/* <meta property="og:url" content={props.meta.og_url} /> */}
        {/* <link rel="icon" type="image/png" href="https://www.element8.sa/favicon.ico" /> */}
        {/* <link rel="apple-touch-icon" href="https://www.element8.sa/favicon.ico" /> */}

        {props.meta.og_image && (
          <meta property="og:image" content={props.meta.og_image[0].url} />
        )}

        <meta name="twitter:card" content="summary" />
        <meta property="twitter:url" content={props.meta.og_url}></meta>
        <meta name="twitter:title" content={props.meta.og_title} />
        <meta name="twitter:description" content={props.meta.og_description} />
      </React.Fragment>
    );
  }
};

export default Yoast;
