import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Building2, CheckCircle2, FileText, Handshake, Landmark, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Property Buying Assistance",
    desc: "Shortlist premium listings, negotiate confidently, and close with end-to-end guidance.",
    icon: Handshake,
  },
  {
    title: "Property Selling",
    desc: "Luxury presentation, professional photography, qualified buyers\u2014we make it move.",
    icon: TrendingUp,
  },
  {
    title: "Rentals & Leasing",
    desc: "Verified tenants, clear terms, and fast placement for owners and renters.",
    icon: Building2,
  },
  {
    title: "Legal & Documentation Support",
    desc: "Contracts, due diligence, and paperwork handled with precision.",
    icon: FileText,
  },
  {
    title: "Investment Consulting",
    desc: "Data-backed guidance to grow your portfolio and reduce risk.",
    icon: Landmark,
  },
  {
    title: "Local Agent Support",
    desc: "Market insight and on-ground support when you need it most.",
    icon: CheckCircle2,
  },
] as const;

export default function Services() {
  return (
    <div className="min-h-screen" data-testid="page-services">
      <Navbar />

      <main className="lux-container py-10" data-testid="main-services">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Services</div>
          <h1 className="mt-2 text-3xl sm:text-4xl" data-testid="text-services-title">
            Everything you need, handled
          </h1>
          <p className="mt-3 text-sm text-muted-foreground" data-testid="text-services-subtitle">
            From shortlist to closing, we keep it crisp, transparent, and client-first.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-testid="grid-services">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border bg-card p-6 lux-shadow transition-transform hover:-translate-y-0.5"
              data-testid={`card-service-${s.title.replace(/\s+|&/g, "-").toLowerCase()}`}
            >
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-muted">
                  <s.icon className="h-5 w-5" />
                </div>
                <Badge className="bg-[hsl(var(--accent))]/15 text-foreground border-transparent">
                  Premium
                </Badge>
              </div>
              <div className="mt-4 text-sm font-semibold" data-testid={`text-service-title-${s.title.replace(/\s+|&/g, "-").toLowerCase()}`}>
                {s.title}
              </div>
              <div className="mt-2 text-sm text-muted-foreground" data-testid={`text-service-desc-${s.title.replace(/\s+|&/g, "-").toLowerCase()}`}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] p-7 lux-noise" data-testid="section-process">
          <div className="flex items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/70">Process</div>
              <h2 className={cn("mt-2 text-2xl sm:text-3xl")} data-testid="text-process-title">
                A simple, premium experience
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3" data-testid="grid-process">
            {[
              { t: "Curate", d: "We shortlist verified listings matched to your goals." },
              { t: "Tour", d: "We schedule site visits and handle negotiation." },
              { t: "Close", d: "We guide paperwork and secure a smooth handover." },
            ].map((s, idx) => (
              <div
                key={s.t}
                className="rounded-2xl border border-white/15 bg-white/5 p-5"
                data-testid={`card-process-${idx}`}
              >
                <div className="text-xs text-white/70">0{idx + 1}</div>
                <div className="mt-2 text-sm font-semibold">{s.t}</div>
                <div className="mt-2 text-sm text-white/70">{s.d}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
