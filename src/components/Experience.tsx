import React from "react";
import { Briefcase, GraduationCap, Award, Code, Calendar } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experienceData } from "@/data";

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-16 relative overflow-hidden bg-white"
        >
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        Professional Journey
                    </h2>
                    <p className="text-base text-muted-foreground">
                        My experience creating impactful digital solutions
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Compact timeline */}
                    <div className="flex flex-col space-y-6 md:space-y-0">
                        {experienceData.map((item, index) => (
                            <div
                                key={index}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-white to-slate-50/90 overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/80 to-primary/20"></div>
                                    <div className="flex flex-col md:flex-row">
                                        {/* Left side with icon */}
                                        <div className="flex items-center justify-center p-4 md:p-6 md:border-r border-slate-100">
                                            <div className="relative">
                                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <item.icon className="h-5 w-5 text-primary" />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm border border-slate-100">
                                                    <Calendar className="h-3 w-3 text-primary/70" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow p-4 md:p-6 pt-2 md:pt-6">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                                <div>
                                                    <CardTitle className="text-lg font-bold text-primary/90">
                                                        {item.title}
                                                    </CardTitle>
                                                    <CardDescription className="font-medium text-sm">
                                                        {item.company} •{" "}
                                                        {item.duration}
                                                    </CardDescription>
                                                </div>
                                                <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                                                    {item.skills.map(
                                                        (skill, skillIndex) => (
                                                            <span
                                                                key={skillIndex}
                                                                className="px-2.5 py-1 bg-primary/5 text-primary/80 text-xs font-medium rounded-full"
                                                            >
                                                                {skill}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <Separator className="my-3" />
                                            <p className="text-sm text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
