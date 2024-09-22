import { faLinkedin, faGithub, faXTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/yash-kamble-7ba040245",
    icon: faLinkedin,
    color: "text-blue-700 dark:text-blue-500",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/Knight9876",
    icon: faGithub,
    color: "text-gray-900 dark:text-gray-100",
    alt: "GitHub",
  },
  {
    href: "https://www.naukri.com/mnjuser/profile?id=&altresid",
    icon: null, // You can replace this with the Naukri logo as an image in Contact.jsx
    imgSrc: "https://res.cloudinary.com/dlnvozmgw/image/upload/v1726791980/logo/naukri_keibtd.png", // Path to the image
    alt: "Naukri",
  },
  {
    href: "https://x.com/yashkamble008",
    icon: faXTwitter,
    color: "text-gray-900 dark:text-gray-100",
    alt: "X",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100032122878431",
    icon: faFacebook,
    color: "text-blue-800 dark:text-blue-600",
    alt: "Facebook",
  },
];

export default socialLinks;
