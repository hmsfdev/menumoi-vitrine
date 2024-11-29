"use client";

import React from "react";
import logo from "../../../../../public/assets/Group (7).png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 px-6 lg:px-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start text-center lg:text-left pb-5">
        {/* Logo and Contact Section */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <div className="w-16 h-16 mx-auto lg:mx-0 mb-5">
            <Image src={logo} alt="MenuMoi Logo" width={84} height={90} />
          </div>
          <div className="space-y-1 text-sm">
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
              contact@menumoi.fr
            </p>
          </div>
        </div>

        {/* Links Section */}
 
        <div className="space-y-4 mt-8">
  <h3 className="font-bold text-xl text-gray-800">Liens</h3>
  <ul className="space-y-3 text-gray-800 text-sm">
    <li>
      <Link href="/">Accueil</Link>
    </li>
    <li>
      <Link href="/about">À Propos</Link>
    </li>
    <li>
      <Link href="/pricing">Tarifs</Link>
    </li>
  </ul>
</div>



        {/* Legal Section */}
        <div className="space-y-4 mt-8">
          <h3 className="font-bold text-xl text-gray-800">Mentions Légales</h3>
          <ul className="space-y-3 text-gray-800 text-sm">
            <li>
              <a href="/terms">Conditions d’Utilisation</a>
            </li>
            <li>
              <a href="/privacy">Politique de Confidentialité</a>
            </li>
            <li>
              <a href="/cookies">Politique de Cookies</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 my-5"></div>

      <div className="text-center mt-8 text-gray-600">
        <p>Copyright © 2024 MenuMoi. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
