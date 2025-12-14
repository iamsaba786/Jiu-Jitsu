import React from "react";

function App() {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen items-center justify-between bg-black px-4 sm:px-6 lg:px-0 py-10 lg:py-0 overflow-hidden">
      {/* Card */}
      <div className="relative lg:left-40 w-full max-w-[420px] backdrop-blur-md px-6 sm:px-10 pt-8 pb-10 mb-14 lg:mb-0">
        {/* Title */}
        <h1 className="relative lg:-left-40 top-5 text-lg sm:text-xl lg:text-2xl font-semibold text-white/50 text-center lg:text-left">
          Transaction exception . . .
        </h1>

        {/* Circles wrapper */}
        <div className="relative mt-12 flex h-[320px] items-center justify-center">
          {/* Big Green Circle */}
          <div className="relative z-20 h-[190px] w-[190px] sm:h-[210px] sm:w-[210px] lg:h-[230px] lg:w-[230px] rounded-full shadow-[0_18px_24px_rgba(0,0,0,0.45)] bg-green-950/70">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="mb-1 text-3xl sm:text-4xl opacity-70 font-semibold">
                53
              </h2>
              <p className="text-sm">Failed validation</p>
            </div>
          </div>

          {/* Red Circle */}
          <div className="absolute left-[5%] sm:left-[10%] top-[150px] z-30 h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] lg:h-[170px] lg:w-[170px] shadow-[0_16px_22px_rgba(0,0,0,0.5)] rounded-full bg-red-950/80">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="mb-1 text-xl sm:text-2xl font-semibold">31</h2>
              <p className="text-sm">Declined</p>
            </div>
          </div>

          {/* Light Green Circle */}
          <div className="absolute right-[8%] sm:right-[15%] bottom-[-10px] z-40 h-[105px] w-[105px] sm:h-[120px] sm:w-[120px] lg:h-[125px] lg:w-[125px] rounded-full shadow-[0_14px_20px_rgba(0,0,0,0.35)] bg-green-100/70">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
              <h2 className="mb-1 text-lg sm:text-xl font-semibold">20</h2>
              <p className="text-sm">Offline</p>
            </div>
          </div>
        </div>

        {/* Link */}
        <button
          type="button"
          className="mt-16 sm:mt-20 text-sm font-medium text-orange-600 hover:underline block mx-auto lg:mx-0"
        >
          View exception report
        </button>
      </div>

      {/* Right Side Content */}
      <div className="px-4 sm:px-6 lg:px-0 lg:pr-10 text-center lg:text-left">
        <h1 className="mb-4 text-xl sm:text-2xl lg:text-3xl font-bold text-red-800">
          Transaction exception .
        </h1>
        <p className="text-gray-300 max-w-lg text-sm leading-relaxed mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
          nobis eligendi quasi, molestias omnis libero provident fuga? Itaque
          voluptatibus quis exercitationem dolore quae ducimus dicta ad.
        </p>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90vw] h-[1px] bg-white/30"></div>
    </div>
  );
}

export default App;
