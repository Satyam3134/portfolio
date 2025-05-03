import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { categories, portfolioItems } from "@/data";

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const filteredItems =
        activeCategory === "All"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeCategory);

    return (
        <section
            id="portfolio"
            className="py-24 bg-gradient-to-b from-white to-muted/10 relative overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <Badge
                        variant="outline"
                        className="bg-primary text-primary-foreground text-sm rounded-sm mb-4"
                    >
                        My Work
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Explore my selected projects showcasing our expertise in
                        design and development.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={
                                    activeCategory === category
                                        ? "default"
                                        : "outline"
                                }
                                className={`rounded-full px-6 transition-all duration-300 ${
                                    activeCategory === category
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "hover:bg-primary/10 border-primary/30"
                                }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-xl card-3d"
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="card-3d-inner relative h-80 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 ${
                                        hoveredItem === item.id
                                            ? "scale-110"
                                            : "scale-100"
                                    }`}
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/80 transition-opacity duration-500 ${
                                        hoveredItem === item.id
                                            ? "opacity-100"
                                            : "opacity-0"
                                    }`}
                                ></div>
                            </div>
                            <div
                                className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ${
                                    hoveredItem === item.id
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-8 opacity-0"
                                }`}
                            >
                                <p className="text-white/80 text-sm font-medium">
                                    {item.category}
                                </p>
                                <h3 className="text-white text-xl font-bold mt-1">
                                    {item.title}
                                </h3>
                                <a
                                    href={item?.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant="link"
                                        className="text-white p-0 mt-3 group/btn shine"
                                    >
                                        View Project
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        className="rounded-md px-8 py-6 border-2 border-primary/30 hover:bg-primary/5 hover:border-primary transition-all duration-300"
                    >
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
