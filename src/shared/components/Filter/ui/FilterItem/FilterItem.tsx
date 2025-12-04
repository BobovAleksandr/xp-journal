import Checkbox from "@/shared/components/Checkbox/Checkbox";
import styles from "./FilterItem.module.scss";
import cn from "classnames";
import { Span } from "@/shared/components/Typography/Typography";

type FilterItemProps = {
  children: string;
  className?: string;
  isChecked: boolean;
  name: string;
  onChange: () => void;
};

const FilterItem = ({
  children,
  isChecked,
  name,
  onChange,
  className,
}: FilterItemProps) => {
  return (
    <label className={cn(styles.filter_item, className)}>
      <Checkbox
        checked={isChecked}
        name={name}
        onChange={onChange}
        className={styles.checkbox}
      />
      <Span className={styles.filter_item_label}>{children}</Span>
    </label>
  );
};

export default FilterItem;
