# 운월담 스튜디오 홈페이지 — 작업 가이드

> 코드를 수정하기 전에 이 문서를 읽으세요. 특히 **성능 섹션은 되돌리면 안 되는 항목**입니다.

## 이 저장소는 무엇인가

- 운월담 스튜디오 **공식 홈페이지**(마케팅 사이트). **완전 정적** — API 라우트·서버액션·DB 없음.
- 페이지: `/` `/about` `/services` `/portfolio` `/process` `/contact` (+404). 문구·콘텐츠 대부분은 `app/site-data.ts`.
- 문의 폼(`app/contact-form.tsx`)은 **클라이언트 전용**이다 — 서버로 전송하지 않고 클립보드에 복사한다.
- 원본은 **vinext 스타터**(Cloudflare Worker용 Next.js) + OpenAI Sites 템플릿(`.openai/hosting.json`). **D1/R2는 사용하지 않는다**(둘 다 `null`). `db/`·`worker/`·`examples/`는 템플릿 잔재로, 사이트 어디에서도 import하지 않는다.

## 배포

**`main`에 push하면 Coolify가 자동 배포한다.** 별도 배포 명령·CLI 없음. 반영까지 약 1~3분.

- 라이브: https://rex62442z0abdmk265yh1qvs.64.176.227.93.sslip.io
- 방식: Docker 멀티스테이지 — `node:22`에서 `STATIC_EXPORT=1 npx next build` → 결과 `out/`을 `nginx:alpine`이 서빙. **런타임에 Node 프로세스 없음.**
- 포트 **80**(nginx). ⚠️ Coolify의 Traefik 라벨은 앱 생성 시 값에 고정되므로 **포트를 바꾸지 말 것**(바꾸면 502).
- 도메인: 미연결(sslip.io 사용 중). 연결 시 가비아 DNS에 A레코드 `@`/`www` → `64.176.227.93` 추가 후 Coolify Domains에 `https://unwoldamstudio.com` 입력(루트·www 모두 비어 있음을 확인함).
- 서버·자격증명 등 운영 정보: 로컬 워크스페이스 `i:\SERVER\ACCESS.md` **§13**.

## 빌드 경로가 두 개다 (둘 다 유지할 것)

1. **OpenAI Sites / Codex**: `npm run build` (= `scripts/build-verified.sh`) → vinext Worker 아티팩트
2. **Coolify**: `Dockerfile`이 `STATIC_EXPORT=1 npx next build` → 정적 `out/`

이를 위해:
- `next.config.ts`는 **`STATIC_EXPORT=1`일 때만** `output:"export"`를 켠다 → 1번 빌드가 깨지지 않는다. **이 환경변수 게이트를 제거하지 말 것.**
- `tsconfig.export.json`은 정적 빌드에서 Cloudflare 전용 파일(`db/`, `worker/`, `examples/`)을 타입체크에서 제외한다. `db/index.ts`가 `cloudflare:workers`를 import해 표준 `next build`가 실패하기 때문이다. **삭제하지 말 것.**

## ⚡ 성능 — 되돌리지 말 것

2026-07-17에 실측 기반으로 최적화함. **첫 화면 전송량 ~17MB → ~2.6MB(-85%)**. 아래를 되돌리면 성능이 무너진다.

### 영상 (`app/hero-video.tsx`) — 원래 병목이었음

- **`preload="none"` 유지. `autoPlay` 속성을 추가하지 말 것.** 페이지 `load` 이후 JS가 재생을 시작한다 → 첫 화면 영상 트래픽 **0**(포스터 70KB만 표시).
- `preload="auto"`나 `autoPlay`를 되살리면 **11.9MB가 초기 로딩을 막는다**(수정 전의 실제 문제였음).
- `hero-film-v2.webm`은 **삭제됨**. `<source>` 순서상 mp4가 먼저라 **어떤 브라우저도 받지 않던 죽은 11.36MB**였다. 다시 추가하지 말 것.
- 영상 교체 시 인코딩 규칙:
  ```bash
  ffmpeg -i 원본.mp4 -c:v libx264 -crf 32 -preset slow -profile:v high \
    -pix_fmt yuv420p -an -movflags +faststart hero-film-v2.mp4
  ```
  - CRF 32는 원본과 **육안 구별 불가**를 프레임 비교로 확인함. 720p 축소는 눈에 띄게 뭉개져 **기각**했다(1080p 유지).
  - `-an`(오디오 없음), `-movflags +faststart`(즉시 재생 시작) 필수.
  - 현재: 데스크톱 1080p **4.15MB**, 모바일 720×1280 **2.67MB**, 포스터 `hero-film-v2-poster.jpg`.

### 폰트 (`app/layout.tsx`)

- **`@fontsource/*/400.css` 형태(unicode-range 분할)를 유지할 것. `korean-400.css`(통짜)로 되돌리지 말 것.**
- 브라우저가 페이지에 실제 등장하는 글자의 조각만 받는다: 744개 슬라이스 중 **114개만** → **4.39MB → 1.82MB(-59%)**. 디자인 변화 없음.
- **수동 서브셋 금지.** 글자를 추가하면 깨진다. 분할 방식은 새 글자도 자동으로 대응한다.

### 이미지

- **이미 최적이다. 손대지 말 것.** 전부 WebP(최대 140KB), `<img>`에 `width`/`height`/`loading="lazy"`/`decoding="async"` 적용됨.
- 새 이미지 추가 시 같은 규칙을 따를 것: WebP + `width`/`height` 명시 + `loading="lazy"`.

## 로컬 개발

```bash
npm ci                            # 의존성 (Node >= 22.13)
npm run dev                       # vite/vinext 개발 서버
STATIC_EXPORT=1 npx next build    # Coolify와 동일한 정적 빌드 검증 → out/
```

## 규칙

- 비밀값(API키·비밀번호)을 저장소에 넣지 말 것.
- 4GB 서버에서 여러 앱이 함께 돈다 — 무거운 런타임 의존성 추가를 지양할 것.
- **커밋 전 `STATIC_EXPORT=1 npx next build`로 정적 빌드가 깨지지 않는지 확인할 것** (이게 실제 배포 경로다).
