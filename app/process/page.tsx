import type { Metadata } from "next";
import ServiceIcon from "../service-icon";
import SiteFooter from "../site-footer";
import { processSteps } from "../site-data";
import SubpageHero from "../subpage-hero";

export const metadata: Metadata = { title: "제작 과정 | 운월담 스튜디오", description: "상담과 방향 제안부터 제작·개발, 검수와 전달까지 운월담 스튜디오의 제작 과정을 안내합니다." };

const checkpoints = [
  { title: "시작 전", text: "목표, 필수 범위와 우선순위를 확인합니다." },
  { title: "방향 확정", text: "구성안과 시각·기능 기준을 확인합니다." },
  { title: "중간 공유", text: "진행 결과와 필요한 수정을 정리합니다." },
  { title: "최종 검수", text: "사용 환경 테스트와 전달 항목을 확인합니다." },
];

const processScenes = [
  { src: "/assets/concept-marketing.webp", label: "목표와 사용처 정리", alt: "브랜드 방향과 채널을 정리한 마케팅 콘셉트" },
  { src: "/assets/concept-ai-image.webp", label: "시각 방향과 구성 확인", alt: "제품의 소재와 분위기를 정리한 이미지 콘셉트" },
  { src: "/assets/concept-website.webp", label: "콘텐츠 제작과 기능 구현", alt: "노트북과 휴대폰의 반응형 웹사이트 화면" },
  { src: "/assets/concept-app.webp", label: "검수와 최종 전달", alt: "데스크톱 대시보드와 모바일 앱 화면" },
];

export default function ProcessPage() {
  return (
    <main className="site-canvas subpage-canvas" id="top">
      <SubpageHero active="process" number="05" kicker="PROCESS" title="필요한 만큼 선명하게, 과정은 단순하게." description="상담부터 검수와 전달까지 네 단계로 진행하며 프로젝트 성격에 따라 필요한 단계를 조정합니다." />
      <section className="detail-section paper-panel" aria-labelledby="process-list-title">
        <div className="shell detail-heading-row"><div className="detail-heading"><p>FOUR STEPS</p><h2 id="process-list-title">아이디어에서 결과물까지</h2></div><p>각 단계의 확인 기준과 결과물을 공유해 진행 상황과 다음 결정을 이해하기 쉽게 만듭니다.</p></div>
        <div className="shell process-visual">
          <figure className="editorial-figure"><img src="/assets/process-flow.webp" alt="빈 종이에서 스케치와 화면 설계를 거쳐 결과물이 완성되는 네 단계" width="1536" height="1024" /><figcaption><b>FROM IDEA TO DELIVERY</b><span>목표 정의, 방향 확인, 제작과 검수를 순서대로 연결합니다.</span></figcaption></figure>
          <div className="process-scene-grid">{processScenes.map((scene, index) => <figure key={scene.label}><img src={scene.src} alt={scene.alt} width="1200" height="800" loading="lazy" /><figcaption><b>{String(index + 1).padStart(2, "0")}</b><span>{scene.label}</span></figcaption></figure>)}</div>
        </div>
        <div className="shell process-page-list">{processSteps.map((step, index) => <article key={step.title}><div className="process-page-number"><b>{String(index + 1).padStart(2, "0")}</b><span><ServiceIcon name={step.icon} /></span></div><div><small>{step.en}</small><h3>{step.title}</h3><p>{step.detail}</p><strong>{step.output}</strong></div></article>)}</div>
      </section>
      <section className="detail-section paper-panel ruled-section" aria-labelledby="checkpoints-title"><div className="shell detail-heading-row"><div className="detail-heading"><p>CHECKPOINTS</p><h2 id="checkpoints-title">결정이 필요한 순간을 명확하게 공유합니다.</h2></div></div><div className="shell checkpoint-grid">{checkpoints.map((item, index) => <article key={item.title}><b>{String(index + 1).padStart(2, "0")}</b><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section className="detail-section paper-panel" aria-labelledby="before-title"><div className="shell editorial-layout"><div className="detail-heading"><p>BEFORE WE BEGIN</p><h2 id="before-title">준비하면 좋은 정보</h2></div><div className="prepare-list"><span>프로젝트 목적과 사용처</span><span>주요 대상 사용자</span><span>필요한 결과물 또는 기능</span><span>희망 일정과 예산 범위</span><span>참고 이미지·영상·사이트</span><p>정해지지 않은 항목은 상담 과정에서 함께 정리합니다.</p></div></div></section>
      <section className="page-cta"><div className="shell"><div><p>START A PROJECT</p><h2>아이디어의 시작부터 완성까지 함께합니다.</h2></div><a href="/contact#inquiry-form">프로젝트 문의 ⟶</a></div></section>
      <SiteFooter />
    </main>
  );
}
