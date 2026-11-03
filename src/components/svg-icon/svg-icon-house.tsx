import type { SvgIconProps } from "@/components/svg-icon";

import { SvgIcon } from "@/components/svg-icon";

const SvgIconHouse = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path d="M14.4 7.6 9.1 2.3c-.6-.6-1.6-.6-2.1 0L1.6 7.7c-.2.2-.2.5 0 .7s.2.1.4.1.3 0 .4-.1h.1V12c0 .8.7 1.5 1.5 1.5h8c.8 0 1.5-.7 1.5-1.5V8.1l.2.2c.2.2.5.2.7 0s.2-.5 0-.7m-7.9 4.9V10c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v2.5zm6-.5c0 .3-.2.5-.5.5h-1.5V10c0-.8-.7-1.5-1.5-1.5H7c-.8 0-1.5.7-1.5 1.5v2.5H4c-.3 0-.5-.2-.5-.5V7.3l4.2-4.2c.2-.2.5-.2.7 0l4.1 4.1v4.9Z" />
    </SvgIcon>
  );
};
export default SvgIconHouse;
