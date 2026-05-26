import React from "react";
import {skills} from "../data/skills";

const Skills = ({hasAnimated}) => {
    const categoryIcons = {
        'Frontend': '🎨',
        'Backend': '⚙️',
        'Tools & Platforms': '🛠️',
        'Design': '✨',
        'Other': '🌟'
    };

    return(
        <section id="skills" className="px-6 bg-linear-to-br from-rose-50 via-cream to-lavender-50 py-16 md:py-20 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-400 opacity-100 translate-y-0`}> 
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-linear-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent font-poppins">
                            Skills & Tech
                        </h2>
                        <p className="text-base md:text-lg text-mauve-600 font-poppins max-w-2xl mx-auto">
                            A diverse toolkit of technologies and tools I've mastered over the years
                        </p>
                        
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skillGroup, index) => (
                            <div 
                                key={index} 
                                className="group bg-linear-to-br from-white to-rose-50 p-6 rounded-2xl border-2 border-rose-150 shadow-soft-md hover:shadow-soft-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                            >
                                {/* Category Header */}
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="p-2.5 bg-linear-to-br from-rose-100 to-pink-100 rounded-xl">
                                        <span className="text-2xl block">{categoryIcons[skillGroup.category] || '💡'}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-mauve-700 font-poppins">
                                        {skillGroup.category}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-2.5">
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <div 
                                            key={skillIndex} 
                                            className="flex items-center group/item p-2.5 rounded-lg hover:bg-rose-100/50 transition-all duration-200"
                                        >
                                            <div className="w-2 h-2 bg-linear-to-r from-rose-400 to-pink-400 rounded-full mr-3 group-hover/item:scale-150 transition-transform" />
                                            <span className="text-sm text-mauve-700 font-poppins font-medium group-hover/item:text-rose-600 transition-colors">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative bottom accent */}
                                <div className="mt-5 h-0.5 bg-linear-to-r from-rose-200 via-pink-300 to-lavender-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;