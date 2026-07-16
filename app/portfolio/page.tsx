import type { Metadata } from "next";
import SiteFooter from "../site-footer";
import { portfolio } from "../site-data";
import SubpageHero from "../subpage-hero";

export const metadata: Metadata = { title: "포트폴리오 · 콘셉트 스터디 | 운월담 스튜디오", description: "운월담 스튜디오의 제작 가능 범위와 시각적 방향을 보여주는 콘셉트 스터디입니다." };

export default function PortfolioPage() {
  return (
    <main className="site-canvas subpage-canvas" id="top">
      <SubpageHero active="portfolio" number="04" kicker="PORTFOLIO · CONCEPT STUDY" title="제작 가능한 장면과 경험을, 콘셉트로 먼저 보여드립니다." description="게시된 이미지는 실제 의뢰·납품 사례가 아니라 제작 가능 범위와 시각적 방향을 설명하기 위한 콘셉트 스터디입니다." />
      <section className="detail-section paper-panel" aria-labelledby="concept-list-title">
        <div className="shell detail-heading-row"><div className="detail-heading"><p>SELECTED DIRECTIONS</p><h2 id="concept-list-title">분야별 콘셉트 스터디</h2></div><p className="concept-warning">실제 프로젝트는 목적, 브랜드와 사용 환경에 맞춰 새롭게 설계합니다.</p></div>
        <div className="shell portfolio-page-grid">
          {portfolio.map((item, index) => <article key={item.title}><figure><img src={item.src} alt={item.alt} width="1200" height="800" loading="lazy" /><span>CONCEPT STUDY</span></figure><div className="portfolio-page-copy"><b>{String(index + 1).padStart(2, "0")} · {item.tag}</b><h3>{item.title}</h3><p>{item.direction}</p><dl><dt>가능 산출물</dt><dd>{item.outputs}</dd></dl></div></article>)}
        </div>
      </section>
      <section className="detail-section paper-panel ruled-section" aria-labelledby="study-info-title"><div className="shell detail-heading-row"><div className="detail-heading"><p>WHAT THESE STUDIES SHOW</p><h2 id="study-info-title">콘셉트 스터디에서 확인할 수 있는 것</h2></div></div><div className="shell choose-grid"><article><b>01</b><h3>시각 방향</h3><p>색, 질감, 구도와 장면의 분위기를 확인합니다.</p></article><article><b>02</b><h3>제작 범위</h3><p>영상, 이미지, 웹과 인터랙티브 경험의 연결 가능성을 보여줍니다.</p></article><article><b>03</b><h3>맞춤 설계</h3><p>실제 프로젝트는 목적, 브랜드와 사용 환경에 맞춰 새롭게 구성합니다.</p></article></div></section>
      <section className="page-cta"><div className="shell"><div><p>DEVELOP YOUR DIRECTION</p><h2>이 방향을 프로젝트에 맞게 발전시키고 싶다면 이야기해 주세요.</h2></div><a href="/contact#inquiry-form">프로젝트 상담 ⟶</a></div></section>
      <SiteFooter />
    </main>
  );
}
