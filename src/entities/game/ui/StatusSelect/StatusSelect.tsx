import Select, { TSelectConfig } from "@/shared/components/Select/Select";
import notCompletedIcon from "@/shared/assets/xmark-shape.svg";
import inProgressIcon from "@/shared/assets/pause.svg";
import completedIcon from "@/shared/assets/check-shape.svg";
import platinumIcon from "@/shared/assets/medal.svg";
import toPlayIcon from "@/shared/assets/bookmark.svg";
import { TUserGameStatusKey, USER_GAME_STATUSES } from "../../model/constants";
import { memo } from "react";

type StatusSelectProps = {
  status?: TUserGameStatusKey;
  className?: string;
};

const statusKeys = Object.keys(USER_GAME_STATUSES) as TUserGameStatusKey[]

const iconsMap = {
  notCompleted: notCompletedIcon,
  inProgress: inProgressIcon,
  completed: completedIcon,
  platinum: platinumIcon,
  toPlay: toPlayIcon,
} as const;

// Создаём объект-конфиг для статусов игр со значениями и иконками
const statusSelectItems = statusKeys.reduce((acc, key) => {
  acc[key] = {
    title: USER_GAME_STATUSES[key],
    icon: iconsMap[key],
  };
  return acc;
}, {} as TSelectConfig<TUserGameStatusKey>);

const StatusSelect = ({ status = "notCompleted", className }: StatusSelectProps) => {
  return (
    <Select<TUserGameStatusKey>
      className={className}
      selectOptions={statusSelectItems}
      name="gameStatus"
      defaultValue={status}
    />
  );
};

export default memo(StatusSelect);
