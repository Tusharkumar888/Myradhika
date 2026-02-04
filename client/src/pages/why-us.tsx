import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CheckCircle2, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

const points = [
  {
    title: "Verified Properties",
    desc: "Every listing is checked to reduce risk and save you time.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Pricing",
    desc: "Clear guidance and honest comparisons\u2014no surprises.",
    icon: CheckCircle2,
  },
  {
    title: "Expert Local Agents",
    desc: "Neighborhood expertise plus a professional, discreet approach.",
    icon: UserCheck,
  },
  {
    title: "End-to-End Support",
    desc: "Shortlist, tours, negotiation, legal support, closing.",
    icon: Sparkles,
  },
] as const;

export default function WhyUs() {
  return (
    <div className="min-h-screen" data-testid="page-why-us">
      <Navbar />

      <main className="lux-container py-10" data-testid="main-why-us">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Why us</div>
          <h1 className="mt-2 text-3xl sm:text-4xl" data-testid="text-whyus-title">
            Trust first. Luxury always.
          </h1>
          <p className="mt-3 text-sm text-muted-foreground" data-testid="text-whyus-subtitle">
            We\u2019re built around clarity and confidence\u2014because buying or selling property should feel premium.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2" data-testid="grid-whyus">
          {points.map((p) => (
            <div
              key={p.title}
              className={cn("rounded-2xl border bg-card p-6 lux-shadow lux-noise")}
              data-testid={`card-whyus-${p.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[hsl(var(--accent))]/15">
                  <p.icon className="h-5 w-5" />
                </div>
                <Badge className="bg-muted text-foreground">Verified</Badge>
              </div>
              <div className="mt-4 text-sm font-semibold" data-testid={`text-whyus-title-${p.title.replace(/\s+/g, "-").toLowerCase()}`}>
                {p.title}
              </div>
              <div className="mt-2 text-sm text-muted-foreground" data-testid={`text-whyus-desc-${p.title.replace(/\s+/g, "-").toLowerCase()}`}>
                {p.desc}
              </div>
            </div>
          ))}
        </div>

        <section
          className="mt-12 rounded-3xl border bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] p-8 lux-noise"
          data-testid="section-metrics"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/70">Results</div>
              <h2 className="mt-2 text-2xl sm:text-3xl" data-testid="text-metrics-title">
                Proof you can feel
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-testid="grid-metrics">
            {[
              { k: "Listings verified", v: "500+" },
              { k: "Avg. response", v: "< 30 min" },
              { k: "Happy clients", v: "1,000+" },
              { k: "Local agents", v: "25+" },
            ].map((m) => (
              <div
                key={m.k}
                className="rounded-2xl border border-white/15 bg-white/5 p-5"
                data-testid={`card-metric-${m.k.replace(/\s+|\./g, "-").toLowerCase()}`}
              >
                <div className="text-2xl font-semibold" data-testid={`text-metric-value-${m.k.replace(/\s+|\./g, "-").toLowerCase()}`}>
                  {m.v}
                </div>
                <div className="mt-1 text-sm text-white/70" data-testid={`text-metric-key-${m.k.replace(/\s+|\./g, "-").toLowerCase()}`}>
                  {m.k}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
