import type { Metadata } from "next";
import ServiceIcon from "../service-icon";
import SiteFooter from "../site-footer";
import { services } from "../site-data";
import SubpageHero from "../subpage-hero";

export const metadata: Metadata = { title: "서비스 | 운월담 스튜디오", description: "AI 콘텐츠, 유튜브와 마케팅, 웹·앱, 게임과 VR까지 운월담 스튜디오의 제작 서비스를 안내합니다." };

const groups = [
  { en: "CONTENT & BRAND", title: "브랜드를 보이게 하고, 꾸준히 전달합니다.", indexes: [0, 1, 2, 3], image: "/assets/service-content.webp", alt: "수묵 카메라와 주홍 리본으로 표현한 AI 콘텐츠 제작", summary: "한 번 보고 지나가는 소재가 아니라 브랜드의 인상과 메시지가 채널마다 이어지도록 콘텐츠 체계를 만듭니다.", outputs: "브랜드 필름 · 키비주얼 · 숏폼 · 채널 패키지", fit: "신규 브랜드, 제품 캠페인, 유튜브 채널 운영" },
  { en: "DIGITAL PRODUCT", title: "브랜드와 기능을 사용하기 쉬운 화면으로 만듭니다.", indexes: [4, 5, 6], image: "/assets/service-digital.webp", alt: "한지와 수묵 산 앞에 놓인 노트북과 스마트폰", summary: "방문자와 사용자가 필요한 정보를 빠르게 찾고 자연스럽게 행동할 수 있도록 구조, 화면과 기능을 함께 설계합니다.", outputs: "홈페이지 · 반응형 웹 · 관리자 화면 · 모바일 앱", fit: "회사 소개, 예약·문의, 업무 시스템, 신규 앱 서비스" },
  { en: "INTERACTIVE EXPERIENCE", title: "사용자가 직접 참여하는 경험을 설계합니다.", indexes: [7, 8], image: "/assets/service-interactive.webp", alt: "옥빛 수묵 원과 함께 놓인 VR 헤드셋과 게임 컨트롤러", summary: "보기만 하는 콘텐츠를 넘어 이동, 선택과 반응이 있는 경험으로 브랜드와 교육 메시지를 전달합니다.", outputs: "게임 프로토타입 · Unity 콘텐츠 · VR 체험", fit: "전시, 교육, 브랜드 체험, 게임 서비스" },
];

export default function ServicesPage() {
  return (
    <main className="site-canvas subpage-canvas" id="top">
      <SubpageHero active="services" number="03" kicker="SERVICES" title="한 가지 제작부터, 여러 분야가 연결된 프로젝트까지." description="목적과 사용처에 맞춰 필요한 분야만 선택하거나 기획부터 제작·개발까지 통합해 진행할 수 있습니다." />
      {groups.map((group) => (
        <section className="detail-section paper-panel service-page-section" key={group.en} aria-labelledby={`service-${group.indexes[0]}`}>
          <div className="shell detail-heading-row"><div className="detail-heading"><p>{group.en}</p><h2 id={`service-${group.indexes[0]}`}>{group.title}</h2></div><a href="/contact#inquiry-form">이 분야 문의 ⟶</a></div>
          <div className="shell service-story">
            <figure className="editorial-figure"><img src={group.image} alt={group.alt} width="1536" height="1024" loading="lazy" /><figcaption><b>{group.en}</b><span>{group.title}</span></figcaption></figure>
            <div className="service-story-copy"><p>{group.summary}</p><dl><div><dt>제작 가능한 결과물</dt><dd>{group.outputs}</dd></div><div><dt>이런 프로젝트에 적합합니다</dt><dd>{group.fit}</dd></div></dl></div>
          </div>
          <div className="shell detailed-service-grid">
            {group.indexes.map((serviceIndex) => { const service = services[serviceIndex]; return <article key={service.ko}><div className="detailed-service-top"><b>{String(serviceIndex + 1).padStart(2, "0")}</b><span><ServiceIcon name={service.icon} /></span></div><h3>{service.ko}</h3><p>{service.text}</p><small>{service.scope}</small><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul><a href="/contact#inquiry-form">프로젝트 상담 ⟶</a></article>; })}
          </div>
        </section>
      ))}
      <section className="detail-section paper-panel ruled-section" aria-labelledby="choose-service-title"><div className="shell detail-heading-row"><div className="detail-heading"><p>HOW TO CHOOSE</p><h2 id="choose-service-title">어떤 서비스가 필요한지 몰라도 괜찮습니다.</h2></div></div><div className="shell choose-grid"><article><b>A</b><h3>단일 제작</h3><p>영상 한 편, 이미지 세트, 웹사이트처럼 필요한 결과물부터 시작합니다.</p></article><article><b>B</b><h3>통합 제작</h3><p>콘텐츠, 마케팅, 웹·앱 등 여러 분야를 하나의 방향으로 연결합니다.</p></article><article><b>C</b><h3>범위 설계</h3><p>목적, 일정과 예산 범위를 확인해 우선순위와 제작 단계를 제안합니다.</p></article></div></section>
      <section className="page-cta"><div className="shell"><div><p>PROJECT CONSULTATION</p><h2>프로젝트에 맞는 제작 방식을 함께 찾아보세요.</h2></div><a href="/contact#inquiry-form">문의하기 ⟶</a></div></section>
      <SiteFooter />
    </main>
  );
}
