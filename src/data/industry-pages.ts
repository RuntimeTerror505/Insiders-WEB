import type { ComponentProps, ComponentType } from "react";
import {
  Banknote,
  BarChart3,
  Bell,
  Boxes,
  CalendarCheck,
  ClipboardCheck,
  Clock,
  Code2,
  CreditCard,
  FileCheck2,
  Gift,
  Handshake,
  HeartPulse,
  LineChart,
  Package,
  Palette,
  Scan,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Store,
  Target,
  Truck,
  Users,
  Wallet,
} from "lucide-react";

import type { CardGridItem } from "@/components/sections/shared/card-grid-section";
import type { Benefit } from "@/components/sections/industry/benefits/benefits-section";
import type { Feature } from "@/components/sections/industry/features/features-section";
import type { HeroMockup } from "@/components/sections/industry/hero/industry-hero-mockup";
import type { Solution } from "@/components/sections/industry/solutions/solutions-section";
import type { FaqItem } from "@/data/faq";

export type IndustryPage = {
  slug: string;
  /** Пункт меню і заголовок картки в списку індустрій */
  name: string;
  title: string;
  intro: string;
  /** Хвіст ліду, який у макеті виділений напівжирним */
  introHighlight?: string;
  summary: string;
  icon: ComponentType<ComponentProps<"svg">>;
  heroImage?: { src: string; alt: string };
  heroMockup?: HeroMockup;
  types: { title: string; subtitle: string; cards: CardGridItem[] };
  solutions: { title: string; items: Solution[]; image: { src: string; alt: string } };
  features: { title: string; items: Feature[] };
  benefits: { title: string; accent: string; action: string; items: Benefit[] };
  caseSlugs: string[];
  faq: FaqItem[];
};

const placeholderAnswer =
  "A custom software development company builds apps specifically for your business workflows—no unnecessary features, no forced workarounds. For example, we automated an insurance startup's claims process, reducing client waiting times from 7 days down to 48 hours.";

