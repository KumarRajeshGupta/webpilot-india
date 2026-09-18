export default function Logo({ size = 180, className = '' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 60"
        width={size}
        height={(size * 60) / 200}
        role="img"
        aria-labelledby="t d"
      >
        <title id="t">RappTech</title>
        <desc id="d">RappTech — Build, Innovate, Grow</desc>

        <defs>
          <linearGradient id="rappGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>

        <text
          x="4"
          y="32"
          fontFamily="'Space Grotesk', 'DM Sans', sans-serif"
          fontWeight="700"
          fontSize="29"
          letterSpacing="-1.2"
          fill="url(#rappGradient)"
        >
          Rapp
          <tspan fill="#f8fafc">Tech</tspan>
        </text>

        <text
          x="6"
          y="48"
          fontFamily="'DM Sans', sans-serif"
          fontWeight="500"
          fontSize="6.5"
          letterSpacing="2"
          fill="#93c5fd"
        >
          BUILD | INNOVATE | GROW
        </text>
      </svg>
    </div>
  );
}
