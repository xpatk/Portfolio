"use client";

import React from "react";


const Apropos = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden text-white py-24 px-6"
    >
      {/* Background effects */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-10">
          À propos
        </h2>

        <div className="space-y-6 text-lg text-gray-300 leading-8">
          <p>
            Je suis Software Engineer, passionnée par la création de solutions
            numériques fiables et bien conçues.
          </p>

          <p>
            Au quotidien, je travaille dans le développement logiciel. Pendant
            mon temps libre, je crée également des sites web et développe des
            projets personnels qui me permettent d’allier technique,
            créativité et résolution de problèmes.
          </p>

          <p>
            Quand je ne suis pas devant un écran, vous me trouverez
            probablement en montagne, un carnet de croquis à la main ou
            plongée dans l’univers du Seigneur des Anneaux.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Apropos;