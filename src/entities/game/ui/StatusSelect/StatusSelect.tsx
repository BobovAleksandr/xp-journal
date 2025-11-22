import Select, { TSelectConfig } from "@/shared/components/Select/Select";
import notCompletedIcon from "@/shared/assets/xmark-shape.svg";
import inProgressIcon from "@/shared/assets/pause.svg";
import completedIcon from "@/shared/assets/check-shape.svg";
import platinumIcon from "@/shared/assets/medal.svg";
import toPlayIcon from "@/shared/assets/bookmark.svg";
import {
  BEFORE_RELEASE_STATUSES,
  TUserGameStatusKey,
  USER_GAME_STATUSES,
} from "../../model/constants";
import { memo } from "react";
import { TGamePayload } from "@/widgets/GameControls/hooks/gameReducer";

type StatusSelectProps = {
  status?: TUserGameStatusKey;
  className?: string;
  action: ({ action, payload }: TGamePayload) => void;
  isReleased: boolean;
};

const statusKeys = Object.keys(USER_GAME_STATUSES) as TUserGameStatusKey[];

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

const StatusSelect = ({
  status = "notCompleted",
  action,
  isReleased,
  className,
}: StatusSelectProps) => {
  const statusOptions = isReleased
    ? statusSelectItems
    : (Object.fromEntries(
        Object.entries(statusSelectItems).filter(([key]) =>
          BEFORE_RELEASE_STATUSES.includes(key as TUserGameStatusKey)
        )
      ) as TSelectConfig<TUserGameStatusKey>);

  return (
    <Select<TUserGameStatusKey>
      className={className}
      selectOptions={statusOptions}
      defaultValue={status}
      onChange={(value) => {
        action({ action: "update", payload: { status: value } });
      }}
    />
  );
};

export default memo(StatusSelect);
