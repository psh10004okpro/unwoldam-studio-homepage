import type { Metadata } from "next";
import ContactSection from "../contact-section";
import SiteFooter from "../site-footer";
import { serviceGroups } from "../site-data";
import SubpageHero from "../subpage-hero";

export const metadata: Metadata = { title: "프로젝트 문의 | 운월담 스튜디오", description: "운월담 스튜디오에 AI 콘텐츠, 웹·앱, 게임과 VR 프로젝트 제작을 문의하세요." };

const faqs = [
  { q: "분야를 정하지 못했는데 문의해도 되나요?", a: "네. 목적과 사용처를 중심으로 필요한 분야와 우선순위를 함께 정리합니다." },
  { q: "여러 서비스를 함께 의뢰할 수 있나요?", a: "네. 영상·이미지·마케팅 또는 웹·앱·콘텐츠처럼 여러 분야를 연결해 진행할 수 있습니다." },
  { q: "포트폴리오 이미지는 실제 프로젝트인가요?", a: "아닙니다. 현재 게시된 이미지는 제작 가능 범위를 보여주는 콘셉트 스터디입니다." },
];

const contactSteps = [
  { number: "01", title: "내용 확인", text: "목적, 필요한 결과물과 희망 일정을 먼저 살펴봅니다." },
  { number: "02", title: "범위 정리", text: "필요한 분야와 우선순위를 정리해 진행 방법을 제안합니다." },
  { number: "03", title: "제작 협의", text: "범위와 일정이 맞으면 세부 기획과 제작을 시작합니다." },
];

export default function ContactPage() {
  return (
    <main className="site-canvas subpage-canvas" id="top">
      <SubpageHero active="contact" number="06" kicker="START A PROJECT" title="아직 구체적이지 않은 아이디어도 괜찮습니다." description="목적과 사용처를 알려주시면 필요한 제작 분야와 범위를 함께 정리합니다." />
      <section className="detail-section paper-panel" aria-labelledby="contact-start-title">
        <div className="shell contact-story">
          <figure className="editorial-figure"><img src="/assets/contact-letter.webp" alt="한지 위에 놓인 빈 편지지와 봉투, 붓과 주홍 인장" width="1536" height="1024" /><figcaption><b>YOUR IDEA, OUR NEXT STEP</b><span>정리되지 않은 생각도 편하게 전달해 주세요.</span></figcaption></figure>
          <div><div className="detail-heading"><p>WHAT HAPPENS NEXT</p><h2 id="contact-start-title">문의 후에는 이렇게 진행합니다.</h2></div><p className="contact-story-intro">제작 분야가 정해지지 않아도 목적과 사용처가 있으면 시작할 수 있습니다. 필요한 범위를 함께 정리합니다.</p><div className="contact-step-list">{contactSteps.map((item) => <article key={item.number}><b>{item.number}</b><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div>
        </div>
      </section>
      <section className="detail-section paper-panel" aria-labelledby="contact-guide-title"><div className="shell detail-heading-row"><div className="detail-heading"><p>PROJECT FIELDS</p><h2 id="contact-guide-title">어떤 분야가 필요한지 살펴보세요.</h2></div></div><div className="shell field-grid">{serviceGroups.map((group) => <article key={group.number}><b>{group.number}</b><span>{group.list}</span><h3>{group.title}</h3><p>{group.text}</p></article>)}</div></section>
      <ContactSection defaultOpen />
      <section className="detail-section paper-panel" aria-labelledby="faq-title"><div className="shell detail-heading-row"><div className="detail-heading"><p>INQUIRY GUIDE</p><h2 id="faq-title">문의 전에 참고해 주세요.</h2></div></div><div className="shell faq-list">{faqs.map((item) => <details key={item.q}><summary>{item.q}<span aria-hidden="true">＋</span></summary><p>{item.a}</p></details>)}</div></section>
      <SiteFooter />
    </main>
  );
}
