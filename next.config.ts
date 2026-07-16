import type { NextConfig } from "next";

// STATIC_EXPORT=1 일 때만 정적 export로 빌드한다 (Coolify/Docker 배포용).
// - 이 사이트는 API 라우트/서버액션/D1이 없어 완전 정적으로 서빙 가능하다.
// - tsconfig.export.json 은 Cloudflare Workers 전용 파일(db/, worker/)을 타입체크에서 제외한다.
// 기본 동작(OpenAI Sites의 vinext 빌드)에는 영향을 주지 않는다.
const staticExport: NextConfig =
  process.env.STATIC_EXPORT === "1"
    ? {
        output: "export",
        images: { unoptimized: true },
        typescript: { tsconfigPath: "tsconfig.export.json" },
      }
    : {};

const nextConfig: NextConfig = {
  ...staticExport,
};

export default nextConfig;
