import { CSSProperties } from "react";
import styles from "./Loader.module.scss";
import cn from "classnames";

type LoaderProps = {
  size?: number;
  className?: string;
};

const Loader = ({ size = 16, className }: LoaderProps) => {
  return (
    <div
      className={cn(styles.loader, className)}
      style={{ "--width": `${size}px`} as CSSProperties}
    ></div>
  );
};

export default Loader;
