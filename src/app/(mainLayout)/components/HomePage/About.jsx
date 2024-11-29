"use client";

import React from "react";
import Image from "next/image";
import mobileImage from "../../../../../public/assets/Mask group (4).png";
import checkIcon from "../../../../../public/assets/check-verified-02.png";

const About = () => {
  const details = [
    {
      title: "Installation Facile",
      description:
        "Installez en quelques minutes sans avoir besoin de compétences techniques.",
    },
    {
      title: "Expérience Client Améliorée",
      description:
        "Offrez une expérience utilisateur fluide et moderne à vos clients.",
    },
    {
      title: "Efficacité Accrue",
      description:
        "Gagnez du temps en automatisant les processus de gestion des menus.",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] pt-10 lg:pt-20 pb-10 px-6 lg:px-16 max-w-full ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Section */}
          <div className="lg:w-1/2 text-left">
            <button>
              <span className="hidden text-xl font-semibold bg-[#5E8F3F] text-black px-5 py-3 rounded-full mb-5 lg:inline-block">
                À Propos
              </span>
            </button>
            <h2 className="hidden lg:block text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 ">
              Menus Numériques <br /> Simplifiés
            </h2>
            <h2 className="text-3xl text-center lg:hidden font-semibold text-gray-900 mb-4">
              Menus Numériques Simplifiés
            </h2>
            <div className="lg:hidden flex justify-center items-center ms-8 -mt-10">
              <Image
                src={mobileImage}
                alt="Mobile Mockup"
                width={600}
                height={700}
                className="object-contain"
              />
            </div>
            <p className="lg:w-1/2 text-[#272727] text-sm my-8 text-center lg:text-left">
              Avec MenuMoi, Vous Pouvez Présenter Votre Menu, Accepter Des
              Commandes Et Même Gérer Les Réservations De Table – Tout Cela
              Depuis Une Plateforme Simple Et Intuitive.
            </p>

            {/* Features List */}
            <div className="hidden lg:block space-y-8">
              {details.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-gray rounded-full border border-gray-50 bg-[#5E8F3F]/10">
                    <Image
                      src={checkIcon}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className=""
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:hidden space-y-8">
              {details.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="p-4 bg-gray rounded-full border border-gray-50 bg-[#5E8F3F]/10">
                    <Image
                      src={checkIcon}
                      alt="Check Icon"
                      width={25}
                      height={25}
                      className=""
                    />
                  </div>
                  <div>
                    <h3 className="text-xl text-center font-semibold text-gray-900 my-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 hidden lg:flex justify-start relative -mt-10">
            <Image
              src={mobileImage}
              alt="MobileImage Image"
              width={750}
              height={600}
              className="relative z-10 -mt-20 h-[650px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
