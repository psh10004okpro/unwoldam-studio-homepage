import ContactSection from "./contact-section";
import HeroVideo from "./hero-video";
import ServiceIcon from "./service-icon";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { portfolio, processSteps, serviceGroups, services } from "./site-data";

export default function Home() {
  return (
    <main className="site-canvas">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <HeroVideo />
        <div className="hero-mist" aria-hidden="true" />

        <SiteHeader active="home" />

        <div className="hero-rail" aria-hidden="true"><span>01</span><i /><b /><b /><b /><b /></div>
        <div className="hero-copy shell">
          <div className="hero-copy-inner">
            <p className="hero-kicker">CREATIVE TECHNOLOGY STUDIO</p>
            <h1 id="hero-title">기술은 깊고,<br />상상은 담백하게.<em>雲</em></h1>
            <p className="hero-description">운월담 스튜디오는 AI와 크리에이티브가 만나<br />브랜드의 본질을 시각적으로 빚어내는 디지털 제작 스튜디오입니다.</p>
            <div className="hero-buttons"><a className="brush-button" href="/contact#inquiry-form">프로젝트 문의하기 <span>⟶</span></a><a className="line-button" href="/portfolio">포트폴리오 보기 <span>⟶</span></a></div>
          </div>
        </div>
      </section>

      <section className="about paper-panel" id="about" aria-labelledby="about-title">
        <div className="shell">
          <div className="about-layout">
            <div className="about-heading"><p>ABOUT UNWOLDAM</p><span>02</span><h2 id="about-title">상상과 기술을 연결해,<br />필요한 결과를 만듭니다.</h2></div>
            <div className="about-intro">
              <p>운월담 스튜디오는 AI 영상과 이미지부터 유튜브, 마케팅, 웹사이트, 웹앱, 모바일 앱, 게임, VR 콘텐츠까지 기획·디자인·개발을 하나의 흐름으로 연결하는 디지털 크리에이티브 스튜디오입니다.</p>
              <p>기술이나 형식을 먼저 정하기보다 프로젝트의 목적과 사용자를 이해하고, 필요한 제작 범위를 현실적으로 설계합니다. 하나의 콘텐츠부터 여러 분야가 결합된 프로젝트까지 목적에 맞는 방식으로 함께합니다.</p>
              <div className="about-actions"><a href="/services">서비스 살펴보기 ⟶</a><a href="/contact#inquiry-form">프로젝트 문의 ⟶</a></div>
            </div>
          </div>
          <div className="about-values">
            <article><b>01</b><h3>목표에서 시작합니다</h3><p>누구에게 어떤 경험과 변화를 만들 것인지 확인한 뒤 적합한 콘텐츠와 기술을 선택합니다.</p></article>
            <article><b>02</b><h3>여러 분야를 연결합니다</h3><p>영상, 이미지, 마케팅, 웹, 앱, 게임과 VR이 흩어지지 않도록 일관된 경험을 설계합니다.</p></article>
            <article><b>03</b><h3>과정이 보이는 협업</h3><p>기획, 방향 확인, 제작, 검수와 전달의 기준을 단계마다 공유해 수정과 결정을 명확하게 이어갑니다.</p></article>
          </div>
        </div>
      </section>

      <section className="services paper-panel" id="services" aria-labelledby="services-title">
        <div className="shell">
          <div className="compact-heading"><div><p>SERVICE</p><h2 id="services-title">아이디어를 현실로, 필요한 제작을 하나로.</h2></div><span>한 가지 분야부터 여러 서비스가 연결된 통합 제작까지 가능합니다.</span></div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.ko}>
                <div className="service-icon"><ServiceIcon name={service.icon} /></div><h3>{service.ko}</h3><p>{service.text}</p><small>{service.scope}</small>
                <footer><span>{String(index + 1).padStart(2, "0")}</span><a href="/contact#inquiry-form" aria-label={`${service.ko} 문의하기`}>⟶</a></footer>
              </article>
            ))}
          </div>
          <div className="service-detail-grid">
            {serviceGroups.map((group) => <article key={group.number}><b>{group.number}</b><div><span>{group.list}</span><h3>{group.title}</h3><p>{group.text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="portfolio paper-panel" id="portfolio" aria-labelledby="portfolio-title">
        <div className="shell">
          <div className="portfolio-heading"><div><p>PORTFOLIO</p><h2 id="portfolio-title">분야별 제작 방향을 미리 살펴보세요.</h2></div><a href="/portfolio">전체 콘셉트 보기 ⟶</a></div>
          <div className="portfolio-grid">
            {portfolio.map((item, index) => (
              <figure className="portfolio-card" key={item.title}>
                <img src={item.src} alt={item.alt} width="1200" height="800" loading="lazy" decoding="async" />
                <figcaption><strong>{item.title}</strong><span>{item.tag}</span><small>{item.text}</small></figcaption>{index === 0 && <i className="play-mark" aria-hidden="true">▶</i>}
              </figure>
            ))}
          </div>
          <aside className="portfolio-notice"><b>CONCEPT STUDY</b><p>위 이미지는 운월담 스튜디오의 제작 가능 범위와 시각적 방향을 보여주는 콘셉트 예시입니다. 실제 프로젝트는 목적과 브랜드에 맞춰 새롭게 설계합니다.</p></aside>
        </div>
      </section>

      <section className="process paper-panel" id="process" aria-labelledby="process-title">
        <div className="shell process-heading"><div><p>PROCESS</p><h2 id="process-title">필요한 만큼 선명하게, 과정은 단순하게.</h2></div><span>상담부터 검수와 전달까지 네 단계로 진행합니다.</span></div>
        <div className="shell process-band">
          <div className="studio-promise"><span className="promise-mark" aria-hidden="true" /><h3>아이디어의 시작부터<br />완성까지 함께합니다.</h3></div>
          {processSteps.map((step, index) => (
            <article className="process-step" key={step.title}><span className="process-icon"><ServiceIcon name={step.icon} /></span><div><b>{String(index + 1).padStart(2, "0")} · {step.en}</b><h3>{step.title}</h3><p>{step.text}</p><small>{step.output}</small></div></article>
          ))}
        </div>
      </section>

      <ContactSection />

      <SiteFooter />
    </main>
  );
}
