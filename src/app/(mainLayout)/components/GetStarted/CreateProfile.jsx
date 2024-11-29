import React, { useState } from "react";

const CreateProfile = ({ setState }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-[#565656] text-3xl lg:text-4xl font-semibold text-center mb-6 lg:mb-16">
        Créez votre profil
      </h1>

      <form>
        <div className="lg:w-3/4 mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center">
          <div className="w-full">
            <label htmlFor="name" className="text-[#ACACAC]">
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-2 px-5 py-3 w-full bg-white border border-[#C1C1C1] rounded-lg font-semibold"
              placeholder="Jhon Smith"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-[#ACACAC]">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-2 px-5 py-3 w-full bg-white border border-[#C1C1C1] rounded-lg font-semibold"
              placeholder="john@abc.com"
            />
          </div>
        </div>
        <div className="lg:w-3/4 mx-auto my-4 flex flex-col lg:flex-row gap-6 justify-center items-center">
          <div className="w-full">
            <label htmlFor="number" className="text-[#ACACAC]">
              Numéro de téléphone
            </label>
            <input
              type="number"
              name="number"
              id="number"
              className="mt-2 px-5 py-3 w-full bg-white border border-[#C1C1C1] rounded-lg font-semibold"
              placeholder="123 456 789 "
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="text-[#ACACAC]">
              Mots de passe
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-2 px-5 py-3 w-full bg-white border border-[#C1C1C1] rounded-lg font-semibold"
              placeholder="123 456 789 "
            />
          </div>
        </div>
        <div className="lg:w-3/4 mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center">
          <div className="w-full">
            <label htmlFor="restaurant" className="text-[#ACACAC]">
              Nom du restaurant
            </label>
            <input
              type="text"
              name="restaurant"
              id="restaurant"
              className="mt-2 px-5 py-3 w-full bg-white border border-[#C1C1C1] rounded-lg font-semibold"
              placeholder="Thai Restaurant"
            />
          </div>
          <div className="w-full relative">
            <label htmlFor="color" className="text-[#ACACAC]">
              choisissez le thème de couleur
            </label>
            <div className="mt-3 flex justify-center items-center gap-3">
              <button
                type="button"
                className={`size-8 rounded-full bg-[#FFCC10] ${
                  selectedColor === "#FFCC10" ? "border-2 border-black" : ""
                }`}
                onClick={() => setSelectedColor("#FFCC10")}
              ></button>
              <button
                type="button"
                className={`size-8 rounded-full bg-[#FF8610] ${
                  selectedColor === "#FF8610" ? "border-2 border-black" : ""
                }`}
                onClick={() => setSelectedColor("#FF8610")}
              ></button>
              <button
                type="button"
                className={`size-8 rounded-full bg-[#5E8F3F] ${
                  selectedColor === "#5E8F3F" ? "border-2 border-black" : ""
                }`}
                onClick={() => setSelectedColor("#5E8F3F")}
              ></button>
              <button
                type="button"
                className={`size-8 rounded-full bg-[#4dcebb] ${
                  selectedColor === "#4dcebb" ? "border-2 border-black" : ""
                }`}
                onClick={() => setSelectedColor("#4dcebb")}
              ></button>
              <button
                type="button"
                className={`size-8 rounded-full bg-[#4462dd] ${
                  selectedColor === "#4462dd" ? "border-2 border-black" : ""
                }`}
                onClick={() => setSelectedColor("#4462dd")}
              ></button>
              <button
                type="button"
                className={`size-8 rounded-full bg-[#9b44dd] ${
                  selectedColor === "#9b44dd" ? "border-2 border-black" : ""
                }`}
                onClick={() => setSelectedColor("#9b44dd")}
              ></button>
              <button
                type="button"
                className={`size-8 rounded-full bg-[#dd449d] ${
                  selectedColor === "#dd449d" ? "border-2 border-black" : ""
                }`}
                onClick={() => setSelectedColor("#dd449d")}
              ></button>
            </div>
          </div>
        </div>
        <button
          onClick={() => setState("preview")}
          className="w-full max-w-[350px] my-20 flex justify-center mx-auto bg-[#5E8F3F] px-6 py-3 rounded-full font-medium text-white shadow-sm hover:bg-green-700"
        >
          Créer maintenant
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
