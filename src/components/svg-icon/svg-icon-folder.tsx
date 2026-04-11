import { SvgIcon, type SvgIconProps } from "@/components/svg-icon";

const SvgIconFolder = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path d="M14,4H7.5L6.1,2.6C5.9,2.2,5.5,2,5,2H2C1.4,2,1,2.4,1,3v10c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V5C15,4.4,14.6,4,14,4z M14,13H2V3h3l1.4,1.4C6.6,4.8,7,5,7.5,5H14V13z" />
    </SvgIcon>
  );
};

export default SvgIconFolder;
