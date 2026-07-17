# 운월담 스튜디오 홈페이지

작업 규칙·배포 방식·**되돌리면 안 되는 성능 최적화**는 **[AGENTS.md](AGENTS.md)** 에 정리되어 있다.
코드를 수정하기 전에 반드시 읽을 것.

빠른 요약:

- **완전 정적 사이트**(API·서버액션·DB 없음). `main`에 push하면 **Coolify가 자동 배포**한다(별도 배포 명령 없음).
- 라이브: https://rex62442z0abdmk265yh1qvs.64.176.227.93.sslip.io
- 배포 경로: Docker에서 `STATIC_EXPORT=1 npx next build` → `out/`을 nginx가 서빙(런타임 Node 없음). 포트 80 고정.
- ⚠️ **되돌리지 말 것**: 영상 `preload="none"`+autoPlay 없음 / 폰트 unicode-range 분할(`*.css`, `korean-*.css` 아님) / 이미지 현행 유지. 상세는 AGENTS.md 성능 섹션.
- 커밋 전 `STATIC_EXPORT=1 npx next build`로 검증할 것.
- 서버·자격증명: `i:\SERVER\ACCESS.md` §13.
