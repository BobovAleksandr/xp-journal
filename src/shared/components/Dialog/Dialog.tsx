"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import IconButton from "@/shared/components/IconButton/IconButton";
import CloseIcon from "@/shared/assets/xmark.svg";
import styles from "./Dialog.module.scss";

type Props = {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  onClose: () => void;
};

export default function Dialog({
  isOpen,
  children,
  className,
  onClose,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  const dialog = dialogRef.current;
  if (!dialog) return;

  if (isOpen && !dialog.open) {
    dialog.showModal();
  } else if (!isOpen && dialog.open) {
    dialog.close();
  }
}, [isOpen]);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      {children}
    </dialog>,
    document.body
  );
}
