import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-32 sm:pt-20 pb-16 overflow-hidden relative"
        >
            {/* Enhanced background elements with softer gradients */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-tr from-primary/10 to-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-bl from-primary/15 to-pink-500/5 rounded-full filter blur-3xl animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-primary/20 to-yellow-500/5 rounded-full filter blur-2xl animate-spin-slow"></div>
            <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-t from-primary/15 to-green-500/5 rounded-full filter blur-2xl animate-blob"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-slide-right order-2 lg:order-1">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 text-sm mb-4 bg-white/40 backdrop-blur-md shadow-md">
                            <span className="bg-green-500 w-2 h-2 rounded-full mr-2 animate-pulse"></span>
                            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-medium">
                                Open to freelance and remote work
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                            Hey, I'm Satyam
                            <br /> Full Stack Developer
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                            I specialize in building scalable web apps using the
                            MERN stack. With a strong foundation in both
                            frontend and backend, I turn complex ideas into
                            high-performance digital products.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
                            <Button
                                size="lg"
                                className="rounded-md font-medium text-base px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
                            >
                                View My Work
                                <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                            </Button>
                            <a
                                href="#contact"
                                className="hover-underline-animation font-medium text-base group flex items-center"
                            >
                                Contact Me
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2 flex items-center justify-center animate-slide-up">
                        {/* Beautiful gradient background for the photo */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-blue-500/20 to-purple-500/10 rounded-full transform scale-105 blur-3xl animate-blob"></div>
                        <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/10 via-primary/15 to-blue-500/10 rounded-full transform scale-110 blur-2xl animate-pulse-slow"></div>

                        <div className="relative bg-white p-2 rounded-full shadow-xl z-10 backdrop-blur-sm border-4 border-white transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl w-[80%] aspect-square mx-auto">
                            {/* Replace with your actual photo */}
                            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/5 to-primary/20 relative">
                                <Avatar className="w-full h-full">
                                    <AvatarImage
                                        src="/myImage.webp"
                                        alt="Satyam kr"
                                        className="object-cover"
                                    />
                                    <AvatarFallback className="text-5xl font-bold text-primary/50 bg-primary/5">
                                        Satyam Kr.
                                    </AvatarFallback>
                                </Avatar>

                                {/* Decorative elements */}
                                <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-white/20"></div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-lg backdrop-blur-sm bg-white/90 border border-white/20 transform transition-transform duration-500 hover:scale-105">
                            <p className="font-bold text-xl">2+ years</p>
                            <p className="text-sm text-muted-foreground">
                                of experience
                            </p>
                        </div>

                        <div className="absolute -top-10 -right-10 p-4 bg-white shadow-lg rounded-full h-28 w-28 flex items-center justify-center transform rotate-12 animate-float">
                            <div className="text-center">
                                <p className="font-bold text-primary text-xl">
                                    MERN
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Stack Expert
                                </p>
                            </div>
                        </div>

                        {/* Additional floating elements */}
                        <div
                            className="absolute top-1/4 right-0 translate-x-1/2  p-3 bg-white shadow-lg rounded-full h-18 w-18 flex items-center justify-center animate-float z-50"
                            style={{ animationDelay: "1.5s" }}
                        >
                            <div className="text-center text-primary font-bold">
                                DevOps
                            </div>
                        </div>

                        <div
                            className="absolute bottom-1/4 left-0 -translate-x-1/2 p-3 bg-white shadow-lg rounded-full h-18 w-18 flex items-center justify-center animate-float z-50"
                            style={{ animationDelay: "2s" }}
                        >
                            <div className="text-center text-primary font-bold">
                                NextJS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
