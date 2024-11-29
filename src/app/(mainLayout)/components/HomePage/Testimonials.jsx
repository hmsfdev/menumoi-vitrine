"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import bg from "../../../../../public/assets/Group (8).png";
import coma from "../../../../../public/assets/Group (9).png";
import man1 from "../../../../../public/assets/Image.png";
import man2 from "../../../../../public/assets/Rectangle.png";
import man3 from "../../../../../public/assets/Rectangle (1).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Robin Ayala Doe",
    rating: 5,
    quote:
      "Vraiment, j'ai trouvé la JOIE de cuisiner. Le moment-là que ma moitié le fait. Il n'y a pas plus sincère que l'adoration de la subsistance.",
    image: man1,
  },
  {
    name: "John De marli",
    rating: 5,
    quote:
      "Tous les individus ont mangé dans cette cuisine et ont mené une vie normale et solide. Le chemin qui mène au cœur d’un homme passe par son estomac.",
    image: man2,
  },
  {
    name: "Rowhan Smith",
    rating: 5,
    quote:
      "Vous n’avez pas besoin de cuisiner de l’art parfaites extravagantes ou confondantes. Juste de vous nourrir de nouvelles gammes.",
    image: man3,
  },
];

const Testimonials = () => {
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
    <div className="bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8">
        Les Défis des Restaurateurs Modernes
      </h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        Nous avons identifié les problèmes courants rencontrés par les restaurants. Voici comment MenuMoi les résout efficacement.
      </p>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Item 1 */}
        <div className="flex items-start gap-4">
          <div className="bg-[#5E8F3F]/10 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#5E8F3F]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 21h4.5m2.25-4.5a6 6 0 10-9 0M3 13.5h18m-2.25-7.5a4.5 4.5 0 11-9 0"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">
              Gestion des commandes complexe
            </h3>
            <p className="text-gray-600 text-sm">
              Les commandes sur papier ou par téléphone prennent du temps et augmentent le risque d'erreurs.
            </p>
            <p className="text-sm text-[#5E8F3F] font-medium mt-2">
              <span className="font-bold">MenuMoi :</span> Digitalisez vos commandes avec un menu interactif simple et intuitif.
            </p>
          </div>
        </div>
  
        {/* Item 2 */}
        <div className="flex items-start gap-4">
          <div className="bg-[#5E8F3F]/10 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#5E8F3F]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 18.364l1.414-1.414a2 2 0 112.828 0l1.415 1.414a2 2 0 002.829 0l1.415-1.414a2 2 0 012.828 0l1.414 1.414m-9-4.95a2 2 0 012.828 0m2.828 2.828a2 2 0 012.828 0m-9 4.95h9"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">
              Difficulté à gérer les réservations
            </h3>
            <p className="text-gray-600 text-sm">
              Les réservations manuelles sont souvent source de confusion et de double réservation.
            </p>
            <p className="text-sm text-[#5E8F3F] font-medium mt-2">
              <span className="font-bold">MenuMoi :</span> Offrez une réservation en ligne, instantanée et bien organisée.
            </p>
          </div>
        </div>
  
        {/* Item 3 */}
        <div className="flex items-start gap-4">
          <div className="bg-[#5E8F3F]/10 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#5E8F3F]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 21a2 2 0 001.414-.586l4.828-4.828a2 2 0 000-2.828l-4.828-4.828a2 2 0 00-2.828 0L9.343 9.343a2 2 0 000 2.828l1.414 1.414a2 2 0 002.828 0l1.415-1.414a2 2 0 010-2.828L9.343 3.515a4 4 0 00-5.656 0l-4.828 4.828a4 4 0 000 5.656l4.828 4.828a4 4 0 005.656 0l4.828-4.828a4 4 0 000-5.656l-1.414-1.414"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">
              Intégration des paiements en ligne
            </h3>
            <p className="text-gray-600 text-sm">
              Les paiements en ligne peuvent être complexes à intégrer et à gérer.
            </p>
            <p className="text-sm text-[#5E8F3F] font-medium mt-2">
              <span className="font-bold">MenuMoi :</span> Intégrez Stripe et recevez vos paiements instantanément.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Testimonials;
