import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

const SvgIconCheckmark = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path d="M13.8,3.7c-0.3-0.3-0.8-0.3-1.1,0L5.5,10.9L3.3,8.7c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1l2.8,2.8c0.2,0.2,0.4,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2l7.8-7.8C14.1,4.5,14.1,4,13.8,3.7z" />
    </SvgIcon>
  );
};
export default SvgIconCheckmark;
