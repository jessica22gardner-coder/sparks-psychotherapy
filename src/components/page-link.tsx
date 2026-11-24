import type { AnchorHTMLAttributes, ReactNode, Ref } from "react";

/**
 * Build a plain href for an in-app page, prefixed with the Vite base
 * ("/" on Hostinger, "/sparks-psychotherapy/" on the GitHub Pages
 * preview), so the link works in both places.
 */
export function pageHref(to: string): string {
  const base = import.meta.env.BASE_URL;
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanTo = to.startsWith("/") ? to.slice(1) : to;
  return `${cleanBase}${cleanTo}`;
}

type PageLinkProps = {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/**
 * A plain anchor for in-app navigation. Unlike the router's Link, this
 * does a full browser load of the page, like a traditional website:
 * the browser shows its loading state and the page arrives fresh.
 * The router still reads the URL on load and renders the right page.
 */
export function PageLink({ to, params, children, ref, ...rest }: PageLinkProps) {
  let href = to;
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      href = href.replace(`$${key}`, value);
    }
  }
  return (
    <a ref={ref} href={pageHref(href)} {...rest}>
      {children}
    </a>
  );
}
