import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu after click
    }
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-gray-900 cursor-pointer"
        >
          Market<span className="text-blue-600">Advisor</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <button onClick={() => scrollToSection("home")} className="hover:text-blue-600 transition">
            Home
          </button>
          <button onClick={() => scrollToSection("features")} className="hover:text-blue-600 transition">
            Features
          </button>
          <button onClick={() => scrollToSection("pricing")} className="hover:text-blue-600 transition">
            Pricing
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <NavLink to={'/market'}
            onClick={() => scrollToSection("pricing")}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-gray-700 font-medium">
          <button onClick={() => scrollToSection("home")} className="block hover:text-blue-600">
            Home
          </button>
          <button onClick={() => scrollToSection("features")} className="block hover:text-blue-600">
            Features
          </button>
          <button onClick={() => scrollToSection("how-it-works")} className="block hover:text-blue-600">
            How it Works
          </button>
          <button onClick={() => scrollToSection("pricing")} className="block hover:text-blue-600">
            Pricing
          </button>

          <button
            onClick={() => scrollToSection("pricing")}
            className="w-full mt-2 px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
