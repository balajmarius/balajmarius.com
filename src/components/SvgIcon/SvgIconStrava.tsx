import { SvgIcon, type SvgIconProps } from "@/components/SvgIcon";

const SvgIconStrava = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props}>
      <path className="fill-orange-300" d="M10.1 12 8.7 9.2h-2l3.4 6.8 3.4-6.8h-2" />
      <path className="fill-orange-200" d="m6.8 5.5 1.9 3.7h2.8L6.8 0 2.1 9.2h2.8" />
    </SvgIcon>
  );
};

export default SvgIconStrava;
