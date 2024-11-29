/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import bg from "../../../../../public/assets/Group (6).png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const features = [
  {
    title: "Menu Digital Personnalisé",
    description: "Créez un menu numérique élégant et 100 % personnalisable avec vos couleurs et votre style.",
  },
  {
    title: "Commandes en Ligne",
    description: "Recevez les commandes de vos clients directement depuis leur smartphone.",
  },
  {
    title: "Réservations Simplifiées",
    description: "Permettez à vos clients de réserver leur table en quelques clics.",
  },
  {
    title: "Gestion Intuitive",
    description: "Gérez vos commandes, réservations et paiements en temps réel via une plateforme unique.",
  },
  {
    title: "Notifications en Temps Réel",
    description: "Recevez des alertes instantanées pour chaque commande ou réservation.",
  },
  {
    title: "Analyse et Statistiques",
    description: "Accédez à des données précieuses sur les ventes, les commandes et les réservations pour améliorer vos performances.",
  }
  
];

const SubscriptionPlan = () => {
  return (
    <div className="relative bg-[#5E8F3F] py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="background image"
          quality={100}
          className="opacity-60 size-full object-cover"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Découvrez Toutes Les Fonctionnalités
          </h2>
          <p className="text-white text-sm max-w-3xl mx-auto mb-16">
            Avec MenuMoi, profitez de toutes les fonctionnalités nécessaires pour transformer votre restaurant : menu digital, commandes, réservations, et bien plus encore. Une seule formule, sans compromis.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 border border-gray-50 border-opacity-30 rounded-2xl p-6 text-center"
            >
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Subscription CTA */}
        <div className="text-center mt-16">
          <p className="text-white text-2xl font-bold mb-4">Une Seule Formule : €39.99/mo</p>
          <p className="text-white text-sm mb-6">
            Profitez de toutes les fonctionnalités premium avec un support 24/7. 
            Essayez gratuitement pendant 7 jours.
          </p>
          <Link href="/get-started">
        <button
          style={{
            background: "linear-gradient(90deg, #FFFFFF 0%, #5E8F3F 100%)",
          }}
          className="bg-white text-black font-medium px-6 py-3 rounded-full shadow-md hover:bg-opacity-90"
        >
          Commencer Maintenant
        </button>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
