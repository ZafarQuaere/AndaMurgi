/** Central local image paths for static-export friendly assets. */

export const assets = {
  home: {
    heroForest: "/images/home/hero-forest.webp",
    // elenaPortrait: "/images/home/elena-portrait.webp",
    elenaPortrait: "/images/home/masiha-home.jpg",
  },
  services: {
    individualRoom: "/images/services/individual-room.webp",
    couplesHands: "/images/services/couples-hands.webp",
    ctaHills: "/images/services/cta-hills.webp",
  },
  about: {
    // portrait: "/images/about/portrait.webp",
    portrait: "/images/about/masiha-about.jpg",

  },
  blog: {
    heroInterior: "/images/blog/hero-interior.webp",
    featuredForest: "/images/blog/featured-forest.webp",
    grid: [
      "/images/blog/grid-1.webp",
      "/images/blog/grid-2.webp",
      "/images/blog/grid-3.webp",
      "/images/blog/grid-4.webp",
      "/images/blog/grid-5.webp",
      "/images/blog/grid-6.webp",
    ],
  },
  contact: {
    map: "/images/contact/map.webp",
    meditation: "/images/contact/meditation.webp",
  },
} as const;
