import React from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/imges/bg.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full h-screen sm:h-[85vh] lg:h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover sm:bg-contain lg:bg-cover"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>

      {/* LEFT DOT INDICATORS */}
      <div className="absolute left-4 sm:left-6 lg:left-9 xl:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 lg:gap-4 z-20 hidden sm:flex">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-lg"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-white shadow-md"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-white shadow-md"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-4 sm:gap-5 lg:gap-6 items-center lg:items-start text-center lg:text-left">
        {/* Top Text */}
        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-wider font-medium uppercase px-2">
          BOOK YOUR FIRST INTRODUCTION TO
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-tight lg:leading-[0.9] tracking-tight">
          BRAZILIAN <br className="block sm:hidden lg:block" />
          <span className="text-red-500 block lg:inline">JIU JITSU</span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-300 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl text-xs sm:text-sm md:text-base leading-relaxed px-2 sm:px-4">
          Encourage buyers to choose your Gig by featuring a variety of your
          work. Show your passion, skills, and experience to build trust and
          attract more students.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/book")}
          className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg md:rounded-xl text-sm sm:text-base md:text-lg font-bold tracking-wide hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 w-fit min-w-[140px] sm:min-w-[160px] md:min-w-[180px] mx-auto lg:mx-0 group"
        >
          BOOK NOW
          <FaArrowRight className="inline ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* RIGHT SIDE CENTER ARROW */}
      <div className="absolute right-4 sm:right-6 md:right-10 lg:right-12 xl:right-16 top-1/2 -translate-y-1/2 text-white text-lg sm:text-xl md:text-2xl z-20 hidden md:flex hover:scale-110 transition-all duration-300">
        <FaArrowRight className="hover:text-red-400 cursor-pointer drop-shadow-lg" />
      </div>

      {/* BOTTOM WHITE LINE */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 w-[90vw] sm:w-[85vw] lg:w-[75vw] xl:w-[70vw] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

      {/* Mobile Dots (Bottom Center) */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20 sm:hidden">
        <div className="w-2 h-2 rounded-full bg-white/80 shadow-lg"></div>
        <div className="w-2 h-2 rounded-full border-2 border-white/60 shadow-md"></div>
        <div className="w-2 h-2 rounded-full border-2 border-white/60 shadow-md"></div>
      </div>
    </section>
  );
}
