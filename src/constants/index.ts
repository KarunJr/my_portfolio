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
  {
    title: "CineTickets - Your Gateway to the Big Screen",
    desc: "CineTicket is a high-performance full-stack web application for booking movie tickets online. Featuring real-time seat availability, seamless local payment integration, and instant ticket generation, it brings the cinema experience directly to your screen.",
    subdesc:
      "With CineTicket, users can experience ultra-fast, conflict-free seat booking without any double-bookings, by using Next.js and Redis caching features alongside Esewa payments.",
    href: "https://cinetickets.vercel.app",
    texture: "/textures/demo/project2.mp4",
    logo: "/assets/cineticket.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/next.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Mongo DB",
        path: "/assets/mongo.png",
      },
      {
        id: 5,
        name: "Redis",
        path: "/assets/redis.png",
      },
    ],
  },
  {
    title: "Real-Time Chat Application",
    desc: "A fast, modern, and scalable real-time messaging platform that enables seamless communication through instant message delivery, group chats, image sharing, and secure user authentication.",
    subdesc:
      "Built with Next.js, Socket.io, Neon PostgreSQL, and Tailwind CSS, the application leverages WebSockets for real-time communication, persistent cloud-based data storage, responsive design, and production deployment on Render for a reliable user experience.",
    href: "https://next-chat-4m44.onrender.com",
    texture: "/textures/demo/project3.mp4",
    logo: "/assets/next-chat.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/next.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "PostgresSQL",
        path: "/assets/psql.png",
      },
      {
        id: 5,
        name: "Socket.io",
        path: "/assets/socket.png",
      },
    ],
  },
];
