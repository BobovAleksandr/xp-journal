"use client";

import styles from "./Dropdown.module.scss";
import cn from "classnames";
import Menu from "@/shared/components/MenuContainer/MenuContainer";
import { ReactNode } from "react";

type DropdownProps = {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  isOpen: boolean;
  onToggle: (open: boolean) => void;
};

const Dropdown = ({
  children,
  trigger,
  className,
  isOpen,
  onToggle,
}: DropdownProps) => {

  return (
    <div className={cn(styles.dropdown, className)}>
      <div onClick={() => onToggle(!isOpen)} className={styles.trigger}>
        {trigger}
      </div>
      {isOpen && <Menu className={styles.dropdown_menu}>{children}</Menu>}
    </div>
  );
};

export default Dropdown;
