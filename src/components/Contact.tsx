import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);

    //     // Simulate API submission
    //     setTimeout(() => {
    //         toast({
    //             title: "Message sent successfully!",
    //             description: "We'll get back to you as soon as possible.",
    //         });
    //         setFormData({ name: "", email: "", subject: "", message: "" });
    //         setIsSubmitting(false);
    //     }, 1500);
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbz-PKZ8mcCqLaEdnQ2Nvp_Vi_STXacT0b8nzvfZYJQ0uwWZULeV0_ZDM6alYyhIOc9k/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (res.ok) {
                toast({
                    title: "Message sent successfully!",
                    description: "We'll get back to you as soon as possible.",
                });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                toast({
                    title: "Submission failed",
                    description: "Google Sheet rejected the request.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Network error",
                description: "Could not send to Google Sheet.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-24 bg-gradient-to-b from-white to-muted/20"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <Badge
                            variant="outline"
                            className="bg-primary text-primary-foreground"
                        >
                            Contact Us
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Let's Work Together
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-md">
                            Ready to start your next project? Get in touch with
                            us to discuss how we can help bring your vision to
                            life.
                        </p>

                        {/* Email */}
                        <div className="space-y-8 pt-4">
                            <div className="flex items-center group">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-primary"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </div>
                                <div className="group-hover:translate-x-1 transition-all">
                                    <p className="font-medium">Email</p>
                                    <a
                                        href="mailto:satyamgautam3400@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        satyamgautam3400@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center group">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-primary"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                </div>
                                <div className="group-hover:translate-x-1 transition-all">
                                    <p className="font-medium">Phone</p>
                                    <a
                                        href="tel:+918851433557"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 8851433557
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center group">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-primary"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>
                                </div>
                                <div className="group-hover:translate-x-1 transition-all">
                                    <p className="font-medium">Location</p>
                                    <p className="text-muted-foreground">
                                        New Delhi, Delhi, India 110059
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-white p-8 rounded-xl shadow-xl border border-muted/10"
                    >
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                            Send us a message
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2 group focus-within:-translate-y-0.5 transition-all">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors"
                                >
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    placeholder="Your name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border-muted/30 focus:border-primary transition-colors"
                                />
                            </div>

                            <div className="space-y-2 group focus-within:-translate-y-0.5 transition-all">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors"
                                >
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Your email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border-muted/30 focus:border-primary transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 group focus-within:-translate-y-0.5 transition-all">
                            <label
                                htmlFor="subject"
                                className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors"
                            >
                                Subject
                            </label>
                            <Input
                                id="subject"
                                placeholder="Project inquiry"
                                value={formData.subject}
                                onChange={handleChange}
                                className="border-muted/30 focus:border-primary transition-colors"
                            />
                        </div>

                        <div className="space-y-2 group focus-within:-translate-y-0.5 transition-all">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors"
                            >
                                Message
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Tell us about your project..."
                                className="min-h-[150px] border-muted/30 focus:border-primary transition-colors"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>

                        <p className="text-xs text-center text-muted-foreground pt-2">
                            By submitting this form, you agree to our Privacy
                            Policy.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
