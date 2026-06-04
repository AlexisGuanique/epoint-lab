import type { Locale } from "@/lib/locales";

export type NavItem = { label: string; href: string };

export type FAQItem = { question: string; answer: string };

export type Office = {
  city: string;
  country: string;
  email: string;
  phone: string;
  address: string;
};

export type Feature = { title: string; description: string };

export type Stat = { value: string; label: string };

export function getNav(locale: Locale): NavItem[] {
  const base = `/${locale}`;
  return [
    { label: "Home", href: base },
    { label: "About", href: `${base}/about` },
    { label: "E-Blog", href: `${base}/blog` },
    { label: "Contact", href: `${base}/contact` },
  ];
}

export const siteConfig = {
  brand: "E Point Lab",
  email: "sales@epointlab.com",
  supportEmail: "support@epointlab.com",
  phone: "+1 (786) 882 3838",
  address: {
    street: "6663 Narcoossee Rd",
    suite: "Ste 166, Orlando, FL 32822",
    country: "United States.",
  },
  disclaimer:
    "Epointlab provides consulting and operational support services. We do not offer investment services or financial guarantees",
  copyright: "E PointLab copyright 2026 @ All Right Reserved.",
  credit: { label: "Created By Bigvid.ai", href: "https://www.bigvid.ai/" },
  scheduleHref: (locale: Locale) => `/${locale}/schedule-a-call`,
};

export const homeContent = {
  hero: {
    title: {
      white: "Turn e-commerce sales into Your ",
      gold: "Best Business Engine",
    },
    eyebrow: {
      white: "WE CREATE & IMPROVE ",
      gold: "YOUR E-COMMERCE BUSINESS",
    },
    subtitle:
      "Stop Managing & Start Growing With Our Turn Key Ecommerce Solution",
    description:
      "We provide expert e-commerce consulting, store setup and operational support to help retail businesses grow efficiently and sustainably",
  },
  whoWeWorkWith: {
    title: "WHO WE WORK WITH",
    subtitle:
      "Optimize your operations, scale with confidence with strong logistics",
    socialProof: "Join 250+ businesses already thriving with EpointLab",
    body: "It's time to take your e-commerce operations to the next level and unlock untapped profitability. Whether you're looking to scale, streamline, or stay ahead of the competition, our team of experts is here to guide you every step of the way.",
    image:
      "https://cloud-1de12d.becdn.net/media/original/_name_8YG31Xn4dSw_03361f82-9f8e-413f-a2fe-05e59d239498/man-using-smartphone-on-chair.jpg",
    imageAlt: "man using smartphone on chair",
  },
  elevate: {
    titleLines: ["Elevate Your", "E-Commerce", "Success Today"],
    paragraphs: [
      "Boost profitability, scale with confidence, and outpace your",
      "competition effortlessly. Ready to streamline your operations",
      "and transform the way you do business?",
    ],
    closing: "Let EpointLab lead the way.",
    images: [
      {
        src: "https://cloud-1de12d.becdn.net/media/original/_name_sczNLg6rrhQ_2f9baf5c-94e7-4510-844e-5826937c458e/yellow-and-white-plastic-box-lot.jpg",
        alt: "yellow and white plastic box lot",
      },
      {
        src: "https://cloud-1de12d.becdn.net/media/original/_name_kWUZKKBR2Ag_bcc55bbb-5c61-405d-acd5-3c92152ebc28/man-in-green-jacket-and-black-pants-standing-in-front-of-brown-building-during-daytime.jpg",
        alt: "man in green jacket and black pants standing in front of brown building during daytime",
      },
    ],
  },
  partner: {
    heading:
      "Partner with our expert automation and logistics team and, maximize Your E-commerce Potential",
    listTitle: "Transform Your E-commerce Operations Through:",
    bullets: [
      "Seamless Automation Solutions",
      "Advanced Logistics Management",
      "Strategic Growth Planning",
      "Enhanced Operational Efficiency",
    ],
    stat: "Since 2019, our customers have sold +80 million through our services.",
    body: "EpointLab has been in the forefront of the e-commerce automation, empowering businesses to thrive on platforms like Amazon or Walmart. We specialize in cutting-edge solutions that simplify operations, boost you business, and scale success.",
  },
  faqTitle: "FREQUENTLY ASKED QUESTIONS",
  faq: [
    {
      question: "What Is EpointLab?",
      answer:
        "At EpointLab, we specialize in revolutionizing e-commerce operations on powerhouse platforms like Amazon and Walmart. Our all-in-one solutions include expert store creation, seamless process automation, and end-to-end operational management. Designed to simplify complexity and maximize efficiency, our services empower entrepreneurs and businesses to thrive, scale, and succeed in today's fast-evolving digital marketplace. Let us help you turn your e-commerce ambitions into sustained growth.",
    },
    {
      question: "What type of products does EpointLab work with",
      answer:
        "At EpointLab, we excel in managing mass-market products that deliver exceptional results-high demand, rapid turnover, and consistent performance. This proven strategy not only guarantees superior profit margins but also ensures the long-term stability of your sales",
    },
    {
      question: "What makes us better than the competition?",
      answer:
        "EpointLab emphasizes distinctive design and layout by utilizing advanced technology, that other do not come close. We are truly a one stop shop, from our Warehouses to our A+ Staff is here to make you win online.",
    },
    {
      question: "How can EpointLab help me grow my business?",
      answer:
        "At EpointLab, we primarily work with consumer products. Epointlab handles the operational and logistical aspects of your Amazon or Walmart store, allowing you to focus on the strategic growth of your business. We work with leading US wholesalers and implement proven strategies to maximize sales.",
    },
  ] satisfies FAQItem[],
  cta: {
    heading: "Let's start your store",
    buttonLabel: "Schedule a Call",
  },
};

