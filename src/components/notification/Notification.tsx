import React from "react";
import { AlterColor } from "../../types/AlterColor";
import { Snackbar } from "../snackbar/Snackbar";
import clsx from "clsx";

type NotificationProps = {
  open: boolean;
  msg: string;
  severity: AlterColor | undefined;
  handleClose: () => void;
};
export const Notification: React.FC<NotificationProps> = ({
  open,
  msg,
  severity,
  handleClose,
}) => {
  setTimeout(() => {
    handleClose();
  }, 3000);
  return (
    <>
      {open && (
        <Snackbar
          msg={msg}
          onClose={handleClose}
          className={clsx({
            "bg-green-500 hover:bg-green-600": severity === "success",
            "bg-red-500  hove:bg-red-600": severity === "error",
            "bg-yellow-500 hover:bg-red-600": severity === "warning",
          })}
        ></Snackbar>
      )}
    </>
  );
};
