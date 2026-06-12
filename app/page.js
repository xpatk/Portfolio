"use client";
import ProfileSection from "./components/ProfileSection";
import Navbar from "./components/Navbar";
import Apropos from "./components/Apropos";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
<div className="mx-auto mt-24 max-w-7xl px-8 md:px-10 lg:px-12 py-4">
        <ProfileSection />
        <AchievementSection />
        <Apropos />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
