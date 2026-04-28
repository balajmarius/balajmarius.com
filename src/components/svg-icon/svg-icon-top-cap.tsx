import { SvgIcon, type SvgIconProps } from "@/components/svg-icon";

const SvgIconTopCap = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props} viewBox="0 0 277 10">
      <path d="M267 0H10c0 5.5-4.5 10-10 10h277c-5.5 0-10-4.5-10-10" />
    </SvgIcon>
  );
};

export default SvgIconTopCap;
