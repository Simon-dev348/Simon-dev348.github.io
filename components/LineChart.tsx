const POINTS = [30, 45, 40, 60, 55, 78, 70, 90, 84, 100];

export default function LineChart() {
  const width = 320;
  const height = 140;
  const max = Math.max(...POINTS);
  const stepX = width / (POINTS.length - 1);

  const coords = POINTS.map((v, i) => {
    const x = i * stepX;
    const y = height - (v / max) * (height - 16) - 8;
    return `${x},${y}`;
  });

  const linePath = `M${coords.join(" L")}`;
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full"
      role="img"
      aria-label="Sample line chart"
    >
      <path d={areaPath} fill="url(#areaGradient)" opacity="0.35" />
      <path d={linePath} fill="none" stroke="url(#lineGradient)" strokeWidth="2.5" />
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}
