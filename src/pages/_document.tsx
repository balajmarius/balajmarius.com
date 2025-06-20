import { Html, Head, Main, NextScript } from "next/document";

import copy from "@/copy/en-EN.json";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={copy.metadata.description} />
        <meta name="twitter:title" content={copy.metadata.title} />
        <meta name="twitter:description" content={copy.metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content={copy.metadata.title} />
        <meta property="og:description" content={copy.metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://balajmarius.com/" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
      </Head>

      <body className="antialiased bg-white text-gray-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
