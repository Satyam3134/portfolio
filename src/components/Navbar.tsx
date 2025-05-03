import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarData } from "@/data";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const sections = document.querySelectorAll("section[id]");

            sections.forEach((current) => {
                const sectionId = current.getAttribute("id") || "";
                const sectionHeight = (current as HTMLElement).offsetHeight;
                const sectionTop = (current as HTMLElement).offsetTop - 100;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "py-3 bg-white/90 backdrop-blur-sm shadow-sm"
                    : "py-6"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <a
                            href="/"
                            className="text-2xl font-heading font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent transition-all duration-300 hover:scale-105"
                        >
                            Satyam Kr.
                        </a>

                        <div className="hidden md:flex items-center space-x-1">
                            {NavbarData.map((section) => (
                                <a
                                    key={section}
                                    href={`#${section}`}
                                    className={`px-4 py-2 rounded-md transition-all duration-300 ${
                                        activeSection === section
                                            ? "text-primary font-medium"
                                            : "hover:bg-primary/5 hover:text-primary"
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() +
                                        section.slice(1)}
                                    {activeSection === section && (
                                        <div className="h-0.5 w-full bg-primary mt-1 rounded-full"></div>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a
                            href="#contact"
                            className="hidden md:inline-flex items-center px-4 py-2 rounded-md transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                        >
                            Let's Talk
                        </a>
                        <Button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                        >
                            <Menu />
                        </Button>
                    </div>
                </nav>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden bg-white py-4 px-4 shadow-xl absolute top-full left-0 w-full transition-all duration-300 transform ${
                    isMenuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-8 pointer-events-none"
                }`}
            >
                <div className="flex flex-col space-y-3">
                    {NavbarData.map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className={`py-2 px-4 rounded-md ${
                                activeSection === section
                                    ? "bg-primary/10 text-primary font-medium"
                                    : "hover:bg-primary/5"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
