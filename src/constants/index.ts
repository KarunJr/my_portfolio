export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean,
) => {
  return {
    /*
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 780 });
    const isTablet = useMediaQuery({ minWidth: 780, maxWidth: 1024 });
    */
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile
      ? ([0.5, -4.5, 0] as const)
      : ([0.25, -6.5, 0] as const),

    reactLogoPosition: isSmall
      ? ([3, 1, 0] as const)
      : isMobile
        ? ([3, 2, 0] as const)
        : isTablet
          ? ([5, 4, 0] as const)
          : ([12, 3, 0] as const),

    targetPosition: isSmall
      ? ([-7, -8, -10] as const)
      : isMobile
        ? ([-6, -10, -9] as const)
        : isTablet
          ? ([-9, -12, -10] as const)
          : ([-13, -13, -10] as const),
    targetScale: isSmall ? 0.02 : isMobile ? 0.02 : isTablet ? 0.02 : 0.02,
  };
};

export const myProjects = [
  {
    title: "BookGhar - Buy, Sell & Negotiate",
    desc: "BookGhar is the ultimate marketplace for book lovers. Buy brand-new books at standard prices, discover affordable second-hand copies, or negotiate directly with sellers to grab the best deals on your next read.",
    subdesc:
      "BookGhar combines the power of React and Tailwind CSS for a highly responsive interface with a secure, scalable Express and PostgreSQL backend to handle real-time negotiations and listings effortlessly.",
    href: "https://github.com/KarunJr/BookGhar",
    texture: "/textures/demo/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/ex.png",
      },
      {
        id: 4,
        name: "PostgresSQL",
        path: "/assets/psql.png",
      },
    ],
  },
];
