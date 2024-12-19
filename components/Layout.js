// components/Layout.js

import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta
          name="description"
          content="rel8hr offers one of the best HRMS Software solutions in UAE for businesses to handle their daily HR tasks. Check out the best HR software in Dubai which help to monitor all your employee datas."
        />
        <meta name="keywords" content="HRMS Software, HR Software Dubai" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HRMS Software Solutions in UAE | HR Software in Dubai" />
        <meta
          property="og:description"
          content="rel8hr offers one of the best HRMS Software solutions in UAE for businesses to handle their daily HR tasks. Check out the best HR software in Dubai which help to monitor all your employee datas."
        />
        <meta
          property="og:image"
          content="https://www.rel8hr.com/_next/image?url=%2Fimages%2Fbanner-m-moc.png"
        />
        <meta property="og:image:width" content="924" />
        <meta property="og:image:height" content="600" />
        <meta property="og:url" content="https://www.rel8hr.com/" />
        <meta property="og:site_name" content="Rel8 HRMS" />
      </Head>
      {/* Uncomment the script tags below if you need Google Tag Manager */}
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TNK2H8N');`,
        }}
      /> */}
      {/* <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNK2H8N" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      /> */}
      <div>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
