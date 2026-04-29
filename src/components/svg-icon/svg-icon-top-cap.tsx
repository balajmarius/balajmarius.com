import { SvgIcon, type SvgIconProps } from "@/components/svg-icon";

const SvgIconTopCap = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props} viewBox="0 0 277 11">
      <path d="M10,0l257,0c0,5.5,4.5,10,10,10v1H0l0-1C5.5,10,10,5.5,10,0z" />
    </SvgIcon>
  );
};

export default SvgIconTopCap;
