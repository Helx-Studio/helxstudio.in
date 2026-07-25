"use client";

import { useState } from "react";
import {
  Globe,
  DeviceMobile,
  FileText,
  CloudArrowUp,
  Lightning,
  MagnifyingGlass,
  Stack,
  EnvelopeSimple,
  CreditCard,
  ShieldCheck,
  ChartLineUp,
  Robot,
  Gear,
  Target,
  Headset,
  WhatsappLogo,
  CheckCircle,
  FlagBanner,
  Network,
} from "@phosphor-icons/react";

function PricingSection() {
  const [currency, setCurrency] = useState("USD");

  const plans = [
    {
      label: "BASIC",
      price: { USD: "$49", INR: "₹4,999" },
      description:
        "A focused one-page site for products, startups, and campaigns.",
      featured: false,
      features: [
        { text: "Responsive design", icon: DeviceMobile },
        { text: "Single Page", icon: FileText },
        { text: "Hosting Setup", icon: CloudArrowUp },
        { text: "Speed optimization", icon: Lightning },
        { text: "SEO basic", icon: MagnifyingGlass },
        { text: "Delivery in 2-4 Days", icon: FlagBanner },
      ],
    },
    {
      label: "Growth",
      price: { USD: "$299", INR: "₹24,999" },
      description:
        "A complete website built to convert visitors into customers.",
      featured: false,
      features: [
        { text: "10+ Pages", icon: Stack },
        { text: "Automated email follow-ups", icon: EnvelopeSimple },
        { text: "Payment Integration", icon: CreditCard },
        { text: "1-year code guarantee", icon: ShieldCheck },
        { text: "Advance SEO/Analytics", icon: ChartLineUp },
        { text: "Delivery in 2-3 weeks", icon: FlagBanner },
      ],
    },
    {
      label: "",
      price: { USD: "Custom", INR: "Custom" },
      priceNote: "Tailored to your project scope",
      description: "Design intuitive digital products from idea to launch.",
      featured: true,
      features: [
        { text: "Custom AI Agents/Chatbots", icon: Robot },
        { text: "Workflow Automation", icon: Gear },
        { text: "Product Strategy", icon: Target },
        { text: "Ongoing Support & Iteration", icon: Headset },
        { text: "Whatsapp Automation", icon: WhatsappLogo },
        { text: "Calling Agents", icon: Network },
      ],
    },
  ];

  return (
    <section className=" border-y flex items-center flex-col py-4 border-neutral-200">
      {/* Header */}

      <h2 className="lg:text-3xl pt-6 text-center text-2xl font-bold text-neutral-900 leading-8">
        Simple, transparent pricing <br />
        <span className="text-neutral-500"> that helps you scale.</span>
      </h2>
      <p className="text-sm text-center mt-2 text-neutral-500 max-w-sm mx-auto">
        Select any plan that suits you and kick start your journey with us
      </p>

      {/* Currency toggle */}
      <div className="mt-6 inline-flex items-center bg-neutral-100 p-1">
        <button
          onClick={() => setCurrency("USD")}
          className={`px-4 py-1.5 text-sm font-medium cursor-pointer transition-all ${
            currency === "USD"
              ? "bg-white text-neutral-900 shadow-sm"
              : "text-neutral-500 hover:text-neutral-700"
          }`}
        >
          USD
        </button>
        <button
          onClick={() => setCurrency("INR")}
          className={`px-4 py-1.5 text-sm font-medium cursor-pointer transition-all ${
            currency === "INR"
              ? "bg-white text-neutral-900 shadow-sm"
              : "text-neutral-500 hover:text-neutral-700"
          }`}
        >
          INR
        </button>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-6 py-12  border-neutral-200">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className={`relative bg-white hover:scale-103 transition-all duration-200  overflow-hidden border 
             border-neutral-200
              }`}
            >
              <div className="absolute w-2 h-2 border-t border-l   border-neutral-400 top-0 left-0 " />
              <div className="absolute w-2 h-2 border-t border-r  border-neutral-400 top-0  right-0 " />
              <div className="absolute w-2 h-2  border-b  border-r  border-neutral-400 right-0 bottom-0" />
              <div className="absolute w-2 h-2  border-b border-l   border-neutral-400  left-0  bottom-0" />

              {/* Dotted pattern background at top */}
              <div className="relative px-6 pt-6 pb-5 overflow-hidden">
                <span
                  className={`relative text-xs font-semibold tracking-wide ${
                    plan.featured ? "text-yellow-500" : "text-neutral-500"
                  }`}
                >
                  {plan.label}
                </span>

                <div className="relative flex flex-col mt-2">
                  <span className="text-4xl font-bold text-neutral-900">
                    {plan.price[currency]}
                  </span>
                  {plan.featured && plan.priceNote && (
                    <span className="text-xs text-neutral-500 mt-1.5">
                      {plan.priceNote}
                    </span>
                  )}
                </div>

                <p className="relative text-sm text-neutral-500 mt-3 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Button */}
              <div className="px-6">
                {plan.featured ? (
                  <button
                    className={`w-full group flex items-center active:scale-96 bg-neutral-900 border border-neutral-900 hover:bg-neutral-800 text-white cursor-pointer relative justify-center gap-1.5 text-sm font-medium  py-2.5 transition-all
                     `}
                  >
                    Let's Talk
                  </button>
                ) : (
                  <button
                    className={`w-full group flex items-center active:scale-96 bg-white border border-neutral-200 hover:text-orange-600 hover:bg-orange-50 text-neutral-900 cursor-pointer relative justify-center gap-1.5 text-sm font-medium  py-2.5 transition-all
                     `}
                  >
                    <div className="absolute w-2 h-2 group-hover:border-orange-400 border-t border-l transition-all duration-200 bezier(0.4, 0, 1, 1) group-hover:-left-1   group-hover:-top-1   border-neutral-400 top-0 left-0 " />
                    <div className="absolute w-2 h-2 group-hover:border-orange-400 border-t border-r group-hover:-right-1    transition-all duration-200 bezier(0.4, 0, 1, 1)  group-hover:-top-1  border-neutral-400 top-0  right-0 " />
                    <div className="absolute w-2 h-2 group-hover:border-orange-400  border-b  border-r border-neutral-400  transition-all duration-200 bezier(0.4, 0, 1, 1)  right-0 group-hover:-right-1 group-hover:-bottom-1 bottom-0" />
                    <div className="absolute w-2 h-2 group-hover:border-orange-400  border-b border-l   border-neutral-400  transition-all duration-200 bezier(0.4, 0, 1, 1)  group-hover:-left-1 group-hover:-bottom-1  left-0  bottom-0" />
                    Book an Call
                  </button>
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-neutral-100 mt-6" />

              {/* What's included */}
              <div className="px-6 py-5">
                <p className="text-xs font-medium text-neutral-700 mb-3">
                  What&apos;s included:
                </p>
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => {
                    const IconComponent = feature.icon || CheckCircle;
                    return (
                      <li
                        key={feature.text}
                        className="flex items-center gap-2.5 text-sm text-neutral-600 font-medium"
                      >
                        <span
                          className={`flex items-center justify-center w-5 h-5 rounded-md shrink-0 ${
                            plan.featured
                              ? "bg-neutral-100 text-neutral-700"
                              : "bg-neutral-100 text-neutral-700"
                          }`}
                        >
                          <IconComponent
                            className="w-3.5 h-3.5"
                            weight="bold"
                          />
                        </span>

                        {feature.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
