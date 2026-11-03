import type { SvgIconProps } from "@/components/svg-icon";

import { SvgIcon } from "@/components/svg-icon";

const SvgIconFolder = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path d="M13 5H7.7L6.1 3.4c-.3-.3-.6-.4-1-.4H3c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1Zm0 7H3V4h2.1c.1 0 .2 0 .3.1L7 5.7c.2.2.5.3.7.3H13v6Z" />
    </SvgIcon>
  );
};

export default SvgIconFolder;
