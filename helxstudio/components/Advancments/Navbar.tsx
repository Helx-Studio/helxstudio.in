import BookDemoButton from "./BookDemo";
const NavLinks = [
  {
    link: "/work",
    nav: "Our Work",
  },
  {
    link: "/work",
    nav: "Why Us",
  },
  {
    link: "/faqs",
    nav: "faqs",
  },
];
const Navbar = () => {
  return (
    <div className="w-full flex  border-b justify-between  border-neutral-300">
      <div className="flex">
        <div className="px-3 border-r border-neutral-300 py-3">
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
        </div>
        <div className="flex">
          {NavLinks.map((link) => {
            return (
              <div
                className="px-4 border-r border-neutral-300  py-3"
                id={link.link}
              >
                <span className="font-medium">{link.nav}</span>
              </div>
            );
          })}
        </div>
      </div>
      <BookDemoButton />
    </div>
  );
};

export default Navbar;
