"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "unwoldamstudio@gmail.com";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      "[운월담 스튜디오 프로젝트 문의]",
      "",
      `이름/회사: ${data.get("name") ?? ""}`,
      `연락처: ${data.get("contact") ?? ""}`,
      `필요한 제작: ${data.get("service") ?? ""}`,
      `예상 일정: ${data.get("schedule") ?? ""}`,
      `예상 예산: ${data.get("budget") ?? ""}`,
      `참고 링크: ${data.get("reference") ?? ""}`,
      "",
      "문의 내용:",
      `${data.get("details") ?? ""}`,
    ].join("\n");
    const subject = `[프로젝트 문의] ${data.get("name") ?? "홈페이지"} · ${data.get("service") ?? ""}`;

    // 메일 앱이 열리지 않는 환경(웹메일 미연결 등)을 대비해 클립보드에도 복사한다.
    try {
      await navigator.clipboard.writeText(body);
    } catch {
      /* 클립보드가 제한되면 무시 — 메일 앱 열기는 아래에서 계속 시도 */
    }
    // 방문자의 메일 앱을 열어 운월담 수신 주소로 전송한다.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMessage(`메일 앱이 열립니다. 열리지 않으면 복사된 내용을 ${CONTACT_EMAIL} 로 보내 주세요.`);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label><span>이름 또는 회사명</span><input name="name" type="text" autoComplete="organization" placeholder="성함이나 회사명을 입력해 주세요" required /></label>
      <label><span>연락처</span><input name="contact" type="text" autoComplete="email" placeholder="이메일 또는 전화번호" required /></label>
      <label>
        <span>필요한 제작</span>
        <select name="service" defaultValue="" required>
          <option value="" disabled>제작 분야를 선택해 주세요</option>
          <option>AI 영상 제작</option>
          <option>AI 이미지 제작</option>
          <option>유튜브 관리</option>
          <option>마케팅</option>
          <option>홈페이지 · 웹사이트</option>
          <option>웹앱 개발</option>
          <option>모바일 앱 개발</option>
          <option>게임 개발</option>
          <option>VR 콘텐츠 제작</option>
          <option>여러 분야 통합 제작</option>
        </select>
      </label>
      <label><span>예상 일정</span><input name="schedule" type="text" placeholder="예: 3개월 이내" /></label>
      <label><span>예상 예산 범위</span><input name="budget" type="text" placeholder="정해지지 않았다면 미정" /></label>
      <label><span>참고 링크</span><input name="reference" type="url" placeholder="참고 사이트·영상·자료 URL" /></label>
      <label className="full-field"><span>프로젝트 이야기</span><textarea name="details" rows={4} placeholder="목적, 사용처, 필요한 기능이나 결과물을 자유롭게 적어 주세요" required /></label>
      <div className="form-footer full-field">
        <p>보내기를 누르면 메일 앱이 열려 <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> 로 문의가 전달됩니다. (내용은 자동으로 복사됩니다)</p>
        <button type="submit">문의 보내기 <span aria-hidden="true">↗</span></button>
      </div>
      <p className="form-status full-field" aria-live="polite">{message}</p>
    </form>
  );
}
