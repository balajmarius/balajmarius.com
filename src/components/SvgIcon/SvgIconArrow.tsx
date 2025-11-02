import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

const SvgIconArrow = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path d="M11.5,4.8c-0.1-0.1-0.1-0.2-0.3-0.3c-0.1,0-0.1,0-0.2,0H5C4.7,4.5,4.5,4.7,4.5,5S4.7,5.5,5,5.5h4.8l-5.1,5.1c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.4,0.1s0.3,0,0.4-0.1l5.1-5.1V11c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5V5C11.5,4.9,11.5,4.9,11.5,4.8z" />
    </SvgIcon>
  );
};
export default SvgIconArrow;
