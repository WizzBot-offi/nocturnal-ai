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
  { title: "Introducing Nocturnal | AI Assistant" },
  {
    name: "description",
    content:
      "Introducing Nocturnal, a modern AI assistant built for intelligent conversations, live web search, adaptive reasoning, image understanding, and meaningful interactions.",
  },
  {
    property: "og:title",
    content: "Introducing Nocturnal | AI Assistant",
  },
  {
    property: "og:description",
    content:
      "Introducing Nocturnal, a modern AI assistant built for intelligent conversations, live web search, adaptive reasoning, image understanding, and meaningful interactions.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://nocturnal-app.vercel.app",
  },
  {
    property: "og:site_name",
    content: "Nocturnal",
  },
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
  {
    name: "twitter:title",
    content: "Introducing Nocturnal | AI Assistant",
  },
  {
    name: "twitter:description",
    content:
      "Introducing Nocturnal, a modern AI assistant built for intelligent conversations, live web search, adaptive reasoning, image understanding, and meaningful interactions.",
  },
  {
    name: "author",
    content: "Wizz",
  },
  {
    name: "keywords",
    content:
      "Nocturnal AI, Nocturnal, AI Assistant, Artificial Intelligence, Chatbot, Live Web Search, Image Understanding, Voice AI, Multi-Model AI",
  },
],

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