export const aboutContent = {
  hero: "ABOUT US",
  tagline: "EpointLab...built for ambitious finance freedom lifestyle",
  stats: [
    { value: "+250", label: "customers" },
    { value: "Automated", label: "Service" },
    { value: "Global", label: "digital business" },
    { value: "Tailor-made", label: "US market access" },
  ] satisfies Stat[],
  story: [
    "We were born from the ground up with a clear objective: to improve the quality of life of the individuals behind companies, by automating logistic and operational complex processes so they have more free time.",
    'Our brand story: We are the point of contact for value creation. The "E" reflects the digital world we embrace and finally, innovation-lab is the energy that drives us to constantly deliver improvements to our customers.',
    "Who we serve: Unique world-class all-in-one B2B ecommerce service platform designed to simplify business owners to focus on growth",
  ],
  experience: {
    title: "The best possible experience ever",
    description:
      "We deliver a personalized service tailored to each customer, based on their own needs and business reality.",
  },
  features: [
    {
      title: "Single Point of Contact",
      description:
        "Based on the experience gained over the years, we constantly work to improve communication during the process",
    },
    {
      title: "Reports & Analysis",
      description:
        "We provide all the information on your transactions and data analysis",
    },
    {
      title: "Onboarding",
      description:
        "We accompany our clients throughout all initial process, with a dedicated team in charge of paperwork.",
    },
    {
      title: "Automation Workflows",
      description:
        "We offer a fully automated e-commerce solution to sell on different Seller Marketplace",
    },
  ] satisfies Feature[],
  fullService: {
    title: "Full Service",
    description:
      "It's time to take your e-commerce operations to the next level Whether you're looking to scale, streamline, or stay ahead of the competition, our team of experts is here to guide you every step of the way.",
    cta: "Lets start your store",
  },
};

export const offices: Office[] = [
  {
    city: "Orlando",
    country: "USA",
    email: "sales@epointlab.com",
    phone: "+1 (407) 698-7533",
    address: "6663 Narcoossee Rd Ste 166, Orlando, FL 32822 United States",
  },
  {
    city: "Miami",
    country: "USA",
    email: "sales@epointlab.com",
    phone: "+1 (407) 698-7533",
    address: "9594 NW 41st St unit 210, Doral, FL 33178 United States",
  },
];

export const blogPosts = [
  {
    slug: "ecommerce-automation-2026",
    title: "E-commerce automation trends for 2026",
    excerpt:
      "How automation and logistics partnerships help Amazon and Walmart sellers scale sustainably.",
    date: "2026-01-15",
  },
  {
    slug: "mass-market-product-strategy",
    title: "Why mass-market products drive stable margins",
    excerpt:
      "High demand, rapid turnover, and consistent performance — the EpointLab product playbook.",
    date: "2025-11-02",
  },
];
