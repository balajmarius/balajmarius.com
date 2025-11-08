import { cn } from "@/utils/helpers";

import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

const SvgIconBack = ({
  className,
  ...props
}: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon
      {...props}
      className={cn(className, "text-blue-500 group-hover:text-inherit")}
    >
      <path d="M11.8,7.4H4.6L7.9,4c0.2-0.2,0.2-0.5,0-0.7s-0.5-0.2-0.7,0L3,7.5c0,0-0.1,0.1-0.1,0.2 c-0.1,0.1-0.1,0.3,0,0.4C2.9,8.1,3,8.2,3,8.2l4.2,4.2c0.1,0.1,0.2,0.1,0.4,0.1s0.3,0,0.4-0.1c0.2-0.2,0.2-0.5,0-0.7L4.6,8.4h7.3 c0.3,0,0.5-0.2,0.5-0.5S12.1,7.4,11.8,7.4z" />
    </SvgIcon>
  );
};
export default SvgIconBack;
