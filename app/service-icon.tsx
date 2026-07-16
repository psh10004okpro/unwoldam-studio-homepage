export default function ServiceIcon({ name }: { name: string }) {
  let icon;
  switch (name) {
    case "AI_FILM": icon = <><rect x="5" y="9" width="22" height="15" rx="2.5" /><circle cx="16" cy="16.5" r="4" /><path d="M10 9l2-3h8l2 3" /></>; break;
    case "AI_IMAGE": icon = <><rect x="5" y="6" width="22" height="20" rx="2.5" /><circle cx="21.5" cy="11.5" r="2" /><path d="M7.5 23l6.5-7 4 4 2.5-2.5 4 5.5" /></>; break;
    case "YOUTUBE": icon = <><rect x="4.5" y="7" width="23" height="18" rx="4" /><path d="M13.5 12l7 4-7 4z" /></>; break;
    case "MARKETING": icon = <><path d="M6 25V8M6 25h21" /><path d="M9 21l5-6 4 3 7-9" /><path d="M20.5 9H25v4.5" /></>; break;
    case "WEBSITE": icon = <><rect x="4.5" y="6" width="23" height="20" rx="2" /><path d="M4.5 11h23M9 8.5h.01M12 8.5h.01" /><path d="M9 15h14M9 19h9M9 23h11" /></>; break;
    case "WEBAPP": icon = <><path d="M16 4l10 5.5v12L16 28 6 22V9.5z" /><path d="M6 9.5L16 15l10-5.5M16 15v13" /><path d="M11 6.8l10 5.7" /></>; break;
    case "MOBILE": icon = <><rect x="9" y="3.5" width="14" height="25" rx="3" /><path d="M9 8h14M9 23.5h14" /><circle cx="16" cy="26" r="0.8" /></>; break;
    case "GAME": icon = <><path d="M10.5 11h11c3.4 0 5.5 2.8 5.5 6.2v3.6c0 2.6-2.7 4.1-4.7 2.3l-3-2.6h-6.6l-3 2.6C7.7 24.9 5 23.4 5 20.8v-3.6c0-3.4 2.1-6.2 5.5-6.2z" /><path d="M9 16h5M11.5 13.5v5" /><circle cx="21" cy="15" r="1" /><circle cx="24" cy="18" r="1" /></>; break;
    case "VR": icon = <><path d="M6 11.5h20l2 5.5-2.5 6h-6l-3.5-4-3.5 4h-6L4 17z" /><circle cx="10.5" cy="17" r="2.5" /><circle cx="21.5" cy="17" r="2.5" /><path d="M5 13L2.5 15.5M27 13l2.5 2.5" /></>; break;
    default: icon = <circle cx="16" cy="16" r="10" />;
  }
  return <svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>;
}
