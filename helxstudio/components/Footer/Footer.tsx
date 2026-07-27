"use client";

import {
  XLogoIcon,
  TelegramLogoIcon,
  InstagramLogoIcon,
  RedditLogoIcon,
  ArrowUp,
} from "@phosphor-icons/react";
import StudioLogo from "../extra/Studio-Logo";
import Link from "next/link";

const NAVLINKS = [
  {
    title: "NAVIGATION",
    links: [
      {
        label: "Work",
        url: "/work",
      },
      {
        label: "Pricing",
        url: "/pricing",
      },
      { label: "FAQs", url: "/faqs" },
    ],
  },
  {
    title: "GET IN TOUCH",
    links: [
      {
        label: "Contact",
        url: "#contact",
      },
      {
        label: "Book a call",
        url: "/book-call",
      },
      {
        label: "helxstudio@gmail.com",
        url: "mailto:helxstudio@gmail.com",
      },
    ],
  },
  {
    title: "LEGAL",
    links: [
      {
        label: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        label: "Terms of Service",
        url: "/terms-of-service",
      },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    icon: XLogoIcon,
    url: "https://twitter.com/helxstudio",
    label: "X",
  },
  {
    icon: TelegramLogoIcon,
    url: "https://t.me/helxstudio",
    label: "Telegram",
  },
  {
    icon: InstagramLogoIcon,
    url: "https://instagram.com/helxstudio",
    label: "Instagram",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative border-t border-neutral-200 bg-white">
      {/* Header with Logo and Scroll to Top */}
      <div className="flex items-center justify-between px-6 sm:px-8 md:px-12 py-8">
        <div className="p-3 bg-neutral-50 rounded-lg">
          <StudioLogo width={24} height={22} className="text-white" />
        </div>
        <button
          onClick={scrollToTop}
          className="p-3 bg-neutral-50 rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-neutral-700" weight="bold" />
        </button>
      </div>

      {/* Navigation Links Grid */}
      <div className="px-6 sm:px-8 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {NAVLINKS.map((section) => (
          <div key={section.title} className="flex flex-col gap-4">
            <h3 className="text-xs hover:underline-1 font-semibold text-neutral-500 tracking-wider uppercase">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.url}
                    className="text-base text-neutral-900 hover:underline-1  hover:text-neutral-600 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>


      {/* Copyright and Social Links */}
      <div className="border-t border-neutral-200 px-6 sm:px-8 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-600">
          © 2026 Helx Studio • All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => {
            const IconComponent = social.icon;
            return (
              <Link
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
                aria-label={social.label}
              >
                <IconComponent size={20} weight="bold" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;