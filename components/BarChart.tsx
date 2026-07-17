const DATA = [58, 74, 88, 47, 66, 60, 71, 76];

export default function BarChart() {
  const width = 320;
  const height = 140;
  const barGap = 10;
  const barWidth = (width - barGap * (DATA.length - 1)) / DATA.length;
  const max = Math.max(...DATA);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full"
      role="img"
      aria-label="Sample bar chart"
    >
      <line x1="0" y1={height - 1} x2={width} y2={height - 1} stroke="#1b2436" strokeWidth="1" />
      {DATA.map((value, i) => {
        const barHeight = (value / max) * (height - 16);
        const x = i * (barWidth + barGap);
        const y = height - barHeight - 1;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barWidth}
            height={barHeight}
            rx="3"
            fill="url(#barGradient)"
          />
        );
      })}
      <defs>
        <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
