import React, { useEffect, useState } from "react";
import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const active = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(active);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  if (theme !== 'dark') return null; // only show heavy neon background in dark theme

  return (
    <div className="animated-bg" aria-hidden="true">
      <img src="/smoke.svg" className="bg-smoke" alt="" />

      {/* floating svg assets */}
      <img src="/ring1.svg" className="float-asset ring-asset ring-asset-1" alt="" />
      <img src="/cube1.svg" className="float-asset cube-asset cube-asset-1" alt="" />

      {/* subtle rings for additional depth */}
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="ring r3" />
      <div className="ring r4" />
      <div className="ring r5" />
    </div>
  );
}
