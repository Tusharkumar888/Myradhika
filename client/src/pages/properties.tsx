import { useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  LOCATIONS,
  SUB_LOCATIONS,
  PROPERTY_TYPES,
  PropertyType,
  formatPrice,
  properties,
} from "@/lib/properties";
import { ArrowRight, BedDouble, LayoutGrid, List, MapPin, Ruler } from "lucide-react";

function useQueryParams() {
  const [location] = useLocation();
  const queryString = location.split("?")[1] ?? "";
  return useMemo(() => new URLSearchParams(queryString), [queryString]);
}

export default function Properties() {
  const params = useQueryParams();

  const initialLocation = params.get("location") ?? "";
  const initialSubLocation = params.get("subLocation") ?? "";
  const initialType = (params.get("type") as PropertyType | null) ?? "";
  const initialBudget = params.get("budget") ?? "";

  const [filterLocation, setFilterLocation] = useState<string>(initialLocation);
  const [filterSubLocation, setFilterSubLocation] = useState<string>(initialSubLocation);
  const [filterType, setFilterType] = useState<string>(initialType);
  const [filterBudget, setFilterBudget] = useState<string>(initialBudget);
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    const maxBudget = Number(filterBudget);
    const budgetActive = Number.isFinite(maxBudget) && maxBudget > 0;

    return properties.filter((p) => {
      if (filterLocation && p.location !== filterLocation) return false;
      if (filterSubLocation && filterSubLocation !== "All Areas" && p.subLocation !== filterSubLocation) return false;
      if (filterType && p.type !== filterType) return false;
      if (budgetActive && p.price > maxBudget) return false;
      return true;
    });
  }, [filterBudget, filterLocation, filterType]);

  const [visibleCount, setVisibleCount] = useState(6);
  const visible = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen" data-testid="page-properties">
      <Navbar />

      <main className="lux-container py-10" data-testid="main-properties">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Properties
            </div>
            <h1 className="mt-2 text-3xl sm:text-4xl" data-testid="text-properties-title">
              Browse premium listings
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground" data-testid="text-properties-subtitle">
              Filter by location, type, and budget. Switch between grid and list depending on how you like to browse.
            </p>
          </div>

          <div className="flex items-center gap-2" data-testid="tabs-view">
            <Tabs value={view} onValueChange={(v) => setView(v as any)}>
              <TabsList className="rounded-xl" data-testid="tabslist-view">
                <TabsTrigger value="grid" className="rounded-lg" data-testid="tab-grid">
                  <LayoutGrid className="mr-2 h-4 w-4" /> Grid
                </TabsTrigger>
                <TabsTrigger value="list" className="rounded-lg" data-testid="tab-list">
                  <List className="mr-2 h-4 w-4" /> List
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="mt-7 grid gap-4 rounded-2xl border bg-card p-5 lux-shadow" data-testid="panel-filters">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="grid gap-2">
              <div className="text-xs font-medium text-muted-foreground" data-testid="label-filter-location">
                Location
              </div>
              <Select
                value={filterLocation || "all"}
                onValueChange={(v) => {
                  setFilterLocation(v === "all" ? "" : v);
                  setFilterSubLocation("All Areas");
                }}
              >
                <SelectTrigger className="rounded-xl" data-testid="select-filter-location">
                  <SelectValue placeholder="All locations" />
                </SelectTrigger>
                <SelectContent data-testid="content-filter-location">
                  <SelectItem value="all" data-testid="option-filter-location-all">
                    All locations
                  </SelectItem>
                  {LOCATIONS.map((l) => (
                    <SelectItem key={l} value={l} data-testid={`option-filter-location-${l}`}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <div className="text-xs font-medium text-muted-foreground" data-testid="label-filter-sub-location">
                Sub-Location
              </div>
              <Select
                value={filterSubLocation || "All Areas"}
                onValueChange={setFilterSubLocation}
                disabled={!filterLocation}
              >
                <SelectTrigger className="rounded-xl" data-testid="select-filter-sub-location">
                  <SelectValue placeholder="All areas" />
                </SelectTrigger>
                <SelectContent data-testid="content-filter-sub-location">
                  {((SUB_LOCATIONS as any)[filterLocation] || ["All Areas"]).map((sl: string) => (
                    <SelectItem key={sl} value={sl} data-testid={`option-filter-sub-location-${sl}`}>
                      {sl}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <div className="text-xs font-medium text-muted-foreground" data-testid="label-filter-type">
                Type
              </div>
              <Select value={filterType || "all"} onValueChange={(v) => setFilterType(v === "all" ? "" : v)}>
                <SelectTrigger className="rounded-xl" data-testid="select-filter-type">
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent data-testid="content-filter-type">
                  <SelectItem value="all" data-testid="option-filter-type-all">
                    All types
                  </SelectItem>
                  {PROPERTY_TYPES.map((t) => (
                    <SelectItem key={t} value={t} data-testid={`option-filter-type-${t}`}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <div className="text-xs font-medium text-muted-foreground" data-testid="label-filter-budget">
                Budget (max)
              </div>
              <Input
                type="number"
                value={filterBudget}
                onChange={(e) => setFilterBudget(e.target.value)}
                placeholder="1500000"
                className="rounded-xl"
                data-testid="input-filter-budget"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-muted-foreground" data-testid="text-results-count">
              Showing <span className="font-medium text-foreground">{visible.length}</span> of{" "}
              <span className="font-medium text-foreground">{filtered.length}</span> results
            </div>
            <Button
              variant="outline"
              className="rounded-xl"
              data-testid="button-clear-filters"
              onClick={() => {
                setFilterLocation("");
                setFilterSubLocation("All Areas");
                setFilterType("");
                setFilterBudget("");
                setVisibleCount(6);
              }}
            >
              Clear filters
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "mt-7 grid gap-6",
            view === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1",
          )}
          data-testid="grid-properties"
        >
          {visible.map((p) => (
            <Link
              key={p.id}
              href={`/properties/${p.id}`}
              className={cn("group", view === "list" ? "" : "")}
              data-testid={`card-property-${p.id}`}
            >
              <div
                className={cn(
                  "overflow-hidden rounded-2xl border bg-card lux-shadow transition-all",
                  "group-hover:-translate-y-1",
                  view === "list" ? "md:flex md:items-stretch" : "",
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden",
                    view === "list" ? "md:w-[44%]" : "aspect-[4/3]",
                  )}
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
                    <Badge
                      className="bg-white/10 text-white border-white/15"
                      data-testid={`badge-type-${p.id}`}
                    >
                      {p.type}
                    </Badge>
                  </div>
                </div>

                <div className="flex-1 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        className="text-sm font-semibold"
                        data-testid={`text-property-title-${p.id}`}
                      >
                        {p.title}
                      </div>
                      <div
                        className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"
                        data-testid={`text-property-location-${p.id}`}
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        {p.location}
                      </div>
                    </div>

                    <div
                      className="text-lg font-semibold"
                      data-testid={`text-property-price-${p.id}`}
                    >
                      {formatPrice(p.price)}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    {typeof p.beds === "number" && p.beds > 0 ? (
                      <span className="inline-flex items-center gap-1" data-testid={`text-property-beds-${p.id}`}>
                        <BedDouble className="h-3.5 w-3.5" /> {p.beds} Beds
                      </span>
                    ) : null}
                    {typeof p.baths === "number" && p.baths > 0 ? (
                      <span className="inline-flex items-center gap-1" data-testid={`text-property-baths-${p.id}`}>
                        <BedDouble className="h-3.5 w-3.5" /> {p.baths} Baths
                      </span>
                    ) : null}
                    {typeof p.sqft === "number" ? (
                      <span className="inline-flex items-center gap-1" data-testid={`text-property-sqft-${p.id}`}>
                        <Ruler className="h-3.5 w-3.5" /> {p.sqft.toLocaleString()} sqft
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground/85 group-hover:text-foreground">
                    <span data-testid={`text-view-details-${p.id}`}>View details</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border bg-card p-8 text-center lux-shadow" data-testid="empty-properties">
            <div className="text-lg font-semibold" data-testid="text-empty-title">
              No results
            </div>
            <div className="mt-2 text-sm text-muted-foreground" data-testid="text-empty-subtitle">
              Try removing a filter or increasing your budget.
            </div>
          </div>
        ) : null}

        {canLoadMore ? (
          <div className="mt-10 flex justify-center" data-testid="panel-load-more">
            <Button
              variant="outline"
              className="rounded-xl"
              data-testid="button-load-more"
              onClick={() => setVisibleCount((c) => c + 3)}
            >
              Load more
            </Button>
          </div>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
