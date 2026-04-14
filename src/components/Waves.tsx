import React, { useRef, useEffect } from 'react';

interface WavesProps {
  lineColor?: string;
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  friction?: number;
  tension?: number;
  maxCursorMove?: number;
  xGap?: number;
  yGap?: number;
  className?: string;
}

const Waves: React.FC<WavesProps> = ({
  lineColor = 'rgba(37, 99, 235, 0.2)',
  backgroundColor = 'transparent',
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 40,
  waveAmpY = 20,
  friction = 0.9,
  tension = 0.01,
  maxCursorMove = 120,
  xGap = 12,
  yGap = 36,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, as: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w: number, h: number, nx: number, ny: number;
    const points: { x: number; y: number; ox: number; oy: number; vx: number; vy: number }[][] = [];

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      nx = Math.ceil(w / xGap) + 1;
      ny = Math.ceil(h / yGap) + 1;
      points.length = 0;

      for (let i = 0; i < nx; i++) {
        points[i] = [];
        for (let j = 0; j < ny; j++) {
          points[i][j] = {
            x: i * xGap,
            y: j * yGap,
            ox: i * xGap,
            oy: j * yGap,
            vx: 0,
            vy: 0,
          };
        }
      }
    };

    const update = () => {
      const mouse = mouseRef.current;
      mouse.sx += (mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;

      const dx = mouse.x - mouse.lx;
      const dy = mouse.y - mouse.ly;
      const d = Math.sqrt(dx * dx + dy * dy);
      mouse.v += d;
      mouse.vs += (mouse.v - mouse.vs) * 0.1;
      mouse.v *= 0.9;

      mouse.lx = mouse.x;
      mouse.ly = mouse.y;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      const time = Date.now();

      for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
          const p = points[i][j];

          const waveX = Math.sin(p.ox * 0.01 + time * waveSpeedX) * waveAmpX;
          const waveY = Math.cos(p.oy * 0.01 + time * waveSpeedY) * waveAmpY;

          const mdx = p.ox - mouse.sx;
          const mdy = p.oy - mouse.sy;
          const md = Math.sqrt(mdx * mdx + mdy * mdy);
          const mFactor = Math.max(0, 1 - md / maxCursorMove);

          p.x = p.ox + waveX + mdx * mFactor;
          p.y = p.oy + waveY + mdy * mFactor;
        }
      }

      for (let i = 0; i < nx - 1; i++) {
        for (let j = 0; j < ny - 1; j++) {
          ctx.beginPath();
          ctx.moveTo(points[i][j].x, points[i][j].y);
          ctx.lineTo(points[i + 1][j].x, points[i + 1][j].y);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(points[i][j].x, points[i][j].y);
          ctx.lineTo(points[i][j + 1].x, points[i][j + 1].y);
          ctx.stroke();
        }
      }

      requestAnimationFrame(update);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', init);
    init();
    update();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', init);
    };
  }, [lineColor, backgroundColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove, xGap, yGap]);

  return <canvas ref={canvasRef} className={`absolute inset-0 z-0 pointer-events-none ${className}`} />;
};

export default Waves;
