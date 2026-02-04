import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-white/60" data-testid="footer">
      <div className="lux-container py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="font-[var(--font-display)] text-xl">Radhika Associates</div>
            <p className="mt-2 text-sm text-muted-foreground" data-testid="text-footer-description">
              Premium residential & commercial properties with verified listings, transparent pricing,
              and end-to-end support.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <div className="text-sm font-semibold" data-testid="text-footer-nav-title">
                Navigate
              </div>
              <div className="mt-3 grid gap-2 text-sm">
                <Link href="/" className="text-foreground/80 hover:text-foreground" data-testid="link-footer-home">
                  Home
                </Link>
                <Link
                  href="/properties"
                  className="text-foreground/80 hover:text-foreground"
                  data-testid="link-footer-properties"
                >
                  Properties
                </Link>
                <Link
                  href="/services"
                  className="text-foreground/80 hover:text-foreground"
                  data-testid="link-footer-services"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground/80 hover:text-foreground"
                  data-testid="link-footer-contact"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold" data-testid="text-footer-contact-title">
                Contact
              </div>
              <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <div data-testid="text-footer-phone">+1 (555) 013-2400</div>
                <div data-testid="text-footer-email">hello@aurumestates.com</div>
                <div data-testid="text-footer-address">88 Meridian Ave, Downtown</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold" data-testid="text-footer-hours-title">
                Hours
              </div>
              <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <div data-testid="text-footer-hours-weekdays">Mon\u2013Fri: 9am \u2013 7pm</div>
                <div data-testid="text-footer-hours-weekends">Sat: 10am \u2013 5pm</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div data-testid="text-footer-copyright">
            \u00a9 {new Date().getFullYear()} Radhika Associates. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground" data-testid="link-footer-privacy">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground" data-testid="link-footer-terms">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
