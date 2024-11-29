/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import mobileImage from "../../../../../public/assets/iPhone 13 Mockup.png";
import checkIcon from "../../../../../public/assets/check-verified-02.png";

const MobileAppFeatures = () => {
  return (
    <section id="features" className="mx-auto max-w-full mt-10 lg:-mb-28 mb-0">
      <div className="bg-white flex flex-col-reverse lg:flex-row">
        {/* Left Section */}
        <div className="hidden lg:w-1/2 lg:flex justify-end items-center relative ">
          <Image
            src={mobileImage} // Mockup montrant le mode cuisine
            alt="Mode Cuisine Mockup"
            className="object-contain w-72 md:w-96 lg:w-[450px] lg:h-[700px]"
          />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 text-left lg:ms-20 ">
          {/* Header */}
          <button>
            <span className="hidden text-sm bg-[#5E8F3F] text-black px-5 py-3 rounded-full mb-10 lg:inline-block">
              Fonctionnalités
            </span>
          </button>
          <h2 className="text-3xl text-center lg:text-left lg:text-5xl font-semibold text-gray-900 mb-6">
            Simplifiez Votre <br /> Cuisine avec MenuMoi
          </h2>
          <div className="md:hidden flex justify-center items-center relative ms-20">
            <Image
              src={mobileImage} // Mockup du mode cuisine sur mobile
              alt="Mode Cuisine Mockup"
              className="object-contain w-72 md:w-96 lg:w-[450px] lg:h-[700px]"
            />
          </div>
          <p className="text-gray-600 text-sm mb-10 leading-relaxed text-center lg:text-left">
            Transformez votre cuisine en un espace connecté. Gérez vos commandes en temps réel et suivez chaque étape jusqu’à leur livraison.
          </p>

          {/* Features List */}
          <div className="hidden lg:block space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#5E8F3F]/10 rounded-full p-4">
                <Image
                  src={checkIcon}
                  alt="Check Icon"
                  width={24}
                  height={24}
                  className=""
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Commandes en Temps Réel
                </h3>
                <p className="text-gray-600 text-sm">
                  Affichez les commandes reçues en temps réel et leur état : "En préparation", "Prête", ou "Servie".
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#5E8F3F]/10 rounded-full p-4">
                <Image
                  src={checkIcon}
                  alt="Check Icon"
                  width={24}
                  height={24}
                  className=""
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Gestion Simplifiée
                </h3>
                <p className="text-gray-600 text-sm">
                  Glissez-déposez les commandes pour mettre à jour leur statut en un clic.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:hidden space-y-6">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#5E8F3F]/10 rounded-full p-4">
                <Image
                  src={checkIcon}
                  alt="Check Icon"
                  width={24}
                  height={24}
                  className=""
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 text-center my-4">
                  Commandes en Temps Réel
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Affichez les commandes reçues en temps réel et leur état : "En préparation", "Prête", ou "Servie".
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#5E8F3F]/10 rounded-full p-4">
                <Image
                  src={checkIcon}
                  alt="Check Icon"
                  width={24}
                  height={24}
                  className=""
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 text-center my-4">
                  Gestion Simplifiée
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Glissez-déposez les commandes pour mettre à jour leur statut en un clic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppFeatures;
