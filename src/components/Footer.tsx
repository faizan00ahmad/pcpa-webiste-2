import Image from "next/image";
import Link from "next/link";
import { nav, offices, site } from "@/content/site";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="pc-footer">
      <div className="pc-wrap pc-footer-grid">
        <div>
          <div className="pc-footer-brand">
            <Image src="/images/brand/favicon.png" alt="" width={48} height={48} />
            <strong>{site.fullName}</strong>
          </div>
          <p>{site.tagline}.</p>
        </div>
        <div>
          <h2>Quick links</h2>
          <ul>
            {nav
              .filter((n) => n.href !== "/")
              .map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            <li>
              <Link href="/complaints">Complaints &amp; Suggestions</Link>
            </li>
            <li>
              <Link href="/portal">Member Portal</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Membership</h2>
          <ul>
            <li>
              <Link href="/membership/apply">Apply for membership</Link>
            </li>
            <li>
              <Link href="/membership/fees">Fees</Link>
            </li>
            <li>
              <Link href="/membership/directory">Member directory</Link>
            </li>
            <li>
              <Link href="/elections">Elections</Link>
            </li>
            <li>
              <Link href="/downloads">Download centre</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul className="pc-footer-contact">
            <li>
              <Icon name="pin" size={16} /> <span>{offices.multan.address}</span>
            </li>
            <li>
              <Icon name="phone" size={16} /> <a href={`tel:${site.phone.replace(/-/g, "")}`}>{site.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={16} /> <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pc-footer-bar">
        <div className="pc-wrap pc-footer-bar-in">
          <span>{site.copyright}</span>
          <span>
            <Link href="/complaints/guidelines">Complaint guidelines</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
