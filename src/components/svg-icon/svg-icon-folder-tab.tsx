import { SvgIcon, type SvgIconProps } from "@/components/svg-icon";

const SvgIconFolderTab = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon viewBox="0 0 215 50" preserveAspectRatio="none" {...props}>
      <path
        className="md:hidden"
        d="M180.8 25.3C166.6.7 159.9 0 143 0H12C5.4 0 0 5.4 0 12v38h215c-16.9 0-23-5-34.2-24.7"
      />
      <path
        className="hidden md:block"
        d="M180.8 25.3C166.6.7 159.9 0 143 0H16C7.2 0 0 7.2 0 16v34h215c-16.9 0-23-5-34.2-24.7"
      />
    </SvgIcon>
  );
};

export default SvgIconFolderTab;
