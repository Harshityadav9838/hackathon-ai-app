import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  return (
    <div className="bg">

      {/* Aurora */}
      <div className="aurora a1"></div>
      <div className="aurora a2"></div>
      <div className="aurora a3"></div>
      <div className="aurora a4"></div>

      {/* Neon Rings */}
      <div className="ring r1"></div>
      <div className="ring r2"></div>
      <div className="ring r3"></div>
      <div className="ring r4"></div>

      {/* Floating Lights */}
      <div className="light l1"></div>
      <div className="light l2"></div>
      <div className="light l3"></div>

      {/* Fog */}
      <div className="fog"></div>

      {/* Vignette */}
      <div className="vignette"></div>

    </div>
  );
}
