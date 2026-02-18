import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

const SvgIconM = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props} className="fill-blue-500">
      <path d="M4.7,13.8L2.4,7.9v5.9H0V3.5h3.2l2.6,7l2.6-7h3.2v10.3H9.1v-6l-2.2,6H4.7z M16,12.3c0,0.5-0.1,0.8-0.4,1.1 c-0.3,0.3-0.7,0.4-1.1,0.4c-0.5,0-0.8-0.1-1.1-0.4c-0.3-0.3-0.4-0.7-0.4-1.1c0-0.5,0.1-0.8,0.4-1.1c0.3-0.3,0.7-0.4,1.1-0.4 c0.5,0,0.8,0.1,1.1,0.4C15.9,11.5,16,11.8,16,12.3z" />
    </SvgIcon>
  );
};
export default SvgIconM;
