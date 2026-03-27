import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Glow */}
      <div
        className="pointer-events-none fixed z-50 h-10 w-10 rounded-full 
                   bg-green-400 opacity-20 blur-md"
        style={{
          left: position.x - 20,
          top: position.y - 20,
        }}
      />

      {/* Core Dot */}
      <div
        className="pointer-events-none fixed z-50 h-3 w-3 rounded-full 
                   bg-emerald-500"
        style={{
          left: position.x - 6,
          top: position.y - 6,
        }}
      />
    </>
  );
}