import { ComponentType, ReactNode, SVGProps, useState } from "react";
import styles from './Accordion.module.scss'
import AccordionItem from "../AccordeonItem/AccordionItem";
import cn from 'classnames';

type TAccordionitem = {
  id?: number | string;
  title: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  content: ReactNode;
}

type AccordionProps = {
  className?: string;
  items: TAccordionitem[];
}

const Accordion = ({ items, className }: AccordionProps) => {

  return (
    <ul className={cn(styles.accordion, className)}>
      {items.map((item, index) => (
        <AccordionItem key={item.id ?? index} title={item.title} icon={item.icon} >
          {item.content}
        </AccordionItem>
      ))}
    </ul>
  )
}

export default Accordion;