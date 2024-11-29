"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import mainImage from "../../../../../public/assets/Mask group (5).png";
import Link from "next/link";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#f5f5f5] w-full pt-12 lg:pt-20 px-5 lg:px-16">
      <div className="container mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center justify-between">
          {/* <div className="absolute inset-0">
            <Image
              src={bg}
              alt="background image"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-60"
            />
          </div> */}
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left mt-16">
           <h1 className="hidden lg:block text-4xl lg:text-6xl font-bold text-gray-900 leading-snug">
            Réinventez <br />
            L'Expérience <br />
            Culinaire <br />
            Digitale
          </h1>
          <h1 className="lg:hidden text-3xl lg:text-6xl font-bold text-gray-900 leading-snug">
            Réinventez L'Expérience
            <br /> Culinaire Digitale
          </h1>

           <div className="lg:w-1/2 lg:hidden flex justify-center relative">
            <Image
              src={mainImage}
              alt="MenuMoi Digital Experience"
              width={isMobile ? 300 : 550}
              height={isMobile ? 400 : 800}
              className="relative z-10"
            />
          </div>

           <p className="text-gray-700 lg:text-lg text-sm leading-relaxed my-5">
            Offrez à vos clients une expérience moderne et intuitive avec un menu digital 
            accessible partout, à tout moment. <b>MenuMoi</b> vous permet de transformer 
            votre restaurant : présentez vos plats, acceptez des commandes en ligne, 
            et simplifiez les réservations de table sur une plateforme facile à utiliser.
          </p>

           <Link href="/get-started">
            <button className="bg-[#5E8F3F] text-white px-6 py-3 rounded-md font-medium shadow-sm hover:bg-green-700 transition">
              DÉCOUVREZ MENU MOI
            </button>
          </Link>
        </div>


          {/* Right Section */}
          <div className="hidden lg:flex justify-center items-center relative">
            <Image
              src={mainImage}
              alt="Main Image"
              width={750}
              height={600}
              className="relative z-10 -mt-20 h-[650px]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:mt-4 justify-center items-center lg:items-start lg:justify-start py-12">
  <div>
    <h3 className="text-center lg:text-left text-4xl lg:text-3xl font-bold text-gray-900">
      10K+
    </h3>
    <p className="text-gray-600 text-base">
      Téléchargements <br /> attendus
    </p>
  </div>
 
  <div>
    <h3 className="text-center lg:text-left text-4xl lg:text-3xl font-bold text-gray-900">
      5K
    </h3>
    <p className="text-gray-600 text-base">
      Utilisateurs <br /> ciblés
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;
