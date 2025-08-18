"use client";
import Drawer from "@/essentials/Drawer";
import { ModeToggle } from "@/essentials/ModeToggle";
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
    <div className="relative">
      <Drawer open={open} />
      <div className="bg-accent py-3 px-18 fixed w-full">
        <div className="flex justify-between items-center">
          <p className="w-full" onClick={() => setOpen(!open)}>
            Hello
          </p>
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
                project
              </p>
              <p
                className={`${
                  theme === "dark"
                    ? "hover:text-[#00CED1]"
                    : "hover:bg-black/10 py-1 rounded-sm"
                } px-5`}
              >
                skill
              </p>
              <p
                className={`${
                  theme === "dark"
                    ? "hover:text-[#00CED1]"
                    : "hover:bg-black/10 py-1 rounded-sm"
                } px-5`}
              >
                contact
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
