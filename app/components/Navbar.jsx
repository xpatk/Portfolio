"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const NavLinks = [
  {
    title: "À propos",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center">
      <div
        className="
          w-[90%]
          max-w-5xl
          rounded-2xl
          border
          border-white/10
          bg-black/30
          backdrop-blur-xl
        "
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/icons/LOGO.png"
              height={50}
              width={50}
              alt="logo"
              className="
                h-auto
                w-auto
                transition-transform
                duration-300
                hover:scale-105
              "
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#about"
              className="
                px-4
                py-2
                rounded-full
                text-gray-300
                hover:text-white
                hover:bg-white/5
                transition-all
                duration-300
              "
            >
              À propos
            </a>

            <a
              href="#contact"
              className="
                px-4
                py-2
                rounded-full
                text-gray-300
                hover:text-white
                hover:bg-white/5
                transition-all
                duration-300
              "
            >
              Contact
            </a>

            <a
              href="https://github.com/xpatk"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                ml-2
                px-5
                py-2.5
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                text-white
                hover:border-sky-400/50
                hover:bg-white/10
                transition-all
                duration-300
              "
            >
              GitHub

              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="text-white"
              >
                <Bars3Icon className="h-7 w-7" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="text-white"
              >
                <XMarkIcon className="h-7 w-7" />
              </button>
            )}
          </div>
        </div>

        {navbarOpen && <MenuOverlay links={NavLinks} />}
      </div>
    </nav>
  );
};

export default Navbar;