export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

// TODO: у макеті всі шість відповідей — той самий текст-заглушка.
// Замінити на реальні, коли будуть.
const placeholderAnswer =
  "A custom software development company builds apps specifically for your business workflows—no unnecessary features, no forced workarounds. For example, we automated an insurance startup's claims process, reducing client waiting times from 7 days down to 48 hours.";

export const faq: FaqItem[] = [
  {
    id: "what-is-custom-software-company",
    question: "What is a custom software development company?",
    answer: placeholderAnswer,
  },
  {
    id: "custom-vs-saas",
    question: "Why choose custom software over SaaS in 2025?",
    answer: placeholderAnswer,
  },
  {
    id: "cost",
    question: "How much does custom software development cost in 2025?",
    answer: placeholderAnswer,
  },
  {
    id: "timeline",
    question: "How long does it realistically take to develop custom software?",
    answer: placeholderAnswer,
  },
  {
    id: "find-developers",
    question: "How can I reliably find good web developers near me?",
    answer: placeholderAnswer,
  },
  {
    id: "questions-before-hiring",
    question: "What critical questions should I ask a web developer before hiring?",
    answer: placeholderAnswer,
  },
];

// FAQ з артборда Cases — питання про розробку застосунків.
export const casesFaq: FaqItem[] = [
  {
    id: "mvp-timeline",
    question: "How long does it take to develop a mobile app MVP?",
    answer:
      "Most MVPs take 6–10 weeks from idea to launch. Here's the usual breakdown: 1) Discovery phase – 1 week. 2) UX/UI design – 2–3 weeks. 3) Development – 3–6 weeks. 4) QA and release – 1 week. Complex apps (multi-role access, AI features, integrations) may take 12–16 weeks. We always provide a realistic timeline and team estimate based on your scope.",
  },
  {
    id: "only-an-idea",
    question: "Can I start app development if I only have an idea?",
    answer: placeholderAnswer,
  },
  {
    id: "niche-industries",
    question: "Do you work with niche industries like healthcare, industrial tech, or education?",
    answer: placeholderAnswer,
  },
  {
    id: "real-projects",
    question: "Are your case studies based on real mobile app development projects?",
    answer: placeholderAnswer,
  },
  {
    id: "involvement",
    question: "Will I get the same level of involvement as in your case studies?",
    answer: placeholderAnswer,
  },
  {
    id: "process",
    question: "What's your mobile app development process like?",
    answer: placeholderAnswer,
  },
  {
    id: "team",
    question: "What does your mobile app development team look like?",
    answer: placeholderAnswer,
  },
  {
    id: "tech-stack",
    question: "How do you choose the best tech stack for my mobile app?",
    answer: placeholderAnswer,
  },
  {
    id: "cost",
    question: "How much does it cost to develop a mobile app with your team?",
    answer: placeholderAnswer,
  },
];
