import "@/static/css/globals.css";

import type { AppProps } from "next/app";
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
      style: "normal",
    },
    {
      path: "../static/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
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
      style: "normal",
    },
    {
      path: "../static/fonts/Gambetta-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={cx("w-2xl", sans.className, serif.className)}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
