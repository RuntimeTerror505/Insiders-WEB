import {
  Bot,
  Cpu,
  Globe,
  LineChart,
  MessagesSquare,
  MonitorSmartphone,
  PenLine,
  Settings2,
  Smartphone,
  Users,
} from "lucide-react";

import type { Capability } from "@/components/sections/service/capability/capability-section";
import type { HeroQuote } from "@/components/sections/service/hero/service-hero-section";
import type { Offer } from "@/components/sections/service/offer/offer-grid-section";
import type { TechGroup } from "@/components/sections/service/stack/tech-stack-section";
import type { FaqItem } from "@/data/faq";
import { siteConfig } from "@/lib/site";

export type ServicePage = {
  slug: string;
  name: string;
  title: string;
  accent: string;
  lead: string[];
  heroAction: string;
  quotes: HeroQuote[];
  offers: Offer[];
  promise: string;
  promiseAction: string;
  capabilities: {
    title: string;
    description?: string;
    action?: string;
    layout?: "split" | "row";
    items: Capability[];
  }[];
  midCta: { title: string; description: string; action: string };
  spotlight: {
    title: string;
    description: string;
    action: string;
    image?: { src: string; alt: string };
  };
  consulting: {
    title: string;
    description: string;
    items: React.ReactNode[];
    image?: { src: string; alt: string };
  };
  stack: { title: string; groups: TechGroup[] };
  faq: FaqItem[];
};

// TODO: мок-контент за референсом ptolemay.com/services. Замінити, коли
// буде макет у Figma. Відповіді FAQ — та сама заглушка, що й на інших
// сторінках.
const placeholderAnswer =
  "A custom software development company builds apps specifically for your business workflows—no unnecessary features, no forced workarounds. For example, we automated an insurance startup's claims process, reducing client waiting times from 7 days down to 48 hours.";

const faqQuestions = [
  "What are mobile application development services?",
  "What is the best software for mobile app development?",
  "How to build an app with no experience?",
  "What is the first stage in app development?",
  "How do free apps make money?",
  "How much does it cost to hire someone to build a mobile app?",
  "How many hours does it take to develop an app?",
  "How much investment is required for app development?",
  "Does it cost money to put an app on the App Store?",
  "How much does it cost to keep an app running?",
  "Where to pitch an app idea?",
  "What are the 7 steps to create an app?",
];

