'use client';

import { ComponentType, ReactNode, SVGProps, useState } from "react";
import styles from "./AccordionItem.module.scss"
import ChevronDown from "@/shared/assets/chevron-down.svg"
import cn from 'classnames';

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  isOpenedByDefault?: boolean;
}

const AccordionItem = ({ title, isOpenedByDefault = true, icon, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(isOpenedByDefault);

  const Icon = icon ?? null
  return (
    <li className={cn(styles.accordion_item, { [styles.accordion_item__open]: isOpen })}>
      <div className={styles.accordion_header} onClick={() => setIsOpen(prev => !prev)}>
        <h2 className={styles.accordion_heading}>
          {Icon && <Icon className={styles.accordion_icon} />}
          {title}
        </h2>
        <ChevronDown className={cn(styles.accordion_icon, styles.accordion_icon__chevron)}
        />
      </div>
      <div className={styles.accordion_content}>
        {children}
      </div>
    </li>
  )
}

export default AccordionItem;