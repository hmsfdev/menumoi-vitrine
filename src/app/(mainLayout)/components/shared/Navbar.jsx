"use client";

import Link from "next/link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";

import logo from "../../../../../public/assets/Group (7).png";
import Image from "next/image";
import cn from "../../../../utils/cn";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  
  // Detect section visibility based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let found = "";
      
      sections.forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= 0 && bottom >= 0) {
          found = section.id; // Get the ID of the section currently in view
        }
      });

      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À Propos", href: "/#about" },
    { label: "Témoignages", href: "/#testimonials" },
    { label: "Fonctionnalités", href: "/#features" },
  ];

  return (
    <div className="py-4 fixed w-full z-[999999] bg-[#f5f5f5] top-0 lg:px-16">
      <div className="mx-auto container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-14 h-12 ms-5">
            <Image src={logo} alt="logo" width={85} height={70} />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden xl:flex gap-10">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={cn(
                  "capitalize",
                  activeSection === item.href.slice(1) && "text-[#5E8F3F]" // Highlight the active section
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden xl:block">
            <Link href="/get-started">
              <button className="bg-[#5E8F3F] text-black px-6 py-3 rounded-lg font-medium shadow-sm hover:bg-green-700">
                COMMENCER
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className="xl:hidden cursor-pointer mr-5"
            onClick={() => setOpen(!open)}
          >
            {open ? <RxCross1 size={28} /> : <RxHamburgerMenu size={28} />}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "absolute xl:hidden w-full bg-white bg-opacity-95 border-b backdrop-blur-3xl p-5 left-[100%] mt-4 transition-all duration-700",
            { "left-[100%]": !open },
            { "left-0": open }
          )}
        >
          {/* Mobile Nav Items */}
          <ul className="space-y-3 my-5">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={cn(
                  "capitalize text-black text-lg font-medium",
                  activeSection === item.href.slice(1) && "text-[#5E8F3F]" // Highlight active section
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <div className="mt-5">
            <Link href="/get-started">
              <button className="bg-[#5E8F3F] w-full text-black px-6 py-3 rounded-lg font-medium shadow-sm hover:bg-green-700">
                COMMENCER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
