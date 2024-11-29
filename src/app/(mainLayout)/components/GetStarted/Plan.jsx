"use client";
import Image from "next/image";
import React, { useState } from "react";

const Plan = ({ setState }) => {
  const [selectedPlan, setSelectedPlan] = useState("lumiere");
  return (
    <>
      <div className="container mx-auto px-5 py-10 lg:py-20">
        <h1 className="text-[#565656] text-3xl lg:text-4xl font-semibold text-center mb-4">
          Créez votre profil
        </h1>
        <p className="text-[#84949E] text-center mb-6 lg:mb-16">
          Obtenez tous les accès et une réduction supplémentaire de 20 % lorsque
          vous vous abonnez annuellement
        </p>
        <div className="w-full lg:w-2/3 mx-auto flex flex-col lg:flex-row justify-center items-start gap-4 lg:gap-10">
          <div className="space-y-4 w-full">
            <h2 className="text-[#606060]">Facture à</h2>
            <input
              type="text"
              placeholder="Jhon Smith"
              className="w-full border border-[#C1C1C1] lg:border-[#EFEFEF] rounded-lg p-2.5 bg-white"
            />

            <div className="grid gap-4 w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Numéro de carte"
                  className="w-full border border-[#C1C1C1] lg:border-[#EFEFEF] rounded-lg p-2.5 bg-white"
                />
                <Image
                  src="/assets/paymentcard.png"
                  alt=""
                  width={66}
                  height={16}
                  className="absolute top-4 right-5"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-full border border-[#C1C1C1] lg:border-[#EFEFEF] rounded-lg p-2.5 bg-white"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full border border-[#C1C1C1] lg:border-[#EFEFEF] rounded-lg p-2.5 bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[#606060]">Pays</label>
              <div className="flex items-center w-full border rounded-md p-2 bg-white">
                <span className="mr-2">🇺🇸</span>
                <span>United States</span>
              </div>
            </div>

            <input
              type="text"
              placeholder="Code postal"
              className="w-full border border-[#C1C1C1] lg:border-[#EFEFEF] rounded-lg p-2.5 bg-white"
            />
            <p className="text-[#5E6C73] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              <p className="text-2xl font-bold">20,00 $ / mois / utilisateur</p>
              <button className="text-[#5E8F3F]">Details</button>
            </div>
          </div>
          <div className="space-y-4 w-full">
            <h2 className="text-[#606060]">Type d&apos;adhésion</h2>

            <div className="space-y-4 w-full">
              <label
                className={`w-full flex items-center space-x-3 border rounded-lg p-4 cursor-pointer ${
                  selectedPlan === "lumiere"
                    ? "border-[#5E8F3F]"
                    : "border-gray-200"
                }`}
              >
                <div className="relative">
                  <input
                    class="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                    type="radio"
                    name="plan"
                    id="lumiere"
                    value="lumiere"
                    checked={selectedPlan === "lumiere"}
                    onChange={() => setSelectedPlan("lumiere")}
                  />
                </div>
                <div className="flex-1">
                  <span className="font-medium">Plan Lumière</span>
                  <p className="text-sm text-muted-foreground text-[#8A9399]">
                    20 $/mois par membre
                  </p>
                </div>
              </label>

              <label
                className={`w-full flex items-center space-x-3 border rounded-lg p-4 cursor-pointer relative ${
                  selectedPlan === "pro"
                    ? "border-[#5E8F3F]"
                    : "border-gray-200"
                }`}
              >
                <div className="relative">
                  <input
                    class="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                    type="radio"
                    name="plan"
                    id="pro"
                    value="pro"
                    checked={selectedPlan === "pro"}
                    onChange={() => setSelectedPlan("pro")}
                  />
                </div>
                <div className="flex-1">
                  <span className="font-medium">Forfait Pro</span>
                  <p className="text-sm text-muted-foreground text-[#8A9399]">
                    18 $/mois par membre
                  </p>
                </div>
                <span className="absolute top-4 right-4 bg-green-100 text-green-800 hover:bg-green-100 px-3 rounded-full">
                  Save 20%
                </span>
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={() => setState("congrats")}
          className="w-full max-w-[350px] mt-10 lg:mt-20 flex justify-center mx-auto bg-[#5E8F3F] px-6 py-3 rounded-full font-medium text-white shadow-sm hover:bg-green-700"
        >
          Abonnement complet
        </button>
      </div>
    </>
  );
};

export default Plan;
