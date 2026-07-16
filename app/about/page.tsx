import type { Metadata } from "next";
import SiteFooter from "../site-footer";
import { serviceGroups } from "../site-data";
import SubpageHero from "../subpage-hero";

export const metadata: Metadata = { title: "회사 소개 | 운월담 스튜디오", description: "기획·디자인·개발을 하나의 흐름으로 연결하는 운월담 스튜디오를 소개합니다." };

const values = [
  { number: "01", title: "목표에서 시작합니다", text: "누구에게 어떤 경험과 변화를 만들 것인지 확인한 뒤 적합한 콘텐츠와 기술을 선택합니다." },
  { number: "02", title: "여러 분야를 연결합니다", text: "영상, 이미지, 마케팅, 웹, 앱, 게임과 VR이 흩어지지 않도록 하나의 경험으로 설계합니다." },
  { number: "03", title: "과정이 보이는 협업", text: "기획, 방향 확인, 제작, 검수와 전달의 기준을 단계마다 공유합니다." },
];

const standards = [
  { number: "01", title: "목적에 맞는 범위", text: "보여주기 위한 기능보다 실제 목표에 필요한 콘텐츠와 기능을 먼저 선택합니다." },
  { number: "02", title: "일관된 시각 방향", text: "영상, 이미지와 화면이 서로 다른 인상으로 흩어지지 않도록 하나의 기준을 세웁니다." },
  { number: "03", title: "확인 가능한 과정", text: "중요한 단계마다 결과를 공유하고 다음 결정과 수정 범위를 명확하게 정리합니다." },
  { number: "04", title: "운영까지 생각한 결과", text: "완성 이후 실제 채널과 기기에서 사용하고 확장하기 쉬운 형태로 결과물을 준비합니다." },
];

export default function AboutPage() {
  return (
    <main className="site-canvas subpage-canvas" id="top">
      <SubpageHero active="about" number="02" kicker="ABOUT UNWOLDAM" title="상상과 기술을 연결해, 필요한 결과를 만듭니다." description="기술이나 형식을 먼저 정하기보다 프로젝트의 목적과 사용자를 이해하고, 필요한 제작 범위를 현실적으로 설계합니다." />
      <section className="detail-section paper-panel" aria-labelledby="about-overview-title">
        <div className="shell editorial-layout">
          <div className="detail-heading"><p>WHO WE ARE</p><h2 id="about-overview-title">기획부터 구현까지<br />하나의 흐름으로.</h2></div>
          <div className="editorial-copy"><p>운월담 스튜디오는 AI 영상과 이미지부터 유튜브, 마케팅, 웹사이트, 웹앱, 모바일 앱, 게임, VR 콘텐츠까지 기획·디자인·개발을 하나의 흐름으로 연결하는 디지털 크리에이티브 스튜디오입니다.</p><p>하나의 콘텐츠부터 여러 분야가 결합된 프로젝트까지, 목적과 사용 환경에 맞는 제작 방식과 우선순위를 함께 정리합니다.</p></div>
        </div>
        <div className="shell about-gallery">
          <figure className="editorial-figure editorial-figure-wide"><img src="/assets/about-studio.webp" alt="노트북과 카메라, 붓이 놓인 운월담 스튜디오 콘셉트 작업대" width="1536" height="1024" /><figcaption><b>CREATIVE TECHNOLOGY STUDIO</b><span>디지털 기술과 한국적 여백이 만나는 작업 환경을 지향합니다.</span></figcaption></figure>
          <figure className="editorial-figure"><img src="/assets/concept-youtube.webp" alt="카메라와 편집 화면이 놓인 콘텐츠 제작 데스크" width="1200" height="800" loading="lazy" /><figcaption><b>PLAN · CREATE · BUILD</b><span>기획, 제작과 구현을 한 방향으로 연결합니다.</span></figcaption></figure>
        </div>
        <div className="shell page-value-grid">{values.map((value) => <article key={value.number}><b>{value.number}</b><h3>{value.title}</h3><p>{value.text}</p></article>)}</div>
      </section>
      <section className="detail-section paper-panel ruled-section" aria-labelledby="about-fields-title">
        <div className="shell detail-heading-row"><div className="detail-heading"><p>ONE STUDIO, THREE FIELDS</p><h2 id="about-fields-title">필요한 제작을 한 팀에서 연결합니다.</h2></div><p>프로젝트에 필요한 분야만 선택하거나 여러 영역을 하나의 방향으로 연결할 수 있습니다.</p></div>
        <div className="shell field-grid">{serviceGroups.map((group) => <article key={group.number}><b>{group.number}</b><span>{group.list}</span><h3>{group.title}</h3><p>{group.text}</p></article>)}</div>
      </section>
      <section className="detail-section paper-panel" aria-labelledby="standards-title">
        <div className="shell detail-heading-row"><div className="detail-heading"><p>WORKING STANDARD</p><h2 id="standards-title">완성도와 현실성을 함께 봅니다.</h2></div><p>멋있게 보이는 결과뿐 아니라 실제 사용 목적, 일정과 운영 방식까지 고려해 제작합니다.</p></div>
        <div className="shell story-grid">{standards.map((item) => <article key={item.number}><b>{item.number}</b><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <section className="page-cta"><div className="shell"><div><p>START TOGETHER</p><h2>필요한 제작 범위를 함께 정리해 보세요.</h2></div><div><a href="/services">서비스 살펴보기 ⟶</a><a href="/contact#inquiry-form">프로젝트 문의 ⟶</a></div></div></section>
      <SiteFooter />
    </main>
  );
}
