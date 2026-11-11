import Image from "next/image";
import Link from "next/link";
import { bannerFor, type BannerKey } from "@/content/banners";
import { sections } from "@/content/site";

/** Inner-page frame: breadcrumb, green title banner and (optionally) the section sidebar. */
export function PageFrame({
  title,
  subtitle,
  section,
  current,
  banner,
  children,
}: {
  title: string;
  subtitle?: string;
  section?: keyof typeof sections;
  current?: string;
  banner?: BannerKey;
  children: React.ReactNode;
}) {
  const sec = section ? sections[section] : undefined;
  const b = bannerFor({ banner, section, current });
  return (
    <>
      <section className="pc-banner">
        <Image src={b.src} alt="" fill priority sizes="100vw" className="pc-banner-img" style={{ objectPosition: b.pos }} />
        <div className="pc-banner-shade" aria-hidden />
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
