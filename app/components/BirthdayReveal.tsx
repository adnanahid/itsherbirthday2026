"use client";

import TimeCount from "./TimeCount";

export default function BirthdayReveal() {
  return (
    <main className="relative min-h-screen min-h-[100svh] overflow-hidde text-zinc-900 flex items-center justify-center px-5 py-10 sm:px-6">
        <div className="mb-4 sm:mb-6">
          <TimeCount videoSrc="/animations/hbd.mp4" />
        </div>
    </main>
  );
}