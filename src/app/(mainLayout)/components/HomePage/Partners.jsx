"use client";

import React from "react";
import Image from "next/image";
import logo1 from "../../../../../public/assets/3-brasseurs-80x85.png.png";
import logo2 from "../../../../../public/assets/palmito-1-160x46.png.png";
import logo3 from "../../../../../public/assets/Krispy_Kreme_logo-1-160x60.png.png";
import logo4 from "../../../../../public/assets/Pizza-Hut-300x224.png.png";
import logo5 from "../../../../../public/assets/logo-flunch-160x87.png.png";
import logo6 from "../../../../../public/assets/mezzencore-80x79.png.png";

const logos = [
  { src: logo1, alt: "Logo 1" },
  { src: logo2, alt: "Logo 2" },
  { src: logo3, alt: "Logo 3" },
  { src: logo4, alt: "Logo 4" },
  { src: logo5, alt: "Logo 5" },
  { src: logo6, alt: "Logo 6" },
];

const Partners = () => {
  return (
    <div className="bg-[#5E8F3F] py-6">
      <div className="w-[80%] no-scrollbar overflow-x-auto lg:container mx-auto flex justify-between gap-4 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="min-w-24 flex overflow-x-auto items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={82}
              height={82}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
