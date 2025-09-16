"use client";
import Drawer from "@/essentials/Drawer";
import { ModeToggle } from "@/essentials/ModeToggle";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="relative mt-7 border-b border-t border-white/30 bg-gradient-to-r from-[#3d0c6d] via-[#594e90] to-[#3d0c6d]  backdrop-blur-2xl shadow-lg ">
      <Drawer open={open} setOpen={setOpen} />
      <div className="py-3 px-10 sm:px-18 w-full">
        <div className="flex justify-between items-center">
          <p className="w-full">Hello</p>
          <div
            className={`md:hidden cursor-pointer transition-all duration-300`}
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </div>
          <div className="hidden md:block">
            <div className="flex justify-end items-center w-full  cursor-pointer">
              <p
                className={`${
                  theme === "dark"
                    ? "hover:text-[#00CED1]"
                    : "hover:bg-black/10 py-1 rounded-sm"
                } px-5`}
              >
                Home
              </p>
              <p
                className={`${
                  theme === "dark"
                    ? "hover:text-[#00CED1]"
                    : "hover:bg-black/10 py-1 rounded-sm"
                } px-5`}
              >
                About
              </p>
              <p
                className={`${
                  theme === "dark"
                    ? "hover:text-[#00CED1]"
                    : "hover:bg-black/10 py-1 rounded-sm"
                } px-5`}
              >
                Project
              </p>
              <p
                className={`${
                  theme === "dark"
                    ? "hover:text-[#00CED1]"
                    : "hover:bg-black/10 py-1 rounded-sm"
                } px-5`}
              >
                Skill
              </p>
              <p
                className={`${
                  theme === "dark"
                    ? "hover:text-[#00CED1]"
                    : "hover:bg-black/10 py-1 rounded-sm"
                } px-5`}
              >
                Contact
              </p>
              <div className="ml-8">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
