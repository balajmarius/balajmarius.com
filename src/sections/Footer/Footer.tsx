import type { HTMLAttributes, ReactNode } from "react";
import isNil from "lodash.isnil";
import { useTranslations } from "next-intl";

import { Typography } from "@/components/Typography";
import { SvgIconArrow } from "@/components/SvgIcon";

export type FooterProps = {} & HTMLAttributes<HTMLElement>;

const Footer = ({ ...props }: FooterProps) => {
  const t = useTranslations();

  const socials = [
    { label: t("footer.email"), username: "balajmarius@gmail.com" },
    { label: t("footer.linkedin") },
    { label: t("footer.github") },
    { label: t("footer.bluesky") },
    { label: t("footer.goodreads") },
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
              <div className="flex items-center gap-3" key={social.label}>
                <div className="flex items-center gap-1">
                  <Typography variant="body1" color="inherit">
                    {social.label}
                  </Typography>
                  {isNil(social.username) ? <SvgIconArrow size="small" /> : null}
                </div>

                <div className="flex-grow border-t border-blue-100" />

                {social.username ? (
                  <Typography variant="body1" color="inherit">
                    {social.username}
                  </Typography>
                ) : null}
              </div>
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
