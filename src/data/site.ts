import type { Locale } from "@/lib/locales";

export type NavItem = { label: string; href: string };

export type FAQItem = { question: string; answer: string };

export type Office = {
  city: string;
  country: string;
  email: string;
  phone: string;
  address: string;
  mapEmbedUrl: string;
};

export type Feature = { title: string; description: string };

export type AboutFeature = {
  title: string;
  description: string;
  icon: "star" | "video" | "email" | "gear";
};

export type Stat = { value: string; label: string };

export type HeroContent = {
  eyebrow?: { white: string; gold: string };
  title: { white: string; gold: string };
  subtitle?: string;
};

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
  /** Set NEXT_PUBLIC_CALENDLY_URL (e.g. https://calendly.com/your-org/discovery) */
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  /** Booking widget used on epointlab.com when Calendly URL is not configured */
  bookingWidgetUrl:
    "https://api.leadconnectorhq.com/widget/booking/pfu1ROOBuxAKCrLNpMlD",
};

export const pageHeroes = {
  home: {
    eyebrow: {
      white: "WE CREATE & IMPROVE ",
      gold: "YOUR E-COMMERCE BUSINESS",
    },
    title: {
      white: "Turn e-commerce sales into Your ",
      gold: "Best Business Engine",
    },
    subtitle:
      "Stop Managing & Start Growing With Our Turn Key Ecommerce Solution",
  },
  about: {
    eyebrow: { white: "ABOUT ", gold: "US" },
    title: {
      white: "EpointLab...built for ",
      gold: "ambitious finance freedom lifestyle",
    },
  },
  contact: {
    title: { white: "Contact ", gold: "Information" },
  },
  blog: {
    title: { white: "E-", gold: "Blog" },
    subtitle:
      "Insights on e-commerce automation, logistics, and marketplace growth.",
  },
  schedule: {
    title: { white: "Schedule a ", gold: "Call" },
    subtitle: "Book a consultation with our e-commerce experts.",
  },
  privacy: {
    title: { white: "Privacy ", gold: "Policy" },
  },
  terms: {
    title: { white: "Terms of ", gold: "Service" },
  },
} satisfies Record<string, HeroContent>;

export const homeContent = {
  hero: pageHeroes.home,
  consult: {
    intro:
      "We provide expert e-commerce consulting, store setup and operational support to help retail businesses grow efficiently and sustainably",
    carousel: [
      {
        src: "/images/carousel/slide-1.png",
        alt: "Amazon Seller dashboard showing 48.65K USD sales with 63% growth",
      },
      {
        src: "/images/carousel/slide-2.png",
        alt: "Amazon Seller dashboard showing 576 USD weekly sales with 41% growth",
      },
      {
        src: "/images/carousel/slide-3.png",
        alt: "Amazon Seller dashboard showing 25.49K USD sales with 254% growth",
      },
      {
        src: "/images/carousel/slide-4.png",
        alt: "Amazon Seller dashboard showing 19.09K USD sales with 616% growth",
      },
      {
        src: "/images/carousel/slide-5.png",
        alt: "Amazon Seller dashboard showing strong daily sales performance",
      },
    ],
  },
  whoWeWorkWith: {
    title: "WHO WE WORK WITH",
    segments: [
      {
        illustration: "online-sellers" as const,
        label: "Online Sellers",
      },
      {
        illustration: "retail-brands" as const,
        label: "Retail Brands",
      },
      {
        illustration: "logistics" as const,
        label: "Logistics Teams",
      },
      {
        illustration: "scaling-businesses" as const,
        label: "Scaling Businesses",
      },
    ],
    subtitle:
      "Optimize your operations, scale with confidence with strong logistics",
    video: "/videos/operations-logistics.mp4",
    socialProof: "Join 250+ businesses already thriving with EpointLab",
    body: "It's time to take your e-commerce operations to the next level and unlock untapped profitability. Whether you're looking to scale, streamline, or stay ahead of the competition, our team of experts is here to guide you every step of the way.",
    detailIllustration: "growth-ecosystem" as const,
    detailIllustrationAlt:
      "Illustration of connected e-commerce sellers, retail brands, and logistics teams",
  },
  elevate: {
    titleLines: ["Elevate Your", "E-Commerce", "Success Today"],
    paragraphs: [
      "Boost profitability, scale with confidence, and outpace your",
      "competition effortlessly. Ready to streamline your operations",
      "and transform the way you do business?",
    ],
    closing: "Let EpointLab lead the way.",
    image: {
      src: "https://cloud-1de12d.becdn.net/media/original/_name_sczNLg6rrhQ_2f9baf5c-94e7-4510-844e-5826937c458e/yellow-and-white-plastic-box-lot.jpg",
      alt: "yellow and white plastic box lot",
    },
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
    image: {
      src: "https://cloud-1de12d.becdn.net/media/original/_name_kWUZKKBR2Ag_bcc55bbb-5c61-405d-acd5-3c92152ebc28/man-in-green-jacket-and-black-pants-standing-in-front-of-brown-building-during-daytime.jpg",
      alt: "man in green jacket and black pants standing in front of brown building during daytime",
    },
  },
  customerSuccess: {
    title: "Since 2019, our customers have sold +80 million through our services.",
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

export type AboutStatCircle = {
  image: string;
  alt: string;
};

export const aboutContent = {
  intro: {
    tagline: {
      brand: "EpointLab",
      rest: "...built for ambitious finance freedom lifestyle",
    },
    stats: [
      {
        image: "/images/about/stat-customers.png",
        alt: "+250 customers",
      },
      {
        image: "/images/about/stat-automated.png",
        alt: "Automated Service",
      },
      {
        image: "/images/about/stat-global.png",
        alt: "Global digital business",
      },
      {
        image: "/images/about/stat-tailor-made.png",
        alt: "Tailor-made US market access",
      },
    ] satisfies AboutStatCircle[],
  },
  story: {
    logo: "/images/about/epoint-lab-logo.png",
    logoAlt: "E Point Lab logo",
    items: [
      "We were born from the ground up with a clear objective: to improve the quality of life of the individuals behind companies, by automating logistic and operational complex processes so they have more free time.",
      'Our brand story: We are the point of contact for value creation. The "E" reflects the digital world we embrace and finally, innovation-lab is the energy that drives us to constantly deliver improvements to our customers.',
      "Who we serve: Unique world-class all-in-one B2B ecommerce service platform designed to simplify business owners to focus on growth",
    ],
  },
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
      icon: "star",
    },
    {
      title: "Onboarding",
      description:
        "We accompany our clients throughout all initial process, with a dedicated team in charge of paperwork.",
      icon: "video",
    },
    {
      title: "Reports & Analysis",
      description:
        "We provide all the information on your transactions and data analysis",
      icon: "email",
    },
    {
      title: "Automation Workflows",
      description:
        "We offer a fully automated e-commerce solution to sell on different Seller Marketplace",
      icon: "gear",
    },
  ] satisfies AboutFeature[],
  fullService: {
    title: "Full Service",
    description:
      "It's time to take your e-commerce operations to the next level Whether you're looking to scale, streamline, or stay ahead of the competition, our team of experts is here to guide you every step of the way.",
    cta: "Lets start your store",
    image: {
      src: "/images/about/full-service-collage.png",
      alt: "E Point Lab office lounge and warehouse facilities collage",
      width: 508,
      height: 283,
    },
  },
};

