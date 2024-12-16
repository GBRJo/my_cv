'use client';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const previousPosition = useRef({ x: 0, y: 0 });
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resetCursor = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scaleX: 1,
          scaleY: 1,
          duration: 0.3,
          ease: 'power3.out',
        });
        gsap.to(cursorRef.current.style, {
          filter: 'blur(0px)',
          duration: 0.3,
          ease: 'power3.out',
        });
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        const { clientX: x, clientY: y } = event;
        const deltaX = x - previousPosition.current.x;
        const deltaY = y - previousPosition.current.y;

        // Вычисляем угол движения курсора
        const angle = Math.atan2(deltaY, deltaX);

        // Обновляем предыдущую позицию
        previousPosition.current = { x, y };

        // Очищаем таймер, если курсор продолжает двигаться
        if (idleTimeout.current) {
          clearTimeout(idleTimeout.current);
        }

        // Анимация позиции
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.1,
          ease: 'power2.out',
        });

        // Анимация формы: scaleX и scaleY зависят только от угла движения
        const scaleX = 1 + Math.abs(Math.cos(angle)) * 0.7; // Сплющивание по горизонтали
        const scaleY = 1 + Math.abs(Math.sin(angle)) * 0.5; // Сплющивание по вертикали

        gsap.to(cursorRef.current, {
          scaleX,
          scaleY,
          duration: 0.5,
          ease: 'power2.out',
        });

        // Размытие при движении
        const blur = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2) * 0.1, 15); // Максимальное размытие 15px
        cursorRef.current.style.filter = `blur(${blur}px)`;

        // Уменьшаем размытие плавно при замедлении
        gsap.to(cursorRef.current.style, {
          filter: 'blur(0px)',
          duration: 0.3,
          ease: 'power3.out',
        });

        // Запускаем таймер сброса, если курсор останавливается
        idleTimeout.current = setTimeout(resetCursor, 200); // 200 мс простоя
      }
    };

    window.addEventListener('pointermove', onMouseMove);

    return () => {
      window.removeEventListener('pointermove', onMouseMove);
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor pointer-events-none fixed left-0 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bl"
    />
  );
};

export default Cursor;
