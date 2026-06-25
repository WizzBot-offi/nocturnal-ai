import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/nocturnal/Hero";
import { Transition } from "@/components/nocturnal/Transition";
import { Conversations } from "@/components/nocturnal/Conversations";
import { FinalCTA } from "@/components/nocturnal/FinalCTA";
import { Footer } from "@/components/nocturnal/Footer";
import { Atmosphere } from "@/components/nocturnal/Atmosphere";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nocturnal — Some questions deserve better answers" },
      {
        name: "description",
        content:
          "Built for late-night curiosity, quick answers and meaningful conversations. Nocturnal is awake.",
      },
      { property: "og:title", content: "Nocturnal — Awake at 2 AM" },
      {
        property: "og:description",
        content:
          "A quiet intelligence built for late-night curiosity. Some answers are waiting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Atmosphere />
      <div className="relative z-10">
        <Hero />
        <Transition />
        <Conversations />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
