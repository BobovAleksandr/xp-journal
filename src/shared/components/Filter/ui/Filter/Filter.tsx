"use client";

import Dropdown from "@/shared/components/Dropdown/Dropdown";
import Button from "@/shared/components/Button/Button";
import FilterIcon from "@/shared/assets/funnel.svg";
import { ReactNode } from "react";
import cn from "classnames";
import styles from "./Filter.module.scss";

type FilterProps = {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onToggle: (open: boolean) => void;
};

const Filter = ({ children, isOpen, onToggle, className }: FilterProps) => {
  
  return (
    <Dropdown
      onToggle={onToggle}
      isOpen={isOpen}
      className={cn(styles.filter, className)}
      trigger={
        <Button variant="outline" icon={FilterIcon}>
          Фильтры
        </Button>
      }
    >
      {children}
    </Dropdown>
  );
};

export default Filter;
