"use client";

import cn from "classnames";
import styles from "./ScreenshotDialog.module.scss";
import GalleryControls from "@/shared/components/GalleryControls/GalleryControls";
import Image from "next/image";
import { buildImageUrl } from "@/shared/utils/buildImageUrl";
import Dialog from "@/shared/components/Dialog/Dialog";
import { useDialogWithKeyboard } from "@/shared/utils/useDialogWithKeyboard";

type Props = {
  isOpen: boolean;
  gameName: string;
  imageId: string | null;
  className?: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const ScreenshotDialog = ({
  isOpen,
  imageId,
  className,
  gameName,
  onClose,
  onNext,
  onPrev,
}: Props) => {
  useDialogWithKeyboard({ isOpen, onNext, onPrev });
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      className={cn(styles.dialog__video, className)}
    >
      <GalleryControls onNext={onNext} onPrev={onPrev}>
        {imageId && (
          <Image
            src={buildImageUrl(imageId, "1080p")}
            alt={`Скриншот ${gameName}`}
            width={1440}
            height={810}
            className={styles.dialog_image}
          />
        )}
      </GalleryControls>
    </Dialog>
  );
};

export default ScreenshotDialog;
