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

const skills = [
  "Backend Development",
  "Java",
  "Spring Boot",
  "REST APIs",
  "SQL",
  "Architecture Microservices",
  "CI/CD",
  "GitHub Actions",
  "Performance Optimisation",
];

export default function ProjectsSection() {
  return (
    <section id="journey" className="py-32 text-white">
      <div className="text-center mb-24">
        <span className="text-sky-400 uppercase tracking-[0.3em] text-sm">
          Parcours
        </span>

        <h2 className="text-5xl lg:text-6xl font-bold mt-4">
          Mon évolution professionnelle
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          De développeuse web à software engineer spécialisée dans les
          applications Java modernes.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Ligne centrale */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-400 via-cyan-400 to-violet-500" />

        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            className="relative flex items-center mb-32"
          >
            {/* Rok */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-14 z-20">
              <span className="px-5 py-2 rounded-full bg-[#121212] border border-sky-500/20 text-sky-400 font-bold text-xl shadow-lg">
                {item.year}
              </span>
            </div>

            {/* Lewa strona */}
            <div
              className={`w-1/2 flex ${
                index % 2 === 0
                  ? "justify-end pr-16"
                  : "justify-end opacity-0 pointer-events-none"
              }`}
            >
              {index % 2 === 0 && (
                <div className="max-w-[420px] min-h-[190px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col justify-center hover:border-sky-500/40 hover:bg-white/[0.07] transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}
            </div>

            {/* Point central */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <div className="relative">
                <div className="w-6 h-6 rounded-full bg-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.8)]" />
                <div className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-20" />
              </div>
            </div>

            {/* Prawa strona */}
            <div
              className={`w-1/2 flex ${
                index % 2 !== 0
                  ? "justify-start pl-16"
                  : "justify-start opacity-0 pointer-events-none"
              }`}
            >
              {index % 2 !== 0 && (
                <div className="max-w-[420px] min-h-[190px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col justify-center hover:border-sky-500/40 hover:bg-white/[0.07] transition-all duration-300">
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

      {/* Skills */}
      <div className="mt-32 max-w-5xl mx-auto">

  <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-10 lg:p-12">

    <span className="text-sky-400 uppercase tracking-[0.3em] text-sm">

      Actuellement

    </span>

    <h3 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-10">

      Ce sur quoi je travaille aujourd'hui

    </h3>

    <div className="grid md:grid-cols-2 gap-6">

      {[

        "Développement backend",

        "Conception d'API REST",

        "Architecture microservices",

        "Optimisation des performances",

        "Automatisation CI/CD",

      ].map((item) => (

        <div

          key={item}

          className="

            group

            flex

            items-center

            gap-4

            rounded-2xl

            border

            border-white/10

            bg-white/5

            p-5

            transition-all

            duration-300

            hover:border-sky-500/40

            hover:bg-white/[0.07]

          "

        >

          <div

            className="

              flex

              h-10

              w-10

              items-center

              justify-center

              rounded-full

              bg-sky-500/10

              text-sky-400

              text-lg

              font-bold

            "

          >

            →

          </div>

          <span className="text-gray-300 group-hover:text-white transition-colors">

            {item}

          </span>

        </div>

      ))}

    </div>

  </div>

</div>
    </section>
  );
}