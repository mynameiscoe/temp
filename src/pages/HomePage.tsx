import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Image
        src="/iphone.jpg"
        alt="Logo"
        width={500}
        height={500}
        className="object-cover"
      />
    </div>
  );
}
