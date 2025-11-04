import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import { useTranslations } from "next-intl";

import { accounts, links } from "@/utils/links";

import { Typography } from "@/components/Typography";

import { FooterListItem } from "@/sections/Footer";

export type FooterProps = {} & HTMLAttributes<HTMLElement>;

const Footer = forwardRef<HTMLElement, FooterProps>(({ ...props }, ref) => {
  const t = useTranslations();

  const socials = [
    { label: t("footer.email"), value: accounts.emailAddress },
    { label: t("footer.linkedin"), href: links.linkedin },
    { label: t("footer.github"), href: links.github },
    { label: t("footer.x"), href: links.x },
  ];

  const renderers = {
    serif: (chunks: ReactNode) => (
      <span className="font-serif italic">{chunks}</span>
    ),
  };

  return (
    <footer
      id="contact"
      ref={ref}
      className="py-16 bg-blue-500 text-blue-100 selection:bg-blue-100 selection:text-blue-500"
      {...props}
    >
      <div className="mx-auto w-full max-w-xl px-6 sm:px-0 space-y-24">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
          <div className="col-span-1 sm:col-span-3">
            <Typography variant="subtitle1" color="inherit">
              {t("footer.contact")}
            </Typography>
          </div>

          <div className="col-span-1 sm:col-span-9 space-y-3">
            {socials.map((social) => (
              <FooterListItem key={social.label} {...social} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Typography variant="body1" color="inherit">
            {t.rich("footer.quote", renderers)}
          </Typography>
          <div className="border-t border-blue-100 pt-1 text-right">
            <Typography variant="small" color="inherit">
              {t("footer.copyright")}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
