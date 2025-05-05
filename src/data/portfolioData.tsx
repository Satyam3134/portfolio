type PortfolioItem = {
    id: number;
    title: string;
    category: string;
    image: string;
    link: string;
};

export const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: "E-commerce Website with CMS",
        category: "Web Development",
        image: "/project1.webp",
        link: "https://www.jatinmalikcouture.com/",
    },
    {
        id: 2,
        title: "E-commerce Website Redesign",
        category: "CMS",
        image: "/project2.webp",
        link: "https://salaryse.com/",
    },
    {
        id: 3,
        title: "Modern Landing Page for Product Launch",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
        link: "",
    },
    {
        id: 4,
        title: "HRMS System with Role-Based Access",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        link: "",
    },
    {
        id: 5,
        title: "Portfolio CMS for Creative Agencies",
        category: "CMS",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        link: "",
    },
    {
        id: 6,
        title: "Admin Dashboard for User & Content Management",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        link: "",
    },
];

export const categories = [
    "All",
    "Web Development",
    "CMS",
    "Web Design",
    "Web App",
];
