import React, { useEffect, useState } from "react";
import Head from "next/head";

const HTMLHead = ({title,metaDescription}) => {
    return (
        <>
        <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Metrophobic&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PD3TGPLH');`,
          }}
        />
      </Head>
      </>
    )
}

export default HTMLHead;