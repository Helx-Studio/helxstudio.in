"use client";
import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";

const FAQS = [
  {
    title: "How much does a website or store cost?",
    description:
      "It depends on the scope – a corporate website has a different budget than a store with integrations and wholesale logic. We provide a specific quote after the initial conversation. We divide payment into stages – you pay for the work you complete, not the entire project upfront. Before we begin, we work with you to determine when the project will pay off.",
  },
  {
    title: "Who owns the code - will I become addicted to you?",
    description:
      "The code, repository, and access are yours from day one—guaranteed by the contract. We hold nothing hostage.",
  },
  {
    title: "What if something breaks after implementation?",
    description:
      "We fix bugs in our code free of charge for 12 months after implementation. You won't have to pay for the same thing twice.",
  },
  {
    title: "If AI can build a website in a single prompt, why hire us?",
    description:
      "Yes, AI tools can produce a website from a prompt—but there's a critical difference between a website and a website that works for your business. Business Goals, Design Strategy, Technical Debt, Accountability, Ongoing Optimization, Complex Requirements provided by us.",
  },
  {
    title: "How long does the project take?",
    description:
      "It depends on the scope—usually from a few weeks to a few months. Thanks to AI, we can cut this time by up to half at each stage. We set the schedule at the beginning and write it down in the contract - along with the penalty for our delay.",
  },
];

const FaqsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="bg-linear-to-t from-[#d1d1d1]/30 to-white
 py-16 px-6"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-2 text-center">
          Have Questions?
        </h1>
        <p className="text-neutral-600 text-center mb-6">
          Everything you need to know before starting a project.
        </p>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <button
              key={index * Math.random()}
              onClick={() => toggleFaq(index)}
              className="w-full text-left"
            >
              <div className="bg-white group overflow-hidden  rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-colors duration-200">
                {/* Header */}
                <div className="flex relative overflow-hidden items-center justify-between p-6">
                  <div className="flex gap-2 items-center">
                    <p>
                      0{index + 1}
                      <span>.</span>
                    </p>
                    <h2 className="text-md group-hover:translate-x-2 transition-transform duration-300 ease-initial font-semibold text-neutral-900 pr-4">
                      {faq.title}
                    </h2>
                  </div>
                  <CaretDownIcon
                    className={`w-5 h-5 text-neutral-600 shrink-0 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Description */}
                <div
                  className={`grid grid-cols-1 transition-[grid-template-rows] duration-500 ease-out overflow-hidden ${
                    expandedIndex === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-neutral-700 leading-relaxed">
                      {faq.description}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsSection;
