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
import { DEFAULT_FILTER_STATE } from "../../model/constants";
import useApplyFilters from "../../hooks/useApplyFilters";

const GamesFilter = () => {
  const [filterState, setFilterState] = useState(DEFAULT_FILTER_STATE);
  const [isFilterOpen, setFilterOpen] = useState(false);

  const applyFilter = useApplyFilters();

  const handleClearFilter = () => {
    setFilterState(DEFAULT_FILTER_STATE);
    setFilterOpen(false);
  };

  const handleApplyFilter = () => {
    applyFilter(filterState)
  }

  return (
    <Filter
      className={styles.filter}
      isOpen={isFilterOpen}
      onToggle={setFilterOpen}
    >
      <MenuContainer className={styles.filter_block}>
        {STATUS_KEYS.map((status) => {
          const isChecked = filterState.gameStatus[status];
          return (
            <FilterItem
              className={styles.filter_item}
              key={status}
              isChecked={isChecked}
              onChange={() => {
                setFilterState((prev) => ({
                  ...prev,
                  gameStatus: {
                    ...prev.gameStatus,
                    [status]: !prev.gameStatus[status],
                  },
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
          const isChecked = filterState.gameType[type];
          return (
            <FilterItem
              className={styles.filter_item}
              key={type}
              isChecked={isChecked}
              onChange={() => {
                setFilterState((prev) => ({
                  ...prev,
                  gameType: {
                    ...prev.gameType,
                    [type]: !prev.gameType[type],
                  },
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
        <Button type="button" variant="light" onClick={handleApplyFilter} className={styles.button}>
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
