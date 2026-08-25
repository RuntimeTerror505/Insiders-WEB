export type Job = {
  slug: string;
  title: string;
  description: string;
  requirements: string[];
};

// TODO: мок-дані. Замінити на реальні вакансії
export const jobs: Job[] = [
  {
    slug: "senior-flutter-developer",
    title: "Senior Flutter Developer",
    description:
      "Own the mobile architecture of a product from the first commit to the store release, with Claude handling the volume and you answering for the result.",
    requirements: [
      "7+ years in mobile, 3+ of them in Flutter",
      "Comfortable owning architecture decisions end to end",
      "Experience shipping to both App Store and Google Play",
    ],
  },
  {
    slug: "senior-node-developer-outstaff",
    title: "Senior Node.js Developer (Outstaff)",
    description:
      "Join a client team as our engineer: APIs, integrations and data models for products that already have users.",
    requirements: [
      "5+ years with Node.js and TypeScript",
      "Postgres and Redis in production, not only in side projects",
      "Upper-intermediate English — you talk to the client daily",
    ],
  },
  {
    slug: "senior-ai-engineer",
    title: "Senior AI Engineer",
    description:
      "Build the pipelines that draft scope, architecture and estimates — the ones our senior engineers review and sign off.",
    requirements: [
      "Strong Python, production experience with LLM APIs",
      "Retrieval, evaluation and prompt tooling in real products",
      "You can explain why a model output is wrong, not only that it is",
    ],
  },
  {
    slug: "middle-flutter-developer",
    title: "Middle Flutter Developer",
    description:
      "Ship features next to a senior owner of the product and grow into owning your own scope.",
    requirements: [
      "2+ years with Flutter",
      "You read other people's code before rewriting it",
      "Understanding of state management beyond setState",
    ],
  },
  {
    slug: "senior-business-analyst",
    title: "Senior Business Analyst",
    description:
      "Turn a client's idea into a scope our engineers can build, and defend it when the requirements start moving.",
    requirements: [
      "5+ years in product or business analysis",
      "You write specs developers actually use",
      "Fluent English, comfortable running discovery calls",
    ],
  },
];
