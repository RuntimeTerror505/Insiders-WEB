import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons/social";

export const siteConfig = {
  name: "Insiders",
  description:
    "AI-driven mobile and web product development. Senior engineers own the outcome.",
  contacts: {
    address: "340S Lemon Ave, Walnut, California, 91789",
    email: "info@insiders_software.com",
    phone: "+1 906 629 1070",
  },
  // TODO: у макеті шість іконок — бракує X, Threads і TikTok
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: InstagramIcon,
    },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: LinkedInIcon },
    { label: "Facebook", href: "https://www.facebook.com/", icon: FacebookIcon },
  ],
  legal: [{ label: "Privacy Policy", href: "/privacy-policy" }],
} as const;

export const phoneHref = `tel:${siteConfig.contacts.phone.replace(/[^\d+]/g, "")}`;
export const emailHref = `mailto:${siteConfig.contacts.email}`;
