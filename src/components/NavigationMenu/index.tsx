import { Link } from "@tanstack/react-router";

type Link = {
  title: string;
  href: string;
  newTab?: boolean;
};

const links: Link[] = [
  { title: "Features", href: "/#features" },
  { title: "Blog", href: "https://docs.less.chuva.io/blog", newTab: true },
  {
    title: "Tutorials",
    href: "https://docs.less.chuva.io/tutorials/",
    newTab: true,
  },
  { title: "Documentation", href: "https://docs.less.chuva.io/", newTab: true },
  { title: "Pricing", href: "/#pricing" },
  {
    title: "Sign Up",
    href: "https://docs.less.chuva.io/sign-in-sign-up/",
    newTab: true,
  },
];

const from = "from-chuva-blue from-20%";
const via = "via-chuva-green via-50%";
const to = "to-chuva-blue to-70%";

export default () => (
  <ul className="flex flex-col items-center justify-center w-screen gap-4 py-4 text-lg text-white sm:px-4 text-nowrap sm:gap-8 sm:flex-row">
    {links.map((link) => (
      <li
        key={link.href}
        className={`bg-gradient-to-r text-center w-full ${from} ${via} ${to} hover:text-transparent bg-clip-text bg-[length:300%_100%] animate-gradient`}
      >
        <a href={link.href} target={link.newTab ? "_blank" : "_self"}>
          {link.title}
        </a>
      </li>
    ))}
  </ul>
);
