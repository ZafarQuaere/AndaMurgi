import { assets } from "@/lib/assets";

export type BlogPost = {
  slug: string;
  tag: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  imageSrc: string;
};

export const blogFeatured = {
  tag: "Mindfulness",
  date: "October 24, 2024",
  title: "Finding Stillness in a Hyper-Connected World",
  excerpt:
    "In an era of constant notifications, true silence has become a luxury. We explore the psychological benefits of intentional disconnection and how to reclaim your mental focus.",
  imageSrc: assets.blog.featuredForest,
};

export const blogPosts: BlogPost[] = [
  {
    slug: "neural-architecture-empathy",
    tag: "Psychology",
    readTime: "8 min read",
    title: "The Neural Architecture of Empathy",
    excerpt:
      "Understanding how our brains mirror the emotions of others and how to cultivate deeper connections through cognitive understanding.",
    author: "Dr. Elena Vance",
    imageSrc: assets.blog.grid[0],
  },
  {
    slug: "morning-rituals-resilience",
    tag: "Self-Care",
    readTime: "5 min read",
    title: "Morning Rituals for Emotional Resilience",
    excerpt:
      "Beyond the coffee: how the first twenty minutes of your day dictate your psychological threshold for stress throughout the afternoon.",
    author: "Julian Thorne",
    imageSrc: assets.blog.grid[1],
  },
  {
    slug: "intergenerational-healing",
    tag: "Therapy",
    readTime: "12 min read",
    title: "Navigating Intergenerational Healing",
    excerpt:
      "Exploring the delicate process of recognizing inherited behavioral patterns and creating a new narrative for future generations.",
    author: "Sarah Jenkins, LPC",
    imageSrc: assets.blog.grid[2],
  },
  {
    slug: "active-listening",
    tag: "Mindfulness",
    readTime: "6 min read",
    title: "The Art of Active Listening",
    excerpt:
      "How being fully present in conversation serves as a therapeutic tool for both the speaker and the listener in everyday interactions.",
    author: "Dr. Elena Vance",
    imageSrc: assets.blog.grid[3],
  },
  {
    slug: "emotional-burnout",
    tag: "Psychology",
    readTime: "10 min read",
    title: "Decoding Emotional Burnout",
    excerpt:
      "Recognizing the subtle signs of compassion fatigue and professional exhaustion before they manifest as physical symptoms.",
    author: "Marcus Reed",
    imageSrc: assets.blog.grid[4],
  },
  {
    slug: "nature-therapeutic-mirror",
    tag: "Healing",
    readTime: "7 min read",
    title: "Nature as a Therapeutic Mirror",
    excerpt:
      "Why spending time in organic environments reduces cortisol levels and provides a spatial metaphor for personal growth and change.",
    author: "Sarah Jenkins, LPC",
    imageSrc: assets.blog.grid[5],
  },
];
