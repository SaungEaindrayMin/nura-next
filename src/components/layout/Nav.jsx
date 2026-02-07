import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NAV_ITEMS = [
  { name: "SERVICES", path: "/services" },
  { name: "CASES", path: "/cases" },
  { name: "CONTACT US", path: "/contact" },
];

const Nav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const isServicesPage = location.pathname === "/services";
  const isContactPage = location.pathname === "/contact";

  const mode = isContactPage
    ? "contact"
    : isServicesPage
      ? "services"
      : isHomePage
        ? "home"
        : "default";

  const isActive = (path) => location.pathname === path;

  const linkBaseClass = "text-sm font-semibold uppercase transition-opacity";

  // Header background and text color based on page
  const headerStyle =
    mode === "contact"
      ? "bg-white text-accent-blue"
      : mode === "services"
        ? "bg-black text-[#00E3FE]"
        : mode === "home"
          ? "bg-transparent text-white"
          : "bg-secondary border-black text-black";

  const logoColor =
    mode === "contact"
      ? "text-accent-blue"
      : mode === "services"
        ? "text-[#00E3FE]"
        : mode === "home"
          ? "text-white"
          : "text-primary";

  const linkColor = (active) => {
    if (active) {
      return mode === "contact"
        ? "text-accent-blue"
        : mode === "services"
          ? "text-[#00E3FE]"
          : mode === "home"
            ? "text-white"
            : "text-primary";
    }

    return mode === "contact"
      ? "text-accent-blue/80 hover:opacity-70"
      : mode === "services"
        ? "text-[#00E3FE]/80 hover:opacity-70"
        : mode === "home"
          ? "text-white/80 hover:opacity-70"
          : "text-primary/80 hover:opacity-70";
  };

  const burgerColor =
    mode === "contact"
      ? "bg-accent-blue"
      : mode === "services"
        ? "bg-[#00E3FE]"
        : mode === "home"
          ? "bg-white"
          : "bg-primary";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-colors duration-300 font-grotesk ${headerStyle}`}
    >
      <div className="container-custom">
        <div className="flex h-[72px] md:h-[84px] items-center justify-between">
          <Link
            to="/"
            className={`text-3xl md:text-5xl tracking-tight transition-colors ${logoColor}`}
          >
            onenex
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`${linkBaseClass} ${linkColor(isActive(path))}`}
              >
                {name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-[2px] w-6 transition-all duration-300 ${burgerColor}
                ${open ? "rotate-45" : "-translate-y-2"}`}
            />
            <span
              className={`absolute h-[2px] w-6 transition-all duration-300 ${burgerColor}
                ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute h-[2px] w-6 transition-all duration-300 ${burgerColor}
                ${open ? "-rotate-45" : "translate-y-2"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden ${
            mode === "contact"
              ? "bg-secondary text-accent-blue"
              : mode === "services"
                ? "bg-black text-[#00E3FE]"
                : mode === "home"
                  ? "bg-transparent text-white"
                  : "bg-secondary text-black"
          }`}
        >
          <nav className="flex flex-col px-6 py-6 gap-6">
            {NAV_ITEMS.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={`${linkBaseClass} ${linkColor(isActive(path))}`}
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
