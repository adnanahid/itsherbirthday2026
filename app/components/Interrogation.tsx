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
    answer: "meow meow meow",
  },
  {
    question: "Why should I let you go?",
    answer: "meow meow",
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

  const checkAnswer = (answer: string) => {
    const correctAnswer = questions[currentQuestion].answer;
    const userAnswer = answer.trim().toLowerCase();

    // Correct answer
    if (userAnswer === correctAnswer.toLowerCase()) {
      if (currentQuestion === questions.length - 1) {
        onComplete();
        return;
      }

      setCurrentQuestion((current) => current + 1);
      return;
    }

    // -------------------------
    // WRONG ANSWER
    // -------------------------

    // Cat starts coming closer
    setIsWrong(true);

    // Wait for the 300ms zoom animation
    setTimeout(() => {
      setShowWrongText(true);

      // Keep WRONG ANSWER visible for 3 seconds
      setTimeout(() => {
        setShowWrongText(false);

        // Cat returns to original size
        setIsWrong(false);
      }, 3000);
    }, 300);
  };

  return (
    <main className="min-h-screen min-h-[100svh] bg-white text-zinc-900 flex items-center justify-center px-5 py-8 sm:px-6">
      <div className="w-full max-w-2xl text-center">

        {/* Inspector Cat */}
        <div className="relative flex justify-center mb-5 sm:mb-8">
          <div
            className={`transition-transform duration-300 ease-out ${
              isWrong ? "scale-[1.15]" : "scale-100"
            }`}
          >
            <InspectorCat videoSrc="/animations/inspector-hola.mp4" />
          </div>

          {/* Wrong Answer Text */}
          {showWrongText && (
            <div className="absolute -top-10 inset-0 pointer-events-none">
              <div className=" px-6 py-3 rounded-2xl animate-wrong-text">
                <p className="text-2xl sm:text-3xl font-bold tracking-wide">
                  nope! 
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Question Counter */}
        <p className="text-xs sm:text-sm text-zinc-400 mb-5 sm:mb-6">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        {/* Question */}
        <Question
          question={questions[currentQuestion].question}
          onNext={checkAnswer}
        />
      </div>
    </main>
  );
}