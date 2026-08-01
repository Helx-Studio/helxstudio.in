"use client";
import BookDemoButton from "./BookDemo";
import { Menu, Close, ChevronRight } from "pixelarticons/react";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const NavLinks = [
  {
    link: "/#work",
    hash: "#work",
    nav: "Our Work",
  },
  {
    link: "/#features",
    hash: "#features",
    nav: "Features",
  },
  {
    link: "/#pricing",
    hash: "#pricing",
    nav: "Pricing",
  },
  {
    link: "/#faqs",
    hash: "#faqs",
    nav: "FAQs",
  },
];

interface NavModalProps {
  isOpen: boolean;
  onClose: () => void;
  links: typeof NavLinks;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, hash: string, link: string) => void;
}

const NavModal = ({ isOpen, onClose, links, onNavClick }: NavModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ scale: 0.7, x: -10 }}
          animate={{ scale: 1, x: 0 }}
          exit={{ scale: 0.7, x: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-1000 bg-white flex flex-col justify-between overflow-y-auto"
        >
          <div>
            {/* Modal Header */}
            <div className="w-full flex border-b border-neutral-300 items-center justify-between">
              <Link
                href={"/"}
                onClick={onClose}
                className="px-3 border-r border-neutral-300 py-3"
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.44 20L10.88 14.08V0H5.28L0 5.92V20H5.44Z"
                    fill="#0A141E"
                  />
                  <path
                    d="M10.88 20V14.08L16.16 8H21.44V20H10.88Z"
                    fill="#0A141E"
                  />
                </svg>
              </Link>
              <div
                onClick={onClose}
                className="cursor-pointer text-neutral-700 active:scale-95 px-4 py-3 border-l border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                aria-label="Close navigation menu"
              >
                <Close className="w-5 h-5" />
              </div>
            </div>

            {/* Nav Links in Modal */}
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  onClick={(e) => {
                    onNavClick(e, link.hash, link.link);
                    onClose();
                  }}
                  className="w-full px-6 py-3 border-b border-neutral-200 flex items-center justify-between hover:bg-neutral-50 active:bg-neutral-100 transition-colors group"
                >
                  <span className="text-xl font-medium text-neutral-900 group-hover:translate-x-1 transition-transform">
                    {link.nav}
                  </span>
                  <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Modal Footer Call-to-Action */}
          <div className="p-2 border-t border-neutral-200 bg-neutral-50 flex justify-center">
            <BookDemoButton className="w-full justify-center bg-neutral-950 hover:bg-neutral-900 text-white py-4" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
    link: string
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        const lenis = window.lenis as { scrollTo: (target: HTMLElement, options?: { offset?: number }) => void } | undefined;
        if (lenis) {
          lenis.scrollTo(targetEl as HTMLElement, { offset: -80 });
        } else {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
        window.history.pushState(null, "", hash);
      }
    } else {
      router.push(link);
    }
  };

  return (
    <>
      {/* for desktop */}
      <div className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md lg:flex hidden border-b justify-between border-neutral-300">
        <div className="flex">
          <Link
            href={"/"}
            className="px-3 border-r border-neutral-300 py-3 hover:bg-neutral-100 transition-colors flex items-center"
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.44 20L10.88 14.08V0H5.28L0 5.92V20H5.44Z"
                fill="#0A141E"
              />
              <path
                d="M10.88 20V14.08L16.16 8H21.44V20H10.88Z"
                fill="#0A141E"
              />
            </svg>
          </Link>
          <div className="flex">
            {NavLinks.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                onClick={(e) => handleNavClick(e, link.hash, link.link)}
                className="px-4 border-r border-neutral-300 py-3 hover:bg-neutral-100 transition-colors flex items-center"
              >
                <span className="font-medium text-neutral-900">{link.nav}</span>
              </Link>
            ))}
          </div>
        </div>
        <BookDemoButton />
      </div>

      {/* for mobile */}
      <div className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md flex lg:hidden border-b justify-between border-neutral-300">
        <Link
          href={"/"}
          className="px-3 border-r border-neutral-300 py-3 flex items-center"
        >
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.44 20L10.88 14.08V0H5.28L0 5.92V20H5.44Z"
              fill="#0A141E"
            />
            <path d="M10.88 20V14.08L16.16 8H21.44V20H10.88Z" fill="#0A141E" />
          </svg>
        </Link>
        <BookDemoButton className="bg-white cursor-pointer text-neutral-900" />
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="px-3 active:scale-95 border-l border-neutral-300 py-3 flex items-center justify-center cursor-pointer hover:bg-neutral-100 transition-colors"
          aria-label="Open navigation menu"
        >
          <Menu />
        </div>
      </div>

      {/* Mobile Nav Modal Component */}
      <NavModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        links={NavLinks}
        onNavClick={handleNavClick}
      />
    </>
  );
};

export default Navbar;
