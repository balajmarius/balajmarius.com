import { useTranslations } from "next-intl";
import type { HTMLAttributes } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { Button } from "@/components/Button";
import { Link } from "@/components/Link";
import { SvgIconCheckmark, SvgIconClipboard } from "@/components/SvgIcon";
import { Typography } from "@/components/Typography";
import { isNullOrUndefined } from "@/utils/helpers";

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
    if (isNullOrUndefined(value)) {
      return;
    }

    try {
      await setCopiedText(value);
    } catch {}
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

      <div className="grow border-t border-blue-100" />

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
