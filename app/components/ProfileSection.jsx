"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const ProfileSection = () => {
  return (
    <section className="py-12 lg:py-16 min-h-[70vh] lg:min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-6 font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-sky-400 to-cyan-300 text-4xl sm:text-5xl lg:text-6xl">
              Hello, je suis
            </div>

            <div className="mt-2 text-4xl sm:text-6xl lg:text-7xl">
              Patrycja Kruczyńska
            </div>

            <div className="text-sky-400 text-2xl sm:text-3xl lg:text-4xl mt-6 min-h-[60px]">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Web Developer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Tech Enthusiast",
                  2000,
                  "Tolkien Fan",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-8">
            Je conçois des solutions logicielles et crée également des sites
            web modernes. J'aime transformer des idées en produits fiables,
            élégants et utiles, tout en combinant ingénierie, créativité et
            résolution de problèmes.
          </p>

          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <Link href="#contact">
              <button className="px-6 py-3 rounded-full bg-sky-700 hover:bg-sky-600 text-white transition-all duration-300">
                Contactez-moi
              </button>
            </Link>

            <a
              href="https://github.com/xpatk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-sky-400 transition-all duration-300"
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block col-span-4 place-self-center mt-10 lg:mt-0"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/30 via-cyan-500/20 to-violet-500/30 blur-3xl" />

            <div className="relative rounded-full overflow-hidden border border-white/10 backdrop-blur-sm">
              <Image
                src="/images/prof.jpg"
                alt="Profile picture"
                width={350}
                height={350}
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;