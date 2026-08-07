import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  return (
    <div className="bg">

      {/* Neon Rings */}
      <div className="ring r1"></div>
      <div className="ring r2"></div>
      <div className="ring r3"></div>
      <div className="ring r4"></div>

      {/* Floating Lights */}
      <div className="light l1"></div>
      <div className="light l2"></div>
      <div className="light l3"></div>
      <div className="light l4"></div>
      <div className="light l5"></div>
      <div className="light l6"></div>
      <div className="light l7"></div>
      <div className="light l8"></div>

      {/* Fog */}
      <div className="fog"></div>

      {/* Vignette */}
      <div className="vignette"></div>

    </div>
  );
}
