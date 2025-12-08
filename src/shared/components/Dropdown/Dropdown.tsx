"use client";

import styles from "./Dropdown.module.scss";
import cn from "classnames";
import Menu from "@/shared/components/MenuContainer/MenuContainer";
import { ReactNode, useState } from "react";

type DropdownProps = {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
};

const Dropdown = ({
  children,
  trigger,
  className,
  isOpen = false,
}: DropdownProps) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <div className={cn(styles.dropdown, className)}>
      <div onClick={() => setOpen((open) => !open)} className={styles.trigger}>
        {trigger}
      </div>
      {open && <Menu className={styles.dropdown_menu}>{children}</Menu>}
    </div>
  );
};

export default Dropdown;
