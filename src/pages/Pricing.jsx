export default function Pricing() {
  const plans = [
    {
      name: "Beginner",
      price: "$29/mo",
      features: ["Basic training", "2 sessions/week", "Beginner techniques"],
    },
    {
      name: "Professional",
      price: "$59/mo",
      highlight: true,
      features: ["Full access", "Daily training", "Advanced techniques"],
    },
    {
      name: "Elite",
      price: "$99/mo",
      features: ["1-on-1 coaching", "Unlimited access", "Pro fight sessions"],
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Our <span className="text-red-500">Pricing</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Choose the plan that fits your intensity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl border backdrop-blur-md transition ${
              p.highlight
                ? "bg-red-600/20 border-red-500 shadow-lg shadow-red-500/20 scale-105"
                : "bg-white/5 border-white/10"
            }`}
          >
            <h3 className="text-2xl font-semibold">{p.name}</h3>
            <p className="text-4xl font-bold mt-4">{p.price}</p>

            <ul className="mt-6 space-y-2">
              {p.features.map((f, j) => (
                <li key={j} className="text-gray-300">
                  • {f}
                </li>
              ))}
            </ul>

            <button
              className={`w-full mt-8 py-3 rounded-xl font-semibold transition ${
                p.highlight
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
