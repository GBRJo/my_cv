'use client';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { vec2 } from 'vecteur';

class CursorManager {
  el: HTMLDivElement;
  position = {
    previous: vec2(-100, -100),
    current: vec2(-100, -100),
    target: vec2(-100, -100),
    lerpAmount: 0.1,
  };

  scale = {
    previous: 1,
    current: 1,
    target: 1,
    lerpAmount: 0.1,
  };

  isHovered = false;
  hoverEl: HTMLElement | null = null;

  constructor(cursorEl: HTMLDivElement) {
    this.el = cursorEl;
    this.addListeners();
  }

  update() {
    this.position.current.lerp(this.position.target, this.position.lerpAmount);
    this.scale.current = gsap.utils.interpolate(
      this.scale.current,
      this.scale.target,
      this.scale.lerpAmount,
    );

    const delta = this.position.current.clone().sub(this.position.previous);

    this.position.previous.copy(this.position.current);
    this.scale.previous = this.scale.current;

    gsap.set(this.el, {
      x: this.position.current.x,
      y: this.position.current.y,
    });

    if (!this.isHovered) {
      const angle = Math.atan2(delta.y, delta.x) * (180 / Math.PI);
      const distance = Math.sqrt(delta.x ** 2 + delta.y ** 2) * 0.04;

      gsap.set(this.el, {
        rotate: angle,
        scaleX: this.scale.current + Math.min(distance, 1),
        scaleY: this.scale.current - Math.min(distance, 0.3),
      });
    }
  }

  updateTargetPosition(x: number, y: number) {
    const cursorOffsetX = this.el.offsetWidth / 2;
    const cursorOffsetY = this.el.offsetHeight / 2;

    if (this.isHovered) {
      const bounds = this.hoverEl!.getBoundingClientRect();
      const cx = bounds.x + bounds.width / 2;
      const cy = bounds.y + bounds.height / 2;

      const dx = x - cx;
      const dy = y - cy;

      this.position.target.x = cx + dx * 0.15 - cursorOffsetX;
      this.position.target.y = cy + dy * 0.15 - cursorOffsetY;
      this.scale.target = 2;
    } else {
      this.position.target.x = x - cursorOffsetX;
      this.position.target.y = y - cursorOffsetY;
      this.scale.target = 1;
    }
  }

  addListeners() {
    gsap.utils.toArray<HTMLElement>('[data-hover]').forEach((hoverEl) => {
      hoverEl.addEventListener('pointerover', () => {
        this.isHovered = true;
        this.hoverEl = hoverEl;
      });

      hoverEl.addEventListener('pointerout', () => {
        this.isHovered = false;
        this.hoverEl = null;
      });

      const xTo = gsap.quickTo(hoverEl, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
      const yTo = gsap.quickTo(hoverEl, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

      hoverEl.addEventListener('pointermove', (event) => {
        const { clientX: cx, clientY: cy } = event;
        const { height, width, left, top } = hoverEl.getBoundingClientRect();
        const x = cx - (left + width / 2);
        const y = cy - (top + height / 2);
        xTo(x * 0.2);
        yTo(y * 0.2);
      });

      hoverEl.addEventListener('pointerout', () => {
        xTo(0);
        yTo(0);
      });
    });
  }
}

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cursorRef.current) {
      return;
    }

    const cursor = new CursorManager(cursorRef.current);

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;
      cursor.updateTargetPosition(x, y);
    };

    gsap.ticker.add(() => cursor.update());
    window.addEventListener('pointermove', handleMouseMove);

    return () => {
      gsap.ticker.remove(() => cursor.update());
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor pointer-events-none fixed z-50 size-8 rounded-full bg-black"
    >
    </div>
  );
};

export default Cursor;
