"use client";

import Button from "@/shared/components/Button/Button";
import addIcon from "@/shared/assets/heart.svg";
import removeIcon from "@/shared/assets/heart-crack.svg";
import { useState } from "react";

type GameInCollectionControlsProps = {
  inCollection: boolean;
};

const GameInCollectionControls = ({
  inCollection,
}: GameInCollectionControlsProps) => {
  const [inCollectionState, setInCollectionState] = useState(inCollection);

  return (
    <div>
      <input
        type="checkbox"
        checked={inCollectionState}
        name="inCollection"
        hidden
        readOnly
      />
      {inCollectionState ? (
        <Button
          variant="default"
          type="submit"
          icon={removeIcon}
          onClick={() => setInCollectionState(false)}
        >
          Убрать из коллекции
        </Button>
      ) : (
        <Button
          variant="light"
          type="submit"
          icon={addIcon}
          onClick={() => setInCollectionState(true)}
        >
          Добавить в коллекцию
        </Button>
      )}
    </div>
  );
};

export default GameInCollectionControls;
