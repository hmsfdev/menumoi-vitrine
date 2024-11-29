"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import chef1 from "../../../../../public/assets/step1.png";
import chef2 from "../../../../../public/assets/step2.png";

const steps = [
  {
    image: chef1,
    title: "Début facile",
    description:
      "Visitez MenuMoi et commencez en entrant le nom de votre restaurant, votre numéro de téléphone et votre adresse.",
  },
  {
    image: chef2,
    title: "Personnalisez-le",
    description:
      "Sélectionnez un modèle de menu numérique et choisissez trois couleurs personnalisées correspondant à votre marque.",
  },
  {
    image: chef1,
    title: "Gérer les commandes",
    description:
      "Partagez votre lien de menu numérique ou votre code QR avec les clients. Les clients peuvent passer leurs commandes directement via le menu et vous les recevez en temps réel via l'application.",
  },
  {
    image: chef2,
    title: "Obtenir des réservations",
    description:
      "Activez les réservations de tables, permettant aux clients de réserver des tables instantanément. Gérer et approuvez les réservations en un seul clic.",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-white py-8 lg:py-16">
      <div className="max-w-8xl mx-auto px-5 lg:px-10 text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6">
          Comment Ça Fonctionne
        </h2>
        <p className="text-gray-600 max-w-2xl text-center mx-auto text-sm mb-12 leading-relaxed">
          Avec MenuMoi, Vous Pouvez Présenter Votre Menu, Accepter Des Commandes
          Et Même Gérer Les Réservations De Table – Tout Cela Depuis Une
          Plateforme Simplifiée.
        </p>

        {/* Steps Grid for Desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="w-36 h-36 flex items-center justify-center">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={155}
                  height={160}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Swiper Slider for Mobile */}
        <div className="lg:hidden">
          <div className="pb-6">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {steps.map((step, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center text-center space-y-6 px-4">
                    <div className="w-36 h-36 flex items-center justify-center">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={150}
                        height={150}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm pb-6">
                      {step.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
