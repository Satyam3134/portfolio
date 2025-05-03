import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data";

const Blog = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section id="blog" className="py-24 bg-muted/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <Badge
                        variant="outline"
                        className="bg-primary text-primary-foreground mb-4"
                    >
                        Blog
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Insights, Tips & Trends
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore expert-written articles on the latest design and
                        development strategies shaping the digital world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card
                            key={post.id}
                            className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
                            onMouseEnter={() => setHoveredCard(post.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 ${
                                        hoveredCard === post.id
                                            ? "scale-110"
                                            : "scale-100"
                                    }`}
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-primary text-white">
                                        {post.category}
                                    </Badge>
                                </div>
                            </div>
                            <CardHeader className="pt-6">
                                <p className="text-sm text-muted-foreground">
                                    {post.date}
                                </p>
                                <h3 className="text-xl font-bold mt-2 hover:text-primary transition-colors duration-300">
                                    {post.title}
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <img
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <span className="text-sm font-medium">
                                        {post.author.name}
                                    </span>
                                </div>
                                <Button variant="link" className="p-0 group">
                                    Read more
                                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Button
                        variant="outline"
                        className="rounded-none px-8 py-6 border-2 hover:bg-primary/5 transition-all duration-300"
                    >
                        View All Articles
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Blog;
