"use client";
import { questions } from "@/components/ProductData/ProductData";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const PeopleAskQuestion: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-custom-border mb-10 mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center   text-[#6441C2E5] font-mono ">
        𝙿𝚎𝚘𝚙𝚕𝚎 𝙰𝚕𝚜𝚘 𝙰𝚜𝚔
      </h2>
      <div className="space-y-4">
        {questions.map(({ id, question, answer }) => (
          <div
            key={id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <button
              className="flex justify-between items-center w-full text-left text-gray-800 font-medium"
              onClick={() => toggleQuestion(id)}
            >
              <span className="font-semibold">{question}</span>
              {activeQuestion === id ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {activeQuestion === id && (
              <p className="mt-6 text-[#5524dde5] font-mono font-semibold">
                {answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PeopleAskQuestion;
