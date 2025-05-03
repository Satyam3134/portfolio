import React from "react";
import { Badge } from "@/components/ui/badge";

const About = () => {
    return (
        <section
            id="about"
            className="py-24 bg-muted/20 relative overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/5 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-primary/5 to-transparent rounded-tr-full"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-xl rotate-3 transform scale-105 opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                        <img
                            src="/aboutImage.jpg"
                            alt="Designer working"
                            className="w-full h-auto object-cover rounded-xl shadow-xl relative z-10 transition-all duration-500 hover:shadow-2xl"
                        />
                        <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-primary/10 rounded-full backdrop-blur-lg"></div>
                        <div className="absolute -top-4 -left-4 h-16 w-16 bg-primary/10 rounded-full backdrop-blur-lg"></div>
                    </div>
                    <div className="space-y-6">
                        <Badge
                            variant="outline"
                            className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-sm"
                        >
                            About Me
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                            Full Stack Developer | DevOps Enthusiast
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            I’m Satyam Kumar, a passionate Full Stack Developer
                            with 2+ years of experience in building scalable web
                            applications using MERN Stack and Next.js. I love
                            creating clean, efficient code and seamless user
                            experiences. I’m also actively involved in DevOps
                            practices and cloud deployments.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <div className="space-y-2 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary/30">
                                <h3 className="text-xl font-bold">My Vision</h3>
                                <p className="text-muted-foreground">
                                    To empower users and businesses through
                                    innovative, scalable, and intuitive software
                                    solutions.
                                </p>
                            </div>
                            <div className="space-y-2 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary/30">
                                <h3 className="text-xl font-bold">
                                    My Mission
                                </h3>
                                <p className="text-muted-foreground">
                                    To continuously grow as a developer,
                                    contribute to impactful projects, and
                                    collaborate with passionate teams worldwide.
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-border pt-6 mt-8">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                                <div className="space-y-1 p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                    <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                        20+
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Projects Built
                                    </p>
                                </div>
                                <div className="space-y-1 p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                    <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                        10+
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Happy clients
                                    </p>
                                </div>
                                <div className="space-y-1 p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                    <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                        2+
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Years experience
                                    </p>
                                </div>
                                <div className="space-y-1 p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                    <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                        3
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Open Source Contributions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
