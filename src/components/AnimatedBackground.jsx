import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  return (
    <div className="bg-container">

      {/* Aurora Lights */}
      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>
      <div className="aurora aurora3"></div>
      <div className="aurora aurora4"></div>

      {/* Vignette */}
      <div className="vignette"></div>

    </div>
  );
}
