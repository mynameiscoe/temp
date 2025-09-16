"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faViber } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { ArrowDownToLine, Download } from "lucide-react";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-center items-center w-full mt-10 ">
      <div className="flex flex-col">
        {mounted && (
          <span
            className={` text-3xl font-semibold mb-[13px] ${
              theme === "dark" ? "text-white/90" : "text-black/80"
            } `}
          >
            Hello, my name is
          </span>
        )}
        {mounted && <p className={` ${theme === "light" ? "loader" : ""}`}></p>}
        {mounted && theme === "dark" && (
          <p className="text-5xl font-semibold">Chit Min Thu</p>
        )}
        <div className="text-3xl font-bold mt-5 mb-5 italic">
          <span>I'm a </span>
          <span className="text-orange-500">Frontend Developer</span>
        </div>
        <p className="mb-[2px]">
          I'm a motivated junior frontend developer and
        </p>
        <p>I'm always learning and improving my skills.</p>
        <div className="flex gap-5 mt-8 mb-4 w-full">
          <div className="bg-[#00CED1] w-[34px] h-[34px] rounded-full text-center flex justify-center items-center">
            <FontAwesomeIcon icon={faViber} className="text-black" size="lg" />
          </div>
          <div className="bg-[#00CED1] w-[34px] h-[34px] rounded-full text-center flex justify-center items-center">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-black"
              size="lg"
            />
          </div>
          <div className="bg-[#00CED1] w-[34px] h-[34px] rounded-full text-center flex justify-center items-center">
            <FontAwesomeIcon
              icon={faTelegram}
              className="text-black"
              size="lg"
            />
          </div>
        </div>
        <a
          href="#"
          download
          className="bg-[#00CED1] hover:bg-[#1db2b5] px-5 py-2 rounded-md shadow-lg text-black font-semibold text-center mt-5 w-[200px]"
        >
          <div className="flex justify-between items-center">
            <span>Download CV</span>
            <ArrowDownToLine />
          </div>
        </a>
      </div>
    </div>
  );
}
