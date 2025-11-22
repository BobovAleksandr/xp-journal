"use client";

import { InputHTMLAttributes, useState } from "react";
import styles from "./SearchInput.module.scss";
import cn from "classnames";
import Dropdown from "../Dropdown/Dropdown";
import { TSearchGame } from "@/entities/game/model/types";
import MenuContainer from "../MenuContainer/MenuContainer";
import MenuItem from "../MenuItem/MenuItem";
import searchGamesByName from "@/shared/api/toIgdb/searchGamesByName";
import useDebounce from "@/shared/utils/useDebounce";

type SearchInputProps = {
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const SearchInput = ({ name, className, ...props }: SearchInputProps) => {
  const [results, setResults] = useState<TSearchGame[]>([]);
  const [value, setValue] = useState("");

  const debouncedSearch = useDebounce(async (value: string) => {
    if (!value.trim()) {
      setResults([]);
      return;
    }
    const games = await searchGamesByName(value);
    setResults(games || []);
  }, 300);

  const clearInput = () => {
    setValue("");
    setResults([]);
  };

  return (
    <Dropdown
      trigger={
        <input
          type="search"
          name={name}
          placeholder="Найти игру"
          value={value}
          className={cn(styles.input, className)}
          onChange={(e) => {
            setValue(e.target.value);
            debouncedSearch(e.target.value);
          }}
          {...props}
        />
      }
    >
      <MenuContainer onClick={clearInput} className={styles.menu_container}>
        {results.map((game) => (
          <MenuItem as="link" key={game.id} href={`/games/${game.slug}`}>
            {game.name}
          </MenuItem>
        ))}
      </MenuContainer>
    </Dropdown>
  );
};

export default SearchInput;
