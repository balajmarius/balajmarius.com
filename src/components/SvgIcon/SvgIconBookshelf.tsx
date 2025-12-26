import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

const SvgIconBookshelf = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path d="M15 12h-1.5V5.5c0-.8-.7-1.5-1.5-1.5-.7 0-1.3.5-1.4 1.1-.2-.1-.4-.1-.6-.1s-.4 0-.6.1C9.3 4.5 8.7 4 8 4c-.2 0-.4 0-.6.1C7.3 3.5 6.7 3 6 3s-1.3.5-1.4 1.1C4.4 4 4.2 4 4 4c-.8 0-1.5.7-1.5 1.5V12H1c-.3 0-.5.2-.5.5s.2.5.5.5h14c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM3.5 12V5.5c0-.3.2-.5.5-.5s.5.2.5.5V12h-1zm2 0V4.5c0-.3.2-.5.5-.5s.5.2.5.5V12h-1zm2 0V5.5c0-.3.2-.5.5-.5s.5.2.5.5V12h-1zm2 0V6.5c0-.3.2-.5.5-.5s.5.2.5.5V12h-1zm2 0V5.5c0-.3.2-.5.5-.5s.5.2.5.5V12h-1z" />
    </SvgIcon>
  );
};

export default SvgIconBookshelf;
