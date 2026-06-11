"use client";

const skills = [
  "Backend Development",
  "Java",
  "Spring Boot",
  "REST APIs",
  "SQL",
  "Microservices",
  "CI/CD",
  "GitHub Actions",
  "Web Development",
];

export default function AchievementSection() {
  return (
    <section className="py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                rounded-full
                border
                border-sky-500/20
                bg-white/[0.03]
                backdrop-blur-md
                px-6
                py-3
                text-gray-300
                text-sm
                md:text-base
                transition-all
                duration-300
                hover:border-sky-400
                hover:text-white
                hover:bg-white/[0.06]
                hover:-translate-y-1
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}