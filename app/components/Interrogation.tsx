"use client";

import { useState } from "react";

import InspectorCat from "./InspectorCat";
import Question from "./Question";

const questions = [
  {
    question: "Who are you?",
    answer: "meow",
  },
  {
    question: "What are you doing here?",
    answer: "tate tomar ki...",
  },
  {
    question: "Why should I let you go?",
    answer: "karon ami tomar bou",
  },
  {
    question: "Why should I let you go?",
    answer: "karon ami tomar bou",
  },
];

type InterrogationProps = {
  onComplete: () => void;
};

export default function Interrogation({
  onComplete,
}: InterrogationProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [showWrongText, setShowWrongText] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const checkAnswer = (answer: string) => {
    const correctAnswer = questions[currentQuestion].answer;
    const userAnswer = answer.trim().toLowerCase();

    if (userAnswer === correctAnswer.toLowerCase()) {
      if (currentQuestion === questions.length - 1) {
        onComplete();
        return;
      }

      setCurrentQuestion((current) => current + 1);
      return;
    }

    if ("vibrate" in navigator) {
      navigator.vibrate([100, 50, 100]);
    }

    setIsWrong(true);

    setTimeout(() => {
      setShowWrongText(true);

      setTimeout(() => {
        setShowWrongText(false);
        setIsWrong(false);
      }, 3000);
    }, 300);
  };

  return (
    <main className="min-h-svh bg-white text-zinc-900 flex items-center justify-center px-5 py-8 sm:px-6">

      <div
        className={`w-full max-w-2xl text-center transition-transform duration-300 ease-out ${
          inputFocused ? "-translate-y-32 sm:translate-y-0" : "translate-y-0"
        }`}
      >

        <div className="relative flex justify-center mb-5 sm:mb-8">
          <div
            className={`transition-transform duration-300 ease-out ${
              isWrong ? "scale-[1.15]" : "scale-100"
            }`}
          >
            <InspectorCat videoSrc="/animations/inspector-hola.mp4" />
          </div>

          {showWrongText && (
            <div className="absolute -top-10 inset-0 pointer-events-none">
              <div className="px-6 py-3 rounded-2xl animate-wrong-text">
                <p className="text-2xl sm:text-3xl font-bold tracking-wide">
                  nope!
                </p>
              </div>
            </div>
          )}
        </div>

        <Question
          question={questions[currentQuestion].question}
          onNext={checkAnswer}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />

      </div>
    </main>
  );
}