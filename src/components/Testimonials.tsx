import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Testimonial = {
    id: number;
    name: string;
    role: string;
    company: string;
    quote: string;
    image: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "TechNova",
        quote: "Working with Ovro was a game-changer for our brand. Their creative approach and attention to detail exceeded our expectations.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 2,
        name: "David Chen",
        role: "CEO",
        company: "Evergreen Solutions",
        quote: "Ovro delivered an exceptional website that perfectly captures our vision and has significantly improved our conversion rates.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
        id: 3,
        name: "Emily Taylor",
        role: "Brand Manager",
        company: "Pulse Analytics",
        quote: "The team at Ovro truly understands how to translate business objectives into compelling visual narratives and effective digital experiences.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const nextTestimonial = () => {
        if (animating) return;
        setAnimating(true);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setAnimating(false), 500);
    };

    const prevTestimonial = () => {
        if (animating) return;
        setAnimating(true);
        setActiveIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
        setTimeout(() => setAnimating(false), 500);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-gradient-to-b from-muted/10 to-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-64 bg-gradient-to-b from-primary/5 to-transparent rounded-bl-full transform rotate-12"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-64 bg-gradient-to-t from-primary/5 to-transparent rounded-tr-full transform -rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-primary/3 to-transparent rounded-full filter blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge
                            variant="outline"
                            className="bg-primary text-primary-foreground mb-4"
                        >
                            Testimonials
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                            What Our Clients Say
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Hear from some of the amazing companies we've had
                            the pleasure to work with.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${
                                        activeIndex * 100
                                    }%)`,
                                }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="w-full flex-shrink-0 px-4"
                                    >
                                        <Card className="bg-white border-none shadow-xl p-8 md:p-12 overflow-hidden relative glass-effect">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30"></div>
                                            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/5 rounded-full"></div>
                                            <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary/5 rounded-full"></div>

                                            <CardContent className="p-0">
                                                <div className="flex flex-col md:flex-row items-center gap-8">
                                                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-primary/10 animate-spin-slow"></div>
                                                        <img
                                                            src={
                                                                testimonial.image
                                                            }
                                                            alt={
                                                                testimonial.name
                                                            }
                                                            className="w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full absolute left-1 top-1 border-4 border-white"
                                                        />
                                                    </div>
                                                    <div className="flex-1 text-center md:text-left">
                                                        <blockquote className="text-xl md:text-2xl italic text-muted-foreground mb-8">
                                                            "{testimonial.quote}
                                                            "
                                                        </blockquote>
                                                        <div>
                                                            <h3 className="font-bold text-lg">
                                                                {
                                                                    testimonial.name
                                                                }
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                {
                                                                    testimonial.role
                                                                }
                                                                ,{" "}
                                                                {
                                                                    testimonial.company
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-4 mt-8">
                            <Button
                                onClick={prevTestimonial}
                                variant="outline"
                                size="icon"
                                className="rounded-full transition-transform hover:scale-110 border-primary/30 hover:border-primary hover:bg-primary/5"
                                disabled={animating}
                            >
                                <ArrowLeft className="h-4 w-4" />
                            </Button>

                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            if (animating) return;
                                            setAnimating(true);
                                            setActiveIndex(index);
                                            setTimeout(
                                                () => setAnimating(false),
                                                500
                                            );
                                        }}
                                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                                            activeIndex === index
                                                ? "bg-primary w-6"
                                                : "bg-primary/30"
                                        }`}
                                        aria-label={`Go to testimonial ${
                                            index + 1
                                        }`}
                                    />
                                ))}
                            </div>

                            <Button
                                onClick={nextTestimonial}
                                variant="outline"
                                size="icon"
                                className="rounded-full transition-transform hover:scale-110 border-primary/30 hover:border-primary hover:bg-primary/5"
                                disabled={animating}
                            >
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
