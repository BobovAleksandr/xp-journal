"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import cn from "classnames";
import IconButton from "@/shared/components/IconButton/IconButton";
import CloseIcon from "@/shared/assets/xmark.svg";
import { buildImageUrl } from "@/shared/utils/buildImageUrl";
import styles from "./ScreenshotDialog.module.scss";
import IconRight from "@/shared/assets/chevron-right.svg";
import IconLeft from "@/shared/assets/chevron-left.svg";

type Props = {
  isOpen: boolean;
  imageId: string | null;
  gameName?: string;
  className?: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function ScreenshotDialog({
  isOpen,
  imageId,
  gameName,
  className,
  onNext,
  onPrev,
  onClose,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {

    const handleClickArrow = (e: KeyboardEvent) => {
      const key = e.key
      if (key === "ArrowRight") onNext();
      if (key === "ArrowLeft") onPrev();
    }

    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      document.addEventListener('keydown', handleClickArrow);
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }

     return () => {
      document.removeEventListener('keydown', handleClickArrow);
    };
  }, [isOpen, onNext, onPrev]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className={cn(styles.dialog, className)}
      onCancel={onClose}
    >
      <header className={styles.dialog_header}>
        <IconButton
          icon={CloseIcon}
          onClick={onClose}
          variant="large"
          className={styles.dialog_close}
        />
      </header>

      {imageId && (
        <div className={styles.dialog_image_container}>
          <IconButton
            icon={IconLeft}
            onClick={onPrev}
            variant="large"
            className={styles.dialog_image_button}
          />
          <Image
            src={buildImageUrl(imageId, "1080p")}
            alt={`Скриншот ${gameName}`}
            width={1440}
            height={810}
            className={styles.dialog_image}
          />
          <IconButton
            icon={IconRight}
            onClick={onNext}
            variant="large"
            className={styles.dialog_image_button}
          />
        </div>
      )}
    </dialog>,
    document.body
  );
}
