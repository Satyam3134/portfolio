import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

type TeamMember = {
    id: number;
    name: string;
    role: string;
    image: string;
    social: {
        twitter?: string;
        linkedin?: string;
        instagram?: string;
    };
};

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Alex Morgan",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
        },
    },
    {
        id: 2,
        name: "Emma Wilson",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
        },
    },
    {
        id: 3,
        name: "James Chen",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
        },
    },
    {
        id: 4,
        name: "Sarah Johnson",
        role: "Marketing Strategist",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
        },
    },
];

const Team = () => {
    return (
        <section
            id="team"
            className="py-24 bg-gradient-to-b from-white to-muted/20"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <Badge
                        variant="outline"
                        className="bg-primary text-primary-foreground mb-4"
                    >
                        Our Team
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Meet the Creative Minds
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our talented team of professionals is passionate about
                        delivering exceptional creative solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="relative mx-auto w-40 h-40 mb-6 rounded-full overflow-hidden group-hover:scale-105 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-full animate-spin-slow opacity-0 group-hover:opacity-100"></div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-full border-4 border-white"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    {member.role}
                                </p>
                                <div className="flex justify-center space-x-3">
                                    {member.social.twitter && (
                                        <a
                                            href={member.social.twitter}
                                            className="w-8 h-8 rounded-full bg-muted/20 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-primary"
                                            >
                                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                            </svg>
                                        </a>
                                    )}
                                    {member.social.linkedin && (
                                        <a
                                            href={member.social.linkedin}
                                            className="w-8 h-8 rounded-full bg-muted/20 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-primary"
                                            >
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                <rect
                                                    x="2"
                                                    y="9"
                                                    width="4"
                                                    height="12"
                                                ></rect>
                                                <circle
                                                    cx="4"
                                                    cy="4"
                                                    r="2"
                                                ></circle>
                                            </svg>
                                        </a>
                                    )}
                                    {member.social.instagram && (
                                        <a
                                            href={member.social.instagram}
                                            className="w-8 h-8 rounded-full bg-muted/20 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-primary"
                                            >
                                                <rect
                                                    x="2"
                                                    y="2"
                                                    width="20"
                                                    height="20"
                                                    rx="5"
                                                    ry="5"
                                                ></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line
                                                    x1="17.5"
                                                    y1="6.5"
                                                    x2="17.51"
                                                    y2="6.5"
                                                ></line>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
