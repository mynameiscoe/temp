import React from "react";

type DrawerOpen = {
  open: boolean;
};
export default function Drawer({ open }: DrawerOpen) {
  return (
    <div
      className={`bg-amber-700 duration-al transition-all duration-300 ease-in-out  fixed z-10 min-h-screen top-0 right-0 overflow-hidden ${
        open ? "w-[300px]" : "w-0"
      }`}
    >
      Hello
    </div>
  );
}
