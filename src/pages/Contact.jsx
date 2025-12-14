import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

/* -------------------------
   Small Contact Info Card
   ------------------------- */
const ContactCard = ({ iconSvg, title, content }) => (
  <motion.div
    className="flex items-start space-x-4 p-4 rounded-xl transition-colors hover:bg-red-900/10 border border-gray-800"
    whileHover={{ x: 5, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  >
    <div className="text-red-500 flex-shrink-0 mt-1">{iconSvg}</div>
    <div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-gray-400 text-sm">{content}</p>
    </div>
  </motion.div>
);

/* -------------------------
      CONTACT SECTION
   ------------------------- */
export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("Message Sent:", data);
    setIsSubmitted(true);
    setTimeout(() => {
      reset();
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
        >
          <motion.p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-2">
            24/7 Availability
          </motion.p>
          <motion.h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Get In <span className="text-red-500">Touch</span>
          </motion.h2>
          <motion.p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            We're here to answer all your questions about training, scheduling,
            or partnerships.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT SIDE – INFO CARDS */}
          <motion.div
            className="space-y-8 p-8 bg-gray-900 rounded-3xl h-full shadow-xl flex flex-col justify-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-extrabold text-white mb-4">
              Direct Information
            </h3>

            <div className="space-y-6">
              <ContactCard
                title="Email Address"
                content="info@contestui.com"
                iconSvg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 6V6a2 2 0 012-2h14a2 2 0 012 2v8"
                    />
                  </svg>
                }
              />

              <ContactCard
                title="Phone Number"
                content="+1 (555) 123-4567"
                iconSvg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.14a11.042 11.042 0 005.516 5.516l1.14-2.257"
                    />
                  </svg>
                }
              />

              <ContactCard
                title="Studio Location"
                content="123 Mat Lane, Grappling City, CA 90210"
                iconSvg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE – FORM */}
          <motion.div
            className="p-8 bg-gray-900 rounded-3xl shadow-xl border border-gray-700/50"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-3xl font-extrabold text-white mb-8">
              Send Us a Message
            </h3>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-4 mb-6 bg-green-900/50 border border-green-600 rounded-xl text-green-300 font-semibold"
                >
                  Message Sent Successfully! We'll be in touch soon.
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className={`w-full p-4 bg-gray-800 border ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  } rounded-xl outline-none focus:border-red-500 transition placeholder-gray-500 text-white`}
                  placeholder="Your Full Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">Name is required.</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className={`w-full p-4 bg-gray-800 border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } rounded-xl outline-none focus:border-red-500 transition placeholder-gray-500 text-white`}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    A valid email is required.
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows="5"
                  className={`w-full p-4 bg-gray-800 border ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } rounded-xl outline-none focus:border-red-500 transition placeholder-gray-500 text-white resize-none`}
                  placeholder="Tell us about your questions or suggestions..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    Please include a message.
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(239, 68, 68, 0.7)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-6 bg-red-600 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:bg-red-700"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
