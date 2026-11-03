import type { SvgIconProps } from "@/components/svg-icon";

import { SvgIcon } from "@/components/svg-icon";

const SvgIconNotepad = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path d="M9 8H1c-.3 0-.5-.2-.5-.5S.7 7 1 7h8c.3 0 .5.2.5.5S9.3 8 9 8M6 10H1c-.3 0-.5-.2-.5-.5S.7 9 1 9h5c.3 0 .5.2.5.5s-.2.5-.5.5M5 12H1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h4c.3 0 .5.2.5.5s-.2.5-.5.5M8 12.2h-.3c-.2-.1-.3-.5-.1-.7l.7-1.2c.1-.2.5-.3.7-.2s.3.5.1.7L8.4 12c0 .1-.3.2-.4.2M7 14H1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5" />
      <path d="M9.1 11.6c-.3 0-.6 0-.8-.2-.7-.5-.9-1.4-.4-2.1l4.4-6.7c.2-.3.6-.6.9-.6.4 0 .8 0 1.1.2.7.5.9 1.4.4 2.1L10.3 11c-.2.3-.6.6-.9.7h-.3Zm4.3-8.7h-.1c-.1 0-.2.1-.3.2L8.6 9.8v.4c0 .1.1.2.2.3h.4c.1 0 .2-.1.3-.2l4.4-6.7c.1-.2 0-.5-.1-.7h-.3Z" />
    </SvgIcon>
  );
};
export default SvgIconNotepad;
