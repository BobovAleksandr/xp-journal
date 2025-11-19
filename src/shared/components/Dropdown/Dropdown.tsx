"use client";

import styles from "./Dropdown.module.scss";
import cn from "classnames";
import Menu from "@/shared/components/MenuContainer/MenuContainer";
import { useEffect, useRef, useState } from "react";

type DropdownProps = {
  className?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
};

const Dropdown = ({ children, trigger, className }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div ref={ref} className={cn(styles.dropdown, className)}>
      <div onClick={() => setOpen((open) => !open)} className={styles.trigger}>
        {trigger}
      </div>
      {open && <Menu className={styles.dropdown_menu}>{children}</Menu>}
    </div>
  );
};

export default Dropdown;
