"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Développeuse Web",
    description:
      "Création de sites web modernes et d’interfaces utilisateur responsives.",
  },
  {
    year: "2025",
    title: "Software Engineer",
    description:
      "Développement logiciel, résolution de problèmes techniques et amélioration continue des performances.",
  },
  {
    year: "2026",
    title: "Java • Spring Boot • Architecture Distribuée",
    description:
      "API REST, SQL, CI/CD avec GitHub Actions et conception d’applications évolutives.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="journey" className="py-20 lg:py-32 text-white">
      <div className="text-center mb-16 lg:mb-24">
        <span className="text-sky-400 uppercase tracking-[0.3em] text-sm">
          Parcours
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mt-4">
          Mon évolution professionnelle
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg px-4">
          De développeuse web à software engineer spécialisée dans les
          applications Java modernes.
        </p>
      </div>

      <div className="hidden md:block relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-400 via-cyan-400 to-violet-500" />

        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-center mb-32"
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-14 z-20">
              <span className="px-5 py-2 rounded-full bg-[#121212] border border-sky-500/20 text-sky-400 font-bold text-xl shadow-lg">
                {item.year}
              </span>
            </div>

            <div
              className={`w-1/2 flex ${
                index % 2 === 0
                  ? "justify-end pr-16"
                  : "justify-end opacity-0 pointer-events-none"
              }`}
            >
              {index % 2 === 0 && (
                <div className="max-w-[420px] min-h-[190px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <div className="w-6 h-6 rounded-full bg-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.8)]" />
            </div>

            <div
              className={`w-1/2 flex ${
                index % 2 !== 0
                  ? "justify-start pl-16"
                  : "justify-start opacity-0 pointer-events-none"
              }`}
            >
              {index % 2 !== 0 && (
                <div className="max-w-[420px] min-h-[190px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden max-w-xl mx-auto px-4">
        <div className="relative border-l border-sky-500/30 ml-3">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 pb-10"
            >
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-sky-400" />

              <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-semibold">
                {item.year}
              </span>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 lg:mt-32 max-w-5xl mx-auto px-4">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 lg:p-12">
          <span className="text-sky-400 uppercase tracking-[0.3em] text-sm">
            Actuellement
          </span>

          <h3 className="text-2xl lg:text-4xl font-bold text-white mt-4 mb-8">
            Ce sur quoi je travaille aujourd'hui
          </h3>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {[
              "Développement backend",
              "Conception d'API REST",
              "Architecture microservices",
              "Optimisation des performances",
              "Automatisation CI/CD",
            ].map((item) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 text-lg font-bold">
                  →
                </div>

                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
