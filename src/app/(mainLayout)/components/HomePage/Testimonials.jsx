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
    <div className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="absolute inset-0 py-10 lg:py-20 ">
        <Image
          src={bg}
          alt="background image"
          quality={100}
          className="opacity-40 object-cover h-full"
        />
      </div>

      <h2 className="text-4xl lg:text-5xl text-center lg:mt-10 mb-4 font-semibold">
        Ce Que Dit Notre Client Satisfait
      </h2>
      <p className="text-lg text-center mb-16 text-gray-700">
        Ce Qui En Fait Le Meilleur Endroit Pour Commencer À Trader
      </p>

      <Swiper
        slidesPerView={isMobile ? 1 : 2.3}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        pagination={
          isMobile && {
            clickable: true,
          }
        }
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper -mt-10 mr-20"
      >
        {testimonials.map((t, i) => (
          <>
            <SwiperSlide key={i}>
              <div className="py-10 ">
                <div className="bg-white p-4 lg:p-8 rounded-xl flex flex-col justify-center items-center">
                  <div className="relative w-full">
                    <Image
                      src={t?.image}
                      alt=""
                      className="absolute left-0 right-0 -top-16 lg:-top-20 mx-auto"
                    />
                  </div>
                  <div className="flex gap-1 my-2">
                    {Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-[#5E8F3F]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                  </div>
                  <p className="font-bold lg:text-lg">{t.name}</p>
                  <p className="text-center text-[#898989] mt-4">{t.quote}</p>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
        {testimonials.map((t, i) => (
          <>
            <SwiperSlide key={i}>
              <div className="py-10 ">
                <div className="bg-white p-4 lg:p-8 rounded-xl flex flex-col justify-center items-center">
                  <div className="relative w-full">
                    <Image
                      src={t?.image}
                      alt=""
                      className="absolute left-0 right-0 -top-16 lg:-top-20 mx-auto"
                    />
                  </div>
                  <div className="flex gap-1 my-2">
                    {Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-[#5E8F3F]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                  </div>
                  <p className="font-bold lg:text-lg">{t.name}</p>
                  <p className="text-center text-[#898989] mt-4">{t.quote}</p>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
