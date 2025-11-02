import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

const SvgIconClipboard = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path d="M12,3.5h-0.5V3c0-0.8-0.7-1.5-1.5-1.5H4C3.2,1.5,2.5,2.2,2.5,3v8c0,0.8,0.7,1.5,1.5,1.5h0.5V13c0,0.8,0.7,1.5,1.5,1.5h6c0.8,0,1.5-0.7,1.5-1.5V5C13.5,4.2,12.8,3.5,12,3.5z M3.5,11V3c0-0.3,0.2-0.5,0.5-0.5h6c0.3,0,0.5,0.2,0.5,0.5v8c0,0.3-0.2,0.5-0.5,0.5H4C3.7,11.5,3.5,11.3,3.5,11z M12.5,13c0,0.3-0.2,0.5-0.5,0.5H6c-0.3,0-0.5-0.2-0.5-0.5v-0.5H10c0.8,0,1.5-0.7,1.5-1.5V4.5H12c0.3,0,0.5,0.2,0.5,0.5V13z" />
    </SvgIcon>
  );
};
export default SvgIconClipboard;
