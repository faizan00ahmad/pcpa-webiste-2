import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { GalleryStrip } from "@/components/GalleryStrip";
import { IntroVideo } from "@/components/IntroVideo";
import { PhotoCycle } from "@/components/PhotoCycle";
import { PersonCard } from "@/components/blocks";
import { documents } from "@/content/documents";
import { keyDates } from "@/content/events";
import { news } from "@/content/news";
import { cabinet } from "@/content/people";
import { offices, site } from "@/content/site";

const actions: { title: string; text: string; href: string; icon: IconName }[] = [
  { title: "Become a Member", text: "Apply as a Corporate or Associate member.", href: "/membership/apply", icon: "form" },
  { title: "Download Centre", text: "Forms, lists, circulars and records.", href: "/downloads", icon: "download" },
  { title: "Meetings & Elections", text: "Key dates, decisions and voter lists.", href: "/meetings", icon: "calendar" },
  { title: "Complaints & Suggestions", text: "Submit and track by reference number.", href: "/complaints", icon: "chat" },
];

const quick: { title: string; href: string; icon: IconName }[] = [
  { title: "Membership Fees", href: "/membership/fees", icon: "rs" },
  { title: "Member Directory", href: "/membership/directory", icon: "users" },
  { title: "Executive Committee", href: "/leadership/executive-committee", icon: "award" },
  { title: "Elections", href: "/elections", icon: "vote" },
  { title: "Renew Membership", href: "/membership/renew", icon: "renew" },
  { title: "Contact Secretariat", href: "/contact", icon: "mail" },
];

export default function Home() {
  const latest = documents.filter((d) => d.status === "Current").slice(0, 6);
  return (
    <>
      <IntroVideo />
      <section className="pc-hero" aria-label="Welcome">
        <div className="pc-hero-bg">
          <PhotoCycle
            slides={[
              { src: "/images/farm/tractor-tilling-field.jpg", pos: "50% 25%" },
              { src: "/images/slider/slide-07.jpg", pos: "50% 30%" },
              { src: "/images/slider/slide-09.jpg", pos: "50% 35%" },
            ]}
          />
        </div>
        <div className="pc-hero-shade" />
        <div className="pc-wrap pc-hero-copy">
          <p className="pc-eyebrow">Pakistan Crop Protection Association</p>
          <h1>Representing and strengthening Pakistan&apos;s crop protection industry</h1>
          <p>Membership, leadership, meetings, elections and official documents of the Association in one place.</p>
          <div className="pc-actions">
            <Link href="/membership/apply" className="pc-btn pc-btn-gold">
              Apply for membership
            </Link>
            <Link href="/about" className="pc-btn pc-btn-ghost">
              About PCPA
            </Link>
          </div>
        </div>
      </section>

      <div className="pc-wrap pc-floaters">
        {actions.map((a) => (
          <Link key={a.href} href={a.href} className="pc-card pc-tile pc-floater">
            <span className="pc-icon">
              <Icon name={a.icon} size={24} />
            </span>
            <strong>{a.title}</strong>
            <span className="pc-muted">{a.text}</span>
          </Link>
        ))}
      </div>

      <section className="pc-section">
        <div className="pc-wrap pc-two">
          <div>
            <h2 className="pc-h2">PCPA at a Glance</h2>
            <div className="pc-grid pc-grid-2">
              <div className="pc-stat">
                <strong>2</strong>
                <span>Offices – Multan &amp; Lahore</span>
              </div>
              <div className="pc-stat">
                <strong>2</strong>
                <span>Membership classes</span>
              </div>
              <div className="pc-stat">
                <strong>2026-28</strong>
                <span>Executive Committee term</span>
              </div>
              <div className="pc-stat">
                <strong>{documents.length}+</strong>
                <span>Documents available online</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="pc-h2">Key Dates &amp; Meetings</h2>
            <ol className="pc-timeline pc-card">
              {keyDates.map((k) => (
                <li key={k.sort}>
                  <time dateTime={k.sort}>{k.date}</time>
                  <strong>{k.title}</strong>
                </li>
              ))}
            </ol>
            <Link href="/meetings" className="pc-link">
              View all meetings <Icon name="arrow" size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pc-section pc-section-alt">
        <div className="pc-wrap">
          <div className="pc-section-head">
            <h2 className="pc-h2">Our Leadership</h2>
            <Link href="/leadership/cabinet" className="pc-link">
              View all <Icon name="arrow" size={14} />
            </Link>
          </div>
          <div className="pc-grid pc-grid-6 pc-people">
            {cabinet.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="pc-section">
        <div className="pc-wrap">
          <div className="pc-section-head">
            <h2 className="pc-h2">Photo Gallery</h2>
            <Link href="/gallery" className="pc-link">
              View all photos <Icon name="arrow" size={14} />
            </Link>
          </div>
          <GalleryStrip />
        </div>
      </section>

      <section className="pc-section pc-section-alt">
        <div className="pc-wrap pc-two">
          <div>
            <h2 className="pc-h2">Quick Links</h2>
            <div className="pc-grid pc-grid-2 pc-quick">
              {quick.map((q) => (
                <Link key={q.href} href={q.href} className="pc-card pc-quick-link">
                  <Icon name={q.icon} size={20} /> <span>{q.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="pc-section-head">
              <h2 className="pc-h2">Latest Downloads</h2>
              <Link href="/downloads" className="pc-link">
                View all <Icon name="arrow" size={14} />
              </Link>
            </div>
            <ul className="pc-doclist">
              {latest.map((d) => (
                <li key={d.id} className="pc-doclink">
                  <Icon name="pdf" size={20} />
                  <a href={d.file} target="_blank" rel="noopener noreferrer">
                    {d.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pc-section">
        <div className="pc-wrap">
          <div className="pc-section-head">
            <h2 className="pc-h2">Latest News</h2>
            <Link href="/news" className="pc-link">
              All news <Icon name="arrow" size={14} />
            </Link>
          </div>
          <div className="pc-grid pc-grid-2">
            {news.map((n) => (
              <Link key={n.slug} href={n.path} className="pc-card pc-news">
                <Image src={n.image} alt="" width={640} height={360} sizes="(max-width:800px) 100vw, 400px" />
                <div>
                  <time className="pc-muted">{n.published}</time>
                  <h3 className="pc-h4">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pc-cta">
        <div className="pc-wrap pc-cta-in">
          <div>
            <h2>Need help from the Secretariat?</h2>
            <p>
              {offices.multan.name}: {site.phone} · {site.email}
            </p>
          </div>
          <Link href="/contact" className="pc-btn pc-btn-light">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
