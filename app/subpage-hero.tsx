import SiteHeader, { NavKey } from "./site-header";

export default function SubpageHero({ active, number, kicker, title, description }: { active: NavKey; number: string; kicker: string; title: string; description: string }) {
  return (
    <section className="subpage-hero paper-panel" aria-labelledby={`${active}-page-title`}>
      <SiteHeader active={active} />
      <div className="subpage-ink" aria-hidden="true" />
      <div className="shell subpage-hero-content">
        <div className="subpage-index"><span>{number}</span><i /></div>
        <div><p>{kicker}</p><h1 id={`${active}-page-title`}>{title}</h1></div>
        <p className="subpage-description">{description}</p>
      </div>
    </section>
  );
}
