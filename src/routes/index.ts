import { useTranslations } from "next-intl";

export const routes = [
  {
    label: "home.label",
    href: "/",
    theme: "dark",
    header: "home.header",
    paragraph: "home.paragraph",
  },
  {
    label: "about.label",
    href: "/about",
    theme: "light",
    header: "about.header",
    paragraph: "about.paragraph",
  },
  {
    label: "contact.label",
    href: "/contact",
    theme: "light",
    header: "",
    paragraph: "",
  },
  {
    label: "projects.label",
    href: "/projects",
    theme: "light",
    header: "Our projects",
    paragraph: "Built with dedication, delivered with care.",
  },
  {
    label: "services.label",
    href: "/services",
    theme: "light",
    header: "Welcome.",
    paragraph: "I love god, I love you, I love all!",
  },
  {
    label: "teams.label",
    href: "/team",
    theme: "light",
    header: "The brains behind the magic",
    paragraph: "From all around the world, united by innovation.",
  },
];
