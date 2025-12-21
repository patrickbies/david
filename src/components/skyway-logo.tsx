export function SkywayLogo({ className, color = "black", shouldAnimate = true }: { className?: string; color?: string; shouldAnimate?: boolean }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="relative h-14 w-24">
        <svg viewBox="0 0 50 70" className={shouldAnimate ? "absolute left-0 bottom-0 h-14 w-12 animate-wing-slide" : "absolute left-0 bottom-0 h-14 w-12"}>
          <polygon points="15,0 40,0 40,55 0,68 0,62 35,50 35,0" fill={color} stroke={color} />
        </svg>

        <div className="absolute left-4 bottom-2 flex items-center gap-0.5 z-10">
          <svg viewBox="0 0 20 32" className={shouldAnimate ? "h-7 w-3.5 animate-window-drop" : "h-7 w-3.5"} style={{ animationDelay: "0.4s" }}>
            <rect
              x="2"
              y="2"
              width="16"
              height="28"
              rx="8"
              className="fill-foreground stroke-foreground"
              strokeWidth="1.5"
            />
          </svg>

          <svg viewBox="0 0 20 32" className={shouldAnimate ? "h-7 w-3.5 animate-window-drop" : "h-7 w-3.5"} style={{ animationDelay: "0.5s" }}>
            <rect
              x="2"
              y="2"
              width="16"
              height="28"
              rx="8"
              className="fill-foreground stroke-foreground"
              strokeWidth="1.5"
            />
          </svg>

          <svg viewBox="0 0 20 32" className={shouldAnimate ? "h-7 w-3.5 animate-window-drop" : "h-7 w-3.5"} style={{ animationDelay: "0.6s" }}>
            <rect
              x="2"
              y="2"
              width="16"
              height="28"
              rx="8"
              className="fill-background stroke-foreground"
              strokeWidth="1.5"
            />
          </svg>

          <svg viewBox="0 0 20 32" className={shouldAnimate ? "h-7 w-3.5 animate-window-drop" : "h-7 w-3.5"} style={{ animationDelay: "0.7s" }}>
            <rect
              x="2"
              y="2"
              width="16"
              height="28"
              rx="8"
              className="fill-background stroke-foreground"
              strokeWidth="1.5"
            />
          </svg>

          <svg viewBox="0 0 20 32" className={shouldAnimate ? "h-7 w-3.5 animate-window-drop" : "h-7 w-3.5"} style={{ animationDelay: "0.8s" }}>
            <rect
              x="2"
              y="2"
              width="16"
              height="28"
              rx="8"
              className="fill-background stroke-foreground"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      <div className={shouldAnimate ? "flex flex-col -ml-2 animate-text-fade" : "flex flex-col -ml-2"}>
        <span className="text-sm tracking-[0.25em] font-medium">SKYWAY</span>
        <span className="text-[10px] text-muted-foreground tracking-wide italic">Catering Services</span>
      </div>
    </div>
  )
}
