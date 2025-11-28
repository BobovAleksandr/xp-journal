"use client";

import styles from "./VideoDialog.module.scss";
import Dialog from "@/shared/components/Dialog/Dialog";
import Video from "../Video/Video";
import cn from "classnames";
import { useDialogWithKeyboard } from "@/shared/utils/useDialogWithKeyboard";
import GalleryControls from "@/shared/components/GalleryControls/GalleryControls";

type Props = {
  isOpen: boolean;
  className?: string;
  videoId: string | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function VideoDialog({
  isOpen,
  className,
  videoId,
  onNext,
  onPrev,
  onClose,
}: Props) {
  useDialogWithKeyboard({ isOpen, onNext, onPrev });

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      className={cn(styles.dialog__video, className)}
    >
      <div className={styles.dialog_image_container}>
        <GalleryControls onNext={onNext} onPrev={onPrev}>
          {videoId && <Video variant="large" videoId={videoId} />}
        </GalleryControls>
      </div>
    </Dialog>
  );
}
