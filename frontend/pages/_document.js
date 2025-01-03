import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PD3TGPLH" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
