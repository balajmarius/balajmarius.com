import "@/static/css/globals.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import copy from "@/copy/en-EN.json";

import { cn } from "@/utils/helpers";
import { APP_URL } from "@/utils/const";

import { ScrollContainer } from "@/components/scroll-container";

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

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: copy.metadata.title,
  description: copy.metadata.description,
  twitter: {
    card: "summary_large_image",
    images: "/og-image.png",
    site: "@balajmarius",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://balajmarius.com/",
    title: copy.metadata.title,
    description: copy.metadata.description,
    images: {
      url: "/og-image.png",
    },
  },
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="antialiased bg-blue-500 text-gray-600">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ScrollContainer
            className={cn(sans.variable, serif.variable, mono.variable)}
          >
            {children}
          </ScrollContainer>
        </NextIntlClientProvider>

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  );
};

export default RootLayout;
