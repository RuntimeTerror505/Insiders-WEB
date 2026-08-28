export type Job = {
  slug: string;
  title: string;
  responsibilities: string[];
  requirements: string[];
  offer: string[];
};

/**
 * Вакансії з макета «New Insiders» (нода 330:1784). Розкритий пункт
 * акордеона — Golang, його текст зчитаний з макета дослівно. Для решти
 * чотирьох дизайнер лишив плейсхолдер, тому вміст написаний у тому ж
 * форматі.
 *
 * TODO: мок-дані. Замінити на реальні вакансії.
 */
export const jobs: Job[] = [
  {
    slug: "senior-golang-developer-outstaff",
    title: "Senior Golang Developer (Outstaff)",
    responsibilities: [
      "Develop and maintain backend solutions using Golang.",
      "Ensure system scalability and flexibility to accommodate future changes.",
      "Work with high-load distributed systems and perform load testing.",
      "Write clean, testable, and scalable code.",
      "Collaborate with cloud storage solutions and optimize service performance.",
    ],
    requirements: [
      "Proficiency in English at a B2 level or higher.",
      "4+ years of commercial development experience with Golang.",
      "Experience with both SQL and NoSQL databases.",
      "Strong expertise in designing and developing microservice architectures.",
      "Deep understanding of principles for building scalable and high-load systems.",
    ],
    offer: [
      "Remote.",
      "Flexible schedule.",
      "Full-time.",
      "Contract-based arrangement (self-employed or IE).",
      "Competitive salary.",
    ],
  },
  {
    slug: "middle-flutter-developer",
    title: "Middle Flutter Developer",
    responsibilities: [
      "Ship product features next to a senior owner of the codebase.",
      "Cover new logic with widget and unit tests before it reaches release.",
      "Keep the app consistent with the design system on both iOS and Android.",
      "Take part in code review and grow into owning your own scope.",
    ],
    requirements: [
      "2+ years of commercial development experience with Flutter.",
      "Confident with state management beyond setState.",
      "Experience integrating REST APIs and third-party SDKs.",
      "You read other people's code before rewriting it.",
    ],
    offer: [
      "Remote.",
      "Flexible schedule.",
      "Full-time.",
      "Contract-based arrangement (self-employed or IE).",
      "Competitive salary.",
    ],
  },
  {
    slug: "roku-engineer-outstaff",
    title: "Roku Engineer (Outstaff)",
    responsibilities: [
      "Build and maintain streaming channels for the Roku platform.",
      "Integrate video playback, ads and analytics SDKs.",
      "Optimize memory and startup time for low-end Roku devices.",
      "Prepare builds for channel store certification and release.",
    ],
    requirements: [
      "3+ years of commercial development experience with BrightScript and SceneGraph.",
      "Hands-on experience with HLS/DASH streaming and DRM.",
      "Understanding of the Roku channel store review process.",
      "Upper-intermediate English — you talk to the client daily.",
    ],
    offer: [
      "Remote.",
      "Flexible schedule.",
      "Full-time.",
      "Contract-based arrangement (self-employed or IE).",
      "Competitive salary.",
    ],
  },
  {
    slug: "senior-data-engineer-outstaff",
    title: "Senior Data Engineer (Outstaff)",
    responsibilities: [
      "Design and maintain batch and streaming data pipelines.",
      "Model warehouse layers the analytics team can query without help.",
      "Set up monitoring and data quality checks for every pipeline you own.",
      "Control the cost of storage and compute, not only their performance.",
    ],
    requirements: [
      "5+ years of commercial experience in data engineering.",
      "Strong SQL and Python, production experience with Airflow or an equivalent orchestrator.",
      "Experience with a cloud warehouse — BigQuery, Snowflake or Redshift.",
      "Understanding of streaming: Kafka, change data capture, exactly-once delivery.",
    ],
    offer: [
      "Remote.",
      "Flexible schedule.",
      "Full-time.",
      "Contract-based arrangement (self-employed or IE).",
      "Competitive salary.",
    ],
  },
  {
    slug: "senior-business-analyst",
    title: "Senior Business Analyst",
    responsibilities: [
      "Turn a client's idea into a scope our engineers can build.",
      "Run discovery calls and write specs developers actually use.",
      "Keep requirements traceable when they start moving mid-project.",
      "Support the team through delivery, from estimate to release.",
    ],
    requirements: [
      "5+ years in product or business analysis.",
      "Experience with mobile and web products, not only internal tools.",
      "Confident with user stories, acceptance criteria and BPMN.",
      "Fluent English, comfortable running discovery calls on your own.",
    ],
    offer: [
      "Remote.",
      "Flexible schedule.",
      "Full-time.",
      "Contract-based arrangement (self-employed or IE).",
      "Competitive salary.",
    ],
  },
];
