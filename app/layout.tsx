import type { Metadata } from "next";
import "@fontsource/noto-sans-kr/korean-400.css";
import "@fontsource/noto-sans-kr/korean-600.css";
import "@fontsource/noto-sans-kr/korean-700.css";
import "@fontsource/noto-serif-kr/korean-400.css";
import "@fontsource/noto-serif-kr/korean-500.css";
import "@fontsource/noto-serif-kr/korean-600.css";
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
