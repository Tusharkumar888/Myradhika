import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";

import logoImg from "@assets/realstate_1770021437140.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

export default function Navbar() {
  const [location] = useLocation();
  const scrollY = useScrollY();

  const activeHref = useMemo(() => {
    if (location.startsWith("/properties/")) return "/properties";
    return location;
  }, [location]);

  const scrolled = scrollY > 8;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        scrolled ? "py-2" : "py-4",
      )}
      data-testid="nav-header"
    >
      <div
        className={cn(
          "lux-container",
          "rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 lux-shadow lux-noise",
          "transition-all",
          scrolled ? "shadow-[0_12px_40px_rgba(0,0,0,0.5)]" : "",
        )}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-2">
          <Link
            href="/"
            className="group flex items-center"
            data-testid="link-logo"
          >
            <img 
              src={logoImg} 
              alt="Radhika Associates" 
              className="h-28 sm:h-36 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6" data-testid="nav-desktop">
            {navItems.map((item) => {
              const active = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-white/70 hover:text-white transition-colors",
                    "relative",
                    active ? "text-white" : "",
                  )}
                  data-testid={`link-nav-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <span>{item.label}</span>
                  <span
                    className={cn(
                      "absolute -bottom-3 left-0 h-[2px] w-full rounded-full",
                      "bg-[hsl(var(--accent))]",
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-60",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              className={cn(
                "hidden md:inline-flex",
                "rounded-xl",
                "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]",
                "hover:bg-[hsl(var(--accent))]",
              )}
              data-testid="button-cta-list-property"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              List Your Property
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="md:hidden rounded-xl"
                  data-testid="button-open-mobile-menu"
                >
                  <Menu className="h-4.5 w-4.5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[86vw] sm:w-[420px]"
                data-testid="sheet-mobile-menu"
              >
                <div className="mt-2">
                  <div className="text-sm font-semibold" data-testid="text-mobile-menu-title">
                    Menu
                  </div>
                  <div className="mt-4 grid gap-2" data-testid="list-mobile-nav">
                    {navItems.map((item) => {
                      const active = activeHref === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between rounded-xl border px-4 py-3",
                            active
                              ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10"
                              : "hover:bg-muted/60",
                          )}
                          data-testid={`link-mobile-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                        >
                          <span className="font-medium">{item.label}</span>
                          <span className="text-xs text-muted-foreground">View</span>
                        </Link>
                      );
                    })}

                    <Button
                      className={cn(
                        "mt-2 rounded-xl",
                        "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]",
                        "hover:bg-[hsl(var(--accent))]",
                      )}
                      data-testid="button-mobile-cta-list-property"
                      onClick={() => {
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      List Your Property
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
