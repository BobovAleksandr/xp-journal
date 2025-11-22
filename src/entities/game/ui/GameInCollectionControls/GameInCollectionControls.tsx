"use client";

import Button from "@/shared/components/Button/Button";
import addIcon from "@/shared/assets/heart.svg";
import removeIcon from "@/shared/assets/heart-crack.svg";
import { memo } from "react";
import { TGamePayload } from "@/widgets/GameControls/hooks/gameReducer";

type GameInCollectionControlsProps = {
  inCollection?: boolean;
  action: ({ action }: TGamePayload) => void;
};

const GameInCollectionControls = ({
  action,
  inCollection
}: GameInCollectionControlsProps) => {

  return (
    <>
      {inCollection ? (
        <Button
          variant="default"
          icon={removeIcon}
          onClick={() => action({ action: "delete" })}
        >
          Убрать из коллекции
        </Button>
      ) : (
        <Button
          variant="light"
          icon={addIcon}
          onClick={() => action({ action: "add" })}
        >
          Добавить в коллекцию
        </Button>
      )}
    </>
  );
};

export default memo(GameInCollectionControls);
