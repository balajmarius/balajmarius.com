import { type SvgIconProps } from "@/components/SvgIcon";

const SvgIconBranch = (props: Omit<SvgIconProps, "children">) => {
  return (
    <svg {...props} viewBox="0 0 430 50" fill="currentColor">
      <path d="M426 45.5H239c-.4 0-36.5-.4-36.5-33H350v-1H0v1h201.5c0 33.6 37.1 34 37.5 34h187c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" />
      <g className="fill-blue-300">
        <circle cx="15" cy="12" r="4" />
        <circle cx="52.3" cy="12" r="4" />
        <circle cx="89.7" cy="12" r="4" />
        <circle cx="127" cy="12" r="4" />
        <circle cx="164.3" cy="12" r="4" />
        <circle cx="201.7" cy="12" r="4" />
        <circle cx="239" cy="12" r="4" />
        <circle cx="276.3" cy="12" r="4" />
        <circle cx="313.7" cy="12" r="4" />
        <circle cx="351" cy="12" r="4" />
        <circle cx="239.3" cy="46" r="4" />
        <circle cx="276.7" cy="46" r="4" />
        <circle cx="314" cy="46" r="4" />
        <circle cx="351.3" cy="46" r="4" />
        <circle cx="388.7" cy="46" r="4" />
        <circle cx="426" cy="46" r="4" />
      </g>
    </svg>
  );
};
export default SvgIconBranch;
