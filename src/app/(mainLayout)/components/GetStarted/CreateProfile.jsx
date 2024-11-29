import React, { useState } from "react";

const CreateProfile = ({ setState }) => {
  const [primary, setPrimary] = useState("#FFCC10");
  const [secondary, setSecondary] = useState("#FF8610");
  const [tartiary, setTartiary] = useState("#5E8F3F");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const password = form.password.value;
    const restaurant = form.restaurant.value;

    const formData = {
      name: name,
      email: email,
      phone_number: number,
      password: password,
      restaurant_name: restaurant,
      theme_colors: {
        primary: primary,
        secondary: secondary,
        tertiary: tartiary,
      },
    };

    console.log(formData);

    if (formData) {
      setState("preview");
    }
  };
  return (
    <div className="container mx-auto py-10 px-5">
 <h1 className="text-[#565656] text-3xl lg:text-4xl font-semibold text-center mb-2 lg:mb-4">
  Créez votre profil
</h1>
<p className="text-gray-600 text-sm lg:text-base text-center mb-6 lg:mb-16">
  Remplissez les informations nécessaires pour personnaliser votre expérience sur MenuMoi.
</p>

  
    <form onSubmit={handleSubmit}>
      <div className="lg:w-3/4 mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center">
        <div className="w-full">
          <label htmlFor="name" className="text-[#ACACAC]">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-2 px-5 py-3 w-full bg-white border border-[#C1C1C1] rounded-lg font-semibold"
            placeholder="John Smith"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="text-[#ACACAC]">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-2 px-5 py-3 w-full bg-white border border-[#C1C1C1] rounded-lg font-semibold"
            placeholder="john@example.com"
            required
          />
        </div>
      </div>
  
      <div className="lg:w-3/4 mx-auto my-4 flex flex-col lg:flex-row gap-6 justify-center items-center">
        <div className="w-full">
          <label htmlFor="number" className="text-[#ACACAC]">
            Numéro de téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="number"
            id="number"
            pattern="^\\d{10}$"
            className="mt-2 px-5 py-3 w-full bg-white border border-[#C1C1C1] rounded-lg font-semibold"
            placeholder="06 12 34 56 78"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="text-[#ACACAC]">
            Mot de passe <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-2 px-5 py-3 w-full bg-white border border-[#C1C1C1] rounded-lg font-semibold"
            placeholder="••••••••"
            required
          />
        </div>
      </div>
  
      <div className="lg:w-3/4 mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center">
        <div className="w-full">
          <label htmlFor="restaurant" className="text-[#ACACAC]">
            Nom du restaurant <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="restaurant"
            id="restaurant"
            className="mt-2 px-5 py-3 w-full bg-white border border-[#C1C1C1] rounded-lg font-semibold"
            placeholder="Thai Restaurant"
            required
          />
        </div>
        <div className="w-full relative">
          <label htmlFor="color" className="text-[#ACACAC]">
            Choisissez le thème de couleur
          </label>
          <div className="mt-3 flex justify-between items-center gap-3">
            <div className="flex justify-center items-center gap-2">
              <label htmlFor="primary" className="text-[#737373]">
                Primaire :
              </label>
              <div
                className="bg-red-500 size-8 rounded-full overflow-hidden"
                style={{ backgroundColor: primary }}
              >
                <input
                  onChange={(e) => setPrimary(e.target.value)}
                  type="color"
                  name="primary"
                  id="primary"
                  className="rounded-full size-20 translate-x-[-25%] translate-y-[-25%]"
                  defaultValue={primary}
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <label htmlFor="secondary" className="text-[#737373]">
                Secondaire :
              </label>
              <div
                className="bg-red-500 size-8 rounded-full overflow-hidden"
                style={{ backgroundColor: secondary }}
              >
                <input
                  onChange={(e) => setSecondary(e.target.value)}
                  type="color"
                  name="secondary"
                  id="secondary"
                  className="rounded-full size-20 translate-x-[-25%] translate-y-[-25%]"
                  defaultValue={secondary}
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <label htmlFor="tertiary" className="text-[#737373]">
                Tertiaire :
              </label>
              <div
                className="bg-red-500 size-8 rounded-full overflow-hidden"
                style={{ backgroundColor: tartiary }}
              >
                <input
                  onChange={(e) => setTartiary(e.target.value)}
                  type="color"
                  name="tertiary"
                  id="tertiary"
                  className="rounded-full size-20 translate-x-[-25%] translate-y-[-25%]"
                  defaultValue={tartiary}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full max-w-[350px] my-20 flex justify-center mx-auto bg-[#5E8F3F] px-6 py-3 rounded-full font-medium text-white shadow-sm hover:bg-green-700"
      >
        Créer maintenant
      </button>
    </form>
  </div>
  
  );
};

export default CreateProfile;
