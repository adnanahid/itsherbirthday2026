"use client";

import { useState } from "react";
import InspectorCat from "./components/InspectorCat";
import Interrogation from "./components/Interrogation";
import BirthdayReveal from "./components/BirthdayReveal";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (completed) {
    return <BirthdayReveal />;
  }

  if (started) {
    return <Interrogation onComplete={() => setCompleted(true)} />;
  }

  return (
    <main className="min-h-svh bg-white text-zinc-900 flex items-center justify-center px-5 py-8 sm:px-6">
      <div className="w-full max-w-2xl text-center">
        <InspectorCat videoSrc="/animations/inspector-hola.mp4" />

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">
          Hey, sexy.
        </h1>

        <p className="text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#6462AC] mb-3 sm:mb-4">
          I&apos;m inspector Hola
        </p>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10">
          You are under arrest.
          For security purposes, I need to ask you
          <br className="hidden sm:block" />
          a few questions first.
        </p>

        <button
          onClick={() => setStarted(true)}
          className="w-full sm:w-auto px-8 py-2 rounded-2xl bg-[#6462AC] text-white font-medium active:scale-[0.98] hover:bg-[#55539A] transition-all duration-200"
        >
          Begin Interrogation
        </button>
      </div>
    </main>
  );
}