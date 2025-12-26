'use client';

import {
  GAME_TYPE,
  GAME_TYPE_KEYS,
  STATUS_KEYS,
  USER_GAME_STATUSES,
} from "@/entities/game/model/constants";
import Filter from "@/shared/components/Filter/ui/Filter/Filter";
import { useState } from "react";
import MenuContainer from "@/shared/components/MenuContainer/MenuContainer";
import FilterItem from "@/shared/components/Filter/ui/FilterItem/FilterItem";
import styles from "./GamesFilter.module.scss";
import Button from "@/shared/components/Button/Button";
import useFilters from "../../hooks/useFilters";

const GamesFilter = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const filters = useFilters();

  const handleClearFilter = () => {
    filters.reset();
    setFilterOpen(false);
  };
  
  const handleApplyFilter = () => {
    filters.apply();
    setFilterOpen(false);
  };

  return (
    <Filter
      className={styles.filter}
      isOpen={isFilterOpen}
      onToggle={setFilterOpen}
    >
      <MenuContainer className={styles.filter_block}>
        {STATUS_KEYS.map((status) => {
          const isChecked = filters.state.gameStatus.includes(status);
          return (
            <FilterItem
              className={styles.filter_item}
              key={status}
              isChecked={isChecked}
              onChange={() => {
                filters.setState((prev) => ({
                  ...prev,
                  gameStatus: prev.gameStatus.includes(status)
                    ? prev.gameStatus.filter((s) => s !== status)
                    : [...prev.gameStatus, status],
                }));
              }}
              name={USER_GAME_STATUSES[status].value}
            >
              {USER_GAME_STATUSES[status].value}
            </FilterItem>
          );
        })}
      </MenuContainer>

      <MenuContainer className={styles.filter_block}>
        {GAME_TYPE_KEYS.map((type) => {
          const isChecked = filters.state.gameType.includes(type);
          return (
            <FilterItem
              className={styles.filter_item}
              key={type}
              isChecked={isChecked}
              onChange={() => {
                filters.setState((prev) => ({
                  ...prev,
                  gameType: prev.gameType.includes(type)
                    ? prev.gameType.filter((t) => t !== type)
                    : [...prev.gameType, type],
                }));
              }}
              name={GAME_TYPE[type]}
            >
              {GAME_TYPE[type]}
            </FilterItem>
          );
        })}
      </MenuContainer>

      <div className={styles.buttons}>
        <Button
          type="button"
          variant="light"
          onClick={handleApplyFilter}
          className={styles.button}
        >
          Применить
        </Button>
        <Button
          type="button"
          variant="outline"
          className={styles.button}
          onClick={handleClearFilter}
        >
          Отмена
        </Button>
      </div>
    </Filter>
  );
};

export default GamesFilter;
