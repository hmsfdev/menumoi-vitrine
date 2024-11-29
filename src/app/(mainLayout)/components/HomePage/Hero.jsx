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
              Bienvenue À <br />
              Redéfinir Les <br />
              Expériences De <br />
              Restauration
            </h1>
            <h1 className="lg:hidden text-3xl lg:text-6xl font-bold text-gray-900 leading-snug">
              Bienvenue À Redéfinir
              <br /> Les Expériences De <br />
              Restauration
            </h1>
            <div className="lg:w-1/2 lg:hidden flex justify-center relative">
              <Image
                src={mainImage}
                alt="Main Image"
                width={isMobile ? 300 : 550}
                height={isMobile ? 400 : 800}
                className="relative z-10"
              />
            </div>
            <p className="text-gray-700 lg:text-lg text-sm leading-relaxed my-5">
              Transformez le menu de votre restaurant en une expérience
              numérique attrayante et facile à utiliser que vos clients peuvent
              consulter à tout moment, n&apos;importe où. Avec MenuMoi, vous
              pouvez présenter votre menu, accepter des commandes et même gérer
              les réservations de table – tout cela depuis une plateforme
              simplifiée.
            </p>
            <Link href="/get-started">
              <button className="bg-[#5E8F3F] text-black px-6 py-3 rounded-md font-medium shadow-sm hover:bg-green-700">
                ESSAYER MAINTENANT
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
              20K+
            </h3>
            <p className="hidden lg:block text-gray-600 text-base">
              Télécharge <br />
              ments
            </p>
            <p className="lg:hidden text-gray-600 text-base">
              Télécharge ments
            </p>
          </div>
          <div>
            <h3 className="text-center lg:text-left text-4xl lg:text-3xl font-bold text-gray-900">
              4.4K
            </h3>
            <p className="text-gray-600 text-base">Notes Cumulées</p>
          </div>
          <div>
            <h3 className="text-center lg:text-left text-4xl lg:text-3xl font-bold text-gray-900">
              15K
            </h3>
            <p className="hidden lg:block text-gray-600 text-base">
              Utilisateurs <br /> actifs
            </p>
            <p className="lg:hidden text-gray-600 text-base">
              Utilisateurs actifs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
