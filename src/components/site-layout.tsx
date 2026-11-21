import { Link, Outlet } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import logo from "@/assets/logo.png";

const primaryNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/therapists", label: "Our Therapists" },
] as const;

const footerNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/therapists", label: "Our Therapists" },
  { to: "/speaking", label: "Speaking & Workshops" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
  { to: "/careers", label: "Careers" },
] as const;

function TopBar() {
  return (
    <div className="bg-topbar text-topbar-foreground text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2.5 text-center">
        <span className="font-medium">Accepting new clients:</span>{" "}
        <a href="tel:13659770155" className="hover:underline">
          1(365)-977-0155
        </a>{" "}
        <span className="opacity-70 mx-1">|</span>{" "}
        <a href="mailto:info@sparkspsychotherapy.ca" className="hover:underline">
          info@sparkspsychotherapy.ca
        </a>
      </div>
    </div>
  );
}

function Logo({
  variant = "default",
  light = false,
}: {
  variant?: "default" | "header";
  light?: boolean;
}) {
  const logoSize = variant === "header" ? "h-24 md:h-32 w-auto" : "h-20 w-auto";
  return (
    <Link
      to="/"
      className="flex items-center leading-none"
      aria-label="Sparks Psychotherapy Services - home"
    >
      <img
        src={logo}
        alt="Sparks Psychotherapy Services"
        width={616}
        height={312}
        className={`${logoSize} ${light ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  return (
    <header className="bg-background relative z-10">
      <div className="mx-auto max-w-7xl px-6 h-[180px] md:h-[240px] grid grid-cols-2 xl:grid-cols-[1fr_auto_1fr] gap-5 items-center">
        <nav className="hidden xl:flex items-center gap-6 text-sm tracking-wide -translate-y-4 text-foreground/80">
          {primaryNav.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="uppercase hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {l.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="uppercase inline-flex items-center gap-1 cursor-default hover:text-primary transition-colors">
              Services <ChevronDown size={14} />
            </span>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-3 z-40">
                <div className="bg-card border border-border rounded-2xl shadow-soft p-3 w-72 grid grid-cols-1 gap-1">
                  <span className="px-3 py-2 text-xs uppercase tracking-widest text-primary cursor-default">
                    All Services
                  </span>
                  <div className="h-px bg-border my-1" />
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="rounded-lg px-3 py-2 text-sm text-foreground/85 hover:bg-secondary/30 hover:text-primary transition-colors normal-case tracking-normal"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="flex justify-start xl:justify-center">
          <Logo variant="header" />
        </div>
        <div className="hidden xl:flex items-center justify-end gap-6 text-sm -translate-y-4">
          <Link
            to="/speaking"
            className="uppercase tracking-wide text-foreground/80 hover:text-primary"
            activeProps={{ className: "text-primary font-medium" }}
          >
            Speaking & Workshops
          </Link>
          <Link
            to="/blog"
            className="uppercase tracking-wide text-foreground/80 hover:text-primary"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="uppercase tracking-wide text-foreground/80 hover:text-primary"
          >
            Contact
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden justify-self-end"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-border px-6 py-4 flex flex-col gap-3 bg-background">
          {primaryNav.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="uppercase text-sm text-foreground/80"
            >
              {l.label}
            </Link>
          ))}
          <button
            className="uppercase text-sm text-foreground/80 flex items-center justify-between"
            onClick={() => setMobileServices((v) => !v)}
          >
            Services <ChevronDown size={14} />
          </button>
          {mobileServices && (
            <div className="pl-3 flex flex-col gap-2">
              <span className="text-xs uppercase text-primary tracking-widest">All Services</span>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setOpen(false)}
                  className="text-sm text-foreground/80"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          )}
          <Link
            to="/speaking"
            onClick={() => setOpen(false)}
            className="uppercase text-sm text-foreground/80"
          >
            Speaking & Workshops
          </Link>
          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className="uppercase text-sm text-foreground/80"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="uppercase text-sm text-foreground/80"
          >
            Contact
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="bg-sand text-sand-foreground rounded-full px-6 py-3 uppercase tracking-wider text-xs font-medium text-center"
          >
            Book an Appointment
          </a>
        </div>
      )}
    </header>
  );
}

function PsychologyTodaySeal() {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;
    const src = "https://member.psychologytoday.com/verified-seal.js";
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.setAttribute("data-badge", "11");
    script.setAttribute("data-id", "1774441");
    script.setAttribute(
      "data-code",
      "aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xMS9wcm9maWxlLzE3NzQ0NDE/Y2FsbGJhY2s9c3hjYWxsYmFjaw==",
    );
    // The seal script paints the badge onto the element right before it,
    // so it must sit directly after the link, exactly as in Psychology
    // Today's embed code.
    anchor.insertAdjacentElement("afterend", script);
  }, []);

  return (
    <a
      ref={anchorRef}
      href="https://www.psychologytoday.com/profile/1774441"
      className="sx-verified-seal"
      aria-label="Verified by Psychology Today"
    />
  );
}

function Footer() {
  return (
    <footer className="bg-topbar text-topbar-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <Logo light />
          <p className="mt-3 text-sm opacity-90 max-w-xs">
            In-person and virtual psychotherapy for adults and teens seeking deeper connection with
            themselves and others.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p className="uppercase tracking-wider opacity-75 mb-3">Explore</p>
          {footerNav.map((l) => (
            <Link key={l.to} to={l.to} className="block hover:underline">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="text-sm space-y-2">
          <p className="uppercase tracking-wider opacity-75 mb-3">Contact</p>
          <p>1 (365) 977-0155</p>
          <p>info@sparkspsychotherapy.ca</p>
          <p>1155 North Service Road, Oakville, ON L6M 3E3</p>
          <p className="opacity-80 mt-4 text-sm">
            Operating on the traditional and ancestral lands of the Mississaugas of the Credit First
            Nation.
          </p>
          <div className="mt-4">
            <PsychologyTodaySeal />
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-xs opacity-80">
        © {new Date().getFullYear()} Sparks Psychotherapy Services · Photo credit: Zsuzsi Pál
        Photography
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex fixed top-4 right-4 z-50 bg-sand text-sand-foreground rounded-full px-6 py-3 uppercase tracking-wider text-xs font-medium hover:opacity-90 transition shadow-soft"
      >
        Book an Appointment
      </a>
    </div>
  );
}

export const BOOKING_URL = "https://aws-portal.owlpractice.ca/sparks/booking";

export function CtaButton({ to, children }: { to: string; children: React.ReactNode }) {
  const className =
    "inline-block bg-sand text-sand-foreground rounded-full px-8 py-4 uppercase tracking-widest text-xs font-medium hover:opacity-90 transition shadow-soft";
  if (to.startsWith("http")) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
