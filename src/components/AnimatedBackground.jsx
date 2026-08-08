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

  return (
    <div className={`animated-bg ${theme === 'light' ? 'light' : 'dark'}`} aria-hidden="true">
      {/* shared soft smoke/nebula overlay */}
      <img src="/smoke.svg" className={`bg-smoke ${theme === 'light' ? 'smoke-light' : 'smoke-dark'}`} alt="" />

      {theme === 'dark' ? (
        <>
          {/* floating svg assets (dark) */}
          <img src="/ring1.svg" className="float-asset ring-asset ring-asset-1" alt="" />
          <img src="/cube1.svg" className="float-asset cube-asset cube-asset-1" alt="" />

          {/* subtle rings for additional depth (dark) */}
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="ring r3" />
          <div className="ring r4" />
          <div className="ring r5" />
        </>
      ) : (
        <>
          {/* Light-theme beams, pastel cubes, and soft highlights */}
          <div className="light-beam beam-1" />
          <div className="light-beam beam-2" />
          <div className="light-beam beam-3" />
         
          <div className="crystal-shape" />
<div className="crystal-shape-2" />
<div className="crystal-shape-3" />
<div className="crystal-shape-4" />
<div className="crystal-shape-5" />
<div className="crystal-shape-6" />
<div className="crystal-shape-7" />
<div className="crystal-shape-8" />
          <div className="crystal-shape-9" />
<div className="crystal-shape-10" />

          <img src="/cube1.svg" className="float-asset cube-asset cube-asset-light-1" alt="" />
          <img src="/ring1.svg" className="float-asset ring-asset ring-asset-light-1" alt="" />

          <div className="sparkle s1" />
          <div className="sparkle s2" />
        </>
      )}
    </div>
  );
}
