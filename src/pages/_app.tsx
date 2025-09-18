import "@/static/css/globals.css";

import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import cx from "classnames";
import localFont from "next/font/local";

const sans = localFont({
  src: [
    {
      path: "../static/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../static/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../static/fonts/GeneralSans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../static/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

const serif = localFont({
  src: [
    {
      path: "../static/fonts/Gambetta-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../static/fonts/Gambetta-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../static/fonts/Gambetta-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../static/fonts/Gambetta-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-serif",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextIntlClientProvider locale="en-EN" messages={pageProps.messages}>
      <main className={cx(sans.variable, serif.variable, "bg-white")}>
        <Component {...pageProps} />
      </main>
    </NextIntlClientProvider>
  );
};

export default App;
