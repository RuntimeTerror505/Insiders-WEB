import type { ComponentProps, ComponentType } from "react";
import {
  Banknote,
  BarChart3,
  Bell,
  Boxes,
  Building2,
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
  MessagesSquare,
  Package,
  Palette,
  Repeat,
  Scan,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sliders,
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
import type { Instrument } from "@/components/sections/industry/instruments/instruments-section";
import type { Solution } from "@/components/sections/industry/solutions/solutions-section";
import type { FaqItem } from "@/data/faq";

export type IndustryPage = {
  slug: string;
  /** Пункт меню і заголовок картки в списку індустрій */
  name: string;
  title: string;
  intro: string;
  summary: string;
  icon: ComponentType<ComponentProps<"svg">>;
  heroImage: { src: string; alt: string };
  types: { title: string; subtitle: string; cards: CardGridItem[] };
  solutions: { title: string; items: Solution[]; image: { src: string; alt: string } };
  features: { title: string; items: string[] };
  benefits: { title: string; accent: string; action: string; items: Benefit[] };
  instruments: { title: string; items: Instrument[] };
  caseSlugs: string[];
  faq: FaqItem[];
  cta: string;
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
    summary:
      "Storefronts, marketplaces and loyalty apps that turn browsing into repeat purchases.",
    icon: ShoppingCart,
    heroImage: {
      src: "/industries/e-commerce/hero.avif",
      alt: "Інтерфейс магазину з картками товарів і аналітикою продажів",
    },
    types: {
      title: "Types of E-Commerce Apps We Develop",
      subtitle:
        "We specialize in a broad spectrum of e-commerce app development, including but not limited to:",
      cards: [
        {
          id: "b2c",
          title: "B2C Apps",
          icon: ShoppingBag,
          description:
            "Apps tailored for direct interaction with your consumers. We create engaging user interfaces, seamless navigation, personalized content, and secure payment gateways to ensure the best shopping experience.",
        },
        {
          id: "b2b",
          title: "B2B Apps",
          icon: Building2,
          description:
            "Specialized apps designed to facilitate business transactions between you and your commercial partners. Features include bulk order placements, tiered pricing, custom catalogs, and CRM integration.",
        },
        {
          id: "c2c",
          title: "C2C Apps",
          icon: Users,
          description:
            "Foster a community-driven marketplace with peer-to-peer selling features. Custom C2C apps provide a platform for your customers to buy and sell among themselves, with secure payment and dispute resolution systems.",
        },
        {
          id: "marketplace",
          title: "Marketplace Apps",
          icon: Store,
          description:
            "We develop multi-vendor marketplace apps that let you host multiple sellers on one platform. Provide a one-stop shopping destination for your customers while generating commission revenue from third-party sales.",
        },
        {
          id: "dropshipping",
          title: "Dropshipping Apps",
          icon: Package,
          description:
            "Manage your business efficiently with a dropshipping model. We create apps that integrate with your suppliers, automatically updating product information and processing orders.",
        },
        {
          id: "wholesale",
          title: "Wholesale Apps",
          icon: Boxes,
          description:
            "Cater to large-scale buyers with a dedicated wholesale e-commerce app. Features include large volume ordering, dynamic pricing, and custom invoicing.",
        },
      ],
    },
    solutions: {
      title: "Solutions That Target Conversion and Retention",
      image: {
        src: "/industries/e-commerce/solutions.avif",
        alt: "Екран застосунку з картою лояльності та графіком продажів",
      },
      items: [
        {
          id: "loyalty",
          title: "Customer Loyalty and Rewards Apps",
          icon: Gift,
          description:
            "Encourage repeat business and improve retention with a custom app that tracks purchases, rewards loyal behavior, and offers personalized discounts.",
        },
        {
          id: "ugc",
          title: "User Generated Content Apps",
          icon: MessagesSquare,
          description:
            "Foster a community feeling with apps that encourage customers to share reviews, ratings, and photos of products, enhancing trust and boosting conversions.",
        },
        {
          id: "retargeting",
          title: "Retargeting Apps",
          icon: Target,
          description:
            "Utilize data from user behavior to retarget them with relevant products and offers, thereby increasing the chances of conversion.",
        },
        {
          id: "subscription",
          title: "Subscription-Based Apps",
          icon: Repeat,
          description:
            "Attract and retain customers by offering subscription services for your products. This guarantees recurring revenue and encourages customer loyalty.",
        },
      ],
    },
    features: {
      title: "Features We Integrate to Build Up Your App's Customer Loyalty Value",
      items: [
        "AI Chatbots",
        "Data Analysis and Reporting",
        "Loyalty Programs and Rewards",
        "Augmented Reality (AR) Features",
        "Payment Gateways",
        "Product Categories",
        "Product Navigation",
        "Multilingual Support",
        "Push Notifications",
        "Shopping Cart",
        "Advertising",
        "Sliders / Carousel",
      ],
    },
    benefits: {
      title: "Benefits of Our Advanced",
      accent: "E-Commerce Apps",
      action: "Supercharge Your E-commerce",
      items: [
        {
          id: "customization",
          title: "100% Customization",
          icon: Sliders,
          description:
            "Our e-commerce apps are tailored to fit your unique business needs, ensuring every feature aligns with your brand and business goals.",
        },
        {
          id: "ux",
          title: "Contemporary UX/UI",
          icon: Palette,
          description:
            "Stay ahead of the curve with our modern, intuitive, and visually appealing UI/UX designs that ensure easy navigation and a memorable shopping experience.",
        },
        {
          id: "realtime",
          title: "Real-time Interaction Solutions",
          icon: Clock,
          description:
            "Foster strong customer relationships with features like chat support or real-time inventory updates, enhancing customer satisfaction and engagement.",
        },
        {
          id: "source-code",
          title: "Source Code Authority",
          icon: Code2,
          description:
            "Retain complete control and ownership of your app's source code, giving you the flexibility to modify or upgrade.",
        },
        {
          id: "quality",
          title: "Top-class Quality",
          icon: ShieldCheck,
          description:
            "Expect nothing less than excellence with our e-commerce apps. We adhere to the highest standards of quality to deliver a superior, error-free user experience.",
        },
        {
          id: "support",
          title: "Future Maintenance & Support",
          icon: Handshake,
          description:
            "Enjoy peace of mind with our comprehensive maintenance and support services, ensuring your app remains up-to-date and performs optimally at all times.",
        },
      ],
    },
    instruments: {
      title: "Instruments We Have Worked On",
      items: [
        { name: "Shopify", logo: "/industries/instruments/shopify.avif" },
        { name: "WooCommerce", logo: "/industries/instruments/woocommerce.avif" },
        { name: "Wix", logo: "/industries/instruments/wix.avif" },
        { name: "Insider", logo: "/industries/instruments/insider.avif" },
        { name: "Google Analytics", logo: "/industries/instruments/google-analytics.avif" },
        { name: "Klaviyo", logo: "/industries/instruments/klaviyo.avif" },
      ],
    },
    caseSlugs: ["chill-bill", "goods2load"],
    faq: [
      {
        id: "from-scratch",
        question: "How do I develop an e-commerce app from scratch?",
        answer:
          "Start with the shortest path to a first sale: one buyer flow, one payment provider, one fulfilment path. We spend a week on discovery, two to three on design, then build in two-week increments so you can put the app in front of real customers before the full catalogue is ready.",
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
        id: "marketing",
        question: "What are the best marketing strategies for e-commerce startups?",
        answer: placeholderAnswer,
      },
    ],
    cta: "Drive Exponential Growth in Sales With an Exceptional App",
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
        "Video Consultations",
        "E-Prescriptions",
        "Wearable Integrations",
        "Secure Messaging",
        "Appointment Reminders",
        "Lab Result Delivery",
        "Insurance Claims",
        "Multilingual Support",
        "Consent Management",
        "Audit Logging",
        "Care Plan Tracking",
        "Emergency Escalation",
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
    instruments: {
      title: "Instruments We Have Worked On",
      items: [
        { name: "Epic", logo: "/industries/instruments/epic.avif" },
        { name: "FHIR", logo: "/industries/instruments/fhir.avif" },
        { name: "Twilio", logo: "/industries/instruments/twilio.avif" },
        { name: "Apple Health", logo: "/industries/instruments/apple-health.avif" },
        { name: "Google Fit", logo: "/industries/instruments/google-fit.avif" },
        { name: "Stripe", logo: "/industries/instruments/stripe.avif" },
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
    cta: "Bring Continuous Care to Your Patients With a Dependable App",
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
        "KYC and AML Checks",
        "Biometric Authentication",
        "Card Issuing",
        "Instant Transfers",
        "Multi-Currency Accounts",
        "Recurring Payments",
        "Transaction Categorisation",
        "Budgeting Tools",
        "Push Notifications",
        "Two-Factor Authentication",
        "Statement Export",
        "Audit Logging",
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
    instruments: {
      title: "Instruments We Have Worked On",
      items: [
        { name: "Stripe", logo: "/industries/instruments/stripe.avif" },
        { name: "Plaid", logo: "/industries/instruments/plaid.avif" },
        { name: "Adyen", logo: "/industries/instruments/adyen.avif" },
        { name: "Marqeta", logo: "/industries/instruments/marqeta.avif" },
        { name: "Onfido", logo: "/industries/instruments/onfido.avif" },
        { name: "Wise", logo: "/industries/instruments/wise.avif" },
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
    cta: "Launch a Financial Product Your Customers Trust With Their Money",
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
        "Barcode Scanning",
        "Loyalty Programs and Rewards",
        "Stock Availability by Store",
        "Click & Collect",
        "Payment Gateways",
        "Personalised Recommendations",
        "Digital Receipts",
        "Push Notifications",
        "Store Locator",
        "Returns and Exchanges",
        "Multilingual Support",
        "Gift Cards",
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
    instruments: {
      title: "Instruments We Have Worked On",
      items: [
        { name: "Shopify POS", logo: "/industries/instruments/shopify.avif" },
        { name: "SAP", logo: "/industries/instruments/sap.avif" },
        { name: "Square", logo: "/industries/instruments/square.avif" },
        { name: "Lightspeed", logo: "/industries/instruments/lightspeed.avif" },
        { name: "Stripe", logo: "/industries/instruments/stripe.avif" },
        { name: "Google Analytics", logo: "/industries/instruments/google-analytics.avif" },
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
    cta: "Turn Every Store Visit Into a Repeat Customer",
  },
];

export function findIndustryPage(slug: string) {
  return industryPages.find((item) => item.slug === slug);
}
