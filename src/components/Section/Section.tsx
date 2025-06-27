import { ReactNode, HTMLAttributes } from "react";

export type SectionProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Section = ({ children }: SectionProps) => {
  return <section className="pt-48 px-12">{children}</section>;
};

export default Section;
