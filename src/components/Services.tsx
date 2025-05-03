import React from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { services } from "@/data";
import { Button } from "./ui/button";

const Services = () => {
    return (
        <section
            id="services"
            className="py-24 bg-gradient-to-b from-muted/30 to-white relative overflow-hidden"
        >
            {/* Decorative Blurs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <Badge
                            variant="outline"
                            className="bg-primary text-primary-foreground"
                        >
                            Our Services
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            What We Do Best
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-md">
                            From strategic branding to full-stack development,
                            we provide holistic solutions tailored to your
                            growth.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center text-primary font-medium hover-underline-animation group"
                        >
                            <Button variant="link">
                                Start a project
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 staggered-fade-in">
                        {services.map((service, index) => (
                            <Card
                                key={service.id}
                                className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group relative"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-primary/80"></div>
                                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-150"></div>

                                <CardHeader className="p-6 pb-0">
                                    <div className="text-4xl mb-4 flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full transition-transform duration-500 group-hover:scale-110">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        {service.title}
                                    </h3>
                                </CardHeader>
                                <CardContent className="p-6 pt-2">
                                    <p className="text-muted-foreground">
                                        {service.description}
                                    </p>
                                </CardContent>
                                <CardFooter className="p-6 pt-0">
                                    {service.link && (
                                        <a
                                            href={service.link}
                                            className="text-sm font-medium inline-flex items-center hover-underline-animation group/link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button>
                                                Learn more
                                                <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                                            </Button>
                                        </a>
                                    )}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
