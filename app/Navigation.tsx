'use client';

import { useRef, useState } from 'react';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <div className="navigation" onKeyDown={(event) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }}>
      <button ref={toggle} className="menu-toggle" type="button" aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? 'Schließen' : 'Menü'} <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <nav id="primary-navigation" className={open ? 'is-open' : ''} aria-label="Hauptnavigation">
        <a href="#mission" onClick={() => setOpen(false)}>Über uns</a>
        <a href="#projekte" onClick={() => setOpen(false)}>Projekte</a>
        <a href="#mitmachen" onClick={() => setOpen(false)}>Mitmachen</a>
        <a href="#kontakt" onClick={() => setOpen(false)}>Kontakt</a>
      </nav>
    </div>
  );
}
