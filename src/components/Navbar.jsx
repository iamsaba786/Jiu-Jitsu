import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jiuImg from "../assets/imges/jiu.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  // Mobile login
  const handleMobileLogin = () => {
    setOpen(false);
    window.location.href = "/loginModal";
  };

  // scroll pe hide / show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // scroll down && thoda niche aa gaya ho tab hide
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        // scroll up ya top ke paas ho to show
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img
          src={jiuImg}
          alt="Essential Jiu Jitsu Logo"
          className="w-28 sm:w-32 h-10 sm:h-12 object-contain"
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 lg:gap-10 text-white text-base lg:text-lg font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="
          relative px-3 py-2
          text-white
          overflow-hidden
          rounded-lg
          transition-all duration-300 ease-out
          before:content-['']
          before:absolute before:inset-0
          before:scale-x-0 before:origin-left
          before:bg-orange-500
          before:transition-transform before:duration-300 before:ease-out
          hover:before:scale-x-100 
          hover:text-red-950
        "
              >
                <span className="relative z-10">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Login */}
        <Link
          to="/loginModal"
          className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 px-6 py-2.5 rounded-xl text-white font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Login
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl sm:text-3xl p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/80 backdrop-blur-xl text-white px-6 overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 py-6" : "max-h-0 py-0"
        }`}
      >
        <div className="space-y-4 pt-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block py-3 px-4 rounded-xl hover:text-orange-400 hover:bg-orange-500/20 transition-all duration-300 font-medium text-base"
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={handleMobileLogin}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-2xl w-full mt-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base h-12 flex items-center justify-center"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
