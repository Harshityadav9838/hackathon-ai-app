import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  return (
    <div className="bg-container">

      {/* Aurora */}
      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>
      <div className="aurora aurora3"></div>
      <div className="aurora aurora4"></div>

      {/* Neon Rings */}
      <div className="ring ring1"></div>
      <div className="ring ring2"></div>
      <div className="ring ring3"></div>

      {/* Glow */}
      <div className="vignette"></div>

    </div>
  );
}
