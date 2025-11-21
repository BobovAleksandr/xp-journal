import { ComponentType, HTMLAttributes, SVGProps } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
import Link from "next/link";

type ButtonVariant = "default" | "outline" | "light";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant: ButtonVariant;
  type?: "button" | "submit" | "reset";
  as?: "button" | "internalLink" | "externalLink";
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  href?: string;
} & Omit<HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, "href">;

const Button = ({
  children,
  className,
  variant,
  icon,
  as = "button",
  href,
  type = "button",
  ...rest
}: ButtonProps) => {
  const Icon = icon;

  const buttonClassName = cn(styles.button, styles[variant], className);
  const ButtonIcon = () => {
    if (!Icon) return null;
    return <Icon width="1em" height="1em" className={styles.icon} />;
  };

  if (as === "internalLink") {
    return (
      <Link href={href ?? ""} className={buttonClassName} {...rest}>
        <ButtonIcon />
        {children}
      </Link>
    );
  }

  if (as === "externalLink") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClassName}
        {...rest}
      >
        <ButtonIcon />
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} type={type} {...rest}>
      <ButtonIcon />
      {children}
    </button>
  );
};

export default Button;
