import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

const SvgIconNotes = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path d="M4.7 3.4h2.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3c-.2 0-.5.2-.5.5v3.6c-.1-.1-.3-.1-.5-.1-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5V3.4zM13.7 5.9c0-.3-.2-.5-.5-.5h-5c-.2 0-.5.2-.5.5v3.6c-.1-.1-.3-.1-.5-.1-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5V6.4h4v4.1c-.2-.1-.3-.1-.5-.1-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5v-6z" />
    </SvgIcon>
  );
};

export default SvgIconNotes;
