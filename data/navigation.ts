import type { NavLink } from "@/types";

export const mainNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "Stories", href: "/stories" },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Fundraise", href: "/get-involved/fundraise" },
      { label: "Partner With Us", href: "/get-involved/partner" },
    ],
  },
];

export const footerNav = {
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/our-work" },
    { label: "Impact", href: "/impact" },
    { label: "Stories", href: "/stories" },
  ],
  getInvolved: [
    { label: "Volunteer", href: "/get-involved/volunteer" },
    { label: "Fundraise", href: "/get-involved/fundraise" },
    { label: "Partner With Us", href: "/get-involved/partner" },
    { label: "Donate", href: "/donate" },
  ],
  legal: [
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export const orgContact = {
  name: "Voice of Need Foundation",
  tagline: "Listening to communities. Amplifying real change.",
  email: "hello@voiceofneed.org",
  phone: "+1 (555) 010-2938",
  address: "148 Harbor Mill Road, Portland, OR 97201",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};
