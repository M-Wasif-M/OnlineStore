import type { Product } from "../types";

/*
 * Static demo data.
 * Later this array can be replaced by data fetched from a .NET Web API.
 */
export const products: Product[] = [
  {
    id: 1,
    name: "Tailored Overshirt",
    category: "Men",
    price: 799,
    oldPrice: 999,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
    description:
      "A clean, structured overshirt designed for everyday layering and a refined casual look.",
    sizes: ["S", "M", "L", "XL"],
    badge: "New"
  },
  {
    id: 2,
    name: "Soft Knit Dress",
    category: "Women",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
    description:
      "Soft-touch knit dress with a flattering silhouette and an understated premium finish.",
    sizes: ["XS", "S", "M", "L"],
    badge: "Popular"
  },
  {
    id: 3,
    name: "Minimal Gold Necklace",
    category: "Jewelry",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
    description:
      "A delicate gold-tone necklace created for subtle daily styling or elegant layering."
  },
  {
    id: 4,
    name: "Classic Leather Bag",
    category: "Accessories",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
    description:
      "Structured everyday bag with clean lines, generous storage and a timeless finish.",
    badge: "Best seller"
  },
  {
    id: 5,
    name: "Relaxed Cotton Shirt",
    category: "Men",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=85",
    description:
      "Breathable cotton shirt with a relaxed fit for easy workday and weekend styling.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 6,
    name: "Everyday Blazer",
    category: "Women",
    price: 1099,
    oldPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=85",
    description:
      "A modern blazer with a relaxed tailored shape, made to work across office and evening looks.",
    sizes: ["XS", "S", "M", "L"],
    badge: "Sale"
  },
  {
    id: 7,
    name: "Pearl Drop Earrings",
    category: "Jewelry",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
    description:
      "Elegant pearl-inspired earrings with a light, polished silhouette."
  },
  {
    id: 8,
    name: "Hydrating Lip Tint",
    category: "Beauty",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&q=85",
    description:
      "A lightweight lip tint with buildable color and a soft, hydrated finish.",
    badge: "Trending"
  },
  {
    id: 9,
    name: "Structured Trousers",
    category: "Women",
    price: 749,
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=85",
    description:
      "High-waisted tailored trousers with a clean drape and versatile everyday fit.",
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 10,
    name: "Premium Hoodie",
    category: "Men",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85",
    description:
      "Heavyweight premium hoodie with a soft brushed interior and relaxed streetwear fit.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 11,
    name: "Statement Ring",
    category: "Jewelry",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
    description:
      "A sculptural statement ring with a polished finish designed to elevate simple outfits."
  },
  {
    id: 12,
    name: "Daily Essentials Set",
    category: "Beauty",
    price: 549,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85",
    description:
      "A curated beauty set with simple everyday essentials for an effortless routine."
  }
];
