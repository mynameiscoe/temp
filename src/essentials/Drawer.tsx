import { Apple, Bell, Home, Phone, User, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

type DrawerOpen = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Drawer({ open, setOpen }: DrawerOpen) {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div
        className={`${
          open ? "w-full" : "w-0"
        } transition-all duration-300 backdrop-blur-lg bg-transparent min-h-screen fixed z-10 top-0 left-0`}
      ></div>
      <div
        className={`${
          theme === "dark"
            ? "bg-gradient-to-t from-black to-gray-800 border border-white/20"
            : "bg-gradient-to-t from-gray-300 to-green-200 border border-l-gray-300"
        } duration-al transition-all duration-300 ease-in-out  fixed z-10 min-h-screen top-0 right-0 overflow-hidden ${
          open ? "w-[300px]" : "w-0"
        }`}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div
          className={`flex justify-end py-3 pr-10 cursor-pointer ${
            open ? "opactiy-1" : "opacity-0"
          } transition-all duration-300`}
        >
          <X className="w-7 h-7" />
        </div>
        <div>
          <div className="relative w-[150px] h-[150px] border border-white/50 bg-green-500  mx-auto rounded-full">
            <Image
              src="/iphone.jpg"
              alt="Logo"
              fill
              className="rounded-full object-cover p-2"
            />
          </div>
        </div>
        <div className="flex flex-col items-start space-y-5 px-10">
          <div className="flex items-center space-x-2">
            <Home />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-2">
            <User />
            <span>About</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bell />
            <span>Project</span>
          </div>
          <div className="flex items-center space-x-2">
            <Apple />
            <span>Skill</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone />
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}
