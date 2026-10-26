import Link from "next/link";
import { studio } from "./site-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <span className="footer-id">{studio.nameKo} · 사업자등록번호 {studio.businessNumber}</span>
        <nav className="footer-legal" aria-label="법적 고지">
          <Link href="/privacy">개인정보처리방침</Link>
          <Link href="/terms">이용약관</Link>
        </nav>
        <span className="footer-copy">© 2026 {studio.nameEn}. ALL RIGHTS RESERVED.</span>
        <Link className="footer-top" href="#top">TOP ↑</Link>
      </div>
    </footer>
  );
}