export const offices: Office[] = [
  {
    city: "Orlando",
    country: "USA",
    email: "sales@epointlab.com",
    phone: "+1 (407) 698-7533",
    address: "6663 Narcoossee Rd Ste 166, Orlando, FL 32822 United States",
    mapEmbedUrl:
      "https://www.google.com/maps?q=6663+Narcoossee+Rd+Ste+166,+Orlando,+FL+32822&output=embed",
  },
  {
    city: "Miami",
    country: "USA",
    email: "sales@epointlab.com",
    phone: "+1 (407) 698-7533",
    address: "9594 NW 41st St unit 210, Doral, FL 33178 United States",
    mapEmbedUrl:
      "https://www.google.com/maps?q=9594+NW+41st+St+unit+210,+Doral,+FL+33178&output=embed",
  },
];

export const contactContent = {
  offices: {
    title: "Our offices",
    subtitle: "Contact one of our departments to talk to us",
  },
  form: {
    title: "Contact Epointlab/ Request Information",
    fields: {
      firstName: { label: "First Name", required: true },
      lastName: { label: "Last Name", required: false },
      phone: { label: "Phone", required: true },
      email: { label: "Email", required: true },
      investmentAmount: { label: "Investment Amount", required: true },
    },
    submitLabel: "Submit",
    legalLinks: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    consentCheckboxLabel:
      'I have read and agree to the policies described below, including the Privacy Policy and Terms of Service.',
    consentText:
      'By submitting my number, I consent to receive both text messages and phone calls from epointlab, which may be automated, AI-generated or prerecorded, and may include marketing communications. These calls or texts may originate from or terminate in the United States, Chile, Paraguay or Argentina. I understand I can opt out at any time by replying "STOP", following the instructions in the message or contacting sales@epointlab.com or +1 (786) 882 3838. For the United States: I acknowledge that outbound automated / prerecorded marketing calls or texts to wireless numbers require prior express written consent under the Telephone Consumer Protection Act ("TCPA") and related regulations. Federal Communications Commission +2 Experian +2 For Chile, Paraguay and Argentina: I acknowledge that our business will respect local privacy and telemarketing laws (including any local "Do Not Call" or consent obligations) and will honour opt-out requests from any recipient at any time. Important Note: These requirements reflect common legal standards, but laws may vary by jurisdiction. I accept full responsibility for ensuring our consent language, dialing practices and cross-border calling comply with all applicable local, national and international laws, and we recommend review by qualified legal counsel.',
  },
};

export type BlogPost = {
  slug: string;
  title: string;
  description?: string;
  status: string;
  image: { src: string; alt: string };
};

export const blogContent = {
  sectionTitle: "Ecommerce Blog Update",
  posts: [
    {
      slug: "essential-features-ecommerce-owners",
      title: "Essential Features for Ecommerce Buiness Owners",
      status: "Coming Soon!",
      image: {
        src: "/images/blog/office-lounge.png",
        alt: "E Point Lab office lounge with black and gold brand wall",
      },
    },
    {
      slug: "operator-vs-self-managed",
      title: "",
      description: "Understanding: Operator vs. Self Managed Option",
      status: "Coming Soon!",
      image: {
        src: "/images/blog/operator-consulting.png",
        alt: "woman in blue long sleeve shirt using silver macbook",
      },
    },
    {
      slug: "operating-without-a-guide",
      title: "",
      description: "Understanding the Challenged of  Operating without a Guide",
      status: "Coming Soon!",
      image: {
        src: "/images/blog/amazon-logistics.png",
        alt: "blue and white van parked near white building during daytime",
      },
    },
    {
      slug: "launch-manage-ecommerce-operations",
      title: "",
      description: "Launch and manage ecommerce operations",
      status: "Coming Soon!",
      image: {
        src: "/images/blog/analytics-dashboard.png",
        alt: "laptop computer on glass-top table",
      },
    },
  ] satisfies BlogPost[],
};

/** @deprecated Use blogContent.posts */
export const blogPosts = blogContent.posts;
