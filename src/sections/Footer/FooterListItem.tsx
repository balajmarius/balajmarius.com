import type { HTMLAttributes } from "react";
import { useCopyToClipboard } from "usehooks-ts";

import { SvgIconArrow, SvgIconCheckmark, SvgIconClipboard } from "@/components/SvgIcon";

import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";

export type FooterListItemProps = {
  label: string;
  href?: string;
  value?: string;
} & HTMLAttributes<HTMLElement>;

const FooterListItem = ({ label, value, href, ...props }: FooterListItemProps) => {
  const [copiedText, setCopiedText] = useCopyToClipboard();

  const handleCopy = async () => {
    if (value) {
      await setCopiedText(value);
    }
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3" {...props}>
        <div className="flex items-center gap-1">
          <Typography variant="body1" color="inherit">
            {label}
          </Typography>
          <SvgIconArrow size="small" />
        </div>

        <div className="flex-grow border-t border-blue-100" />
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3" {...props}>
      <div className="flex items-center gap-1">
        <Typography variant="body1" color="inherit">
          {label}
        </Typography>
      </div>

      <div className="flex-grow border-t border-blue-100" />

      <div className="flex items-center gap-1">
        <Typography variant="body1" color="inherit">
          {value}
        </Typography>

        <Button variant="transparent" onClick={handleCopy}>
          {copiedText ? <SvgIconCheckmark size="small" /> : <SvgIconClipboard size="small" />}
        </Button>
      </div>
    </div>
  );
};

export default FooterListItem;
