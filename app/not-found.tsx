import Link from "next/link";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

export default function NotFound() {
  return (
    <main className="site-canvas subpage-canvas" id="top">
      <section className="subpage-hero paper-panel" aria-labelledby="not-found-title">
        <SiteHeader />
        <div className="subpage-ink" aria-hidden="true" />
        <div className="shell subpage-hero-content">
          <div className="subpage-index"><span>404</span><i /></div>
          <div><p>NOT FOUND</p><h1 id="not-found-title">페이지를 찾지 못했습니다.</h1></div>
          <p className="subpage-description">주소가 바뀌었거나 없는 페이지입니다. 홈으로 돌아가 다시 찾아 주세요.</p>
        </div>
      </section>
      <section className="page-cta">
        <div className="shell">
          <div><p>UNWOLDAM</p><h2>필요한 안내를 다시 찾아보세요.</h2></div>
          <div><Link href="/">홈으로 ⟶</Link><Link href="/contact">문의하기 ⟶</Link></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
