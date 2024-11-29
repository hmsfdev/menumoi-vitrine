"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CreateProfile from "../components/GetStarted/CreateProfile";
import Preview from "../components/GetStarted/Preview";
import Plan from "../components/GetStarted/Plan";
import Congrats from "../components/GetStarted/Congrats";

const GetStarted = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [state, setState] = useState("create-profile");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [state]);

  return (
    <div className="bg-[#f5f5f5] w-full pt-12 lg:pt-20 lg:px-16">
      <div className="container mx-auto">
        <div className="relative flex flex-col lg:flex-row items-start justify-start lg:gap-28">
          <div className="lg:w-1/2 text-center lg:text-left mt-16">
            <h1 className="hidden lg:block text-4xl lg:text-7xl font-bold text-gray-900 leading-snug capitalize">
              Commencer à <br /> construire <br /> VOTRE menu <br /> numérique
            </h1>
            <h1 className="lg:hidden text-3xl lg:text-6xl font-bold text-gray-900 leading-snug capitalize">
              Commencer à <br /> construire VOTRE menu <br /> numérique
            </h1>
            <div className="lg:w-1/2 lg:hidden flex justify-center relative">
              <Image
                src="/assets/get-started-banner.png"
                alt="Main Image"
                width={isMobile ? 300 : 550}
                height={isMobile ? 400 : 800}
                className="relative z-10"
              />
            </div>
            <p className="text-gray-700 lg:text-lg text-sm leading-relaxed my-5">
              Transform your restaurant’s menu into an engaging, easy-to-use
              digital experience that your customers can access anytime,
              anywhere. With MenuMoi, you can showcase your menu, accept orders,
              and even manage table reservations – all from one streamlined
              platform.
            </p>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex justify-center items-center relative">
            <Image
              src="/assets/get-started-banner.png"
              alt="Main Image"
              width={400}
              height={550}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
      {state === "create-profile" && <CreateProfile setState={setState} />}
      {state === "preview" && <Preview setState={setState} />}
      {state === "plan" && <Plan setState={setState} />}
      {state === "congrats" && <Congrats setState={setState} />}
    </div>
  );
};

export default GetStarted;
