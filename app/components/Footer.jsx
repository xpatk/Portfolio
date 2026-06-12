import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Image
          src="/icons/LOGO.png"
          width={40}
          height={40}
          alt="logo"
          className="h-auto w-auto opacity-80"
        />

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Patrycja Kruczyńska
        </p>
      </div>
    </footer>
  );
};

export default Footer;