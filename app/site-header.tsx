"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export type NavKey = "home" | "about" | "services" | "portfolio" | "process" | "contact";

const navLinks: { id: NavKey; href: string; label: string }[] = [
  { id: "home", href: "/", label: "홈" },
  { id: "about", href: "/about", label: "회사 소개" },
  { id: "services", href: "/services", label: "서비스" },
  { id: "portfolio", href: "/portfolio", label: "포트폴리오" },
  { id: "process", href: "/process", label: "제작 과정" },
  { id: "contact", href: "/contact", label: "문의" },
];

export default function SiteHeader({ active = "home" }: { active?: NavKey }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    setMenuOpen(false);
    if (menuRef.current) menuRef.current.open = false;
  }

  return (
    <header className="site-header shell">
      <Link className="brand" href="/" onClick={closeMenu} aria-label="운월담 스튜디오 홈">
        <span className="brand-mark" aria-hidden="true" />
        <span className="brand-copy"><strong>운월담 스튜디오</strong><small>UNWOLDAM STUDIO</small></span>
      </Link>
      <nav className="main-nav" aria-label="주요 메뉴">
        {navLinks.map((item) => <Link key={item.id} className={active === item.id ? "active" : undefined} aria-current={active === item.id ? "page" : undefined} href={item.href}>{item.label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link className="header-cta" href="/contact#inquiry-form">프로젝트 문의</Link>
        <details ref={menuRef} className="mobile-menu" onToggle={(event) => setMenuOpen(event.currentTarget.open)}>
          <summary aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={menuOpen}><span /><span /><span /></summary>
          <nav aria-label="모바일 메뉴">
            {navLinks.map((item) => <Link key={item.id} href={item.href} aria-current={active === item.id ? "page" : undefined} onClick={closeMenu}>{item.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
