"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import chef1 from "../../../../../public/assets/chef1.png";
import chef2 from "../../../../../public/assets/chef2.png";
import chef3 from "../../../../../public/assets/chef4.png";
import chef4 from "../../../../../public/assets/chef3.png";

const steps = [
  {
    image: chef1, // Image représentant un restaurateur heureux
    title: "Inscription Simple",
    description:
      "Rendez-vous sur MenuMoi, entrez les informations de base de votre restaurant : nom, téléphone et adresse. En quelques clics, vous êtes prêt à commencer.",
  },
  {
    image: chef2, // Image représentant un écran de personnalisation
    title: "Personnalisation",
    description:
      "Choisissez un modèle de menu numérique parmi nos designs professionnels et personnalisez-le avec trois couleurs qui reflètent parfaitement votre marque.",
  },
  {
    image: chef3, // Image montrant un client passant commande via un menu digital
    title: "Gestion des Commandes",
    description:
      "Partagez votre code QR ou lien de menu numérique avec vos clients. Recevez leurs commandes en temps réel directement via l'application MenuMoi.",
  },
  {
    image: chef4, // Image montrant des clients heureux dans un restaurant
    title: "Réservations Simplifiées",
    description:
      "Activez la fonction réservation pour permettre à vos clients de réserver leurs tables en ligne. Gérez et approuvez facilement les réservations en un seul clic.",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-white py-8 lg:py-16">
      <div className="max-w-8xl mx-auto px-5 lg:px-10 text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6">
          Découvrez Comment Ça Marche
        </h2>
        <p className="text-gray-600 max-w-2xl text-center mx-auto text-sm mb-12 leading-relaxed">
          Avec <b>MenuMoi</b>, transformez votre restaurant en une expérience
          moderne et intuitive. Présentez votre menu digital, acceptez des
          commandes en ligne et gérez facilement les réservations de table –
          tout cela depuis une plateforme centralisée et facile à utiliser.
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
                  width={135}
                  height={140}
                  className="w-36 h-48"
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
                        width={100}
                        height={100}
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
