import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

const SvgIconNotepad = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path d="M13,1H3C2.4,1,2,1.4,2,2v12c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V2C14,1.4,13.6,1,13,1z M13,14H3V2h10V14z" />
      <rect x="4.5" y="4.5" width="7" height="1" />
      <rect x="4.5" y="7" width="7" height="1" />
      <rect x="4.5" y="9.5" width="5" height="1" />
    </SvgIcon>
  );
};
export default SvgIconNotepad;
