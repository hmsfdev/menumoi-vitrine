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
     
      {state === "create-profile" && <CreateProfile setState={setState} />}
      {state.page === "preview" && <Preview setState={setState} restaurantName={state.restaurantName} themeColors={state.themeColors} />}
      {state === "plan" && <Plan setState={setState} />}
      {state === "congrats" && <Congrats setState={setState} />}
    </div>
  );
};

export default GetStarted;