// TODO: мок-контент за референсом. Замінити, коли буде дизайн у Figma.
export const industryPages: IndustryPage[] = [
  {
    slug: "e-commerce",
    name: "E-commerce Development",
    title: "E-commerce App Development",
    intro:
      "We excel in crafting bespoke, high-performance e-commerce apps, integrating cutting-edge features and user-centric design to supercharge your online sales.",
    introHighlight: "supercharge your online sales",
    summary:
      "Storefronts, marketplaces and loyalty apps that turn browsing into repeat purchases.",
    icon: ShoppingCart,
    heroMockup: {
      phone: {
        src: "/industries/e-commerce/hero/phone.avif",
        alt: "Екран застосунку з карткою кросівок Nike Air Max 270",
      },
      avatars: [
        "/industries/e-commerce/hero/avatar-1.avif",
        "/industries/e-commerce/hero/avatar-2.avif",
        "/industries/e-commerce/hero/avatar-3.avif",
      ],
      stat: { value: "$452", label: "september" },
    },
    types: {
      title: "Types of E-commerce Apps We Develop",
      subtitle:
        "We specialize in a broad spectrum of e-commerce app development, including but not limited to:",
      cards: [
        {
          id: "b2c",
          title: "B2C Apps",
          icon: "/industries/icons/user-received-2-fill.svg",
          description:
            "Apps tailored for direct interaction with your consumers. We create engaging user interfaces, seamless navigation, personalized content, and secure payment gateways to ensure the best shopping experience.",
        },
        {
          id: "b2b",
          title: "B2B Apps",
          icon: "/industries/icons/briefcase-4-fill.svg",
          description:
            "Specialized apps designed to facilitate business transactions between you and your commercial partners. Features include bulk order placements, tiered pricing, custom catalogs, and CRM integration.",
        },
        {
          id: "c2c",
          title: "C2C Apps",
          icon: "/industries/icons/user-community-fill.svg",
          description:
            "Foster a community-driven marketplace with peer-to-peer selling features. Custom C2C apps provide a platform for your customers to buy and sell among themselves, with secure payment and dispute resolution systems.",
        },
        {
          id: "marketplace",
          title: "Marketplace Apps",
          icon: "/industries/icons/apps-fill.svg",
          description:
            "We develop multi-vendor marketplace apps that let you host multiple sellers on one platform. Provide a one-stop shopping destination for your customers while generating commission revenue from third-party sales.",
        },
        {
          id: "dropshipping",
          title: "Dropshipping Apps",
          icon: "/industries/icons/box-3-fill.svg",
          description:
            "Manage your business efficiently with a dropshipping model. We create apps that integrate with your suppliers, automatically updating product information and processing orders.",
        },
        {
          id: "wholesale",
          title: "Wholesale Apps",
          icon: "/industries/icons/git-branch-fill.svg",
          description:
            "Cater to large-scale buyers with a dedicated wholesale e-commerce app. Features include large volume ordering, dynamic pricing, and custom invoicing.",
        },
      ],
    },
    solutions: {
      title: "Solutions that Target Conversion and Retention",
      image: {
        src: "/industries/e-commerce/solutions/phone.avif",
        alt: "Екран застосунку лояльності з графіком заощаджень",
      },
      items: [
        {
          id: "loyalty",
          title: "Customer Loyalty and Rewards Apps",
          icon: "/industries/icons/star-fill.svg",
          description:
            "Encourage repeat business and improve retention with a custom app that tracks purchases, rewards loyal behavior, and offers personalized discounts.",
        },
        {
          id: "ugc",
          title: "User Generated Content Apps",
          icon: "/industries/icons/thumb-up-fill.svg",
          description:
            "Foster a community feeling with apps that encourage customers to share reviews, ratings, and photos of products, enhancing trust and boosting conversions.",
        },
        {
          id: "retargeting",
          title: "Retargeting Apps",
          icon: "/industries/icons/crosshair-2-fill.svg",
          description:
            "Utilize data from user behavior to retarget them with relevant products and offers, thereby increasing the chances of conversion.",
        },
        {
          id: "subscription",
          title: "Subscription-Based Apps",
          icon: "/industries/icons/notification-2-fill.svg",
          description:
            "Attract and retain customers by offering subscription services for your products. This guarantees recurring revenue and encourages customer loyalty.",
        },
      ],
    },
    features: {
      title: "Features We Integrate to Build Up Your App's Customer Loyalty Value",
      items: [
        {
          id: "ai-chat-bot",
          title: "AI Chat Bot",
          description:
            "These offer real-time assistance, resolving queries instantly to improve customer experience and reduce cart abandonment.",
        },
        {
          id: "data-analysis",
          title: "Data Analysis and Reporting",
          description: placeholderAnswer,
        },
        {
          id: "loyalty-programs",
          title: "Loyalty Programs and Rewards",
          description: placeholderAnswer,
        },
        {
          id: "ar-features",
          title: "Augmented Reality (AR) Features",
          description: placeholderAnswer,
        },
        {
          id: "payment-gateways",
          title: "Payment Gateways",
          description: placeholderAnswer,
        },
        {
          id: "product-categories",
          title: "Product Categories",
          description: placeholderAnswer,
        },
        {
          id: "product-navigation",
          title: "Product Navigation",
          description: placeholderAnswer,
        },
        {
          id: "multilingual-support",
          title: "Multilingual Support",
          description: placeholderAnswer,
        },
        {
          id: "push-notifications",
          title: "Push Notifications",
          description: placeholderAnswer,
        },
        {
          id: "shopping-cart",
          title: "Shopping Cart",
          description: placeholderAnswer,
        },
        {
          id: "advertising",
          title: "Advertising",
          description: placeholderAnswer,
        },
        {
          id: "sliders-carousel",
          title: "Sliders/Carousel",
          description: placeholderAnswer,
        },
      ],
    },
    benefits: {
      title: "Benefits of Our Advanced",
      accent: "E-commerce Apps",
      action: "Supercharge Your E-commerce",
      items: [
        {
          id: "customization",
          title: "100% Customization",
          icon: "/industries/icons/equalizer-fill.svg",
          description:
            "Our e-commerce apps are tailored to fit your unique business needs, ensuring every feature aligns with your brand and business goals.",
        },
        {
          id: "ux",
          title: "Contemporary UX/UI",
          icon: "/industries/icons/pen-nib-fill.svg",
          description:
            "Stay ahead of the curve with our modern, intuitive, and visually appealing UI/UX designs that ensure easy navigation and a memorable shopping experience.",
        },
        {
          id: "realtime",
          title: "Real-time Interaction Solutions",
          icon: "/industries/icons/time-fill.svg",
          description:
            "Foster strong customer relationships with features, like chat support or real-time inventory updates, enhancing customer satisfaction and engagement.",
        },
        {
          id: "source-code",
          title: "Source Code Authority",
          icon: "/industries/icons/terminal-box-fill.svg",
          description:
            "Retain complete control and ownership of your app's source code, giving you the flexibility to modify or upgrade.",
        },
        {
          id: "quality",
          title: "Top-class Quality",
          icon: "/industries/icons/award-fill.svg",
          description:
            "Expect nothing less than excellence with our e-commerce apps. We adhere to the highest standards of quality to deliver a superior, error-free user experience.",
        },
        {
          id: "support",
          title: "Future Maintenance & Support",
          icon: "/industries/icons/customer-service-fill.svg",
          description:
            "Enjoy peace of mind with our comprehensive maintenance and support services, ensuring your app remains up-to-date and performs optimally at all times.",
        },
      ],
    },
    caseSlugs: ["chill-bill", "pixy"],
    faq: [
      {
        id: "from-scratch",
        question: "How do I develop an e-commerce app from scratch?",
        answer:
          "Developing an e-commerce app involves planning, designing, and coding a platform that enables online sales. First, define your target audience and key features like product listings, payments, and user authentication. Then, choose a technology stack (e.g., Flutter for cross-platform apps) and develop an MVP to test market demand before scaling.",
      },
      {
        id: "key-features",
        question: "What are the key features of an e-commerce mobile app?",
        answer: placeholderAnswer,
      },
      {
        id: "shopify-vs-custom",
        question:
          "How to choose between Shopify, WooCommerce, or a custom e-commerce solution?",
        answer: placeholderAnswer,
      },
      {
        id: "cost",
        question: "How much does it cost to build an e-commerce app?",
        answer: placeholderAnswer,
      },
      {
        id: "timeline",
        question: "How long does it take to develop an e-commerce app?",
        answer: placeholderAnswer,
      },
      {
        id: "cost-factors",
        question: "What factors affect the cost of e-commerce app development?",
        answer: placeholderAnswer,
      },
      {
        id: "ai",
        question: "How can AI improve my e-commerce app?",
        answer: placeholderAnswer,
      },
      {
        id: "security",
        question:
          "How to ensure security and data protection in an e-commerce app?",
        answer: placeholderAnswer,
      },
      {
        id: "first-customers",
        question: "How to attract the first customers to an e-commerce app?",
        answer: placeholderAnswer,
      },
      {
        id: "marketing",
        question: "What are the best marketing strategies for e-commerce startups?",
        answer: placeholderAnswer,
      },
      {
        id: "profitable",
        question: "Is e-commerce still profitable in 2025?",
        answer: placeholderAnswer,
      },
      {
        id: "payback",
        question: "How long does it take to make money with an e-commerce app?",
        answer: placeholderAnswer,
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare Development",
    title: "Healthcare App Development",
    intro:
      "We build compliant, dependable healthcare products — from telemedicine to patient monitoring — where clinical accuracy and privacy come before everything else.",
    summary:
      "Telemedicine, patient monitoring and clinic software built to withstand audits.",
    icon: HeartPulse,
    heroImage: {
      src: "/industries/healthcare/hero.avif",
      alt: "Інтерфейс телемедичного застосунку з картою пацієнта",
    },
    types: {
      title: "Types of Healthcare Apps We Develop",
      subtitle:
        "We work across the whole care journey, including but not limited to:",
      cards: [
        {
          id: "telemedicine",
          title: "Telemedicine Apps",
          icon: Stethoscope,
          description:
            "Video consultations, triage questionnaires and prescription flows that let a clinician see more patients without cutting the time each one gets.",
        },
        {
          id: "patient-portal",
          title: "Patient Portals",
          icon: FileCheck2,
          description:
            "One place for results, referrals and history, with role-based access so patients, doctors and administrators each see exactly what they should.",
        },
        {
          id: "monitoring",
          title: "Remote Monitoring Apps",
          icon: LineChart,
          description:
            "Wearable and device integrations that stream vitals into a dashboard, with thresholds and alerts a care team can actually act on.",
        },
        {
          id: "booking",
          title: "Appointment Booking",
          icon: CalendarCheck,
          description:
            "Scheduling that respects clinic capacity, no-show patterns and preparation windows — and reminds patients before they forget.",
        },
        {
          id: "mental-health",
          title: "Mental Health Apps",
          icon: Sparkles,
          description:
            "Guided programmes, journaling and check-ins designed with clinicians, with escalation paths when a user needs a human.",
        },
        {
          id: "clinic-erp",
          title: "Clinic Management",
          icon: ClipboardCheck,
          description:
            "Records, billing and staff scheduling in one system, integrated with the lab and pharmacy services your clinic already uses.",
        },
      ],
    },
    solutions: {
      title: "Solutions That Improve Outcomes and Trust",
      image: {
        src: "/industries/healthcare/solutions.avif",
        alt: "Екран застосунку з показниками здоров'я пацієнта",
      },
      items: [
        {
          id: "adherence",
          title: "Treatment Adherence",
          icon: Bell,
          description:
            "Reminders, refill prompts and progress tracking that keep patients on a plan long after the appointment ends.",
        },
        {
          id: "records",
          title: "Unified Medical Records",
          icon: FileCheck2,
          description:
            "HL7 and FHIR integrations that pull scattered history into one timeline a clinician can read in seconds.",
        },
        {
          id: "triage",
          title: "AI-Assisted Triage",
          icon: Sparkles,
          description:
            "Symptom intake that ranks urgency before a human looks at it, with every suggestion reviewed by a clinician.",
        },
        {
          id: "compliance",
          title: "Compliance by Design",
          icon: ShieldCheck,
          description:
            "HIPAA and GDPR requirements handled in the architecture — audit trails, encryption and consent, not a checklist at the end.",
        },
      ],
    },
    features: {
      title: "Features We Integrate to Make Care Continuous",
      items: [
        {
          id: "video-consultations",
          title: "Video Consultations",
          description: placeholderAnswer,
        },
        {
          id: "e-prescriptions",
          title: "E-Prescriptions",
          description: placeholderAnswer,
        },
        {
          id: "wearable-integrations",
          title: "Wearable Integrations",
          description: placeholderAnswer,
        },
        {
          id: "secure-messaging",
          title: "Secure Messaging",
          description: placeholderAnswer,
        },
        {
          id: "appointment-reminders",
          title: "Appointment Reminders",
          description: placeholderAnswer,
        },
        {
          id: "lab-result-delivery",
          title: "Lab Result Delivery",
          description: placeholderAnswer,
        },
        {
          id: "insurance-claims",
          title: "Insurance Claims",
          description: placeholderAnswer,
        },
        {
          id: "multilingual-support",
          title: "Multilingual Support",
          description: placeholderAnswer,
        },
        {
          id: "consent-management",
          title: "Consent Management",
          description: placeholderAnswer,
        },
        {
          id: "audit-logging",
          title: "Audit Logging",
          description: placeholderAnswer,
        },
        {
          id: "care-plan-tracking",
          title: "Care Plan Tracking",
          description: placeholderAnswer,
        },
        {
          id: "emergency-escalation",
          title: "Emergency Escalation",
          description: placeholderAnswer,
        },
      ],
    },
    benefits: {
      title: "Benefits of Our Compliant",
      accent: "Healthcare Apps",
      action: "Discuss Your Clinic",
      items: [
        {
          id: "compliance",
          title: "Audit-Ready Compliance",
          icon: ShieldCheck,
          description:
            "HIPAA and GDPR are designed into the data model and the access rules, so an audit is a report, not a project.",
        },
        {
          id: "integrations",
          title: "Works With Your Stack",
          icon: Handshake,
          description:
            "We integrate with the EHR, lab and billing systems you already run instead of asking your staff to switch.",
        },
        {
          id: "reliability",
          title: "Clinical-Grade Reliability",
          icon: Clock,
          description:
            "Offline-tolerant flows and monitoring, because a dropped connection during a consultation is not an acceptable failure.",
        },
        {
          id: "source-code",
          title: "Source Code Authority",
          icon: Code2,
          description:
            "You own the code and the infrastructure, which matters when a regulator asks where patient data lives.",
        },
        {
          id: "ux",
          title: "Designed With Clinicians",
          icon: Palette,
          description:
            "Interfaces tested with the people who use them between appointments, not only with focus groups.",
        },
        {
          id: "support",
          title: "Long-Term Support",
          icon: Handshake,
          description:
            "Regulations move and so do device APIs. We keep the product current instead of handing over and disappearing.",
        },
      ],
    },
    caseSlugs: ["biosecurity", "pixy"],
    faq: [
      {
        id: "hipaa",
        question: "How do you make a healthcare app HIPAA compliant?",
        answer: placeholderAnswer,
      },
      {
        id: "ehr",
        question: "Can you integrate with our existing EHR?",
        answer: placeholderAnswer,
      },
      {
        id: "telemedicine-cost",
        question: "How much does a telemedicine app cost?",
        answer: placeholderAnswer,
      },
      {
        id: "devices",
        question: "Which wearables and medical devices can you connect?",
        answer: placeholderAnswer,
      },
      {
        id: "timeline",
        question: "How long does a healthcare MVP take?",
        answer: placeholderAnswer,
      },
      {
        id: "data-residency",
        question: "Where is patient data stored?",
        answer: placeholderAnswer,
      },
    ],
  },
  {
    slug: "fintech",
    name: "Fintech Development",
    title: "Fintech App Development",
    intro:
      "We build payment, banking and investment products where a rounding error is a bug report and downtime is a headline. Security and correctness are the requirements, not the features.",
    summary:
      "Payments, digital banking and investment products built for scrutiny.",
    icon: Wallet,
    heroImage: {
      src: "/industries/fintech/hero.avif",
      alt: "Інтерфейс фінансового застосунку з балансом і транзакціями",
    },
    types: {
      title: "Types of Fintech Apps We Develop",
      subtitle:
        "From the first transfer to a full banking licence, including but not limited to:",
      cards: [
        {
          id: "digital-banking",
          title: "Digital Banking",
          icon: Banknote,
          description:
            "Accounts, cards and transfers with onboarding that passes KYC without making a new customer give up halfway through.",
        },
        {
          id: "payments",
          title: "Payment Apps",
          icon: CreditCard,
          description:
            "Peer-to-peer and merchant payments with the reconciliation, retries and dispute flows that keep support out of spreadsheets.",
        },
        {
          id: "investment",
          title: "Investment Platforms",
          icon: LineChart,
          description:
            "Portfolios, order flows and market data presented so that a first-time investor understands what they are about to confirm.",
        },
        {
          id: "lending",
          title: "Lending & Credit",
          icon: Handshake,
          description:
            "Application, scoring and servicing flows with a decision trail you can explain to a regulator and to the applicant.",
        },
        {
          id: "wallets",
          title: "Digital Wallets",
          icon: Wallet,
          description:
            "Stored value, top-ups and instant payouts, with the balance logic tested harder than anything else in the product.",
        },
        {
          id: "analytics",
          title: "Financial Analytics",
          icon: BarChart3,
          description:
            "Spending insights and forecasting that turn a transaction list into something a customer actually acts on.",
        },
      ],
    },
    solutions: {
      title: "Solutions That Earn and Keep Customer Trust",
      image: {
        src: "/industries/fintech/solutions.avif",
        alt: "Екран застосунку з переказом і історією операцій",
      },
      items: [
        {
          id: "onboarding",
          title: "Frictionless Onboarding",
          icon: Scan,
          description:
            "Document scanning and liveness checks that finish in a minute, with manual review only where the risk model asks for it.",
        },
        {
          id: "fraud",
          title: "Fraud Detection",
          icon: ShieldCheck,
          description:
            "Behavioural signals and rules that stop suspicious activity without freezing the accounts of ordinary customers.",
        },
        {
          id: "open-banking",
          title: "Open Banking",
          icon: Handshake,
          description:
            "Aggregation across providers so your product sees the customer's whole financial picture, not only your slice of it.",
        },
        {
          id: "reporting",
          title: "Regulatory Reporting",
          icon: FileCheck2,
          description:
            "Reports generated from the same ledger the product runs on, so what you file matches what actually happened.",
        },
      ],
    },
    features: {
      title: "Features We Integrate to Keep Money Moving Safely",
      items: [
        {
          id: "kyc-and-aml-checks",
          title: "KYC and AML Checks",
          description: placeholderAnswer,
        },
        {
          id: "biometric-authentication",
          title: "Biometric Authentication",
          description: placeholderAnswer,
        },
        {
          id: "card-issuing",
          title: "Card Issuing",
          description: placeholderAnswer,
        },
        {
          id: "instant-transfers",
          title: "Instant Transfers",
          description: placeholderAnswer,
        },
        {
          id: "multi-currency-accounts",
          title: "Multi-Currency Accounts",
          description: placeholderAnswer,
        },
        {
          id: "recurring-payments",
          title: "Recurring Payments",
          description: placeholderAnswer,
        },
        {
          id: "transaction-categorisation",
          title: "Transaction Categorisation",
          description: placeholderAnswer,
        },
        {
          id: "budgeting-tools",
          title: "Budgeting Tools",
          description: placeholderAnswer,
        },
        {
          id: "push-notifications",
          title: "Push Notifications",
          description: placeholderAnswer,
        },
        {
          id: "two-factor-authentication",
          title: "Two-Factor Authentication",
          description: placeholderAnswer,
        },
        {
          id: "statement-export",
          title: "Statement Export",
          description: placeholderAnswer,
        },
        {
          id: "audit-logging",
          title: "Audit Logging",
          description: placeholderAnswer,
        },
      ],
    },
    benefits: {
      title: "Benefits of Our Secure",
      accent: "Fintech Apps",
      action: "Talk to Our Engineers",
      items: [
        {
          id: "security",
          title: "Security First",
          icon: ShieldCheck,
          description:
            "Threat modelling before the first sprint, penetration testing before release, and encryption everywhere money or identity is involved.",
        },
        {
          id: "correctness",
          title: "Ledger Correctness",
          icon: ClipboardCheck,
          description:
            "Double-entry accounting and idempotent operations, so a retried request never creates a second transfer.",
        },
        {
          id: "compliance",
          title: "Regulation-Aware",
          icon: FileCheck2,
          description:
            "PCI DSS, PSD2 and local requirements handled in the architecture instead of bolted on before the audit.",
        },
        {
          id: "source-code",
          title: "Source Code Authority",
          icon: Code2,
          description:
            "You own the code and the keys. No vendor lock-in on the part of your business that regulators care about most.",
        },
        {
          id: "scale",
          title: "Built to Scale",
          icon: LineChart,
          description:
            "Payday spikes and market opens are load-tested before they happen, not discovered in production.",
        },
        {
          id: "support",
          title: "Future Maintenance & Support",
          icon: Handshake,
          description:
            "Payment schemes and regulations change every year. We keep the integration current so your roadmap does not stall.",
        },
      ],
    },
    caseSlugs: ["electricitywizard", "atlys"],
    faq: [
      {
        id: "compliance",
        question: "What compliance requirements apply to a fintech app?",
        answer: placeholderAnswer,
      },
      {
        id: "licence",
        question: "Do we need our own licence, or can we use a BaaS provider?",
        answer: placeholderAnswer,
      },
      {
        id: "security",
        question: "How do you secure financial data in the app?",
        answer: placeholderAnswer,
      },
      {
        id: "cost",
        question: "How much does it cost to build a fintech app?",
        answer: placeholderAnswer,
      },
      {
        id: "timeline",
        question: "How long does a payments MVP take?",
        answer: placeholderAnswer,
      },
      {
        id: "integrations",
        question: "Which payment providers do you integrate with?",
        answer: placeholderAnswer,
      },
    ],
  },
  {
    slug: "retail",
    name: "Retail Development",
    title: "Retail App Development",
    intro:
      "We connect the shop floor and the phone in your customer's pocket — inventory, loyalty and click-and-collect that behave the same way in both places.",
    summary:
      "Omnichannel retail software that keeps stock, staff and customers in sync.",
    icon: Store,
    heroImage: {
      src: "/industries/retail/hero.avif",
      alt: "Інтерфейс роздрібного застосунку з каталогом і залишками",
    },
    types: {
      title: "Types of Retail Apps We Develop",
      subtitle:
        "From a single store to a chain across regions, including but not limited to:",
      cards: [
        {
          id: "omnichannel",
          title: "Omnichannel Apps",
          icon: Store,
          description:
            "One catalogue, one basket and one loyalty balance whether the customer is in the shop, on the site or in the app.",
        },
        {
          id: "pos",
          title: "POS Solutions",
          icon: CreditCard,
          description:
            "Tills that keep working when the connection drops and reconcile themselves the moment it comes back.",
        },
        {
          id: "inventory",
          title: "Inventory Management",
          icon: Boxes,
          description:
            "Stock levels that reflect reality across warehouses and shelves, with reordering rules that account for lead times.",
        },
        {
          id: "loyalty",
          title: "Loyalty Apps",
          icon: Gift,
          description:
            "Tiers, coupons and personalised offers driven by what a customer actually buys rather than what a campaign assumes.",
        },
        {
          id: "click-collect",
          title: "Click & Collect",
          icon: Package,
          description:
            "Reserve online, pick up in store — with picking lists for staff and honest availability for customers.",
        },
        {
          id: "delivery",
          title: "Delivery & Logistics",
          icon: Truck,
          description:
            "Slot booking, route planning and live tracking, integrated with the couriers you already work with.",
        },
      ],
    },
    solutions: {
      title: "Solutions That Move Stock and Keep Customers",
      image: {
        src: "/industries/retail/solutions.avif",
        alt: "Екран застосунку з програмою лояльності та залишками товару",
      },
      items: [
        {
          id: "personalisation",
          title: "Personalised Offers",
          icon: Target,
          description:
            "Recommendations built on purchase history and store visits, so a discount lands on something the customer wanted anyway.",
        },
        {
          id: "self-checkout",
          title: "Scan & Go",
          icon: Scan,
          description:
            "Customers scan as they shop and pay on the phone, which removes the queue that costs you the last-minute basket.",
        },
        {
          id: "staff",
          title: "Staff Tools",
          icon: Users,
          description:
            "Shop-floor apps for stock checks, price changes and click-and-collect picking that work on the devices you already own.",
        },
        {
          id: "analytics",
          title: "Retail Analytics",
          icon: BarChart3,
          description:
            "Footfall, basket and margin data in one dashboard, so a buying decision rests on numbers instead of instinct.",
        },
      ],
    },
    features: {
      title: "Features We Integrate to Connect Store and App",
      items: [
        {
          id: "barcode-scanning",
          title: "Barcode Scanning",
          description: placeholderAnswer,
        },
        {
          id: "loyalty-programs-and-rewards",
          title: "Loyalty Programs and Rewards",
          description: placeholderAnswer,
        },
        {
          id: "stock-availability-by-store",
          title: "Stock Availability by Store",
          description: placeholderAnswer,
        },
        {
          id: "click-collect",
          title: "Click & Collect",
          description: placeholderAnswer,
        },
        {
          id: "payment-gateways",
          title: "Payment Gateways",
          description: placeholderAnswer,
        },
        {
          id: "personalised-recommendations",
          title: "Personalised Recommendations",
          description: placeholderAnswer,
        },
        {
          id: "digital-receipts",
          title: "Digital Receipts",
          description: placeholderAnswer,
        },
        {
          id: "push-notifications",
          title: "Push Notifications",
          description: placeholderAnswer,
        },
        {
          id: "store-locator",
          title: "Store Locator",
          description: placeholderAnswer,
        },
        {
          id: "returns-and-exchanges",
          title: "Returns and Exchanges",
          description: placeholderAnswer,
        },
        {
          id: "multilingual-support",
          title: "Multilingual Support",
          description: placeholderAnswer,
        },
        {
          id: "gift-cards",
          title: "Gift Cards",
          description: placeholderAnswer,
        },
      ],
    },
    benefits: {
      title: "Benefits of Our Connected",
      accent: "Retail Apps",
      action: "Modernise Your Retail",
      items: [
        {
          id: "sync",
          title: "One Source of Stock",
          icon: Boxes,
          description:
            "The number on the shelf, in the warehouse and in the app is the same number, which is the difference between a sale and a refund.",
        },
        {
          id: "offline",
          title: "Works Offline",
          icon: Clock,
          description:
            "Shops lose connectivity. Our till and stock flows keep serving customers and sync when the line comes back.",
        },
        {
          id: "ux",
          title: "Contemporary UX/UI",
          icon: Palette,
          description:
            "Interfaces your staff can learn in a shift and your customers can use without instructions.",
        },
        {
          id: "source-code",
          title: "Source Code Authority",
          icon: Code2,
          description:
            "Retain complete control and ownership of your app's source code, giving you the flexibility to modify or upgrade.",
        },
        {
          id: "integrations",
          title: "Fits Your Systems",
          icon: Handshake,
          description:
            "We integrate with the ERP, POS and payment providers you run today rather than proposing a migration you did not ask for.",
        },
        {
          id: "support",
          title: "Future Maintenance & Support",
          icon: Handshake,
          description:
            "Seasonal peaks are predictable. We prepare for them with you instead of reacting on the busiest day of your year.",
        },
      ],
    },
    caseSlugs: ["chill-bill", "goods2load"],
    faq: [
      {
        id: "omnichannel",
        question: "How do you keep stock in sync between the shop and the app?",
        answer: placeholderAnswer,
      },
      {
        id: "pos",
        question: "Can you integrate with our existing POS?",
        answer: placeholderAnswer,
      },
      {
        id: "loyalty",
        question: "What does a loyalty programme cost to build?",
        answer: placeholderAnswer,
      },
      {
        id: "timeline",
        question: "How long does a retail app take to launch?",
        answer: placeholderAnswer,
      },
      {
        id: "offline",
        question: "What happens when a store loses connectivity?",
        answer: placeholderAnswer,
      },
      {
        id: "migration",
        question: "Do we have to replace our current systems?",
        answer: placeholderAnswer,
      },
    ],
  },
];

export function findIndustryPage(slug: string) {
  return industryPages.find((item) => item.slug === slug);
}
