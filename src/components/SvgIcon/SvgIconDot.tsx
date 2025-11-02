import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

const SvgIconDot = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <circle cx="7.9" cy="7.9" r="3" />
    </SvgIcon>
  );
};
export default SvgIconDot;
