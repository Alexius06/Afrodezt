/**
 * Floating decorative elements that animate on scroll
 */
export function FloatingAccent({ 
  className = "", 
  duration = 20, 
  delay = 0, 
  size = "w-20 h-20" 
}) {
  return (
    <div
      className={`absolute opacity-30 pointer-events-none animate-rotateSlow ${size} ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="1" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

/**
 * Animated line that draws on scroll
 */
export function DrawLine({ className = "", delay = 0 }) {
  return (
    <div
      className={`h-1 bg-gradient-to-r from-fire to-ember animate-drawLine ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    />
  );
}

/**
 * Neon glow text effect
 */
export function NeonText({ text, className = "" }) {
  return (
    <p className={`animate-neonGlow text-fire font-bold ${className}`}>
      {text}
    </p>
  );
}
