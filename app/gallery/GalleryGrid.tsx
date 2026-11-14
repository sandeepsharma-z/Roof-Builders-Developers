"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../inner-pages.module.css";

export default function GalleryGrid({ images }: { images: string[][] }) {
  const [active, setActive] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const resetView = () => { setZoom(1); setPan({ x: 0, y: 0 }); setDragging(false); };
  const close = () => { setActive(null); resetView(); };
  const previous = () => { setActive((current) => current === null ? null : (current - 1 + images.length) % images.length); resetView(); };
  const next = () => { setActive((current) => current === null ? null : (current + 1) % images.length); resetView(); };
  const setZoomLevel = (value: number) => { const nextZoom = Math.min(4, Math.max(1, value)); setZoom(nextZoom); if (nextZoom === 1) setPan({ x: 0, y: 0 }); };
  const wheelZoom = (event: React.WheelEvent) => { event.preventDefault(); setZoomLevel(zoom + (event.deltaY < 0 ? .2 : -.2)); };
  const startDrag = (event: React.PointerEvent) => { if (zoom <= 1) return; setDragging(true); dragStart.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y }; event.currentTarget.setPointerCapture(event.pointerId); };
  const moveDrag = (event: React.PointerEvent) => { if (!dragging) return; setPan({ x: dragStart.current.panX + event.clientX - dragStart.current.x, y: dragStart.current.panY + event.clientY - dragStart.current.y }); };
  const stopDrag = () => setDragging(false);

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
  }, [active]);

  return <>
    <div className={styles.galleryGrid}>{images.map(([src, project, label], index) => <article className={styles.galleryCard} key={src}>
      <button className={styles.galleryButton} type="button" onClick={() => setActive(index)} aria-label={`Open ${project} ${label}`}>
        <Image src={src} alt={`${project} ${label}`} fill sizes="(max-width:600px) 100vw,50vw" />
        <div className={styles.galleryShade} /><div className={styles.galleryCopy}><span>{project}</span><h3>{label}</h3></div><i className={styles.galleryOpen} aria-hidden="true">↗</i>
      </button>
    </article>)}</div>
    {active !== null && <div className={styles.galleryModal} role="dialog" aria-modal="true" aria-label={`${images[active][1]} image preview`} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <button className={styles.galleryModalClose} type="button" onClick={close} aria-label="Close image preview">×</button>
      <button className={`${styles.galleryModalNav} ${styles.galleryModalPrev}`} type="button" onClick={previous} aria-label="Previous image">‹</button>
      <div className={`${styles.galleryModalImage} ${zoom > 1 ? styles.galleryModalZoomed : ""} ${dragging ? styles.galleryModalDragging : ""}`} onWheel={wheelZoom} onDoubleClick={() => setZoomLevel(zoom > 1 ? 1 : 2)} onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={stopDrag} onPointerCancel={stopDrag}>
        <Image src={images[active][0]} alt={`${images[active][1]} ${images[active][2]}`} fill sizes="95vw" priority draggable={false} style={{ transform: `translate3d(${pan.x}px,${pan.y}px,0) scale(${zoom})` }} />
      </div>
      <button className={`${styles.galleryModalNav} ${styles.galleryModalNext}`} type="button" onClick={next} aria-label="Next image">›</button>
      <div className={styles.galleryZoomControls}><button type="button" onClick={() => setZoomLevel(zoom - .25)} aria-label="Zoom out">−</button><span>{Math.round(zoom * 100)}%</span><button type="button" onClick={() => setZoomLevel(zoom + .25)} aria-label="Zoom in">+</button><button type="button" onClick={resetView}>Reset</button></div>
      <div className={styles.galleryModalCaption}><strong>{images[active][1]}</strong><span>{images[active][2]} · {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span></div>
    </div>}
  </>;
}
