'use client'

import Image from "next/image";
import logo from '../../public/logos.png';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function NavDesktop() {
    const pathname = usePathname();
    const [hash, setHash] = useState('');

    useEffect(() => {
        const handleHashChange = () => setHash(window.location.hash);
        handleHashChange(); // Set initial hash

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '#portfolio', label: 'Portfólio' },
        { href: '#duvidas', label: 'Dúvidas' },
        { href: '#fale-conosco', label: 'Fale Conosco' },
    ];

    return (
        <div className="h-[70px] flex fixed w-full items-center justify-around bg-[#0f0f0f] z-50 ">
            <Image src={logo} alt="logo do site" width={180} />
            <div>
                <ul className="flex items-center gap-16">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} legacyBehavior>
                                <a className={`hover:text-primary transition-all ease-in-out ${(pathname + hash) === link.href ? 'text-primary' : ''}`}>
                                    {link.label}
                                </a>
                            </Link>
                        </li>
                        
                    ))}
                    <Button>
                        <a href="/">Realizar Orçamento</a>
                    </Button>
                </ul>
            </div>
        </div>
    );
}
