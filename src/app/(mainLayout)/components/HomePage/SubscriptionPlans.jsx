"use client";

import bg from "../../../../../public/assets/Group (6).png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Tooltip Component
const Tooltip = ({ text }) => (
  <div className="absolute bg-black text-white text-xs rounded-lg px-3 py-1 shadow-lg z-50 mt-2">
    {text}
  </div>
);

const plans = [
  {
    title: "Pack Essentiel",
    price: "29.99€/mo",
    features: [
      "Menu digital complètement personnalisable",
      "Système de réservation sur le site, avec notifications push",
      "Référencement du restaurant",
      "Inclusion dans la liste des restaurants sur MenuMoi.fr",
      "Menu multilingue pour attirer les touristes",
      "Promotions et offres visibles directement sur le menu",
    ],
  },
  {
    title: "Pack Premium",
    price: "49.99€/mo",
    features: [
      {
        text: "Accès à MenuMoi Cuisine pour la gestion des commandes*",
        hint: "Nécessite une tablette ou un écran Android pour afficher et gérer les commandes.",
      },
      {
        text: "Paiement en caisse possible via caisses compatibles*",
        hint: "Requiert une caisse compatible. Liste des modèles compatibles disponible sur demande.",
      },
      "Tous les avantages du Pack Essentiel",
      "Intégration du paiement depuis le menu digital",
      "Statistiques sur les produits les plus commandés",
      "Rapports détaillés avec tickets de caisse numériques",
      "Notifications push en cuisine pour les commandes urgentes",
      "Historique des commandes clients pour personnaliser l'expérience",
    ],
  },
];

const SubscriptionPlan = () => {
  const [visibleTooltip, setVisibleTooltip] = useState(null); // État pour gérer la visibilité

  const handleTooltipToggle = (index) => {
    // Affiche/masque la bulle en fonction de l'état actuel
    setVisibleTooltip(visibleTooltip === index ? null : index);
  };

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
            Choisissez Votre Formule
          </h2>
          <p className="text-white text-sm max-w-3xl mx-auto mb-16">
            Découvrez nos formules adaptées à vos besoins. Simplifiez la gestion
            de votre restaurant tout en offrant une expérience client moderne et
            fluide.
          </p>
        </div>

        {/* Plans Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, planIndex) => (
            <div
              key={planIndex}
              className="bg-white bg-opacity-20 border border-gray-50 border-opacity-30 rounded-2xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {plan.title}
              </h3>
              <p className="text-white text-lg font-semibold mb-4">
                {plan.price}
              </p>
              <ul className="text-white text-sm space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`relative cursor-pointer ${
                      typeof feature === "object" ? "underline" : ""
                    }`}
                    onClick={() =>
                      typeof feature === "object" && handleTooltipToggle(idx)
                    }
                  >
                    {typeof feature === "object" ? feature.text : feature}
                    {visibleTooltip === idx && typeof feature === "object" && (
                      <Tooltip text={feature.hint} />
                    )}
                  </li>
                ))}
              </ul>

              <Link href="/get-started">
                <button
                  style={{
                    background: "linear-gradient(90deg, #FFFFFF 0%, #5E8F3F 100%)",
                  }}
                  className="bg-white text-black font-medium px-6 py-3 rounded-full shadow-md hover:bg-opacity-90"
                >
                  Choisir cette formule
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
