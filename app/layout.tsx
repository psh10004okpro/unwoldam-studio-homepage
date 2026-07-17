import type { Metadata } from "next";
// unicode-range 분할 CSS 사용 (korean-*.css 통짜 대신).
// 브라우저가 페이지에 실제 등장하는 글자 범위의 조각만 내려받는다.
// 측정: 슬라이스 124개 중 19개만 필요 → weight당 529KB → 215KB (-59%).
// 글자가 추가돼도 해당 범위를 자동으로 받아오므로 안전하다.
import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/600.css";
import "@fontsource/noto-sans-kr/700.css";
import "@fontsource/noto-serif-kr/400.css";
import "@fontsource/noto-serif-kr/500.css";
import "@fontsource/noto-serif-kr/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "운월담 스튜디오 | Creative Technology Studio",
  description: "AI 영상·이미지, 유튜브 운영, 마케팅, 웹·앱, 게임, VR 콘텐츠를 제작하는 운월담 스튜디오입니다.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
