import Select, { TSelectConfig } from "@/shared/components/Select/Select";

import {
  BEFORE_RELEASE_STATUSES,
  STATUS_KEYS,
  TUserGameStatusKey,
  USER_GAME_STATUSES,
} from "../../model/constants";
import { memo, useState } from "react";
import { TGamePayload } from "@/widgets/GameControls/hooks/gameReducer";

type StatusSelectProps = {
  status?: TUserGameStatusKey;
  className?: string;
  action: ({ action, payload }: TGamePayload) => void;
  isReleased: boolean;
};


// Создаём объект-конфиг для статусов игр со значениями и иконками
const statusSelectItems = STATUS_KEYS.reduce((acc, key) => {
  acc[key] = {
    title: USER_GAME_STATUSES[key].value,
    icon: USER_GAME_STATUSES[key].icon,
  };
  return acc;
}, {} as TSelectConfig<TUserGameStatusKey>);

const StatusSelect = ({
  status = "notCompleted",
  action,
  isReleased,
  className,
}: StatusSelectProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const statusOptions = isReleased
    ? statusSelectItems
    : (Object.fromEntries(
        Object.entries(statusSelectItems).filter(([key]) =>
          BEFORE_RELEASE_STATUSES.includes(key as TUserGameStatusKey)
        )
      ) as TSelectConfig<TUserGameStatusKey>);

  return (
    <Select<TUserGameStatusKey>
      isOpen={dropdownOpen}
      onToggle={setDropdownOpen}
      className={className}
      selectOptions={statusOptions}
      defaultValue={status}
      onChange={(value) => {
        setDropdownOpen(false);
        action({ action: "update", payload: { status: value } });
      }}
    />
  );
};

export default memo(StatusSelect);
