/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import bg from "../../../../../public/assets/Group (6).png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const plans = [
  {
    title: "Plan Lumière",
    description: "Idéal pour les petits pour les petits  restaurants",
    price: "Free 7days Trial",
    details:
      "Testez toutes les fonctionnalités avant de souscrire à un forfait mensuel.",
    buttonText: "Commencer",
  },
  {
    title: "Forfait Pro",
    description: "Conçu pour les entreprises ayant des besoins élevés",
    price: "€39.99/mo",
    details:
      "Accédez à toutes les fonctionnalités premium avec un support 24/7.",
    buttonText: "Commencer",
  },
];

const SubscriptionPlans = () => {
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

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center -pt-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Choisissez Votre Forfait
          </h2>
          <p className="text-white text-sm mb-16">
            Choisissez Entre Deux Options D'abonnement Flexibles
          </p>
        </div>

        {/* Desktop Plans Section */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-5">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-50 border bg-opacity-10 border-gray-50 border-opacity-30 rounded-2xl max-w-xs mx-auto py-10 px-6"
            >
              <h3 className="text-2xl text-white mb-2">{plan.title}</h3>
              <p className="text-white text-sm mb-6">{plan.description}</p>
              <p className="text-white text-2xl mb-4">{plan.price}</p>
              <p className="text-white text-sm mb-6">{plan.details}</p>
              <button
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #5E8F3F 100%)",
                }}
                className="bg-white text-black font-medium px-6 mt-10 py-2 rounded-full shadow-md hover:bg-opacity-90"
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Plans Section */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="pb-8"
          >
            {plans.map((plan, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 border bg-opacity-10 border-gray-50 border-opacity-30 rounded-2xl max-w-xs mx-auto py-10 px-6">
                  <h3 className="text-2xl text-white mb-2">{plan.title}</h3>
                  <p className="text-white text-sm mb-6">{plan.description}</p>
                  <p className="text-white text-2xl mb-4">{plan.price}</p>
                  <p className="text-white text-sm mb-6">{plan.details}</p>
                  <button
                    style={{
                      background:
                        "linear-gradient(90deg, #FFFFFF 0%, #5E8F3F 100%)",
                    }}
                    className="bg-white text-black font-medium px-6 mt-10  py-2 rounded-full shadow-md hover:bg-opacity-90"
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
