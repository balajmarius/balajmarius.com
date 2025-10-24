import type { HTMLAttributes, ReactNode } from "react";
import { useTranslations } from "next-intl";

import { Typography } from "@/components/Typography";

import { FooterListItem } from "@/sections/Footer";

export type FooterProps = {} & HTMLAttributes<HTMLElement>;

const Footer = ({ ...props }: FooterProps) => {
  const t = useTranslations();

  const socials = [
    { label: t("footer.email"), email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS },
    { label: t("footer.linkedin"), href: process.env.NEXT_PUBLIC_LINKEDIN_URL },
    { label: t("footer.github"), href: process.env.NEXT_PUBLIC_GITHUB_URL },
    { label: t("footer.bluesky"), href: process.env.NEXT_PUBLIC_BLUESKY_URL },
  ];

  const renderers = {
    serif: (chunks: ReactNode) => <span className="font-serif italic">{chunks}</span>,
  };

  return (
    <footer className="bg-blue-500 text-blue-100 py-16" {...props}>
      <div className="w-xl mx-auto space-y-24">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <Typography variant="subtitle1" color="inherit">
              {t("footer.contact")}
            </Typography>
          </div>

          <div className="col-span-9 space-y-3">
            {socials.map((social) => (
              <FooterListItem key={social.label} label={social.label} value={social.email} href={social.href} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Typography variant="body1" color="inherit">
            {t.rich("footer.quote", renderers)}
          </Typography>

          <div className="text-right border-t border-blue-100 pt-1">
            <Typography variant="small" color="inherit">
              {t("footer.copyright")}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
