import * as React from "react";

export function SkywayLogo({
  className,
  color = "#111",
  lightMode = false,
  shouldAnimate = true,
}: {
  className?: string;
  color?: string;
  lightMode?: boolean;
  shouldAnimate?: boolean;
}) {
  const clipId = React.useId();

  // Invert palette in lightMode:
  // - primary becomes white
  // - secondary becomes "color" (dark)
  const primary = lightMode ? "#fff" : color;    // wing, strokes, text, base
  const secondary = lightMode ? color : "#fff";  // filled/cutout areas

  return (
    <div className={`flex items-center ${className ?? ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="24 20 760 211"
        className={`h-22 w-auto ${shouldAnimate ? "skyway-anim" : ""}`}
        shapeRendering="geometricPrecision"
        aria-label="Skyway Catering Services"
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <polygon
              className={shouldAnimate ? "skyway-wing-motion" : undefined}
              points="188 20 317 21 242 231 24 229"
            />
          </clipPath>
        </defs>

        {/* Wing now uses PRIMARY (so it flips to white in lightMode) */}
        <polygon
          className={shouldAnimate ? "skyway-wing-motion" : undefined}
          points="188 20 317 21 242 231 24 229"
          fill={primary}
        />

        {/* Window 1: inside-wing fill uses SECONDARY (becomes dark in lightMode) */}
        <g className={shouldAnimate ? "skyway-win skyway-win-1" : undefined}>
          <g clipPath={`url(#${clipId})`}>
            <rect x="206" y="60" width="42" height="68" rx="21" fill={secondary} />
          </g>
        </g>

        {/* Window 2: base uses PRIMARY, clipped overlay uses SECONDARY */}
        <g className={shouldAnimate ? "skyway-win skyway-win-2" : undefined}>
          <rect x="264" y="60" width="42" height="68" rx="21" fill={primary} />
          <g clipPath={`url(#${clipId})`}>
            <rect x="264" y="60" width="42" height="68" rx="21" fill={secondary} />
          </g>
        </g>

        {/* Outlined windows: stroke uses PRIMARY (white in lightMode) */}
        <g
          className={shouldAnimate ? "skyway-win skyway-win-3" : undefined}
          fill="none"
          stroke={primary}
          strokeWidth="3"
        >
          <rect x="315" y="57" width="50" height="77" rx="25" />
        </g>

        <g
          className={shouldAnimate ? "skyway-win skyway-win-4" : undefined}
          fill="none"
          stroke={primary}
          strokeWidth="3"
        >
          <rect x="371" y="57" width="50" height="77" rx="25" />
        </g>

        <g
          className={shouldAnimate ? "skyway-win skyway-win-5" : undefined}
          fill="none"
          stroke={primary}
          strokeWidth="3"
        >
          <rect x="427" y="57" width="50" height="76" rx="25" />
        </g>

        {/* Text uses PRIMARY */}
        <g className={shouldAnimate ? "skyway-text-fade" : undefined}>
          <text
            x="280"
            y="185"
            fill={primary}
            fontFamily="Times New Roman, Georgia, serif"
            fontSize="56"
            letterSpacing="12"
          >
            SKYWAY
          </text>

          <text
            x="295"
            y="222"
            fill={primary}
            fontFamily="Times New Roman, Georgia, serif"
            fontSize="34"
            fontStyle="italic"
            letterSpacing="1"
          >
            Catering Services
          </text>
        </g>
      </svg>
    </div>
  );
}
