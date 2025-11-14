import { InputHTMLAttributes } from "react";
import styles from "./SearchInput.module.scss";
import cn from "classnames";

type SearchInputProps = {
  className?: string;
  name: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const SearchInput = ({ name, className, ...props }: SearchInputProps) => {
  return (
    <input type="search" name={name} className={cn(styles.input, className)} {...props} />
  );
};

export default SearchInput;
