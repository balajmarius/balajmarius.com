import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

const SvgIconArrow = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path d="M11.4,4.7c-0.1-0.1-0.1-0.2-0.3-0.3c-0.1,0-0.1,0-0.2,0H5c-0.3,0-0.5,0.2-0.5,0.5S4.7,5.4,5,5.4h4.8 l-5.1,5.1c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.4,0.1s0.3,0,0.4-0.1l5.1-5.1v4.8c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-6 C11.5,4.8,11.4,4.8,11.4,4.7z" />
    </SvgIcon>
  );
};

export default SvgIconArrow;
