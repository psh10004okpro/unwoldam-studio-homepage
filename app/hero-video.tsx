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

    startPlayback();
    video.addEventListener("loadeddata", startPlayback);
    video.addEventListener("canplay", startPlayback);
    document.addEventListener("visibilitychange", resumeWhenVisible);
    window.addEventListener("pageshow", startPlayback);

    return () => {
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
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
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
          <source src="/assets/hero-film-v2.webm" type="video/webm" />
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
