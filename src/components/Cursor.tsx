'use client';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const previousPosition = useRef({ x: 0, y: 0 });
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);
  const isHoveringMagnet = useRef(false);
  const magnetElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const resetCursor = () => {
      if (cursorRef.current && !isHoveringMagnet.current) {
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

        // Проверяем, находится ли курсор над элементом с классом "magnet"
        const hoveredElement = document.elementFromPoint(x, y);
        isHoveringMagnet.current = hoveredElement?.classList.contains('magnet') ?? false;

        // Если курсор над элементом "magnet", увеличиваем его и привязываем
        const scaleX = isHoveringMagnet.current ? 2 : 1 + Math.abs(Math.cos(angle)) * 0.9;
        const scaleY = isHoveringMagnet.current ? 2 : 1 + Math.abs(Math.sin(angle)) * 0.7;

        gsap.set(cursorRef.current, {
          scaleX,
          scaleY,
        });

        if (isHoveringMagnet.current && magnetElement.current) {
          const magnetRect = magnetElement.current.getBoundingClientRect();
          const magnetCenterX = magnetRect.left + magnetRect.width / 2;
          const magnetCenterY = magnetRect.top + magnetRect.height / 2;

          // Притягиваем курсор к центру элемента
          gsap.to(cursorRef.current, {
            x: magnetCenterX,
            y: magnetCenterY,
            duration: 0.3,
            ease: 'power3.out',
          });
        } else {
          // Если курсор не на магните, просто анимируем его позицию
          gsap.to(cursorRef.current, {
            x,
            y,
            duration: 0.1,
            ease: 'power2.out',
          });
        }

        // Размытие при движении, если курсор не на "magnet"
        const blur = isHoveringMagnet.current ? 0 : Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2) * 0.1, 15);
        gsap.set(cursorRef.current.style, {
          filter: `blur(${blur}px)`,
        });

        // Сбрасываем таймер на остановку
        if (idleTimeout.current) {
          clearTimeout(idleTimeout.current);
        }

        // Запускаем таймер сброса, если курсор не на элементе "magnet"
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
