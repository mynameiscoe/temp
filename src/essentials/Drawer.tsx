import { Apple, Bell, Home, Phone, User, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faViber } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { ModeToggle } from "./ModeToggle";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
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
        <div className="mt-8">
          <div className="relative w-[120px] h-[120px] border border-white/50 bg-green-500  mx-auto rounded-full">
            <Image
              src="/iphone.jpg"
              alt="Logo"
              fill
              className="rounded-full object-cover p-[5px]"
            />
          </div>
          <span className="flex justify-center mt-3 font-bold italic text-2xl">
            Lord Shenn
          </span>
        </div>
        <div className="flex flex-col gap-3 items-start space-y-5 px-10 mt-8">
          <div className="flex items-center space-x-5">
            <FontAwesomeIcon icon={faHouse} className="" size="lg" />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-5">
            <FontAwesomeIcon icon={faUser} className="" size="lg" />
            <span>About</span>
          </div>
          <div className="flex items-center space-x-5">
            <FontAwesomeIcon icon={faFolderOpen} className="" size="lg" />
            <span>Project</span>
          </div>
          <div className="flex items-center space-x-5">
            <FontAwesomeIcon icon={faTrophy} className="" size="lg" />
            <span>Skill</span>
          </div>
          <div className="flex items-center space-x-5">
            <FontAwesomeIcon icon={faAddressCard} className="" size="lg" />
            <span>Contact</span>
          </div>
        </div>
        <div className="px-10 mt-5">
          <ModeToggle />
        </div>
        <div className="flex justify-between  px-12 gap-5 mt-5">
            <div className="bg-purple-500 w-9 h-9 rounded-full text-center flex justify-center items-center">
              <FontAwesomeIcon icon={faViber} className="" size="lg" />
            </div>
            <div className="bg-blue-800 w-9 h-9 rounded-full text-center flex justify-center items-center">
              <FontAwesomeIcon icon={faFacebook} className="" size="lg" />
            </div>
            <div className="bg-blue-500 w-9 h-9 rounded-full text-center flex justify-center items-center">
              <FontAwesomeIcon icon={faTelegram} className="" size="lg" />
            </div>
          </div>
      </div>
    </div>
  );
}
