import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { vec2 } from 'vecteur';

export const useCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoverEl, setHoverEl] = useState<HTMLElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const position = useRef({
    previous: vec2(-100, -100),
    current: vec2(-100, -100),
    target: vec2(-100, -100),
    lerpAmount: 0.1,
  });

  const scale = useRef({
    previous: 1,
    current: 1,
    target: 1,
    lerpAmount: 0.1,
  });

  const update = () => {
    const pos = position.current;
    const scl = scale.current;

    pos.current.lerp(pos.target, pos.lerpAmount);
    scl.current = gsap.utils.interpolate(scl.current, scl.target, scl.lerpAmount);

    const delta = pos.current.clone().sub(pos.previous);

    pos.previous.copy(pos.current);
    scl.previous = scl.current;

    gsap.set(cursorRef.current, {
      x: pos.current.x,
      y: pos.current.y,
    });

    if (!isHovered) {
      const angle = Math.atan2(delta.y, delta.x) * (180 / Math.PI);
      const distance = Math.sqrt(delta.x ** 2 + delta.y ** 2) * 0.04;

      gsap.set(cursorRef.current, {
        rotate: angle,
        scaleX: scl.current + Math.min(distance, 1),
        scaleY: scl.current - Math.min(distance, 0.3),
      });
    }
  };

  const updateTargetPosition = (x: number, y: number) => {
    const pos = position.current;

    if (isHovered && hoverEl) {
      const bounds = hoverEl.getBoundingClientRect();
      const cx = bounds.x + bounds.width / 2;
      const cy = bounds.y + bounds.height / 2;

      const dx = x - cx;
      const dy = y - cy;

      pos.target.x = cx + dx * 0.15;
      pos.target.y = cy + dy * 0.15;
      scale.current.target = 2;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const distance = Math.sqrt(dx ** 2 + dy ** 2) * 0.01;

      gsap.set(cursorRef.current, { rotate: angle });
      gsap.to(cursorRef.current, {
        scaleX: scale.current.target + Math.min(distance, 0.6) ** 3 * 3,
        scaleY: scale.current.target - Math.min(distance, 0.3) ** 3 * 3,
        duration: 0.5,
        ease: 'power4.out',
        overwrite: true,
      });
    } else {
      pos.target.x = x;
      pos.target.y = y;
      scale.current.target = 1;
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      updateTargetPosition(e.clientX, e.clientY);
    };

    gsap.ticker.add(update);
    window.addEventListener('pointermove', handleMouseMove);

    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, [isHovered, hoverEl]);

  return { cursorRef, setIsHovered, setHoverEl };
};
