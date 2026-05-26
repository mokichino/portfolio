import React, { useState, useEffect} from "react";
import {Menu, X} from "lucide-react";

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const navHeight = 60;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
        }
         closeMobileMenu(); // Close the mobile menu after clicking a link
    };
 
    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.querySelector('#hero');
            if (heroSection) {
                const heroHeight = heroSection.offsetHeight;
                setIsScrolled(window.scrollY > heroHeight);
            } else {
                // Fallback if hero section not found
                setIsScrolled(window.scrollY > 50);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const navItems = [
        {href: "#about", label: "About"},
        {href: "#projects", label: "Projects"},
        {href: "#skills", label: "Skills"},
        {href: "#contact", label: "Contact"}
    ];
        
  return (
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-linear-to-r from-rose-300/20 via-lavender-300/20 to-pink-300/20 backdrop-blur-xl border-b border-white/20 shadow-soft-lg' : 'bg-transparent'}`}>
             <div className="max-w-6xl mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className={`text-xl font-bold transition-colors cursor-pointer text-pink-600 hover:opacity-80 font-poppins ${isScrolled ? 'text-mauve-700' : 'text-mauve-700'}`}
                        onClick={() => window.scrollTo({top:0, behavior: "smooth"})}>
                        My Portfolio
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-2">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${isScrolled ? 'text-mauve-600 hover:bg-white/30 hover:text-mauve-700' : 'text-mauve-600 hover:bg-rose-100 hover:text-rose-700'}`} onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.href);
                            }}>
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMobileMenu} className={`md:hidden p-2 transition-colors cursor-pointer ${isScrolled ? 'text-mauve-600 hover:text-rose-600' : 'text-mauve-600 hover:text-rose-600'}`}>
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6"></Menu>}
                    </button>
                </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="bg-white/95 border border-rose-200 rounded-2xl shadow-soft-lg p-4 space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                        closeMobileMenu();
                                    }}
                                    className = "block text-mauve-600 hover:text-rose-700 hover:bg-rose-50 px-3 py-2 rounded-lg transition-colors">
                                    {item.label}
                                </a>
                            ))}
                        </div>          
                    </div>
             </div>
        </nav>
    );
};

export default Navigation;