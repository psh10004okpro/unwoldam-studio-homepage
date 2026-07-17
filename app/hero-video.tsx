"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startPlayback = () => {
      if (userPausedRef.current || document.hidden) return;

      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute("muted", "");
      void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    };

    const resumeWhenVisible = () => {
      if (!document.hidden) startPlayback();
    };

    // 첫 화면 로딩과 경쟁하지 않도록 페이지 로드가 끝난 뒤에 시작한다.
    // preload="none" + autoPlay 미사용이므로 play() 시점에 비로소 다운로드가 시작된다
    // (초기 로드 시 영상 트래픽 0 — 포스터만 표시됨).
    if (document.readyState === "complete") startPlayback();
    else window.addEventListener("load", startPlayback, { once: true });

    video.addEventListener("loadeddata", startPlayback);
    video.addEventListener("canplay", startPlayback);
    document.addEventListener("visibilitychange", resumeWhenVisible);
    window.addEventListener("pageshow", startPlayback);

    return () => {
      window.removeEventListener("load", startPlayback);
      video.removeEventListener("loadeddata", startPlayback);
      video.removeEventListener("canplay", startPlayback);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
      window.removeEventListener("pageshow", startPlayback);
    };
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      userPausedRef.current = false;
      video.muted = true;
      void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  }

  return (
    <>
      <div className="hero-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          muted
          loop
          playsInline
          preload="none"
          poster="/assets/hero-film-v2-poster.jpg"
          tabIndex={-1}
          disablePictureInPicture
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onCanPlay={(event) => setIsPlaying(!event.currentTarget.paused)}
          onError={() => setIsPlaying(false)}
        >
          <source media="(max-width: 700px)" src="/assets/hero-film-v2-mobile.mp4" type="video/mp4" />
          <source src="/assets/hero-film-v2.mp4" type="video/mp4" />
        </video>
      </div>
      <button
        className="hero-film-control"
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "메인 영상 일시정지" : "메인 영상 재생"}
      >
        <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
        {isPlaying ? "FILM PAUSE" : "FILM PLAY"}
      </button>
    </>
  );
}
