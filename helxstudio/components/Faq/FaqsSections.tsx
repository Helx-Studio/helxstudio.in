"use client";
import { useState } from "react";
import { BouncyAccordion } from "./bouncy-accordion";
import {
  CurrencyDollar,
  LockKey,
  Lifebuoy,
  Sparkle,
  ClockCountdown,
} from "@phosphor-icons/react";

export const FAQS = [
  {
    id: "pricing",
    icon: <CurrencyDollar className="w-4 h-4" />,
    title: "How much does a website or store cost?",
    description:
      "It depends on the scope—a corporate website has a different budget than a store with integrations and wholesale logic. We provide a specific quote after the initial conversation. We divide payment into stages, so you pay only for completed work instead of the full project upfront. Before we begin, we help determine when the project is likely to pay for itself.",
  },
  {
    id: "ownership",
    icon: <LockKey className="w-4 h-4" />,
    title: "Who owns the code? Will I be locked in?",
    description:
      "The code, repository, and all project access belong to you from day one, guaranteed by contract. We never hold your assets hostage.",
  },
  {
    id: "support",
    icon: <Lifebuoy className="w-4 h-4" />,
    title: "What if something breaks after launch?",
    description:
      "We fix bugs in our own code free of charge for 12 months after launch. You won't have to pay twice for the same issue.",
  },
  {
    id: "ai-vs-agency",
    icon: <Sparkle className="w-4 h-4" />,
    title: "If AI can build a website in one prompt, why hire us?",
    description:
      "AI can generate websites quickly, but generating code isn't the same as building a product that grows your business. We provide business strategy, UX, performance optimisation, scalable architecture, accountability, ongoing support, and custom solutions for complex requirements.",
  },
  {
    id: "timeline",
    icon: <ClockCountdown />,
    title: "How long does the project take?",
    description:
      "Project timelines depend on the scope, typically ranging from a few weeks to a few months. AI helps us accelerate delivery, often reducing development time significantly. We define the timeline upfront in the contract, including penalties if we miss agreed deadlines.",
  },
];

const FaqsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mt-6 mx-auto">
      <h1 className="text-4xl font-bold text-neutral-900 mb-2 text-center">
        Have Questions?
      </h1>
      <p className="text-neutral-600 text-center mb-6">
        Everything you need to know before starting a project.
      </p>
      <div className="flex min-h-96 w-full items-center ">
        <div className="w-full max-w-2xl px-2 lg:h-[400px] md:h-[450px] h-[480px]">
          <BouncyAccordion items={FAQS} defaultValue="calendar" />
        </div>
      </div>
    </div>
  );
};

export default FaqsSection;
