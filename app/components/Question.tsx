"use client";

import { useState } from "react";

type QuestionProps = {
  question: string;
  onNext: (answer: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

export default function Question({
  question,
  onNext,
  onFocus,
  onBlur,
}: QuestionProps) {
  const [answer, setAnswer] = useState("");

  const handleNext = () => {
    if (!answer.trim()) return;

    onNext(answer);
    setAnswer("");
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-4xl font-semibold leading-tight mb-6 sm:mb-8 px-2">
        {question}
      </h2>

      <div className="w-full max-w-lg mx-auto">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleNext();
            }
          }}
          placeholder="Type your answer..."
          className="w-full max-w-lg border rounded-xl px-5 py-2 text-lg outline-none focus:border-[#6462AC] focus:ring-2 focus:ring-[#6462AC]/30 mb-6"
        />

        <button
          onClick={handleNext}
          disabled={!answer.trim()}
          className="w-full sm:w-auto px-8 py-2 rounded-2xl bg-[#6462AC] text-white font-medium active:scale-[0.98] hover:bg-[#55539A] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
        >
          Continue
        </button>
      </div>
    </div>
  );
}