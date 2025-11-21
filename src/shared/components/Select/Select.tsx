"use client";

import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Select.module.scss";
import cn from "classnames";
import MenuItem from "../MenuItem/MenuItem";
import { ComponentType, SVGProps, useState } from "react";

export type TSelectConfig<Tkey extends string> = Record<
  Tkey,
  { title: string; icon?: ComponentType<SVGProps<SVGSVGElement>> }
>;

type SelectProps<Tkey extends string> = {
  className?: string;
  defaultValue?: Tkey;
  selectOptions: TSelectConfig<Tkey>;
  name: string;
};


const Select = <Tkey extends string>({ selectOptions, defaultValue, name, className }: SelectProps<Tkey>) => {
  const [currentValue, setCurrentValue] = useState<Tkey | undefined>(defaultValue);
  
  const optionsValues = Object.keys(selectOptions) as Tkey[];

  const handleStatusChange = (status: Tkey) => {
    setCurrentValue(status);
  };

  return (
    <>
      <input type="text" name={name} value={currentValue} hidden readOnly/>
      <Dropdown
        trigger={
          <Button
            icon={currentValue ? selectOptions[currentValue].icon : undefined}
            variant="outline"
            className={cn(styles.trigger_button, className)}
          >
            {currentValue ? selectOptions[currentValue].title : "Выбрать..."}
          </Button>
        }
      >
        {optionsValues.map((option: Tkey) => (
          <MenuItem
            as="button"
            icon={selectOptions[option].icon}
            key={option}
            className={styles.item}
            onClick={() => {
              handleStatusChange(option);
            }}
          >
            {selectOptions[option].title}
          </MenuItem>
        ))}
      </Dropdown>
    </>
  );
};

export default Select;
