"use client";

import { useState } from "react";

type QuestionProps = {
  question: string;
  onNext: (answer: string) => void;
};

export default function Question({
  question,
  onNext,
}: QuestionProps) {
  const [answer, setAnswer] = useState("");

  const handleNext = () => {
    if (!answer.trim()) return;

    onNext(answer);
    setAnswer("");
  };

  return (
    <div className="text-center">
      <p className="text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#6462AC] mb-3 sm:mb-4">
        Question
      </p>

      <h2 className="text-2xl sm:text-4xl font-semibold leading-tight mb-6 sm:mb-8 px-2">
        {question}
      </h2>

      <div className="w-full max-w-lg mx-auto">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleNext();
            }
          }}
          placeholder="Type your answer..."
          autoComplete="off"
          enterKeyHint="done"
          className="w-full border border-[#6462AC] rounded-xl px-5 py-4 text-base sm:text-lg outline-none focus:border-[#55539A] focus:ring-2 focus:ring-[#d6b477]/30 transition-all mb-4 sm:mb-6"
        />

        <button
          onClick={handleNext}
          disabled={!answer.trim()}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#6462AC] text-white font-medium active:scale-[0.98] hover:bg-[#55539A] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
        >
          Continue
        </button>
      </div>
    </div>
  );
}