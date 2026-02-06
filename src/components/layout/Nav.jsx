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
  const isServicesPage = location.pathname === "/services";

  const isActive = (path) => location.pathname === path;

  const linkBaseClass = "text-sm font-semibold uppercase transition-opacity";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999]  transition-colors duration-300 font-grotesk ${
        isServicesPage
          ? "bg-black  text-[#00E3FE]"
          : "bg-secondary border-black text-black"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-[72px] md:h-[84px] items-center justify-between">
          <Link
            to="/"
            className={`text-3xl md:text-5xl tracking-tight transition-colors ${
              isServicesPage ? "text-[#00E3FE]" : "text-primary"
            }`}
          >
            onenex
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`
                  ${linkBaseClass}
                  ${
                    isActive(path)
                      ? isServicesPage
                        ? "text-[#00E3FE]"
                        : "text-primary"
                      : isServicesPage
                      ? "text-[#00E3FE]/80 hover:opacity-70"
                      : "text-primary/80 hover:opacity-70"
                  }
                `}
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
              className={`absolute h-[2px] w-6 transition-all duration-300 ${
                isServicesPage ? "bg-[#00E3FE]" : "bg-primary"
              }
                ${open ? "rotate-45" : "-translate-y-2"}`}
            />
            <span
              className={`absolute h-[2px] w-6 transition-all duration-300 ${
                isServicesPage ? "bg-[#00E3FE]" : "bg-primary"
              }
                ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute h-[2px] w-6 transition-all duration-300 ${
                isServicesPage ? "bg-[#00E3FE]" : "bg-primary"
              }
                ${open ? "-rotate-45" : "translate-y-2"}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`md:hidden ${
            isServicesPage ? "bg-black text-[#00E3FE]" : "bg-secondary text-black"
          }`}
        >
          <nav className="flex flex-col px-6 py-6 gap-6">
            {NAV_ITEMS.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={`
                  ${linkBaseClass}
                  ${
                    isActive(path)
                      ? "text-primary"
                      : isServicesPage
                      ? "text-[#00E3FE]/80"
                      : "text-primary/80"
                  }
                `}
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
