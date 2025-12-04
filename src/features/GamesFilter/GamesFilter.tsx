import {
  STATUS_KEYS,
  TUserGameStatusKey,
  USER_GAME_STATUSES,
} from "@/entities/game/model/constants";
import Filter from "@/shared/components/Filter/ui/Filter/Filter";
import { useState } from "react";
import MenuContainer from "@/shared/components/MenuContainer/MenuContainer";
import FilterItem from "@/shared/components/Filter/ui/FilterItem/FilterItem";
import styles from './GamesFilter.module.scss'

const INITIAL_FILTER_STATE = {
  gameStatuses: STATUS_KEYS.reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as Record<TUserGameStatusKey, boolean>),
};

const GamesFilter = () => {
  const [filterState, setFilterState] = useState(INITIAL_FILTER_STATE);

  return (
    <Filter>
      <MenuContainer>
        {STATUS_KEYS.map((status) => {
          const isChecked = filterState.gameStatuses[status];
          return (
            <FilterItem
              className={styles.filter_item}
              key={status}
              isChecked={isChecked}
              onChange={() => {
                setFilterState((prev) => ({
                  ...prev,
                  gameStatuses: {
                    ...prev.gameStatuses,
                    [status]: !prev.gameStatuses[status],
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
    </Filter>
  );
};

export default GamesFilter;
