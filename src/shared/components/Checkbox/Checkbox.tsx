import { InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Checkbox.module.scss";
import CheckIcon from "./assets/check.svg";

type CheckboxProps = {
  className?: string;
  name: string;
  children?: string;
  checked: boolean;
  onChange: () => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const Checkbox = ({
  className,
  checked,
  name,
  children,
  onChange,
  ...props
}: CheckboxProps) => {
  return (
    <label className={cn(styles.container, className)}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        name={name}
        onChange={onChange}
        {...props}
      />
      <span className={styles.customCheckbox}>
        {checked && <CheckIcon width="1em" height="1em" className={styles.icon} />}
      </span>
      {children && <span className={styles.label}>{children}</span>}
    </label>
  );
};

export default Checkbox;
