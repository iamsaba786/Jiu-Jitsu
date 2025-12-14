import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function BookNow() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Booking Request:", data);
    reset();
  };

  return (
    <section className="min-h-screen bg-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10">
      {/* TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 sm:mb-12 md:mb-14 max-w-3xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Book Your <span className="text-red-500">Training Session</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2 sm:px-0">
          Choose your slot, submit your info, and get started with elite
          training.
        </p>
      </motion.div>

      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start max-w-7xl mx-auto">
        {/* LEFT — SWIPER GALLERY */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full order-1 lg:order-2"
        >
          <div className="swiper-container">
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
            >
              <SwiperSlide>
                <img
                  src="https://images.pexels.com/photos/4761797/pexels-photo-4761797.jpeg"
                  className="w-full h-full object-cover"
                  alt="Training"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://images.pexels.com/photos/8411309/pexels-photo-8411309.jpeg"
                  className="w-full h-full object-cover"
                  alt="Training"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://images.pexels.com/photos/7045370/pexels-photo-7045370.jpeg"
                  className="w-full h-full object-cover"
                  alt="Training"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <p className="text-gray-400 text-center mt-3 sm:mt-4 text-xs sm:text-sm px-2">
            *Swipe to view training sessions preview
          </p>
        </motion.div>

        {/* RIGHT — BOOKING FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.4, duration: 0.6 },
          }}
          className="w-full order-2 lg:order-1 max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 backdrop-blur-md shadow-2xl"
        >
          <h2 className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl font-semibold text-white text-center lg:text-left">
            Quick booking
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 sm:space-y-4 text-xs sm:text-sm"
            noValidate
          >
            <div>
              <label className="mb-1 sm:mb-2 block text-gray-300 font-medium">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full rounded-lg sm:rounded-md border border-white/10 bg-black/40 px-3 sm:px-4 py-2.5 sm:py-2 text-xs sm:text-sm text-white outline-none transition-all duration-200 focus:border-red-500 focus:bg-black/50"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">Name is required.</p>
              )}
            </div>

            <div>
              <label className="mb-1 sm:mb-2 block text-gray-300 font-medium">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full rounded-lg sm:rounded-md border border-white/10 bg-black/40 px-3 sm:px-4 py-2.5 sm:py-2 text-xs sm:text-sm text-white outline-none transition-all duration-200 focus:border-red-500 focus:bg-black/50"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">Email is required.</p>
              )}
            </div>

            <div>
              <label className="block mb-2 sm:mb-3 text-sm sm:text-base text-gray-300 font-medium">
                Select Time Slot
              </label>
              <select
                {...register("slot", { required: true })}
                className="w-full p-2.5 sm:p-3 bg-black/50 rounded-lg sm:rounded-md border border-white/10 text-white text-xs sm:text-sm outline-none focus:border-red-500 focus:bg-black/60 appearance-none bg-no-repeat bg-right pr-10"
              >
                <option value="">Choose a slot</option>
                <option value="6am-8am">6:00 AM – 8:00 AM</option>
                <option value="10am-12pm">10:00 AM – 12:00 PM</option>
                <option value="5pm-7pm">5:00 PM – 7:00 PM</option>
              </select>
              {errors.slot && (
                <p className="text-red-500 text-xs mt-1">Slot is required.</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-3 sm:mt-4 w-full rounded-lg sm:rounded-md bg-red-600 px-4 sm:px-6 py-2.5 sm:py-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-red-500 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Confirm booking
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
