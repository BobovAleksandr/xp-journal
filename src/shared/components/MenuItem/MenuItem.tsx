import Link from "next/link";
import styles from "./MenuItem.module.scss";
import cn from "classnames";
import { ComponentType, SVGProps } from "react";

type MenuItemProps = {
  className?: string;
  onClick?: () => void;
  href?: string;
  children: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  as: "button" | "link";
};

const MenuItem = ({
  onClick,
  href,
  icon,
  as,
  children,
  className,
}: MenuItemProps) => {

  const Icon = icon;

  const MenuItemIcon = () => {
    if (!Icon) return null;
    return <Icon width="1em" height="1em" className={styles.icon} />;
  };

  if (as === "button") {
    return (
      <button onClick={onClick} className={cn(styles.menu_item, className)}>
        <MenuItemIcon />
        {children}
      </button>
    );
  }

  if (as === "link") {
    return (
      <Link href={href || ""} className={cn(styles.menu_item, className)}>
        <MenuItemIcon />
        {children}
      </Link>
    );
  }
};

export default MenuItem;
