import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CheckCircle2, ShieldCheck, Sparkles, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen" data-testid="page-about">
      <Navbar />

      <main className="lux-container py-10" data-testid="main-about">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">About</div>
            <h1 className="mt-2 text-3xl sm:text-4xl" data-testid="text-about-title">
              A brand built on trust and taste
            </h1>
            <p className="mt-3 text-sm text-muted-foreground" data-testid="text-about-subtitle">
              Radhika Associates is a premium real-estate consultancy focused on verified listings, transparent pricing, and a client experience that feels effortless.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                { t: "10+ years experience", i: ShieldCheck },
                { t: "Mission-led service", i: Sparkles },
                { t: "Local expert team", i: Users },
                { t: "Verified listings", i: CheckCircle2 },
              ].map((item) => (
                <div
                  key={item.t}
                  className="flex items-center gap-3 rounded-2xl border bg-white/60 p-4"
                  data-testid={`row-about-${item.t.replace(/\s+|\+/g, "-").toLowerCase()}`}
                >
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-[hsl(var(--accent))]/15">
                    <item.i className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-sm font-medium" data-testid={`text-about-point-${item.t.replace(/\s+|\+/g, "-").toLowerCase()}`}>
                    {item.t}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={cn("rounded-3xl border bg-card p-6 lux-shadow lux-noise")} data-testid="card-about-story">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-semibold" data-testid="text-story-title">
                  Our story
                </div>
                <div className="mt-1 text-xs text-muted-foreground" data-testid="text-story-subtitle">
                  Not a bio. A promise.
                </div>
              </div>
              <Badge className="bg-[hsl(var(--accent))]/15 text-foreground border-transparent">Radhika</Badge>
            </div>

            <p className="mt-4 text-sm text-muted-foreground" data-testid="text-story-body">
              We started Radhika Associates to make property decisions feel clear. Too often, buyers and sellers are overwhelmed by noise\u2014uncertain listings, unclear pricing, and slow coordination. We built a boutique team that verifies every listing, communicates transparently, and moves fast with precision.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2" data-testid="grid-team">
              {[
                { name: "Maya Chen", role: "Principal Advisor" },
                { name: "Omar Malik", role: "Senior Agent" },
                { name: "Sofia Reyes", role: "Client Success" },
                { name: "Ethan Park", role: "Investment Lead" },
              ].map((m, idx) => (
                <div
                  key={m.name}
                  className="rounded-2xl border bg-white/60 p-4"
                  data-testid={`card-team-${idx}`}
                >
                  <div className="text-sm font-semibold" data-testid={`text-team-name-${idx}`}>
                    {m.name}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground" data-testid={`text-team-role-${idx}`}>
                    {m.role}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border bg-white/60 p-4" data-testid="card-certifications">
              <div className="text-sm font-semibold" data-testid="text-certs-title">
                Certifications
              </div>
              <div className="mt-2 flex flex-wrap gap-2" data-testid="list-certs">
                {[
                  "Licensed Brokerage",
                  "Verified Partner Network",
                  "Compliance-first Process",
                  "Documented Due Diligence",
                ].map((c) => (
                  <Badge key={c} className="bg-muted text-foreground" data-testid={`badge-cert-${c.replace(/\s+/g, "-").toLowerCase()}`}>
                    {c}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
