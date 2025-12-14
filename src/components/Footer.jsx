// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import jiuImg from "../assets/imges/jiu.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        {/* Left: Logo + text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
            className="flex items-center gap-2"
          >
            {/* Logo */}
            <img
              src={jiuImg}
              alt="Essential Jiu Jitsu Logo"
              className="w-32 h-12 "
            />
          </motion.div>
          <p className="mt-3 max-w-xs text-xs text-gray-400">
            Modern landing pages for combat sports, gyms, and academies. Build
            trust, show your skills, and convert more students.
          </p>
        </div>

        {/* Center: Nav links */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.4 } }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-300"
        >
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition hover:text-red-500">
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Right: Social + copyright */}
        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-xs text-gray-300 transition hover:border-red-500 hover:bg-red-600 hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-xs text-gray-300 transition hover:border-red-500 hover:bg-red-600 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-xs text-gray-300 transition hover:border-red-500 hover:bg-red-600 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-xs text-gray-300 transition hover:border-red-500 hover:bg-red-600 hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ContestUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
