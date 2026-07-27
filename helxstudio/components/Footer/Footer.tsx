import {
  XLogoIcon,
  TelegramLogoIcon,
  InstagramLogoIcon,
  RedditLogoIcon,
} from "@phosphor-icons/react";

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
    title: "CONTACT",
    links: [
      {
        label: "Book a call",
        url: "/work",
      },
      {
        label: "helxstudio@gmail.com",
        url: "mail:https://helxstudio@gmail.com/",
      },
      { label: "Telegram", url: "https://t.me/helxstudio" },
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
        url: "terms-of-service",
      },
    ],
  },
];
const Footer = () => {
  return (
    <div className="w-full border-t border-neutral-200 flex flex-col gap-3">
      2222
    </div>
  );
};

export default Footer;
