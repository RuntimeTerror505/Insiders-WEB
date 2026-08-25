export type Testimonial = {
  id: string;
  score: number;
  quote: string;
  author: {
    name: string;
    /** Посада й компанія — у макеті це два окремі рядки з відступом 4px */
    role: string;
    company: string;
    avatar: string;
  };
};

// TODO: мок-контент із макета «New Insiders». Замінити на реальні відгуки.
export const testimonials: Testimonial[] = [
  {
    id: "consuelo-darnim",
    score: 5,
    quote:
      "Our goal was the complete automation of logistics chains through an intuitive CRM platform. The biggest challenge was synchronizing deliveries from hundreds of contractors in real-time. The developers proposed a unique integration system that reduced the company's operational losses by 7% in the first quarter alone. This became the foundation for our further scaling.",
    author: {
      name: "Consuelo Darnim",
      role: "CEO",
      company: "Logistics Automation",
      avatar: "/avatars/consuelo-darnim.jpg",
    },
  },
  {
    id: "eric-marchello",
    score: 5,
    quote:
      "I came up with the idea of creating a global service for music education, where the key challenge was multi-language support and a complex mentor-matching algorithm. The team implemented an architecture that withstood the international market launch without a single delay. Their precision in meeting deadlines and attention to code quality allowed us to become niche leaders in just a few months.",
    author: {
      name: "Eric Marchello",
      role: "Business Manager",
      company: "Global EdTech Ecosystem",
      avatar: "/avatars/eric-marchello.jpg",
    },
  },
  {
    id: "katarzyna-shchydlo",
    score: 5,
    quote:
      "My goal was a complete overhaul of our e-commerce app to make it visually perfect and modern. The main difficulty was implementing changes into an already profitable product without disrupting core technologies. The Insiders team expertly brought my vision to life, improving functionality and loading speeds, which led to a significant increase in our customer loyalty.",
    author: {
      name: "Katarzyna Shchydlo",
      role: "Project Manager",
      company: "E-Commerce Enterprise",
      avatar: "/avatars/katarzyna-shchydlo.jpg",
    },
  },
  {
    id: "georgo-canmino",
    score: 5,
    quote:
      "The collaboration was exceptional: we received not just code, but a strategic solution for process automation. The team suggested a revolutionary update to the admin panel, making it as clear as possible for the staff. Their innovative approach to development exceeded all my expectations and significantly increased the efficiency of our daily operations.",
    author: {
      name: "Georgo Canmino",
      role: "General Director",
      company: "Enterprise AI Solutions",
      avatar: "/avatars/georgo-canmino.jpg",
    },
  },
  {
    id: "lucas-ciurysak",
    score: 5,
    quote:
      "As a technical startup founder, I was looking for experts to optimize our database for extreme loads. The Insiders team demonstrated the highest level of professionalism, resolving complex architectural issues quickly and effectively. Their support allowed our product to operate seamlessly during a period of rapid user growth.",
    author: {
      name: "Lucas Ciurysak",
      role: "Founder",
      company: "SaaS Infrastructure",
      avatar: "/avatars/lucas-ciurysak.jpg",
    },
  },
  {
    id: "george-norman",
    score: 5,
    quote:
      "The primary task was developing a secure platform for doctors using AI to automate documentation. The Insiders team, from UX designers to back-end developers, executed the project flawlessly, capturing the very essence of our value for users. This partnership became a key factor in our technological breakthrough in the HealthTech market.",
    author: {
      name: "George Norman",
      role: "Creative Director",
      company: "HealthTech AI Platform",
      avatar: "/avatars/george-norman.jpg",
    },
  },
];
