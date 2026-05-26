import React from "react";

const Footer = () => {
    return (
        <footer className="py-8 px-6 border-t border-rose-200 bg-linear-to-r from-cream via-rose-50 to-lavender-50">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-mauve-600 font-poppins">
                    &copy; {new Date().getFullYear()} Ali. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;