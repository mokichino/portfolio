import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About = ({hasAnimated}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('next');

    const carouselItems = [
        {
            image: "/assets/access.jpg",
            organization: "ACCESS",
            position: "Member",
            period: "2025 – 2026",
            description: "Actively participating in a community dedicated to fostering excellence and collaboration among computer science students.",
        },
        {
            image: "/assets/ciphers1.jpg",
            organization: "CSSEC Talents Committee Ciphers",
            position: "Secretary General",
            period: "2025 – 2026",
            description: "Leading communications and organizational initiatives to support the Ciphers community.",
        },
        {
            image: "/assets/ciphers2.jpg",
            organization: "CSSEC Talents Committee Ciphers",
            position: "Finance Head",
            period: "2024 – 2025",
            description: "Managing budgets and financial planning for Ciphers initiatives and events.",
        },
        {
            image: "/assets/cwc.jpg",
            organization: "Computer Wizards",
            position: "Finance Head",
            period: "2021 – 2023",
            description: "Overseeing financial operations and resource allocation for this tech-focused organization.",
        },
    ];

    const nextSlide = () => {
        setSlideDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const prevSlide = () => {
        setSlideDirection('prev');
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    return(
        <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-linear-to-br from-lavender-50 via-cream to-rose-50">
            <div className="max-w-5xl w-full">
                <div className={`transition-all duration-1000 delay-200 ${hasAnimated?.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-pink-600 font-poppins">✨About Me✨</h2>
                    
                    {/* Carousel Container */}
                    <div className="relative bg-linear-to-br from-white to-rose-50 rounded-2xl sm:rounded-3xl shadow-soft-lg overflow-hidden border border-rose-200 max-w-4xl mx-auto px-4 sm:px-6">
                        {/* Image and Description Wrapper */}
                        <div className="flex flex-col md:flex-row items-stretch md:items-center min-h-75 sm:min-h-82.5 md:min-h-90 lg:min-h-95">
                            {/* Image */}
                            <div className="w-full md:w-1/2 h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden bg-linear-to-br from-rose-100 to-lavender-100 rounded-2xl my-1 sm:my-2 md:my-2 mx-2 sm:mx-3 md:mx-4">
                                <div className="relative w-full h-full">
                                    {carouselItems.map((item, index) => (
                                        <div key={index} className="absolute inset-0">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className={`w-full h-full object-cover transition-all duration-700 ease-out block max-w-full max-h-full ${
                                                    index === currentIndex 
                                                        ? 'opacity-100 scale-100' 
                                                        : 'opacity-0 scale-105'
                                                } ${
                                                    index === currentIndex && slideDirection === 'next'
                                                        ? 'animate-slideInRight'
                                                        : ''
                                                } ${
                                                    index === currentIndex && slideDirection === 'prev'
                                                        ? 'animate-slideInLeft'
                                                        : ''
                                                }`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                                <div className={`transition-all duration-700 ease-out ${
                                    slideDirection === 'next' ? 'animate-fadeInUp' : 'animate-fadeInUp'
                                }`} key={currentIndex}>
                                    
                                    <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-mauve-700 mb-2 font-poppins">
                                        {carouselItems[currentIndex].organization}
                                    </h3>
                                    
                                    <div className="w-12 h-1 bg-linear-to-r from-rose-400 to-rose-300 rounded-full mb-4"></div>
                                    
                                    <div className="space-y-1 mb-6">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-sm text-rose-500 font-semibold italic font-poppins">
                                                {carouselItems[currentIndex].position}
                                            </span>
                                            {carouselItems[currentIndex].period && (
                                                <>
                                                    <span className="text-mauve-400">•</span>
                                                    <span className="text-sm text-mauve-500 italic font-poppins">
                                                        {carouselItems[currentIndex].period}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm sm:text-base md:text-base lg:text-lg text-mauve-600 leading-relaxed font-poppins italic font-light opacity-90">
                                        "{carouselItems[currentIndex].description}"
                                    </p>
                                </div>

                                {/* Carousel Indicators */}
                                <div className="flex justify-center gap-2 mt-8">
                                    {carouselItems.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setSlideDirection(index > currentIndex ? 'next' : 'prev');
                                                setCurrentIndex(index);
                                            }}
                                            className={`h-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                                                index === currentIndex 
                                                    ? 'bg-rose-500 w-8 shadow-soft' 
                                                    : 'bg-rose-200 w-2 hover:bg-rose-300'
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white shadow-soft hover:shadow-soft-lg text-mauve-700 hover:text-rose-500 transition-all duration-300 hover:scale-110 active:scale-95 md:left-6"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white shadow-soft hover:shadow-soft-lg text-mauve-700 hover:text-rose-500 transition-all duration-300 hover:scale-110 active:scale-95 md:right-6"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>

                    <style>{`
                        @keyframes slideInRight {
                            from {
                                opacity: 0;
                                transform: translateX(100px);
                            }
                            to {
                                opacity: 1;
                                transform: translateX(0);
                            }
                        }

                        @keyframes slideInLeft {
                            from {
                                opacity: 0;
                                transform: translateX(-100px);
                            }
                            to {
                                opacity: 1;
                                transform: translateX(0);
                            }
                        }

                        @keyframes fadeInUp {
                            from {
                                opacity: 0;
                                transform: translateY(20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }

                        @keyframes fadeIn {
                            from {
                                opacity: 0;
                            }
                            to {
                                opacity: 1;
                            }
                        }

                        .animate-slideInRight {
                            animation: slideInRight 0.7s ease-out forwards;
                        }

                        .animate-slideInLeft {
                            animation: slideInLeft 0.7s ease-out forwards;
                        }

                        .animate-fadeInUp {
                            animation: fadeInUp 0.7s ease-out forwards;
                        }

                        .animate-fadeIn {
                            animation: fadeIn 0.5s ease-out forwards;
                        }
                    `}</style>
                </div>
            </div>
        </section>
    )
}

export default About;