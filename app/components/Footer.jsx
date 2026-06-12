import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
  <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-slate-400 text-center">
        © {new Date().getFullYear()} Patrycja Kruczyńska
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <Link
          href="/mentions-legales"
          className="text-sm text-slate-400 hover:text-white transition"
        >
          Mentions légales
        </Link>

        <Link
          href="/politique-confidentialite"
          className="text-sm text-slate-400 hover:text-white transition"
        >
          Politique de confidentialité
        </Link>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;