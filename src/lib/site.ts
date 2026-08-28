import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  ThreadsIcon,
  TikTokIcon,
  XIcon,
} from "@/components/icons/social";

export const siteConfig = {
  name: "Insiders",
  description:
    "AI-driven mobile and web product development. Senior engineers own the outcome.",
  contacts: {
    address: "340S Lemon Ave, Walnut, California, 91789",
    email: "info@insiders_software.com",
    phone: "+1 906 629 1070",
    // Контакт рекрутера з блоку «Contact Info» на сторінці Jobs.
    telegram: "@rinapina_insiders",
  },
  // Порядок — як у футері макета
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: InstagramIcon,
    },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: LinkedInIcon },
    { label: "X", href: "https://x.com/", icon: XIcon },
    { label: "Facebook", href: "https://www.facebook.com/", icon: FacebookIcon },
    { label: "Threads", href: "https://www.threads.com/", icon: ThreadsIcon },
    { label: "TikTok", href: "https://www.tiktok.com/", icon: TikTokIcon },
  ],
  legal: [{ label: "Privacy Policy", href: "/privacy-policy" }],
} as const;

export const phoneHref = `tel:${siteConfig.contacts.phone.replace(/[^\d+]/g, "")}`;
export const emailHref = `mailto:${siteConfig.contacts.email}`;
export const telegramHref = `https://t.me/${siteConfig.contacts.telegram.replace(/^@/, "")}`;
