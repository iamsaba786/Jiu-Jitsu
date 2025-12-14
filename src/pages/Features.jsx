import React from "react";
import { motion } from "framer-motion";

// Feature data, extended for a richer section
const FEATURE_DATA = [
  {
    id: 1,
    title: "Expert Trainers",
    description:
      "Learn from highly experienced Brazilian Jiu Jitsu black belts, specializing in competition-ready techniques and tailored instruction.",
    iconSvg: (
      // SVG for a trainer/person (focused on knowledge/skill)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 md:w-10 md:h-10 text-red-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.12a7.5 7.5 0 0 1-6.75 0m1.5-3.375a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm-2.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 19.12a7.5 7.5 0 0 1-1.5-3.75V12.75l4.5 4.5 1.5-1.5M19.5 19.12a7.5 7.5 0 0 0 1.5-3.75V12.75l-4.5 4.5-1.5-1.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 1.5v21"
        />
      </svg>
    ),
    delay: 0.1,
  },
  {
    id: 2,
    title: "Advanced Curriculum",
    description:
      "Master a curriculum covering modern combat sports and effective grappling exchanges, from stand-up to ground control.",
    iconSvg: (
      // SVG for a book/scroll (focused on curriculum/techniques)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 md:w-10 md:h-10 text-red-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5L12 3 7.5 10.5m0 0H4.5A2.25 2.25 0 0 0 2.25 12v4.5A2.25 2.25 0 0 0 4.5 18H19.5A2.25 2.25 0 0 0 21.75 16.5V12A2.25 2.25 0 0 0 19.5 9.75H16.5Z"
        />
      </svg>
    ),
    delay: 0.2,
  },
  {
    id: 3,
    title: "Supportive Community",
    description:
      "Become part of a strong, supportive, and passionate family. Enjoy open mat sessions, social events, and peer learning.",
    iconSvg: (
      // SVG for group/community (focused on support)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 md:w-10 md:h-10 text-red-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 10.5v-.933C18 7.59 16.27 6 14.28 6.002H9.72C7.73 6.002 6 7.59 6 9.567v.933M18 10.5a1.5 1.5 0 0 1 1.5 1.5v4.5a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5v-4.5a1.5 1.5 0 0 1 1.5-1.5H18ZM15.75 6.002a2.25 2.25 0 0 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM8.25 6.002a2.25 2.25 0 0 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
    delay: 0.3,
  },
  {
    id: 4,
    title: "Flexible Scheduling",
    description:
      "We offer classes throughout the day, including morning, noon, and evening sessions, perfectly fitting your busy lifestyle.",
    iconSvg: (
      // SVG for clock/schedule (focused on time/flexibility)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 md:w-10 md:h-10 text-red-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    delay: 0.4,
  },
];

// Feature Card component, structured for Framer Motion integration
const FeatureCard = ({ title, description, iconSvg, delay }) => {
  return (
    <motion.div
      // Framer Motion Props Placeholder:
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="group flex flex-col p-8 space-y-4 rounded-3xl border border-gray-700/50 
      bg-gray-800 transition-all duration-500 ease-out 
      hover:border-red-500 hover:shadow-2xl hover:shadow-red-900/40 
      transform hover:scale-[1.03] cursor-pointer 
      min-w-[300px] sm:min-w-0 feature-card-glow"
    >
      {/* Icon and Title */}
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-red-900/30 rounded-full border border-red-500/50 flex-shrink-0">
          {iconSvg}
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-red-300 transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-base leading-relaxed mt-2">
        {description}
      </p>
    </motion.div>
  );
};

// Main Features Section Component
const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Wrapped for potential Framer Motion fade-in */}
        <motion.div
          // Framer Motion Props Placeholder:
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-2">
            The Advantage
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Why Train at <span className="text-red-500">ContestUI</span>?
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Experience premium quality training and community designed for all
            skill levels, with world-class instruction.
          </p>
        </motion.div>

        {/* Features Grid (Responsive Layout) */}
        {/*         
          Desktop: 2x2 Grid (4 columns total)
          Mobile/Tablet: Swiper-like Horizontal scrollable list using scroll-snap
        */}
        <motion.div
          className="grid gap-10 
          lg:grid-cols-4 
          overflow-x-auto pb-6 custom-swiper-scrollbar"
        >
          {FEATURE_DATA.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              iconSvg={feature.iconSvg}
              delay={feature.delay} // Used for staggered animation with Framer Motion
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Custom CSS for Swiper-like Scrollbar & Animations */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .custom-swiper-scrollbar::-webkit-scrollbar {
          height: 6px;
        }

        /* Style the track */
        .custom-swiper-scrollbar::-webkit-scrollbar-track {
          background: #1f2937; /* Gray-800 */
          border-radius: 10px;
        }

        /* Style the handle */
        .custom-swiper-scrollbar::-webkit-scrollbar-thumb {
          background: #ef4444; /* Red-500 */
          border-radius: 10px;
        }

        /* Hide scrollbar for IE, Edge and Firefox on desktop (where grid applies) */
        @media (min-width: 1024px) {
          .custom-swiper-scrollbar {
            overflow-x: hidden;
            /* Disable standard scrollbar features for desktop grid */
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }

        /* On smaller screens (Simulate Swiper/Carousel behavior with scroll-snap) */
        @media (max-width: 1023px) {
          .custom-swiper-scrollbar {
            display: flex;
            gap: 2.5rem; /* Matches gap-10 */
            padding-bottom: 24px;
            padding-left: 20px; /* Offset for first item visibility */
            padding-right: 20px; /* Offset for last item visibility */
            scroll-snap-type: x mandatory;
            scroll-padding-left: 20px;
            scroll-padding-right: 20px;
          }
          /* Each card snaps into place */
          .custom-swiper-scrollbar > div {
            scroll-snap-align: start;
            flex-shrink: 0;
            width: 80vw; /* Card width on mobile */
            max-width: 320px; /* Cap size */
          }
        }

        /* Subtle Glow Effect on Card Hover */
        .feature-card-glow:hover {
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.4),
            0 10px 15px rgba(239, 68, 68, 0.2);
        }
      `}</style>

      {/* Placeholder Navigation (Minimal version for context) */}
      <header className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-lg">
        <h1 className="text-2xl font-black text-white">
          Contest<span className="text-red-500">UI</span>
        </h1>
        <div className="flex space-x-6 text-white hidden sm:flex">
          <a href="#" className="hover:text-red-500 transition-colors">
            Home
          </a>
          <a href="#" className="text-red-500 font-semibold transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            Pricing
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            Contact
          </a>
        </div>
        <button className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105">
          Join Now
        </button>
      </header>

      {/* The new, enhanced Features Section */}
      <FeaturesSection />

      {/* Placeholder Footer */}
      <footer className="bg-gray-900 text-center p-6 text-gray-500">
        &copy; {new Date().getFullYear()} ContestUI. All rights reserved.
      </footer>
    </div>
  );
}
