import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// LoginModal Component (same as yours - FIXED mobile animation)
const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
    onClose();
  };

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.1, duration: 0.3, type: "spring", stiffness: 300 },
    },
    exit: { scale: 0.7, opacity: 0, transition: { duration: 0.2 } },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 z-[9999] w-full h-full"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4 z-[10000]"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-md mx-4 relative border border-gray-700 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Rest of your modal content - SAME */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl p-1 rounded-full hover:bg-gray-800"
              >
                ✕
              </button>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center mb-4 sm:mb-6">
                Welcome Back<span className="text-red-500">!</span>
              </h2>
              <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm">
                Sign in to continue your Jiu Jitsu journey.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded bg-gray-700"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-xs sm:text-sm text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-xs sm:text-sm font-medium text-red-500 hover:text-red-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold"
                >
                  Sign In
                </motion.button>
              </form>
              <p className="mt-6 text-center text-gray-400 text-xs sm:text-sm">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-red-500 hover:text-red-400"
                >
                  Sign Up
                </a>
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <header className="flex flex-col sm:flex-row flex-wrap justify-between items-center px-4 sm:px-6 py-4 bg-gray-900 shadow-lg gap-4 sm:gap-0">
        <h1 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-0">
          Contest<span className="text-red-500">UI</span>
        </h1>

        <nav className="hidden md:flex space-x-6 text-white w-auto">
          <a href="#" className="hover:text-red-500 transition-colors py-2">
            Home
          </a>
          <a href="#" className="hover:text-red-500 transition-colors py-2">
            Features
          </a>
          <a href="#" className="hover:text-red-500 transition-colors py-2">
            Pricing
          </a>
          <a href="#" className="hover:text-red-500 transition-colors py-2">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center flex-grow min-h-[60vh]">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mt-12 sm:mt-16 px-4">
          Unleash Your Inner{" "}
          <span className="text-red-500 block sm:inline">Warrior</span>
        </h2>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto px-4">
          Master the art of Brazilian Jiu Jitsu with expert trainers and a
          supportive community.
        </p>
        {/* 👈 REMOVED EXTRA LOGIN BUTTON */}
      </main>

      {/* login button */}
      <button
        onClick={() => setIsLoginModalOpen(true)}
        className="relative px-4 sm:px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto min-w-[120px] text-sm sm:text-base shadow-lg hover:shadow-xl mt-2 mb-8 flex items-center justify-center mx-auto"
      >
        Login
      </button>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      <footer className="bg-gray-900 text-center p-4 sm:p-6 text-gray-500 mt-auto text-xs sm:text-base border-t border-gray-800">
        &copy; {new Date().getFullYear()} ContestUI. All rights reserved.
      </footer>
    </div>
  );
}
