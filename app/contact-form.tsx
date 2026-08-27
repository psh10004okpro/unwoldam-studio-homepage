"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "unwoldamstudio@gmail.com";
// FormSubmit.co: 서버 없이 폼 내용을 위 이메일로 직접 발송한다(키/가입 불필요).
// 최초 1회 수신 이메일에서 활성화 링크를 클릭해야 이후 문의가 전달된다.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const fields = {
      "이름/회사": String(data.get("name") ?? ""),
      "연락처": String(data.get("contact") ?? ""),
      "필요한 제작": String(data.get("service") ?? ""),
      "예상 일정": String(data.get("schedule") ?? ""),
      "예상 예산": String(data.get("budget") ?? ""),
      "참고 링크": String(data.get("reference") ?? ""),
      "문의 내용": String(data.get("details") ?? ""),
    };

    setSending(true);
    setStatus("문의를 보내는 중입니다...");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[프로젝트 문의] ${fields["이름/회사"] || "홈페이지"} · ${fields["필요한 제작"]}`,
          _template: "table",
          _captcha: "false",
          ...fields,
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (res.ok && (result.success === "true" || result.success === true)) {
        form.reset();
        setStatus("문의가 접수되었습니다. 담당자가 빠르게 연락드리겠습니다. 감사합니다!");
      } else {
        setStatus(
          typeof result.message === "string"
            ? result.message
            : `잠시 문제가 있었습니다. 번거로우시겠지만 ${CONTACT_EMAIL} 로 보내 주세요.`,
        );
      }
    } catch {
      // 네트워크 차단 등 예외 시 폴백: 메일 앱 열기 + 클립보드 복사
      const body = [
        "[운월담 스튜디오 프로젝트 문의]",
        "",
        ...Object.entries(fields).map(([k, v]) => `${k}: ${v}`),
      ].join("\n");
      try {
        await navigator.clipboard.writeText(body);
      } catch {
        /* 클립보드 제한 시 무시 */
      }
      const subject = `[프로젝트 문의] ${fields["이름/회사"] || "홈페이지"} · ${fields["필요한 제작"]}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus(`전송이 막혀 메일 앱을 열었습니다. 열리지 않으면 복사된 내용을 ${CONTACT_EMAIL} 로 보내 주세요.`);
    } finally {
      setSending(false);
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
        <p>보내기를 누르면 <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> 로 문의가 바로 접수됩니다.</p>
        <button type="submit" disabled={sending}>{sending ? "보내는 중…" : "문의 보내기"} <span aria-hidden="true">↗</span></button>
      </div>
      <p className="form-status full-field" aria-live="polite">{status}</p>
    </form>
  );
}
