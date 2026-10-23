import type { NavLink } from "@/types";

export const mainNav: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "WHO WE ARE", href: "/about" },
  { label: "OUR APPEALS", href: "/our-work" },
  { label: "COMPLETED PROJECTS", href: "/completed-projects" },
  { label: "SUPPORT US", href: "/get-involved" },
  { label: "CONTACT US", href: "/contact" },
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
  tagline: "Serving humanity. Amplifying the voices of those in need.",
  charityNumber: "GA 00299753",
  email: "hello@voiceofneed.org",
  phone: "+94 70 33 555 44",
  address: "Sri Lanka",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};
