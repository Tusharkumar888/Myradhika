export type PropertyType =
  | "Apartment"
  | "Villa"
  | "Commercial"
  | "Plot / Land"
  | "Luxury Home";

export type Property = {
  id: string;
  title: string;
  type: PropertyType;
  location: string;
  subLocation?: string;
  price: number;
  beds?: number;
  baths?: number;
  sqft?: number;
  featured?: boolean;
  images: string[];
  description: string;
  amenities: string[];
  lat: number;
  lng: number;
};

export const formatPrice = (value: number) =>
  value.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export const PROPERTY_TYPES: PropertyType[] = [
  "Apartment",
  "Villa",
  "Commercial",
  "Plot / Land",
  "Luxury Home",
];

export const LOCATIONS = [
  "Downtown",
  "Waterfront",
  "Uptown",
  "Hillside",
  "Business District",
  "Gated Community",
];

export const SUB_LOCATIONS = {
  "Downtown": ["All Areas", "Central Square", "North End", "Skyline District"],
  "Waterfront": ["All Areas", "Marina Bay", "Harbor View", "Beachside"],
  "Uptown": ["All Areas", "Park Avenue", "Heights", "Garden District"],
  "Hillside": ["All Areas", "Valley View", "Peak Estate", "Forest Edge"],
  "Business District": ["All Areas", "Corporate Plaza", "Tech Hub", "Financial Core"],
  "Gated Community": ["All Areas", "Oak Ridge", "Pine Valley", "Sunset Ridge"],
};

export const properties: Property[] = [
  {
    id: "AE-1001",
    title: "Skyline Signature Apartment",
    type: "Apartment",
    location: "Downtown",
    subLocation: "Skyline District",
    price: 1250000,
    beds: 3,
    baths: 2,
    sqft: 1840,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=2200&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2200&q=80",
    ],
    description:
      "A light-filled, design-forward residence with sweeping skyline views, premium finishes, and concierge-grade amenities. Ideal for professionals who want elegance without compromise.",
    amenities: [
      "24/7 Security",
      "Concierge",
      "Gym & Wellness",
      "Private Parking",
      "Infinity Pool",
      "Smart Home Controls",
    ],
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "AE-1002",
    title: "Azure Waterfront Villa",
    type: "Villa",
    location: "Waterfront",
    subLocation: "Marina Bay",
    price: 3850000,
    beds: 5,
    baths: 4,
    sqft: 4280,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=2200&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=2200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2200&q=80",
    ],
    description:
      "A private waterfront escape with dramatic indoor-outdoor living, curated landscaping, and sunset terraces designed for effortless entertaining.",
    amenities: [
      "Private Garden",
      "Outdoor Kitchen",
      "Sea View Terrace",
      "Home Office",
      "Wine Storage",
      "EV Charging",
    ],
    lat: 40.6892,
    lng: -74.0445,
  },
  {
    id: "AE-1003",
    title: "Prime Corner Office Suite",
    type: "Commercial",
    location: "Business District",
    price: 2100000,
    beds: 0,
    baths: 2,
    sqft: 3560,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2200&q=80",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2200&q=80",
    ],
    description:
      "A polished commercial space in the heart of the district. Flexible layout, premium light, and a reception-ready arrival that elevates your brand.",
    amenities: [
      "Reception Area",
      "Meeting Rooms",
      "High-Speed Elevators",
      "Secure Access",
      "Fiber Ready",
      "On-site Parking",
    ],
    lat: 40.758,
    lng: -73.9855,
  },
  {
    id: "AE-1004",
    title: "Hillside Plot with Panoramic Views",
    type: "Plot / Land",
    location: "Hillside",
    price: 790000,
    sqft: 18200,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80",
    ],
    description:
      "Build your dream property on a rare, elevated parcel with protected sightlines and effortless access to the city. A long-term value play.",
    amenities: ["Gated Access", "Utilities Nearby", "Survey Available", "Road Access"],
    lat: 40.7306,
    lng: -73.9352,
  },
  {
    id: "AE-1005",
    title: "Heritage Luxury Townhome",
    type: "Luxury Home",
    location: "Uptown",
    price: 2950000,
    beds: 4,
    baths: 4,
    sqft: 3120,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=2200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=2200&q=80",
    ],
    description:
      "A refined townhome with timeless materials, modern comfort upgrades, and a quiet street presence that feels undeniably premium.",
    amenities: [
      "Private Entrance",
      "Chef's Kitchen",
      "Walk-in Closets",
      "Skylights",
      "Patio",
      "Security System",
    ],
    lat: 40.7831,
    lng: -73.9712,
  },
  {
    id: "AE-1006",
    title: "Gated Community Family Villa",
    type: "Villa",
    location: "Gated Community",
    price: 2450000,
    beds: 5,
    baths: 3,
    sqft: 3980,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2200&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=2200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2200&q=80",
    ],
    description:
      "A serene, secure villa with expansive living areas, a dedicated home office, and lush outdoor space designed for families and entertaining.",
    amenities: [
      "Gated Security",
      "Community Clubhouse",
      "Private Garden",
      "Home Office",
      "Kids Play Area",
    ],
    lat: 40.7061,
    lng: -74.0086,
  },
];

export const featuredProperties = properties.filter((p) => p.featured);

export const getPropertyById = (id: string | undefined) =>
  properties.find((p) => p.id === id);
