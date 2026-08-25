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
