"use client";

import { InputHTMLAttributes, useState } from "react";
import styles from "./SearchInput.module.scss";
import cn from "classnames";
import Dropdown from "../Dropdown/Dropdown";
import { TClientSearchGame } from "@/entities/game/model/types";
import MenuContainer from "../MenuContainer/MenuContainer";
import MenuItem from "../MenuItem/MenuItem";
import searchGamesByName from "@/shared/api/toIgdb/searchGamesByName";
import useDebounce from "@/shared/utils/useDebounce";
import Loader from "../Loader/Loader";

type SearchInputProps = {
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const SearchInput = ({ className, ...props }: SearchInputProps) => {
  const [results, setResults] = useState<TClientSearchGame[] | null>(null);
  const [value, setValue] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const debouncedSearch = useDebounce(async (value: string) => {
    if (!value.trim()) {
      setResults(null);
      return;
    }
    try {
      setIsPending(true);
      const games = await searchGamesByName(value);
      setDropdownOpen(true);
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
    setDropdownOpen(false);
  };

  const getYearString = (date: number | undefined) => {
    if (!date) return null
    const year = new Date(date * 1000).getFullYear()
    return ` (${year})`
  }

  return (
    <Dropdown
    isOpen={dropdownOpen}
    onToggle={setDropdownOpen}
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
              {game.name}{getYearString(game.releaseDate)}
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
