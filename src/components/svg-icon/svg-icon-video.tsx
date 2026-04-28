import { SvgIcon, type SvgIconProps } from "@/components/svg-icon";

const SvgIconVideo = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path d="M14.4,1.6H1.6C0.7,1.6,0,2.3,0,3.1v9.8c0,0.8,0.7,1.5,1.6,1.5h12.8c0.9,0,1.6-0.7,1.6-1.5V3.1C16,2.3,15.3,1.6,14.4,1.6z M14.9,3.1v1.2h-2.7V2.7h2.1C14.7,2.7,14.9,2.9,14.9,3.1z M11.2,11.7v1.6H4.8v-1.6v-1.1V8.5h6.4v2.1V11.7z M4.8,4.4V2.7h6.4v1.6v1.1v2.1H4.8V5.2V4.4z M3.7,7.5H1.1V5.2h2.7V7.5z M3.7,8.5v2.1H1.1V8.5H3.7z M12.3,8.5h2.7v2.1h-2.7V8.5z M12.3,7.5V5.3h2.7v2.1H12.3z M1.6,2.7h2.1v1.7H1.1V3.1C1.1,2.9,1.3,2.7,1.6,2.7z M1.1,12.9v-1.2h2.7v1.6H1.6C1.3,13.3,1.1,13.1,1.1,12.9z M14.4,13.3h-2.1v-1.6h2.7v1.2C14.9,13.1,14.7,13.3,14.4,13.3z" />
    </SvgIcon>
  );
};

export default SvgIconVideo;
