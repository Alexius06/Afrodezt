import React from "react";

export default function HazardHover({ children }) {
  if (!React.isValidElement(children)) return children;

  return React.cloneElement(
    children,
    {
      className: `group relative overflow-hidden ${children.props.className || ""}`,
    },
    <>
      {/* Sliding Diagonal Hazard Pattern */}
      <span
        className="absolute inset-0 h-full w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #b91c1c,
            #b91c1c 18px,
            #7f1d1d 18px,
            #7f1d1d 36px
          )`,
        }}
      />

      {/* Original Content Overlay */}
      <span className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
        {children.props.children}
      </span>
    </>
  );
}