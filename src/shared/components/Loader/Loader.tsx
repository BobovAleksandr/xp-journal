import { CSSProperties } from "react";
import styles from "./Loader.module.scss";
import cn from "classnames";

type LoaderProps = {
  size: number;
  className?: string;
};

const Loader = ({ size, className }: LoaderProps) => {
  return (
    <div
      className={cn(styles.loader, className)}
      style={{ "--width": `${size}vw`} as CSSProperties}
    ></div>
  );
};

export default Loader;
