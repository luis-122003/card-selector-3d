import React, { useEffect, useState } from "react";

export default function ModelViewer({ src, alt, isVisible, ...props }) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
    >
      <model-viewer
        src={src}
        alt={alt}
        camera-controls
        auto-rotate
        shadow-intensity="1"
        exposure="1"
        style={{
          width: "100%",
          height: "500px",
          maxWidth: "800px",
          borderRadius: "16px",
          background: "transparent",
        }}
        {...props}
      ></model-viewer>
    </div>
  );
}
