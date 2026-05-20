import { useSprings, animated, config, SpringValue } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  easing?: (t: number) => number;
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing,
  threshold = 0.1,
  rootMargin = '0px',
  onAnimationComplete,
}) => {
  const words = text.split(' ');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next: (arg: { opacity: number; transform: string }) => Promise<void>) => {
            await next(animationTo);
            animatedCount.current += 1;
            if (animatedCount.current === words.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }
        : animationFrom,
      delay: i * delay,
      config: easing ? { easing } : config.stiff,
    }))
  );

  return (
    <span
      ref={ref}
      className={`split-parent overflow-hidden inline-flex flex-wrap ${className}`}
      style={{ textAlign: 'inherit' }}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props as unknown as { opacity: SpringValue<number>; transform: SpringValue<string> }}
          className="inline-block"
        >
          {words[index]}&nbsp;
        </animated.span>
      ))}
    </span>
  );
};
