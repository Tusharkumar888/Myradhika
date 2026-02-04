import { useMemo } from "react";
import { Link, useRoute } from "wouter";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { formatPrice, getPropertyById } from "@/lib/properties";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, CheckCircle2, MapPin, Phone } from "lucide-react";

export default function PropertyDetails() {
  const [, params] = useRoute("/properties/:id");
  const id = params?.id;

  const property = useMemo(() => getPropertyById(id), [id]);

  if (!property) {
    return (
      <div className="min-h-screen" data-testid="page-property-details-notfound">
        <Navbar />
        <main className="lux-container py-14">
          <div className="rounded-2xl border bg-card p-8 text-center lux-shadow" data-testid="card-not-found">
            <div className="text-lg font-semibold" data-testid="text-not-found-title">
              Property not found
            </div>
            <div className="mt-2 text-sm text-muted-foreground" data-testid="text-not-found-subtitle">
              The listing may have been moved or removed.
            </div>
            <div className="mt-6 flex justify-center">
              <Link href="/properties" data-testid="link-back-properties">
                <Button variant="outline" className="rounded-xl" data-testid="button-back-properties">
                  Back to properties
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" data-testid="page-property-details">
      <Navbar />

      <main className="lux-container py-10" data-testid="main-property-details">
        <div className="flex items-center justify-between gap-4" data-testid="row-breadcrumb">
          <Link href="/properties" className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground" data-testid="link-back">
            <ArrowLeft className="h-4 w-4" /> Back to properties
          </Link>
          <Badge className="bg-[hsl(var(--accent))]/15 text-foreground border-transparent" data-testid="badge-id">
            {property.id}
          </Badge>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="rounded-3xl border bg-card p-5 lux-shadow" data-testid="card-gallery">
            <Carousel className="w-full" data-testid="carousel-images">
              <CarouselContent>
                {property.images.map((src, idx) => (
                  <CarouselItem key={src} data-testid={`carousel-item-${idx}`}>
                    <div className="overflow-hidden rounded-2xl border" data-testid={`img-slide-${idx}`}>
                      <div
                        className="aspect-[16/10] w-full"
                        style={{
                          backgroundImage: `url(${src})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious data-testid="button-carousel-prev" />
              <CarouselNext data-testid="button-carousel-next" />
            </Carousel>

            <div className="mt-5 flex flex-wrap items-center gap-2" data-testid="row-tags">
              <Badge className="bg-muted text-foreground" data-testid="badge-type">
                {property.type}
              </Badge>
              <Badge className="bg-muted text-foreground" data-testid="badge-location">
                <MapPin className="mr-1 h-3.5 w-3.5" /> {property.location}
              </Badge>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl" data-testid="text-title">
              {property.title}
            </h1>

            <div className="mt-2 text-2xl font-semibold" data-testid="text-price">
              {formatPrice(property.price)}
            </div>

            <Separator className="my-6" />

            <div data-testid="section-description">
              <div className="text-sm font-semibold" data-testid="text-desc-title">
                Description
              </div>
              <p className="mt-2 text-sm text-muted-foreground" data-testid="text-desc">
                {property.description}
              </p>
            </div>

            <Separator className="my-6" />

            <div data-testid="section-amenities">
              <div className="text-sm font-semibold" data-testid="text-amenities-title">
                Amenities
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {property.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 rounded-xl border bg-white/60 p-3" data-testid={`row-amenity-${a.replace(/\s+|\//g, "-").toLowerCase()}`}>
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent))]" />
                    <span className="text-sm">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="grid gap-5" data-testid="aside-contact">
            <div className="rounded-3xl border bg-card p-6 lux-shadow lux-noise" data-testid="card-contact">
              <div className="text-sm font-semibold" data-testid="text-contact-card-title">
                Schedule a site visit
              </div>
              <p className="mt-2 text-sm text-muted-foreground" data-testid="text-contact-card-subtitle">
                Share your preferred time. Our agent will confirm availability and meet you on site.
              </p>

              <div className="mt-5 grid gap-3">
                <Button
                  className={cn(
                    "rounded-xl",
                    "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]",
                    "hover:bg-[hsl(var(--accent))]",
                  )}
                  data-testid="button-schedule-visit"
                  onClick={() => alert("Request received! We'll confirm your site visit shortly.")}
                >
                  Book a Site Visit
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl"
                  data-testid="button-call-agent"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call an agent
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border bg-card p-6 lux-shadow" data-testid="card-map">
              <div className="text-sm font-semibold" data-testid="text-map-title">
                Map
              </div>
              <div className="mt-2 overflow-hidden rounded-2xl border" data-testid="map-embed">
                <iframe
                  title="map"
                  className="h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${property.lat},${property.lng}&z=14&output=embed`}
                />
              </div>
              <div className="mt-3 text-xs text-muted-foreground" data-testid="text-map-note">
                Approximate location shown for privacy.
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
