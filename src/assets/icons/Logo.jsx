export default function Logo({ size = 42, showText = true, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer rounded shape */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="14"
          fill="url(#webpilot-gradient)"
        />

        {/* W / Path symbol */}
        <path
          d="M11 16L16.5 32L22 20.5L27.5 32L37 14"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pilot/navigation dot */}
        <circle cx="37" cy="14" r="3" fill="white" />

        <defs>
          <linearGradient
            id="webpilot-gradient"
            x1="5"
            y1="5"
            x2="43"
            y2="43"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2563EB" />
            <stop offset="0.65" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#22C55E" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark */}
      {showText && (
        <div className="flex items-baseline gap-1">
          <span className="font-bold tracking-tight text-white">WebPilot</span>

          <span className="text-sm font-semibold text-blue-400">India</span>
        </div>
      )}
    </div>
  );
}
