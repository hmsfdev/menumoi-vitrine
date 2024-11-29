"use client";

import React from "react";
import logo from "../../../../../public/assets/Group (7).png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8 px-6 lg:px-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 items-start text-center lg:text-left pb-5">
        {/* Logo and Contact Section */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <div className="w-16 h-16 mx-auto lg:mx-0 mb-10">
            <Image src={logo} alt="logo" width={84} height={90} />
          </div>
          <div className="space-y-1 text-sm -pt-10">
            <p className="text-gray-700 font-medium flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              help@unity.com
            </p>
            <p className="text-gray-700 font-medium flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              +1234-456-8910
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mt-8">
          <h3 className="font-bold text-xl text-gray-800">Links</h3>
          <ul className="space-y-3 text-gray-800 text-sm">
            <li>
              <a href="#">Maison</a>
            </li>
            <li>
              <a href="#">À Propos De Nous</a>
            </li>
            <li>
              <a href="#">Chariots</a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="space-y-4 mt-8">
          <h3 className="font-bold text-xl text-gray-800">Légale</h3>
          <ul className="space-y-3 text-gray-800 text-sm">
            <li>
              <a href="">Conditions d’Utilisation</a>
            </li>
            <li>
              <a href="">Politique De Confidentialité</a>
            </li>
            <li>
              <a href="">Politique De Cookies</a>
            </li>
          </ul>
        </div>

        {/* Product Section */}
        <div className="space-y-4 mt-8">
          <h3 className="font-bold text-xl text-gray-800">Produit</h3>
          <ul className="space-y-3 text-gray-800 text-sm">
            <li>
              <a href="">Parrain Ton Ami</a>
            </li>
            <li>
              <a href="">Chat En Direct</a>
            </li>
            <li>
              <a href="">Critiques</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4 mt-8">
          <h3 className="font-bold text-xl text-gray-800">Bulletin</h3>
          <p className="text-gray-800 text-sm">Restez À Jour</p>
          <div className="flex items-center bg-white px-2 py-1 rounded-full shadow-md w-full max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-2 text-sm text-gray-700 bg-transparent focus:outline-none rounded-full"
            />

            {/* Subscribe Button */}
            <button
              className="bg-[#5E8F3F] px-4 py-2 lg:-ms-16 md:-ms-16 sm:ms-0 rounded-full shadow-md hover:bg-green-700 text-sm font-medium"
              style={{
                background: "linear-gradient(90deg, #5E8F3F 0%, #5E8F3F 100%)",
              }}
            >
              S’abonner
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 my-5"></div>

      <div className="text-center mt-8 text-gray-600">
        <p>Copyright 2023. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
