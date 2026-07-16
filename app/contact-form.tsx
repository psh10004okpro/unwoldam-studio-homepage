"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inquiry = [
      "[운월담 스튜디오 프로젝트 문의]",
      `이름/회사: ${data.get("name") ?? ""}`,
      `연락처: ${data.get("contact") ?? ""}`,
      `필요한 제작: ${data.get("service") ?? ""}`,
      `예상 일정: ${data.get("schedule") ?? ""}`,
      `예상 예산: ${data.get("budget") ?? ""}`,
      `참고 링크: ${data.get("reference") ?? ""}`,
      `문의 내용: ${data.get("details") ?? ""}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(inquiry);
      setMessage("문의 내용이 복사되었습니다. 문의 이메일을 연결하면 바로 전송 방식으로 변경됩니다.");
    } catch {
      setMessage("복사가 제한되었습니다. 입력 내용을 직접 선택해 복사해 주세요.");
    }
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
        <p>현재 문의 수신 주소 연결 전입니다. 작성한 내용을 안전하게 복사해 드립니다.</p>
        <button type="submit">문의 내용 복사하기 <span aria-hidden="true">↗</span></button>
      </div>
      <p className="form-status full-field" aria-live="polite">{message}</p>
    </form>
  );
}
