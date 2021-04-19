import React from 'react';

const Footer = () => {
    return (
        <footer className="flex w-screen fixed bottom-0 py-2 mix-blend-luminosity text-gray-400 hover:text-black z-50 items-center justify-center">
            &copy; {new Date().getFullYear()}&nbsp; 
            <a href="https://www.lassekrarup.com/">Lasse Krarup</a>
        </footer>
    );
}

export default Footer;