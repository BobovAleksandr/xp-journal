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
import Loader from "../Loader/Loader";

type SearchInputProps = {
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const SearchInput = ({ className, ...props }: SearchInputProps) => {
  const [results, setResults] = useState<TSearchGame[] | null>(null);
  const [value, setValue] = useState("");
  const [isPending, setIsPending] = useState(false);

  const debouncedSearch = useDebounce(async (value: string) => {
    if (!value.trim()) {
      setResults(null);
      return;
    }
    try {
      setIsPending(true);
      const games = await searchGamesByName(value);
      setResults(games);
    } catch {
      setResults(null);
    } finally {
      setIsPending(false);
    }
  }, 300);

  const clearInput = () => {
    setValue("");
    setResults(null);
  };
  console.log(results);
  return (
    <Dropdown
      closeOnClick
      trigger={
        <div className={styles.search_container}>
          <input
            type="search"
            name={"search"}
            placeholder="Найти игру"
            value={value}
            className={cn(styles.input, className)}
            onChange={(e) => {
              setValue(e.target.value);
              debouncedSearch(e.target.value);
            }}
            {...props}
          />
          <div className={styles.loader_container}>
            {isPending && <Loader className={styles.loader} />}
          </div>
        </div>
      }
    >
      <MenuContainer onClick={clearInput} className={styles.menu_container}>
        {results && results.length > 0 ? (
          results.map((game) => (
            <MenuItem as="link" key={game.id} href={`/games/${game.slug}`}>
              {game.name}
            </MenuItem>
          ))
        ) : results && results.length === 0 ? (
          <span className={styles.menu_container__no_result}>Нет результатов</span>
        ) : null}
      </MenuContainer>
    </Dropdown>
  );
};

export default SearchInput;
