import React from 'react';

interface OysterLogoProps {
  className?: string;
  light?: boolean; // if true, renders white/cream for dark backgrounds, else dark charcoal/gold
  height?: number | string;
  showSub?: boolean; // toggle double line subtitle "PURE VEG ROOFTOP RESTRO & BAR"
}

export default function OysterLogo({
  className = "",
  light = true,
  height = "52px",
  showSub = true
}: OysterLogoProps) {
  // Brand color variables
  const textColor = light ? "#F5F2ED" : "#1A1A1A";
  const accentColor = "#C5A059"; // warm gold/bronze
  const vegColor = "#129034"; // professional Indian green-dot veg indicator

  return (
    <span className={`inline-flex items-center ${className}`} id="oyster-logo-wrapper">
      <svg
        viewBox={showSub ? "0 0 330 115" : "0 0 330 80"}
        style={{ height, width: 'auto' }}
        className="max-w-full"
        xmlns="http://www.w3.org/2000/svg"
        id="oyster-logo-svg"
      >
        <g>
          {/* Letter 'O' */}
          <text
            x="12"
            y="65"
            fontFamily="'Cinzel', 'Cormorant Garamond', 'Times New Roman', Georgia, serif"
            fontSize="54"
            fontWeight="bold"
            fill={textColor}
            id="logo-letter-o"
          >
            O
          </text>

          {/* Letter 'Y' replaced by MARTINI GLASS (Width centered around x=92, same height as cap height of other letters) */}
          <g id="logo-martini-glass">
            {/* The toothpick/cocktail pick going up-right through the glass */}
            <line
              x1="88"
              y1="40"
              x2="108"
              y2="10"
              stroke={textColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* The olive on the tooth pick */}
            <circle
              cx="100"
              cy="22"
              r="4"
              fill={accentColor}
            />
            {/* The detailed seashell/oyster-shell ornament on the very top pin */}
            <path
              d="M106,12 C104,8 108,4 112,6 C115,8 114,13 110,12 Z"
              fill={textColor}
              opacity="0.9"
            />
            {/* Radiating visual lines of the shell */}
            <line x1="108" y1="10" x2="114" y2="7" stroke={light ? "#000000" : "#ffffff"} strokeWidth="0.5" opacity="0.5" />

            {/* Glass Bowl: polygon from top-left (70, 27) to top-right (114, 27) and base tip at (92, 47) */}
            <polygon
              points="70,27 114,27 92,47"
              stroke={textColor}
              strokeWidth="3.5"
              fill="none"
              strokeLinejoin="miter"
            />

            {/* Liquid inside the glass bowl (colored with fine-dine gold accent with transparency) */}
            <polygon
              points="75,32 109,32 92,47"
              fill={accentColor}
              opacity="0.32"
            />
            {/* Horizontal level line of liquid */}
            <line
              x1="74"
              y1="31"
              x2="110"
              y2="31"
              stroke={textColor}
              strokeWidth="1.75"
            />

            {/* Stem of the glass: straight vertical center line */}
            <line
              x1="92"
              y1="47"
              x2="92"
              y2="66"
              stroke={textColor}
              strokeWidth="3.5"
            />

            {/* Base of the glass: horizontal base with mini serifs on the boundaries */}
            <line
              x1="76"
              y1="66"
              x2="108"
              y2="66"
              stroke={textColor}
              strokeWidth="3.5"
              strokeLinecap="square"
            />
          </g>

          {/* Letters 'STER' */}
          <text
            x="122"
            y="65"
            fontFamily="'Cinzel', 'Cormorant Garamond', 'Times New Roman', Georgia, serif"
            fontSize="54"
            fontWeight="bold"
            letterSpacing="2"
            fill={textColor}
            id="logo-letters-ster"
          >
            STER
          </text>

          {/* Indian Vegetarian Symbol (Green square with green circle inside on the top right) */}
          <g id="logo-vegetarian-dot">
            <rect
              x="292"
              y="20"
              width="14"
              height="14"
              rx="1.5"
              stroke={vegColor}
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="299"
              cy="27"
              r="3.5"
              fill={vegColor}
            />
          </g>
        </g>

        {/* Double lines with subtitle text below */}
        {showSub && (
          <g id="logo-subtitle">
            {/* Top border line */}
            <line
              x1="12"
              y1="78"
              x2="306"
              y2="78"
              stroke={textColor}
              strokeWidth="1.5"
              opacity="0.8"
            />
            {/* Subtitle text */}
            <text
              x="159"
              y="91"
              fontFamily="'Montserrat', 'Inter', sans-serif"
              fontSize="9"
              fontWeight="bold"
              letterSpacing="3"
              textAnchor="middle"
              fill={textColor}
              opacity="0.9"
            >
              PURE VEG ROOFTOP RESTRO & BAR
            </text>
            {/* Bottom border line */}
            <line
              x1="12"
              y1="98"
              x2="306"
              y2="98"
              stroke={textColor}
              strokeWidth="1.5"
              opacity="0.8"
            />
          </g>
        )}
      </svg>
    </span>
  );
}
