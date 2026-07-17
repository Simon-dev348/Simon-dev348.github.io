type GlyphVariant = "pipeline" | "integration" | "security" | "marketplace" | "procure-to-pay" | "dashboard";

const NODE_STYLE = {
  fill: "#0d121e",
  stroke: "url(#nodeStroke)",
};

function Defs() {
  return (
    <defs>
      <linearGradient id="nodeStroke" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
      <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  );
}

function Node({ x, y, w, h, label }: { x: number; y: number; w: number; h: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={NODE_STYLE.fill} stroke={NODE_STYLE.stroke} strokeWidth="1.5" />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        fontSize="11"
        fill="#e7eaf2"
        fontFamily="sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

export default function SystemGlyph({ variant }: { variant: GlyphVariant }) {
  const width = 320;
  const height = 140;

  if (variant === "pipeline") {
    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" role="img" aria-label="Queue-based backend pipeline">
        <Defs />
        <path d="M78 70 H120" stroke="url(#lineStroke)" strokeWidth="2" fill="none" />
        <path d="M198 70 H240" stroke="url(#lineStroke)" strokeWidth="2" fill="none" />
        <Node x={16} y={45} w={62} h={50} label="API" />
        <Node x={120} y={45} w={78} h={50} label="BullMQ" />
        <Node x={240} y={45} w={64} h={50} label="DB" />
      </svg>
    );
  }

  if (variant === "integration") {
    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" role="img" aria-label="External system integration">
        <Defs />
        <path d="M100 70 C 140 40, 180 100, 220 70" stroke="url(#lineStroke)" strokeWidth="2" fill="none" strokeDasharray="4 5" />
        <Node x={20} y={45} w={80} h={50} label="Service" />
        <Node x={220} y={45} w={80} h={50} label="Gov API" />
      </svg>
    );
  }

  if (variant === "marketplace") {
    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" role="img" aria-label="Geo-located property marketplace">
        <Defs />
        <path d="M112 72 H150" stroke="url(#lineStroke)" strokeWidth="2" fill="none" />
        <Node x={150} y={45} w={90} h={50} label="Listings" />
        <g>
          <path
            d="M96 40 C112 40 124 52 124 68 C124 86 96 108 96 108 C96 108 68 86 68 68 C68 52 80 40 96 40 Z"
            fill="#0d121e"
            stroke="url(#nodeStroke)"
            strokeWidth="1.5"
          />
          <circle cx="96" cy="66" r="8" fill="none" stroke="url(#lineStroke)" strokeWidth="2" />
        </g>
      </svg>
    );
  }

  if (variant === "procure-to-pay") {
    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" role="img" aria-label="Purchase request, approval, and payment flow">
        <Defs />
        <path d="M92 70 H128" stroke="url(#lineStroke)" strokeWidth="2" fill="none" />
        <path d="M208 70 H244" stroke="url(#lineStroke)" strokeWidth="2" fill="none" />
        <Node x={16} y={45} w={76} h={50} label="Request" />
        <Node x={128} y={45} w={80} h={50} label="Approve" />
        <Node x={244} y={45} w={60} h={50} label="Pay" />
        <path
          d="M156 66 L166 76 L182 58"
          fill="none"
          stroke="url(#lineStroke)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="274" cy="60" r="9" fill="none" stroke="url(#nodeStroke)" strokeWidth="1.5" />
        <text x="274" y="64" textAnchor="middle" fontSize="10" fill="#e7eaf2" fontFamily="sans-serif">
          $
        </text>
      </svg>
    );
  }

  if (variant === "dashboard") {
    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" role="img" aria-label="Procurement tracking dashboard">
        <Defs />
        {["Requests", "Approvals", "Vendors"].map((label, i) => {
          const colW = 92;
          const gap = 12;
          const x = 12 + i * (colW + gap);
          const barHeights = [26, 34, 18];
          return (
            <g key={label}>
              <rect x={x} y={28} width={colW} height={92} rx="7" fill="#0d121e" stroke="url(#nodeStroke)" strokeWidth="1.2" />
              <text x={x + colW / 2} y={42} textAnchor="middle" fontSize="9" fill="#8b96ab" fontFamily="sans-serif">
                {label}
              </text>
              {barHeights.map((h, j) => (
                <rect
                  key={j}
                  x={x + 10}
                  y={50 + j * 22}
                  width={colW - 20}
                  height={h > 22 ? 14 : h}
                  rx="4"
                  fill="url(#lineStroke)"
                  opacity={0.85 - j * 0.15}
                />
              ))}
            </g>
          );
        })}
      </svg>
    );
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" role="img" aria-label="Authentication and access control">
      <Defs />
      <path
        d="M160 30 L200 45 V80 C200 105 182 120 160 128 C138 120 120 105 120 80 V45 Z"
        fill="#0d121e"
        stroke="url(#nodeStroke)"
        strokeWidth="2"
      />
      <circle cx="160" cy="72" r="9" fill="none" stroke="url(#lineStroke)" strokeWidth="2" />
      <path d="M160 81 V95" stroke="url(#lineStroke)" strokeWidth="2" />
    </svg>
  );
}