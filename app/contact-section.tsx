"use client";

import { MouseEvent, useRef, useState } from "react";
import ContactForm from "./contact-form";

export default function ContactSection({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function openInquiry(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setOpen(true);
    requestAnimationFrame(() => detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-brush" aria-hidden="true" />
      <div className="shell contact-topline">
        <div><p>START A PROJECT</p><h2 id="contact-title">당신의 아이디어,<br />운월담과 함께 현실이 됩니다.</h2></div>
        <div className="contact-summary">
          <span>AI · CONTENT · WEB · APP · GAME · VR</span>
          <p>아직 구체적이지 않은 아이디어도 괜찮습니다.<br />목표와 사용처를 바탕으로 필요한 제작 범위를 함께 정리합니다.</p>
          <ul><li>필요한 제작 분야</li><li>목적과 사용처</li><li>희망 일정·예산 범위</li></ul>
        </div>
        <button type="button" onClick={openInquiry} className="contact-cta">문의하기 <span>⟶</span></button>
      </div>
      <details ref={detailsRef} open={open} onToggle={(event) => setOpen(event.currentTarget.open)} className="inquiry-details shell" id="inquiry-form">
        <summary>프로젝트 문의 양식 {open ? "닫기" : "열기"} <span aria-hidden="true">＋</span></summary>
        <div className="inquiry-form-wrap"><ContactForm /></div>
      </details>
    </section>
  );
}
