import React, { useState, useEffect} from "react";
import { ArrowDown } from "lucide-react";
import { heroData } from "../data/hero";
import pose1 from "../assets/pose1.png";

const Hero = ({ hasAnimated}) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const {roles} = heroData;

    useEffect(()=> {
        const currentRole = roles[currentTextIndex];

        if(!isDeleting){
            //typing effect
            if (currentText.length < currentRole.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentRole.
                        slice(0, currentText.length + 1)
                    );
                }, typingSpeed);
                return () => clearTimeout
                (timeout);
            } else {
                //wait before starting to delete
                const timeout=setTimeout(()=> {
                    setIsDeleting(true);
                    setTypingSpeed(100);
                }, 2000);
                return () => clearTimeout
                (timeout);
            } 
        } else {
            //deleting effect
            if (currentText.length > 0) {
                const timeout = setTimeout(() =>{
                    setCurrentText(currentText.slice(0, currentText.length-1));
                }, typingSpeed);
                return () => clearTimeout
                (timeout);
            } else {
                // move to next word
                setIsDeleting(false);
                setCurrentTextIndex((currentTextIndex + 1) % roles.length);
                setTypingSpeed(150);
            }
        } 
    }, [currentText, currentTextIndex, isDeleting, roles, typingSpeed]);

    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({behavior: "smooth"});
    };

    return(
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-rose-100 via-cream to-lavender-100 pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-visible pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-linear-to-br from-rose-300 to-lavender-300 rounded-full opacity-70 blur-2xl animate-pulse z-0"></div>
                
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-linear-to-br from-peach-300 to-rose-200 rounded-full opacity-70 blur-2xl animate-pulse z-0" style={{animationDelay: '1s'}}></div>

                <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-linear-to-br from-lavender-300 to-rose-200 rounded-full opacity-70 blur-3xl animate-pulse z-0" style={{animationDelay: '0.5s'}}></div>
            </div>

            {/* Soft Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(180,100,140,0.03)_1px,transparent_1px),linear-gradient(90deg, rgba(180,100,140,0.03)_1px, transparent_1px)] bg-size-[50px_50px]"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center h-full flex flex-col justify-center">
                <div className={`transition-all duration-1000 ${ (hasAnimated?.hero ?? true) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    id="hero">
                        {/*Avatar*/}
                        <div className="mb-4">
                            <img src={pose1} alt="avatar" className="w-20 h-20 md:w-32 md:h-32 mx-auto animate-fade-in" />
                        </div>
                        {/*Name*/}
                        <h1 className="text-5xl md:text-7xl leading-tight font-bold mb-4 bg-linear-to-r from-mauve-700 via-rose-600 to-mauve-700 bg-clip-text text-transparent animate-fade-in-up font-poppins">
                            {heroData.name}
                        </h1>

                        {/* Typewriter Role*/}
                        <div className="h-12 md:h-16 mb-6 flex items-center justify-center">
                            <h2 className="text-2xl md:text-4xl font-semibold text-mauve-600 font-poppins">
                                I'm a{' '}
                                <span className="relative">
                                    <span className ="text-rose-500 font-bold">
                                        {currentText}
                                        <span className="animate-pulse"></span>
                                    </span>
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-rose-400 to-lavender-400"></span>
                                </span>
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-base md:text-lg text-mauve-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-poppins">
                            {heroData.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className = "flex flex-col sm:flex-row gap-3 justify-center mb-8 animate-fade-in-up delay-300">
                            {heroData.ctaButtons.map((button,index) => {
                                // Force the Download CV button to download the PDF from public/assets
                                if (button.text === 'Download CV') {
                                    return (
                                        <a
                                            key={index}
                                            href="/assets/cv.pdf"
                                            download
                                            className={`group relative px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm font-poppins ${button.variant === 'primary' ? 'bg-linear-to-r from-rose-400 to-rose-300 text-white shadow-soft-md hover:shadow-soft-lg hover:scale-105' : 'border-2 border-rose-300 text-mauve-700 hover:bg-rose-100'}`}>
                                            <span className={button.variant === 'primary' ? 'relative z-10' : ''}>
                                                {button.text}
                                            </span>
                                        </a>
                                    );
                                }

                                return (
                                    <a
                                        key={index}
                                        href={button.href}
                                        target={button.target || undefined}
                                        rel={button.target === '_blank' ? 'noopener noreferrer' : undefined}
                                        className={`group relative px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm font-poppins ${button.variant === 'primary' ? 'bg-linear-to-r from-rose-400 to-rose-300 text-white shadow-soft-md hover:shadow-soft-lg hover:scale-105' : 'border-2 border-rose-300 text-mauve-700 hover:bg-rose-100'}`}>
                                        {button.variant === 'primary' && (
                                            <div className="absolute inset-0 bg-linear-to-r from-rose-500 to-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        )}
                                        <span className={button.variant === 'primary' ? 'relative z-10' : ''}>
                                            {button.text}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-6 mb-8 animate-fade-in-up delay-400">
                            {heroData.socialLinks.map((social, index) => {
                                return (
                                    <a
                                        key={index}
                                        href={social.url}
                                        aria-label={social.name}
                                        className="group p-3 bg-linear-to-br from-rose-100 to-lavender-100 rounded-full shadow-soft-md hover:shadow-soft-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center border border-rose-200"
                                    >
                                        {social.icon === 'Github' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-mauve-700" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.17-3.37-1.17-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.55 1.04 1.55 1.04.9 1.54 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85.004 1.71.115 2.51.338 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.59.69.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                                            </svg>
                                        ) : social.icon === 'LinkedIn' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-mauve-700" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                                <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-mauve-700" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </a>
                                );
                            })}
                        </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 animate-bounce">
                <button onClick={scrollToAbout}
                className="group flex flex-col items-center text-mauve-600
                 hover:text-rose-500 transition-colors cursor-pointer">
                    <ArrowDown className="w-6 h-6 group-hover:transform
                    group-hover:translate-y-1 transition-transform"></ArrowDown>
                 </button>
            </div>

            {/* Floating Elements*/}
            <div className="absolute top-20 left-10 w-6 h-6 bg-rose-300 rounded-full opacity-70 animate-float z-5 pointer-events-none"></div>
            <div className="absolute top-40 right-20 w-8 h-8 bg-lavender-300 rounded-full opacity-70 animate-float z-5 pointer-events-none" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-40 left-20 w-5 h-5 bg-peach-200 rounded-full opacity-70 animate-float z-5 pointer-events-none" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 right-10 w-7 h-7 bg-rose-200 rounded-full opacity-70 animate-float z-5 pointer-events-none" style={{animationDelay: '1.5s'}}></div>
        </section>
    )
}

export default Hero;