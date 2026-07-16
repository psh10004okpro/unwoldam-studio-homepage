# 운월담 스튜디오 홈페이지 — Next.js 정적 export를 nginx로 서빙
# 이 사이트는 API 라우트/서버액션/D1이 없어 완전 정적으로 빌드된다.

# ---------- build ----------
FROM node:22-slim AS build
WORKDIR /app

# 의존성 먼저 (레이어 캐시)
COPY package.json package-lock.json .npmrc ./
RUN npm ci --no-audit --no-fund

# 소스 복사 후 정적 export 빌드 (out/ 생성)
COPY . .
ENV STATIC_EXPORT=1
ENV NEXT_TELEMETRY_DISABLED=1
RUN npx next build

# ---------- serve ----------
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html

# Coolify(Traefik)가 이 포트로 프록시
EXPOSE 80
