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
    <div className="flex">
      <div
        className={`fixed top-0 left-0 h-full w-full z-10 bg-transparent backdrop-blur-lg transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        onClick={() => setOpen(false)}
        className={`${
          theme === "dark"
            ? "bg-gradient-to-t from-black to-gray-800 border border-white/20"
            : "bg-gradient-to-t from-gray-300 to-green-200 border border-l-gray-300"
        } duration-al transition-all duration-300 ease-in-out  fixed z-10 h-full top-0 right-0 overflow-hidden ${
          open ? "w-[300px]" : "w-0"
        }`}
      >
        <div
          className={`flex justify-between  flex-row-reverse py-3 pr-[38px] mt-[-3px] pb-5 cursor-pointer ${
            open ? "opactiy-1" : "opacity-0"
          } transition-all duration-300`}
        >
          <div onClick={() => setOpen(false)}>
            <X className="w-7 h-7" />
          </div>
          <div className="ml-5 mt-[-3px]">
            <ModeToggle />
          </div>
        </div>
        <div className={`${open ? "" : "translate-x-10 translate-y-[-40px]"} mt-6 transition-all duration-300`}>
          <div className={`  relative w-[120px] h-[120px] border border-white/50 bg-green-500  mx-auto rounded-full`}>
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
        <div className="border my-5"></div>
        <div className={`flex flex-col gap-3 items-start space-y-5 px-10 mt-8 transition-all duration-300 ${open ? "" : "translate-x-20 translate-y-[40px]"}`}>
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
        <div className="flex justify-between px-[41.5px] mt-8 w-full">
          <div className="bg-purple-500 w-[34px] h-[34px] rounded-full text-center flex justify-center items-center">
            <FontAwesomeIcon icon={faViber} className="text-white" size="lg" />
          </div>
          <div className="bg-blue-800 w-[34px] h-[34px] rounded-full text-center flex justify-center items-center">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white"
              size="lg"
            />
          </div>
          <div className="bg-blue-500 w-[34px] h-[34px] rounded-full text-center flex justify-center items-center">
            <FontAwesomeIcon
              icon={faTelegram}
              className="text-white"
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
