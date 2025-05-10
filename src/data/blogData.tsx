type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    author: {
        name: string;
        avatar: string;
    };
};

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Building Scalable Web Apps with Next.js and MongoDB in 2025",
        excerpt:
            "Discover how modern frameworks like Next.js and NoSQL databases like MongoDB can help you scale full-stack apps efficiently.",
        category: "Web Dev",
        date: "Apr 15, 2025",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        author: {
            name: "Satyam kr.",
            avatar: "/myImage.webp",
        },
    },
    {
        id: 2,
        title: "Why TypeScript is Essential for Large-Scale React Projects",
        excerpt:
            "Understand the growing importance of static typing in React development and how TypeScript boosts maintainability.",
        category: "Programming",
        date: "Mar 28, 2025",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        author: {
            name: "Satyam kr.",
            avatar: "/myImage.webp",
        },
    },
    {
        id: 3,
        title: "DevOps Trends in 2025: GitOps, Kubernetes, and Serverless Deployments",
        excerpt:
            "A breakdown of the most impactful trends shaping modern DevOps workflows and CI/CD pipelines.",
        category: "DevOps",
        date: "Mar 10, 2025",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        author: {
            name: "Satyam kr.",
            avatar: "/myImage.webp",
        },
    },
];
