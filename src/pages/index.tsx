import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Experience from "@/components/Experience";

const Index = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            toast({
                title: "Welcome to Satyam's Portfolio",
                description:
                    "Explore our portfolio and services. We'd love to work with you!",
            });
        }, 3000);

        setIsLoaded(true);

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                if (targetId === "#") return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: "smooth",
                    });
                }
            });
        });

        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -100px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade-in");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll("section > div").forEach((section) => {
            observer.observe(section);
        });

        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isLoaded) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white">
                <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                        <div className="relative bg-primary text-white w-full h-full rounded-full flex items-center justify-center text-l font-bold">
                            Satyam
                        </div>
                    </div>
                    <p className="text-muted-foreground animate-pulse">
                        Loading Portfolio content...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-pattern">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Portfolio />
            <Services />
            {/* <Team /> */}
            <Blog />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 z-50 hover:bg-primary/90 hover:scale-110 ${
                    showScrollTop
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10 pointer-events-none"
                }`}
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-5 w-5" />
            </button>
        </div>
    );
};

export default Index;
