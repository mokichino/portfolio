import React from "react";
import {contactLinks} from "../data/contact";
import { Mail, Code, Users } from "lucide-react";

const Contact = ({hasAnimated}) => {
    const contactLinksWithIcons = contactLinks.map(link => ({
        ...link,
        icon: link.label === "Email Me" ? <Mail className="w-5 h-5" /> :
              link.label === "GitHub" ? <Code className="w-5 h-5" /> :
              link.label === "LinkedIn" ? <Users className="w-5 h-5" /> : null
    }));

    return(
        <section id="contact" className="relative py-20 px-6 bg-linear-to-br from-rose-50 via-cream to-lavender-50 scroll-mt-24 overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-visible pointer-events-none">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-linear-to-br from-pink-300 to-rose-300 rounded-full opacity-50 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-linear-to-br from-lavender-300 to-peach-300 rounded-full opacity-50 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Soft Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(180,100,140,0.02)_1px,transparent_1px),linear-gradient(90deg, rgba(180,100,140,0.02)_1px, transparent_1px)] bg-size-[50px_50px]"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className={`transition-all duration-1000 delay-500 ${hasAnimated?.contact ? 'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Contact Info & Buttons - Left Side */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-8">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent font-poppins">
                                    Let's Connect
                                </h2>
                                <p className="text-lg text-mauve-600 font-poppins leading-relaxed mb-2">
                                    I'm always excited to discuss new opportunities and collaborate on amazing projects.
                                </p>
                                <p className="text-base text-mauve-500 font-poppins italic">
                                    Let's build something awesome together! 🚀
                                </p>
                            </div>

                            {/* Contact Links */}
                            <div className="flex flex-col gap-4 w-full">
                                {contactLinksWithIcons.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.href}
                                        className={`group/btn inline-flex items-center gap-3 font-poppins font-semibold px-6 py-3.5 rounded-2xl transition-all duration-300 text-base hover:scale-105 ${
                                            link.label === 'Email Me' 
                                                ? 'bg-linear-to-r from-pink-400 to-rose-400 text-white hover:shadow-soft-lg hover:from-pink-500 hover:to-rose-500'
                                                : 'bg-linear-to-br from-rose-100 to-lavender-100 text-mauve-700 hover:shadow-soft-lg hover:from-rose-150 hover:to-lavender-150 border-2 border-rose-200'
                                        }`}
                                    >
                                        {link.icon}
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Avatar - Right Side */}
                        <div className="flex flex-col items-center justify-center">
                            <img 
                                src="/assets/pose2.png" 
                                alt="contact-avatar" 
                                className="w-56 h-56 md:w-100 md:h-100 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;