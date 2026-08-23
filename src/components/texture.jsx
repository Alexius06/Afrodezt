export default function Texture({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 0px 0px, rgba(208, 10, 10, 0.6) 1.5px, transparent 1.5px),
          radial-gradient(circle at 12px 12px, rgba(15, 23, 42, 0.5) 1.5px, transparent 1.5px)
        `,
        backgroundSize: "24px 24px",
      }}
    />
  );
}