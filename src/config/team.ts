export type MembersProps = {
  id: string
  name: string
  fullName: string
  mainSkill: string
  domains: string[]
  portfolio: string
  socials: {
    media: "instagram" | "twitter" | "github" | "whatsapp" | "linkedin"
    link: string
  }[]
  strongholds: {
    domain: "Backend" | "Frontend" | "Blockchain" | "AI/ML" | "Cloud"
    stats: number
  }[]
}[]

export const members: MembersProps = [
  {
    id: "rohan",
    name: "Rohan",
    fullName: "Rohan Chandra Sen",
    mainSkill: "blockchain",
    domains: [
      "web dev",
      "frontend developer",
      "backend engineer",
      "blockchain dev",
      "rust enthusiast",
      "3d-designer",
      "UX dveloper",
    ],
    portfolio: "https://rcsen.vercel.app",
    socials: [
      {
        media: "linkedin",
        link: "https://www.linkedin.com/in/rohan856/",
      },
      {
        media: "github",
        link: "https://github.com/rohansen856/",
      },
      {
        media: "twitter",
        link: "https://x.com/rohansen856",
      },
      {
        media: "instagram",
        link: "https://www.instagram.com/rcsen856",
      },
      {
        media: "whatsapp",
        link: "tel:+916290597853",
      },
    ],
    strongholds: [
      { domain: "Backend", stats: 25 },
      { domain: "Frontend", stats: 25 },
      { domain: "Blockchain", stats: 30 },
      { domain: "AI/ML", stats: 10 },
      { domain: "Cloud", stats: 10 },
    ],
  },
  {
    id: "ritankar",
    name: "Ritankar",
    fullName: "Ritankar Saha",
    mainSkill: "cloud",
    domains: [
      "web dev",
      "frontend developer",
      "backend engineer",
      "blockchain dev",
      "golang enthusiast",
    ],
    portfolio: "/",
    socials: [
      {
        media: "linkedin",
        link: "https://www.linkedin.com/in/rohan856/",
      },
      {
        media: "github",
        link: "https://github.com/rohansen856/",
      },
      {
        media: "twitter",
        link: "https://x.com/rohansen856",
      },
      {
        media: "instagram",
        link: "https://www.instagram.com/rcsen856",
      },
      {
        media: "whatsapp",
        link: "tel:+916290597853",
      },
    ],
    strongholds: [
      { domain: "Backend", stats: 25 },
      { domain: "Frontend", stats: 25 },
      { domain: "Blockchain", stats: 30 },
      { domain: "AI/ML", stats: 10 },
      { domain: "Cloud", stats: 10 },
    ],
  },
  {
    id: "om",
    name: "Om",
    fullName: "Om Thorat",
    mainSkill: "cybersec",
    domains: [
      "web dev",
      "frontend developer",
      "backend engineer",
      "blockchain dev",
      "rust enthusiast",
    ],
    portfolio: "/",
    socials: [
      {
        media: "linkedin",
        link: "https://www.linkedin.com/in/rohan856/",
      },
      {
        media: "github",
        link: "https://github.com/rohansen856/",
      },
      {
        media: "twitter",
        link: "https://x.com/rohansen856",
      },
      {
        media: "instagram",
        link: "https://www.instagram.com/rcsen856",
      },
      {
        media: "whatsapp",
        link: "tel:+916290597853",
      },
    ],
    strongholds: [
      { domain: "Backend", stats: 25 },
      { domain: "Frontend", stats: 25 },
      { domain: "Blockchain", stats: 30 },
      { domain: "AI/ML", stats: 10 },
      { domain: "Cloud", stats: 10 },
    ],
  },
  {
    id: "aryan",
    name: "Aryan",
    fullName: "Aryan Pandit",
    mainSkill: "cybersec",
    domains: [
      "web dev",
      "frontend developer",
      "backend engineer",
      "blockchain dev",
      "rust enthusiast",
    ],
    portfolio: "/",
    socials: [
      {
        media: "linkedin",
        link: "https://www.linkedin.com/in/rohan856/",
      },
      {
        media: "github",
        link: "https://github.com/rohansen856/",
      },
      {
        media: "twitter",
        link: "https://x.com/rohansen856",
      },
      {
        media: "instagram",
        link: "https://www.instagram.com/rcsen856",
      },
      {
        media: "whatsapp",
        link: "tel:+916290597853",
      },
    ],
    strongholds: [
      { domain: "Backend", stats: 25 },
      { domain: "Frontend", stats: 25 },
      { domain: "Blockchain", stats: 30 },
      { domain: "AI/ML", stats: 10 },
      { domain: "Cloud", stats: 10 },
    ],
  },
  {
    id: "tanmay",
    name: "Tanmay",
    fullName: "Tanmay Deobhankar",
    mainSkill: "frontend-dev",
    domains: [
      "web dev",
      "frontend developer",
      "backend engineer",
      "blockchain dev",
      "rust enthusiast",
    ],
    portfolio: "/",
    socials: [
      {
        media: "linkedin",
        link: "https://www.linkedin.com/in/rohan856/",
      },
      {
        media: "github",
        link: "https://github.com/rohansen856/",
      },
      {
        media: "twitter",
        link: "https://x.com/rohansen856",
      },
      {
        media: "instagram",
        link: "https://www.instagram.com/rcsen856",
      },
      {
        media: "whatsapp",
        link: "tel:+916290597853",
      },
    ],
    strongholds: [
      { domain: "Backend", stats: 25 },
      { domain: "Frontend", stats: 25 },
      { domain: "Blockchain", stats: 30 },
      { domain: "AI/ML", stats: 10 },
      { domain: "Cloud", stats: 10 },
    ],
  },
  {
    id: "mariam",
    name: "Mariam",
    fullName: "Mariam Eqbal",
    mainSkill: "backend-dev",
    domains: [
      "web dev",
      "python developer",
      "backend engineer",
      "SQL developer",
      "haskell",
    ],
    portfolio: "/",
    socials: [
      {
        media: "linkedin",
        link: "https://www.linkedin.com/in/rohan856/",
      },
      {
        media: "github",
        link: "https://github.com/rohansen856/",
      },
      {
        media: "twitter",
        link: "https://x.com/rohansen856",
      },
      {
        media: "instagram",
        link: "https://www.instagram.com/rcsen856",
      },
      {
        media: "whatsapp",
        link: "tel:+916290597853",
      },
    ],
    strongholds: [
      { domain: "Backend", stats: 25 },
      { domain: "Frontend", stats: 25 },
      { domain: "Blockchain", stats: 30 },
      { domain: "AI/ML", stats: 10 },
      { domain: "Cloud", stats: 10 },
    ],
  },
]
