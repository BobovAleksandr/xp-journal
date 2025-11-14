import { ComponentType, HTMLAttributes, SVGProps } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

type ButtonVariant = "default" | "outline" | "light";

type ButtonProps = {
  children: string;
  className?: string;
  variant: ButtonVariant;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
} & HTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  variant,
  icon,
  ...rest
}: ButtonProps) => {
  const Icon = icon;
  return (
    <button className={cn(styles.button, styles[variant], className)} {...rest}>
      {Icon && <Icon width={'1em'} height={'1em'} className={styles.icon} />}
      {children}
    </button>
  );
};

export default Button;
