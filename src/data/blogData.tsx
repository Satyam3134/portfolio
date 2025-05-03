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
        title: "Top UI/UX Design Principles for 2025",
        excerpt:
            "Uncover the key design principles shaping user experiences in modern web and mobile applications.",
        category: "UI/UX",
        date: "Apr 15, 2025",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        author: {
            name: "Alex Morgan",
            avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
    },
    {
        id: 2,
        title: "How to Build a Memorable Brand in 2025",
        excerpt:
            "Strategies for crafting a strong brand identity that connects with customers across digital platforms.",
        category: "Marketing",
        date: "Mar 28, 2025",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        author: {
            name: "Emma Wilson",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
    },
    {
        id: 3,
        title: "Mastering Frontend Performance Optimization",
        excerpt:
            "Best practices and techniques to improve page speed and enhance user experience on the web.",
        category: "Web Dev",
        date: "Mar 10, 2025",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        author: {
            name: "James Chen",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
    },
];