const productDevelopment: ServicePage = {
  slug: "product-development",
  name: "Product Development",
  title: "Full-Cycle Software Development",
  accent: "Services",
  lead: [
    "From MVP to full-scale product, we build apps AI-first: small senior teams, machine-speed execution, full accountability — no blown budgets, no missed deadlines.",
    "Get a transparent, AI-built estimate for your project — scope, cost range and timeline, no hidden fees.",
  ],
  heroAction: "Get My Cost Report",
  quotes: [
    {
      name: "Marina Sol",
      role: "Diagnio Founder",
      quote: `We built our MVP with ${siteConfig.name} in under three months — the speed was game-changing for our early-stage startup`,
    },
    {
      name: "Sergey Lazarev",
      role: "Oohvat Founder",
      quote: `We're a non-technical team, but ${siteConfig.name} always told us when we were about to waste money`,
    },
  ],
  offers: [
    {
      id: "mobile",
      title: "Mobile App Development",
      description: (
        <>
          Short runway? We spin up a senior Flutter / Swift squad in{" "}
          <strong className="font-bold text-white">48 hours</strong> and ship a
          clickable MVP in three weeks. You get a cost-sheet, daily Slack
          updates, and 100 % IP ownership — proven on{" "}
          <strong className="font-bold text-white">
            100+ on-time releases
          </strong>
          .
        </>
      ),
    },
    {
      id: "web",
      title: "Web & Cloud Engineering",
      description: (
        <>
          Launch or modernise SaaS back-ends, high-load APIs, and microservices.
          50+ web platforms delivered,{" "}
          <strong className="font-bold text-white">99.8 % uptime</strong>{" "}
          average.
        </>
      ),
    },
    {
      id: "ai",
      title: "AI & ML",
      description: (
        <>
          Don&apos;t risk runway on experiments. We deploy tried-and-tested AI
          solutions — like automated chat, churn prediction, and smart pricing —
          with a{" "}
          <strong className="font-bold text-white">95 %+ success rate</strong>{" "}
          and clear ROI. All delivered with explainers and full founder IP
          rights.
        </>
      ),
    },
    {
      id: "design",
      title: "Product Design",
      description: (
        <>
          Investors don&apos;t fund wireframes — they fund polished, tested
          flows. We deliver pixel-perfect UI kits, clickable demos, and real
          user test data in two weeks. 92 % of our clients land follow-up
          meetings post-demo.
        </>
      ),
    },
    {
      id: "audit",
      title: "Tech-Debt Audit",
      description: (
        <>
          How much are you losing every week? Book our{" "}
          <strong className="font-bold text-white">tech-debt audit</strong> and
          we&apos;ll send a savings report within 48 hours — pay only if we find{" "}
          <strong className="font-bold text-white">$10K</strong> in avoidable
          costs. Most founders break even in one sprint.
        </>
      ),
    },
  ],
  promise: "Plan · Build · Scale",
  promiseAction: "Book a 15-min Strategy Call",
  capabilities: [
    {
      title: "Mobile App Development",
      description:
        "We build professional software development teams that develop highly customized and cost-effective solutions matching your business needs and requirements.",
      action: "Use AI Product Cost Calculator",
      items: [
        {
          id: "cross-platform",
          title: "Cross-platform App Development",
          description:
            "Create an app that works seamlessly on any device and operating system with our cross-platform app development services.",
          icon: MonitorSmartphone,
        },
        {
          id: "native",
          title: "Native App Development",
          description:
            "Craft bespoke and native applications for iOS and Android environments in a variety of niches, from healthcare to E-commerce.",
          icon: Smartphone,
        },
        {
          id: "pwa",
          title: "PWA",
          description:
            "Depending on your unique business requirements, we, as a top-ranked progressive web app development company, develop with an intuitive user interface, quick animations, native-like feeling, and lightning-fast speed.",
          icon: Globe,
        },
      ],
    },
    {
      title: "Software Development",
      description:
        "We are agile and we engineer software solutions that cater to your specific pain points head-on delivering value and unlocking revenue.",
      action: "Use AI App Cost Calculator",
      items: [
        {
          id: "erp",
          title: "ERP Software Development",
          description:
            "Custom-developed ERP solutions that go beyond business growth expectations.",
          icon: Settings2,
        },
        {
          id: "crm",
          title: "Custom CRM Development",
          description:
            "Solutions are tailored to your distinct requirements and objectives, accounting for your workflows, sales processes, and customer engagement processes.",
          icon: Users,
        },
        {
          id: "iot",
          title: "IoT Development",
          description:
            "Revolutionizing industries through expert IoT software development services that promote seamless integration and limitless innovation.",
          icon: Cpu,
        },
      ],
    },
    {
      title: "AI & Machine Learning",
      action: "Explore Opportunities",
      layout: "row",
      items: [
        {
          id: "generative",
          title: "Generative AI",
          description:
            "We develop AI systems that create realistic and engaging content, like product descriptions, marketing copy, or even social media posts.",
          icon: PenLine,
        },
        {
          id: "bi",
          title: "ML for Business Intelligence",
          description:
            "We develop AI models that analyze vast amounts of data to predict customer behavior, market trends, or equipment failures, allowing clients to make data-driven decisions.",
          icon: LineChart,
        },
        {
          id: "automation",
          title: "AI-powered Automation",
          description:
            "We develop software robots that automate repetitive tasks across various departments, improving efficiency and reducing human error.",
          icon: Bot,
        },
        {
          id: "cx",
          title: "AI for Customer Experience",
          description:
            "We build chatbots that answer customer queries, provide support, and personalize the customer experience.",
          icon: MessagesSquare,
        },
      ],
    },
  ],
  midCta: {
    title: "Are you ready to increase your reach and drive business growth?",
    description: "Contact us today to best estimate your project.",
    action: "Get My AI Plan",
  },
  spotlight: {
    title: "Product & UX/UI Design",
    description:
      "Product design services that convert initial concepts into clickable prototypes within ten days. The process has been applied to more than 60 early-stage ventures, yielding an average AppStore rating of 4.8 stars for launches derived from these prototypes.",
    action: "Talk With Design Team",
  },
  consulting: {
    title: "IT Consulting with Our Team",
    description:
      "With a dedicated team of IT service consultants, we ensure that our business consultation services help you get the maximum value for your engagement with us, resulting in a long-lasting partnership we have developed with 95 % of our clients.",
    items: [
      <>
        Benefit from <strong className="font-bold">#1 App Dev Agency</strong> in
        California.
      </>,
      "Share your requirements to best estimate your project.",
      "Spot challenges early, saving future costs.",
    ],
  },
  stack: {
    title: "Tech Stack",
    groups: [
      {
        id: "frontend",
        label: "Frontend",
        items: ["Vue.js", "React", "Nuxt.js", "TypeScript"],
      },
      {
        id: "backend",
        label: "Backend",
        items: ["Node.js", "NestJS", "Python", "Postgres", "Redis", "GraphQL"],
      },
      {
        id: "mobile",
        label: "Mobile",
        items: ["Flutter", "Swift", "Kotlin", "Firebase"],
      },
      {
        id: "devops",
        label: "DevOps",
        items: ["Docker", "Kubernetes", "AWS"],
      },
    ],
  },
  faq: faqQuestions.map((question, index) => ({
    id: `service-faq-${index}`,
    question,
    answer: placeholderAnswer,
  })),
};

export const servicePages: ServicePage[] = [productDevelopment];

export function findServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
