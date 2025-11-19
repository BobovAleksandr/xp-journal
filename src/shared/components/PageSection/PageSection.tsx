import { H2 } from "../Typography/Typography";
import styles from "./PageSection.module.scss";
import cn from "classnames";

type PageSectionProps = {
  heading?: string;
  className?: string;
  children: React.ReactNode;
};

const PageSection = ({ heading, children, className }: PageSectionProps) => {
  return (
    <section className={cn(styles.section, className)}>
      {heading && <H2>{heading}</H2>}
      {children}
    </section>
  );
};

export default PageSection;
