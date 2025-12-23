"use client";

import styles from "./Dropdown.module.scss";
import cn from "classnames";
import Menu from "@/shared/components/MenuContainer/MenuContainer";
import { ReactNode, useEffect, useRef } from "react";

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

  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        onToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div ref={rootRef} className={cn(styles.dropdown, className)}>
      <div onClick={() => onToggle(!isOpen)} className={styles.trigger}>
        {trigger}
      </div>
      {isOpen && <Menu className={styles.dropdown_menu}>{children}</Menu>}
    </div>
  );
};

export default Dropdown;
