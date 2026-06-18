import React, { useRef, useState } from 'react';

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.3 }) => {
  const r = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ x: 0, y: 0 });

  const hmm = (e: React.MouseEvent) => {
    const { clientX: cx, clientY: cy } = e;
    const { height: h, width: w, left: l, top: t } = r.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
    const cx2 = l + w / 2;
    const cy2 = t + h / 2;
    const x = (cx - cx2) * strength;
    const y = (cy - cy2) * strength;
    setP({ x, y });
  };

  const hml = () => {
    setP({ x: 0, y: 0 });
  };

  return (
    <div ref={r} onMouseMove={hmm} onMouseLeave={hml} style={{ transform: `translate(${p.x}px, ${p.y}px)`, transition: 'transform 0.1s ease-out', display: 'inline-block' }}>
      {React.cloneElement(children, {})}
    </div>
  );
};

export default Magnetic;
