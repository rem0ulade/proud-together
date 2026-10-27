'use client';

import { useRef } from 'react';

export function CommunityScene() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="community-scene"
      aria-hidden="true"
      onPointerMove={(event) => {
        if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const rect = event.currentTarget.getBoundingClientRect();
        ref.current?.style.setProperty('--pointer-x', `${((event.clientX - rect.left) / rect.width - 0.5) * 18}px`);
        ref.current?.style.setProperty('--pointer-y', `${((event.clientY - rect.top) / rect.height - 0.5) * 18}px`);
      }}
      onPointerLeave={() => {
        ref.current?.style.setProperty('--pointer-x', '0px');
        ref.current?.style.setProperty('--pointer-y', '0px');
      }}
    >
      <div className="scene-orbit orbit-one" />
      <div className="scene-orbit orbit-two" />
      <div className="scene-orbit orbit-three" />
      <span className="scene-star">✳</span>
      <div className="scene-note"><span>ALLE FARBEN.</span><strong>Ein Wir.</strong><span>PROUD TOGETHER</span></div>
      <span className="scene-caption">Verschieden sein. Zusammengehören.</span>
    </div>
  );
}
