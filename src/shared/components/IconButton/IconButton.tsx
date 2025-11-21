import { ButtonHTMLAttributes, ComponentType, SVGProps } from "react";
import styles from "./IconButton.module.scss";
import cn from "classnames";

type ButtonVariant = "small" | "large";

type IconButtonProps = {
  className?: string;
  variant: ButtonVariant;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const largeIconSize = "1.5em";
const smallIconSize = "1em";

const IconButton = ({
  className,
  icon,
  variant,
  ...props
}: IconButtonProps) => {
  const iconSize = variant === "small" ? smallIconSize : largeIconSize;
  const Icon = icon;

  return (
    <button type={props.type || "button"} className={cn(styles.button, styles[variant], className)} {...props}>
      <Icon width={iconSize} height={iconSize} className={styles.icon}/>
    </button>
  );
};

export default IconButton;
