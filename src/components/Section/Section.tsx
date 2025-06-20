import { ReactNode, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className="pt-48 px-12">{children}</section>;
};

export default Section;
