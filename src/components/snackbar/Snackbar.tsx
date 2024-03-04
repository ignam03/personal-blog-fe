import React from "react";
import { AlterColor } from "../../types/AlterColor";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type Props = {
  msg: string;
  //severity: AlterColor | undefined;
  onClose: () => void;
  className?: string;
};

export const Snackbar: React.FC<Props> = ({ msg, onClose, className }) => {
  return (
    <div className="fixed top-16 left-0 w-full p-4 flex justify-center items-center">
      <div
        className={twMerge(
          clsx(
            "bg-gray-800 text-white py-2 px-4 rounded-md shadow-md flex items-center",
            className
          )
        )}
      >
        <span className="mr-2">{msg}</span>
        <button
          className="text-white hover:text-gray-200 text-bold text-2xl font-normal"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};
