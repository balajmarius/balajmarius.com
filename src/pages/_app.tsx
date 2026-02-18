import "@/static/css/globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { motion, useScroll, useTransform } from "framer-motion";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import { NextIntlClientProvider } from "next-intl";
import { useRef } from "react";
import { AppBar } from "@/sections/AppBar";
import { Footer } from "@/sections/Footer";
import { GOOGLE_ANALYTICS_ID } from "@/utils/const";
import { cn } from "@/utils/helpers";
import { scrollTransforms } from "@/utils/keyframes";

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

const mono = localFont({
  src: [
    {
      path: "../static/fonts/RobotoMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mono",
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const mainRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    scrollTransforms.scale.enter,
    scrollTransforms.scale.exit
  );
  const borderRadius = useTransform(
    scrollYProgress,
    scrollTransforms.borderRadius.enter,
    scrollTransforms.borderRadius.exit
  );

  return (
    <NextIntlClientProvider
      locale={router.locale ?? "en-EN"}
      messages={pageProps.messages}
    >
      <AppBar />

      <motion.main
        ref={mainRef}
        className={cn(
          sans.variable,
          serif.variable,
          mono.variable,
          "min-h-screen overflow-hidden pb-48 bg-white selection:bg-blue-500 selection:text-white origin-bottom"
        )}
        style={{
          scale,
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        }}
      >
        <Component {...pageProps} />
      </motion.main>

      <Footer ref={footerRef} />
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
    </NextIntlClientProvider>
  );
};

export default App;
