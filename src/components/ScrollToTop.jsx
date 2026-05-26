import React from "react";
import {ArrowUp} from "lucide-react";

const ScrollToTop = ({showScrollTop}) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!showScrollTop) return null;
    return (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-linear-to-br from-rose-400 to-rose-300 text-white w-12 h-12 p-0 rounded-full hover:shadow-soft-lg transition-all duration-300 shadow-soft-md cursor-pointer flex items-center justify-center hover:scale-110" aria-label="Scroll to top">
            <ArrowUp className="w-5 h-5" />
        </button>
    );
};

export default ScrollToTop;
