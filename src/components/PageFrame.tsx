import Link from "next/link";
import { sections } from "@/content/site";

/** Inner-page frame: breadcrumb, green title banner and (optionally) the section sidebar. */
export function PageFrame({
  title,
  subtitle,
  section,
  current,
  children,
}: {
  title: string;
  subtitle?: string;
  section?: keyof typeof sections;
  current?: string;
  children: React.ReactNode;
}) {
  const sec = section ? sections[section] : undefined;
  return (
    <>
      <section className="pc-banner" style={{ backgroundImage: "linear-gradient(100deg, rgba(10,63,35,.93) 25%, rgba(10,63,35,.6)), url(/images/slider/slide-09.jpg)" }}>
        <div className="pc-wrap">
          <nav className="pc-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {sec && (
              <>
                <span aria-hidden>/</span>
                <Link href={sec.items[0].href}>{sec.title}</Link>
              </>
            )}
            <span aria-hidden>/</span>
            <span aria-current="page">{title}</span>
          </nav>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </section>
      <div className={`pc-wrap pc-inner${sec ? " has-side" : ""}`}>
        {sec && (
          <aside className="pc-side" aria-label={sec.title}>
            <p className="pc-side-title">{sec.title}</p>
            <ul>
              {sec.items.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className={i.href === current ? "active" : ""} aria-current={i.href === current ? "page" : undefined}>
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
        <div className="pc-content">{children}</div>
      </div>
    </>
  );
}
