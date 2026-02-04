import { useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  featuredProperties,
  formatPrice,
  LOCATIONS,
  SUB_LOCATIONS,
  PROPERTY_TYPES,
  PropertyType,
} from "@/lib/properties";
import {
  ArrowRight,
  BedDouble,
  Building2,
  CheckCircle2,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const [location, setLocation] = useState<string>(LOCATIONS[0]!);
  const [subLocation, setSubLocation] = useState<string>("All Areas");
  const [type, setType] = useState<PropertyType>(PROPERTY_TYPES[0]!);
  const [budget, setBudget] = useState<string>("1500000");

  const subLocations = useMemo(() => {
    return (SUB_LOCATIONS as any)[location] || ["All Areas"];
  }, [location]);

  const budgetNumber = useMemo(() => {
    const n = Number(budget);
    return Number.isFinite(n) ? n : 0;
  }, [budget]);

  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="page-home">
      <Navbar />

      <main className="lux-grid" data-testid="main-home">
        <section
          className="relative"
          aria-label="Hero"
          data-testid="section-hero"
        >
          <div
            className="absolute inset-0"
            aria-hidden="true"
            data-testid="hero-backdrop"
          >
            <div className="absolute inset-0 bg-black" />
            <div
              className="absolute inset-0 opacity-75"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2600&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-[hsl(var(--background))]" />
          </div>

          <div className="relative lux-container pt-10 sm:pt-14">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
              data-testid="hero-grid"
            >
              <motion.div variants={fadeUp} className="pt-6 sm:pt-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span data-testid="text-hero-pill">Verified, premium listings</span>
                </div>

                <h1
                  className={cn(
                    "mt-6 text-4xl leading-[1.03] text-white sm:text-5xl lg:text-6xl",
                    "tracking-[-0.03em]",
                  )}
                  data-testid="text-hero-title"
                >
                  Find Your Perfect Home,
                  <br />
                  Without the Stress
                </h1>

                <p
                  className="mt-5 max-w-xl text-base text-white/80 sm:text-lg"
                  data-testid="text-hero-subtitle"
                >
                  Residential & commercial properties you can trust—curated for quality, verified
                  for confidence.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href="/properties" data-testid="link-hero-explore">
                    <Button
                      className={cn(
                        "w-full sm:w-auto rounded-xl",
                        "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]",
                        "hover:bg-[hsl(var(--accent))]",
                      )}
                      data-testid="button-explore-properties"
                    >
                      Explore Properties
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10"
                    data-testid="button-talk-expert"
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    Talk to an Expert
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="pb-10 sm:pb-14">
                <div
                  className={cn(
                    "rounded-2xl border border-white/15 bg-white/10 p-4 sm:p-5",
                    "backdrop-blur lux-noise",
                  )}
                  data-testid="card-hero-search"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div
                        className="text-sm font-semibold text-white"
                        data-testid="text-search-title"
                      >
                        Search properties
                      </div>
                      <div
                        className="text-xs text-white/70"
                        data-testid="text-search-subtitle"
                      >
                        Curated listings. Premium support.
                      </div>
                    </div>
                    <Badge
                      className="border-white/15 bg-white/10 text-white"
                      data-testid="badge-search"
                    >
                      Instant
                    </Badge>
                  </div>

                  <div className="mt-4 grid gap-3" data-testid="form-search">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <div
                          className="text-xs font-medium text-white/80"
                          data-testid="label-location"
                        >
                          Location
                        </div>
                        <Select
                          value={location}
                          onValueChange={(v) => {
                            setLocation(v);
                            setSubLocation("All Areas");
                          }}
                          data-testid="select-location"
                        >
                          <SelectTrigger
                            className="rounded-xl border-white/15 bg-white/5 text-white"
                            data-testid="trigger-location"
                          >
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent data-testid="content-location">
                            {LOCATIONS.map((l) => (
                              <SelectItem key={l} value={l} data-testid={`option-location-${l}`}>
                                {l}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <div
                          className="text-xs font-medium text-white/80"
                          data-testid="label-sub-location"
                        >
                          Sub-Location
                        </div>
                        <Select
                          value={subLocation}
                          onValueChange={setSubLocation}
                          data-testid="select-sub-location"
                        >
                          <SelectTrigger
                            className="rounded-xl border-white/15 bg-white/5 text-white"
                            data-testid="trigger-sub-location"
                          >
                            <SelectValue placeholder="Select area" />
                          </SelectTrigger>
                          <SelectContent data-testid="content-sub-location">
                            {subLocations.map((sl: string) => (
                              <SelectItem key={sl} value={sl} data-testid={`option-sub-location-${sl}`}>
                                {sl}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <div
                          className="text-xs font-medium text-white/80"
                          data-testid="label-type"
                        >
                          Property type
                        </div>
                        <Select
                          value={type}
                          onValueChange={(v) => setType(v as PropertyType)}
                          data-testid="select-type"
                        >
                          <SelectTrigger
                            className="rounded-xl border-white/15 bg-white/5 text-white"
                            data-testid="trigger-type"
                          >
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent data-testid="content-type">
                            {PROPERTY_TYPES.map((t) => (
                              <SelectItem key={t} value={t} data-testid={`option-type-${t}`}>
                                {t}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <div
                          className="text-xs font-medium text-white/80"
                          data-testid="label-budget"
                        >
                          Budget (max)
                        </div>
                        <Input
                          type="number"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40"
                          placeholder="1500000"
                          data-testid="input-budget"
                        />
                      </div>
                    </div>

                    <Link
                      href={`/properties?location=${encodeURIComponent(
                        location,
                      )}&subLocation=${encodeURIComponent(subLocation)}&type=${encodeURIComponent(type)}&budget=${encodeURIComponent(
                        String(budgetNumber),
                      )}`}
                      data-testid="link-search-submit"
                    >
                      <Button
                        className={cn(
                          "mt-1 w-full rounded-xl",
                          "bg-white text-foreground hover:bg-white",
                        )}
                        data-testid="button-search-submit"
                      >
                        Search
                      </Button>
                    </Link>

                    <div
                      className="flex items-center gap-2 text-xs text-white/70"
                      data-testid="text-search-note"
                    >
                      <ShieldCheck className="h-3.5 w-3.5" />
                      We only list verified properties and trusted partners.
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="pb-12 sm:pb-16">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Verified Properties", value: "100%" },
                  { label: "Happy Clients", value: "1,000+" },
                  { label: "Avg. close time", value: "10 days" },
                  { label: "Local Experts", value: "25+" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/90 backdrop-blur"
                    data-testid={`card-stat-${s.label.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <div className="text-2xl font-semibold" data-testid={`text-stat-${s.label.replace(/\s+/g, "-").toLowerCase()}-value`}>
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-white/70" data-testid={`text-stat-${s.label.replace(/\s+/g, "-").toLowerCase()}-label`}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lux-container py-14 sm:py-18" data-testid="section-featured">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between gap-6"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Featured
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl" data-testid="text-featured-title">
                Premium properties
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground" data-testid="text-featured-subtitle">
                A short list of high-quality listings\u2014handpicked for location, design, and value.
              </p>
            </div>
            <Link href="/properties" data-testid="link-view-all">
              <Button variant="outline" className="rounded-xl" data-testid="button-view-all">
                View all
              </Button>
            </Link>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProperties.slice(0, 4).map((p) => (
              <Link
                key={p.id}
                href={`/properties/${p.id}`}
                className="group"
                data-testid={`card-property-${p.id}`}
              >
                <div className="overflow-hidden rounded-2xl border bg-card lux-shadow transition-all group-hover:-translate-y-1">
                  <div
                    className="relative aspect-[4/3] overflow-hidden"
                    data-testid={`img-property-${p.id}`}
                  >
                    <div
                      className="absolute inset-0 scale-100 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${p.images[0]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <Badge className="bg-white/10 text-white border-white/15" data-testid={`badge-type-${p.id}`}>
                        {p.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-semibold" data-testid={`text-property-title-${p.id}`}>
                      {p.title}
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground" data-testid={`text-property-location-${p.id}`}>
                      <MapPin className="h-3.5 w-3.5" />
                      {p.location}
                    </div>
                    <div className="mt-3 text-lg font-semibold" data-testid={`text-property-price-${p.id}`}>
                      {formatPrice(p.price)}
                    </div>

                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      {typeof p.beds === "number" && p.beds > 0 ? (
                        <span className="inline-flex items-center gap-1" data-testid={`text-property-beds-${p.id}`}>
                          <BedDouble className="h-3.5 w-3.5" /> {p.beds}
                        </span>
                      ) : null}
                      {typeof p.baths === "number" && p.baths > 0 ? (
                        <span className="inline-flex items-center gap-1" data-testid={`text-property-baths-${p.id}`}>
                          <Building2 className="h-3.5 w-3.5" /> {p.baths}
                        </span>
                      ) : null}
                      {typeof p.sqft === "number" ? (
                        <span className="inline-flex items-center gap-1" data-testid={`text-property-sqft-${p.id}`}>
                          <Landmark className="h-3.5 w-3.5" /> {p.sqft.toLocaleString()} sqft
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground/85 group-hover:text-foreground">
                      <span data-testid={`text-view-details-${p.id}`}>View details</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="lux-container pb-16" data-testid="section-categories">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Categories
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl" data-testid="text-categories-title">
                Find what fits you
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {
              [
                { label: "Apartments", type: "Apartment" as const, icon: Building2 },
                { label: "Villas", type: "Villa" as const, icon: Landmark },
                { label: "Commercial", type: "Commercial" as const, icon: TrendingUp },
                { label: "Plots / Land", type: "Plot / Land" as const, icon: MapPin },
                { label: "Luxury Homes", type: "Luxury Home" as const, icon: Sparkles },
              ].map((c) => (
                <Link
                  key={c.label}
                  href={`/properties?type=${encodeURIComponent(c.type)}`}
                  className="group"
                  data-testid={`card-category-${c.type.replace(/\s+|\//g, "-").toLowerCase()}`}
                >
                  <div className="rounded-2xl border bg-card p-5 lux-shadow transition-all group-hover:-translate-y-1">
                    <div className="flex items-start justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-muted">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </div>
                    <div className="mt-4 text-sm font-semibold" data-testid={`text-category-title-${c.type.replace(/\s+|\//g, "-").toLowerCase()}`}>
                      {c.label}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground" data-testid={`text-category-sub-${c.type.replace(/\s+|\//g, "-").toLowerCase()}`}>
                      Explore curated listings
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </section>

        <section className="lux-container pb-18" data-testid="section-why">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-3xl border bg-card p-7 lux-shadow lux-noise">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Why choose us
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl" data-testid="text-why-title">
                Trust built into every step
              </h2>
              <p className="mt-3 text-sm text-muted-foreground" data-testid="text-why-subtitle">
                We reduce risk and save time with verified listings, transparent pricing, and end-to-end
                support from local experts.
              </p>

              <div className="mt-6 grid gap-3">
                {
                  [
                    "Verified Properties",
                    "Transparent Pricing",
                    "Expert Local Agents",
                    "End-to-End Support",
                    "1000+ Happy Clients",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border bg-white/60 p-4"
                      data-testid={`row-why-${item.replace(/\s+|\+/g, "-").toLowerCase()}`}
                    >
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-[hsl(var(--accent))]/15 text-[hsl(var(--accent-foreground))]">
                        <CheckCircle2 className="h-4.5 w-4.5" />
                      </div>
                      <div className="text-sm font-medium" data-testid={`text-why-item-${item.replace(/\s+|\+/g, "-").toLowerCase()}`}>
                        {item}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Services
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl" data-testid="text-services-title">
                Everything you need, handled
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {
                  [
                    {
                      title: "Property Buying Assistance",
                      desc: "Shortlist, negotiate, and close with confidence.",
                      icon: ShieldCheck,
                    },
                    {
                      title: "Property Selling",
                      desc: "Premium marketing + qualified buyer network.",
                      icon: TrendingUp,
                    },
                    {
                      title: "Rentals & Leasing",
                      desc: "Fast placement with verified tenants.",
                      icon: Building2,
                    },
                    {
                      title: "Legal & Documentation",
                      desc: "Smooth paperwork from offer to handover.",
                      icon: CheckCircle2,
                    },
                    {
                      title: "Investment Consulting",
                      desc: "Data-backed picks for long-term value.",
                      icon: Landmark,
                    },
                    {
                      title: "Local Agent Support",
                      desc: "On-the-ground expertise when it matters.",
                      icon: MapPin,
                    },
                  ].map((s) => (
                    <div
                      key={s.title}
                      className="rounded-2xl border bg-card p-5 lux-shadow transition-transform hover:-translate-y-0.5"
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
                      <div className="mt-1 text-xs text-muted-foreground" data-testid={`text-service-desc-${s.title.replace(/\s+|&/g, "-").toLowerCase()}`}>
                        {s.desc}
                      </div>
                    </div>
                  ))
                }
              </div>

              <div className="mt-10 rounded-3xl border bg-card p-7 lux-shadow lux-noise">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[hsl(var(--accent))]/15">
                    <Quote className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold" data-testid="text-testimonials-title">
                      Testimonials
                    </div>
                    <div className="mt-2 grid gap-4">
                      {[
                        {
                          name: "Amina R.",
                          text: "They helped me find my home in just 10 days. Very professional.",
                        },
                        {
                          name: "Daniel K.",
                          text: "Transparent process and beautiful listings. The team handled everything.",
                        },
                      ].map((t, idx) => (
                        <div
                          key={t.name}
                          className="rounded-2xl border bg-white/60 p-4"
                          data-testid={`card-testimonial-${idx}`}
                        >
                          <div className="text-sm" data-testid={`text-testimonial-${idx}`}>
                            \u201c{t.text}\u201d
                          </div>
                          <div className="mt-2 text-xs text-muted-foreground" data-testid={`text-testimonial-author-${idx}`}>
                            \u2014 {t.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mt-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
          data-testid="section-cta"
        >
          <div className="lux-container py-14 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/70">
                  Ready to move?
                </div>
                <h2 className="mt-2 text-3xl sm:text-4xl" data-testid="text-cta-title">
                  Ready to Buy or Sell Property?
                </h2>
                <p className="mt-3 max-w-xl text-sm text-white/70" data-testid="text-cta-subtitle">
                  Talk to our expert today. We\u2019ll shortlist, schedule site visits, and guide you from
                  offer to closing.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button
                  className="rounded-xl bg-white text-foreground hover:bg-white"
                  data-testid="button-call-now"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl border-white/20 bg-transparent text-white hover:bg-white/10"
                  data-testid="button-free-consultation"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="lux-container py-16" data-testid="section-contact">
          <div className="rounded-3xl border bg-card p-7 lux-shadow">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Contact
                </div>
                <h2 className="mt-2 text-3xl sm:text-4xl" data-testid="text-contact-title">
                  Talk to a local expert
                </h2>
                <p className="mt-3 text-sm text-muted-foreground" data-testid="text-contact-subtitle">
                  Share what you\u2019re looking for and we\u2019ll respond quickly with options and next steps.
                </p>

                <div className="mt-6 grid gap-3 text-sm">
                  <div className="rounded-2xl border bg-white/60 p-4" data-testid="card-contact-phone">
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="mt-1 font-medium">+1 (555) 013-2400</div>
                  </div>
                  <div className="rounded-2xl border bg-white/60 p-4" data-testid="card-contact-email">
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="mt-1 font-medium">hello@aurumestates.com</div>
                  </div>
                </div>
              </div>

              <form className="grid gap-3" data-testid="form-contact">
                <Input className="rounded-xl" placeholder="Full name" data-testid="input-name" />
                <Input className="rounded-xl" placeholder="Email" data-testid="input-email" />
                <Input className="rounded-xl" placeholder="Phone" data-testid="input-phone" />
                <Input
                  className="rounded-xl"
                  placeholder="What are you looking for? (e.g., 3BR apartment, Downtown)"
                  data-testid="input-message"
                />
                <Button
                  className={cn(
                    "mt-1 rounded-xl",
                    "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]",
                    "hover:bg-[hsl(var(--accent))]",
                  )}
                  data-testid="button-submit-contact"
                  type="button"
                  onClick={() => {
                    // mockup: no backend
                    alert("Thanks! Our team will reach out shortly.");
                  }}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
