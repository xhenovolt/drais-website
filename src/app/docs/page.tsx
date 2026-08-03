import { redirect } from "next/navigation";

/**
 * `/docs` previously held a half-built set of platform/architecture pages
 * aimed at developers, publicly reachable and with several dead links.
 *
 * Product documentation for schools lives at `/documentation`. Developer and
 * architectural documentation is not public — it lives inside the DRAIS
 * Control Center. This route is kept only so existing links do not 404.
 */
export default function DocsRedirect() {
  redirect("/documentation");
}
