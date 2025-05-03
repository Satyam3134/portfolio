type Service = {
    id: number;
    title: string;
    description: string;
    icon: string;
    link?: string; // Optional: for "Learn more"
};

export const services: Service[] = [
    {
        id: 1,
        title: "Brand Strategy",
        description:
            "Crafting powerful brand strategies that connect emotionally and position you for long-term success.",
        icon: "📊",
        link: "#",
    },
    {
        id: 2,
        title: "UI/UX Design",
        description:
            "Designing seamless user interfaces and experiences that elevate engagement and usability.",
        icon: "🎨",
        link: "#",
    },
    {
        id: 3,
        title: "Web Development",
        description:
            "Developing high-performance, scalable websites tailored to meet modern digital demands.",
        icon: "💻",
        link: "#",
    },
    {
        id: 4,
        title: "Digital Marketing",
        description:
            "Driving measurable results with targeted campaigns, SEO, and social media strategies.",
        icon: "📱",
        link: "#",
    },
];
