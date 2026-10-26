import type { ReactNode } from "react";
import type { NavKey } from "./site-header";
import { studio } from "./site-data";
import SiteFooter from "./site-footer";
import SubpageHero from "./subpage-hero";

export const LEGAL_EFFECTIVE_DATE = "2026년 10월 26일";

export function LegalPlaceholder({ children }: { children: ReactNode }) {
  return <span className="legal-placeholder">{children}</span>;
}

export function CompanyFacts() {
  return (
    <dl className="legal-facts">
      <div><dt>상호</dt><dd>{studio.nameKo} ({studio.nameEn})</dd></div>
      <div><dt>사업자등록번호</dt><dd>{studio.businessNumber}</dd></div>
      <div><dt>대표자</dt><dd><LegalPlaceholder>[대표자 성명 — 확인 후 기재]</LegalPlaceholder></dd></div>
      <div><dt>주소</dt><dd><LegalPlaceholder>[사업장 주소 — 확인 후 기재]</LegalPlaceholder></dd></div>
      <div><dt>전화번호</dt><dd><LegalPlaceholder>[전화번호 — 확인 후 기재]</LegalPlaceholder></dd></div>
      <div><dt>이메일</dt><dd><a href={`mailto:${studio.email}`}>{studio.email}</a></dd></div>
      <div><dt>웹사이트</dt><dd><a href={studio.url}>{studio.url}</a></dd></div>
    </dl>
  );
}

export default function LegalLayout({
  active,
  number,
  kicker,
  title,
  description,
  children,
}: {
  active: NavKey;
  number: string;
  kicker: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="site-canvas subpage-canvas" id="top">
      <SubpageHero active={active} number={number} kicker={kicker} title={title} description={description} />
      <section className="detail-section paper-panel">
        <div className="shell legal-doc">{children}</div>
      </section>
      <SiteFooter />
    </main>
  );
}
