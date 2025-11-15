import { Span } from "../Typography/Typography";
import styles from "./Chips.module.scss";
import cn from "classnames";

type ChipsProps = {
  children: string;
  variant?: "default" | "outline";
  className?: string;
};

const Chips = ({ children, className, variant = "default" }: ChipsProps) => {
  return (
    <Span className={cn(styles.chips, className, styles[`chips--${variant}`])}>
      {children}
    </Span>
  );
};

export default Chips;
