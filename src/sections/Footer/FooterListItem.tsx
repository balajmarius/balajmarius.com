import type { HTMLAttributes } from "react";
import { useTranslations } from "next-intl";
import { useCopyToClipboard } from "usehooks-ts";

import { SvgIconCheckmark, SvgIconClipboard } from "@/components/SvgIcon";

import { Link } from "@/components/Link";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";

type FooterListItemSocialProps = {
  label: string;
  href: string;
  value?: never;
} & HTMLAttributes<HTMLElement>;

type FooterListItemContactProps = {
  label: string;
  value: string;
  href?: never;
} & HTMLAttributes<HTMLElement>;

export type FooterListItemProps =
  | FooterListItemSocialProps
  | FooterListItemContactProps;

const FooterListItem = ({
  label,
  value,
  href,
  ...props
}: FooterListItemProps) => {
  const t = useTranslations();
  const [copiedText, setCopiedText] = useCopyToClipboard();

  const handleCopy = async () => {
    if (value) {
      await setCopiedText(value);
    }
  };

  return (
    <div className="flex items-center gap-3" {...props}>
      {href ? (
        <Link href={href} target="_blank" variant="inherit">
          {label}
        </Link>
      ) : (
        <Typography variant="body1" color="inherit">
          {label}
        </Typography>
      )}

      <div className="flex-grow border-t border-blue-100" />

      {value ? (
        <div className="flex items-center gap-1">
          <Typography variant="body1" color="inherit">
            {value}
          </Typography>
          <Button
            variant="transparent"
            aria-label={t("footer.copyToClipboard")}
            onClick={handleCopy}
          >
            {copiedText ? (
              <SvgIconCheckmark size="small" />
            ) : (
              <SvgIconClipboard size="small" />
            )}
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default FooterListItem;
