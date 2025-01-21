import gsap from 'gsap';
import React, { useRef, useState } from 'react';

const Hoverable: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Используем gsap.quickTo для предотвращения перекрытий
  const xTo = gsap.quickTo(elementRef.current, 'x', { duration: 0.3, ease: 'power2.out' });
  const yTo = gsap.quickTo(elementRef.current, 'y', { duration: 0.3, ease: 'power2.out' });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!elementRef.current || !isHovered) {
      return;
    }

    const el = elementRef.current;
    const bounds = el.getBoundingClientRect();

    const centerX = bounds.x + bounds.width / 2;
    const centerY = bounds.y + bounds.height / 2;

    const dx = (event.clientX - centerX) * 2;
    const dy = (event.clientY - centerY) * 1.5;

    xTo(dx);
    yTo(dy);
  };

  const handlePointerOut = () => {
    if (!elementRef.current) {
      return;
    }

    setIsHovered(false);

    // Возвращаем элемент в центр с отпрыгиванием
    gsap.to(elementRef.current, {
      x: 0,
      y: 0,
      duration: 1,
      ease: 'elastic.out(2, 0.3)',
    });
  };

  const handlePointerOver = () => {
    setIsHovered(true);

    if (elementRef.current) {
      gsap.to(elementRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power3.out',
      });
    }
  };

  return (
    <div
      ref={elementRef}
      onPointerMove={handlePointerMove}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      className="magnet relative text-bl transition-colors duration-300 hover:text-white"
    >
      {children}
    </div>
  );
};

export default Hoverable;
