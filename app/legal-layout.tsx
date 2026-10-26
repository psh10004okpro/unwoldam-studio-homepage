import type { ReactNode } from "react";
import type { NavKey } from "./site-header";
import { studio } from "./site-data";
import SiteFooter from "./site-footer";
import SubpageHero from "./subpage-hero";

export const LEGAL_EFFECTIVE_DATE = "2026년 10월 26일";

export function CompanyFacts() {
  return (
    <dl className="legal-facts">
      <div><dt>상호</dt><dd>{studio.nameKo} ({studio.nameEn})</dd></div>
      <div><dt>사업자 구분</dt><dd>{studio.businessType}</dd></div>
      <div><dt>사업자등록번호</dt><dd>{studio.businessNumber}</dd></div>
      <div><dt>대표자</dt><dd>{studio.representative}</dd></div>
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
