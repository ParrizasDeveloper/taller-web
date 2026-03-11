'use client'

import { rajdhani } from "@/styles/fonts";
import { Plus, type LucideIcon } from "lucide-react";
import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/all"
import { useRef } from "react";

gsap.registerPlugin(ScrambleTextPlugin)

type MainCTAProps = {
    href: string;
    label: string;
    icon?: LucideIcon;
    ariaLabel?: string;
}



export default function MainCTA({ href, label, icon: Icon, ariaLabel}: MainCTAProps) {
    const firstIconRef = useRef<HTMLDivElement>(null);
    const secondIconRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLAnchorElement>(null);


    function handleHover() {
        if (!firstIconRef.current || !secondIconRef.current || !textRef.current) { return }
        
        gsap.to(firstIconRef.current, {
            scale: 1,
            rotate: 0,
            duration: 0.7,
            ease: "power4.inOut"
        })
        gsap.to(textRef.current, {
            x: window.innerWidth >= 1024 ? 0 : 0,
            duration: 0.7,
            ease: "power4.inOut"
        })
        gsap.to(textRef.current.querySelector("span"), {
            scrambleText: {
                text: label,
                chars: "jompaWBO@#$%^&*()_+|~-=`{}[]:;<>?,./",
                oldClass: "text-text-primary",
            },
        })
        gsap.to(secondIconRef.current, {
            scale: 0,
            rotate: 45,
            duration: 0.7,
            ease: "power4.inOut"
        })
        
    }

    function handleLeave() {
        if (!firstIconRef.current || !secondIconRef.current || !textRef.current) { return }

        gsap.to(firstIconRef.current, {
            rotate: -45,
            scale: 0,
            duration: 0.7,
            ease: "power4.inOut"
        })
        gsap.to(textRef.current, {
            x: window.innerWidth >= 1024 ? -50 : -44,
            duration: 0.7,
            ease: "power4.inOut"
        })
        gsap.to(secondIconRef.current, {
            scale: 1,
            rotate: 0,
            duration: 0.7,
            ease: "power4.inOut"
        })
    }

    return (
        
        <a 
            ref={containerRef}
            href={href}
            aria-label={ariaLabel ?? label}
            className={`
                ${rajdhani.className} relative flex text-black text-sm gap-1 h-[40px]
                lg:text-lg lg:gap-1.5 lg:h-[44px]
            `}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            <div 
                ref={firstIconRef}
                className={`
                    bg-accent flex items-center justify-center aspect-square origin-left scale-0 -rotate-45
                    
                `}
            >
                {Icon 
                    ? <Icon className="stroke-[1.2] size-[1.3em]" /> 
                    : <Plus className="stroke-[1.2] size-[1.3em]" />
                }
            </div>
            <div 
                ref={textRef}
                className={`
                    bg-accent font-medium px-2 flex items-center whitespace-nowrap
                    -translate-x-11 lg:-translate-x-12.5 z-10
                    lg:px-3 
                `}
            >
                <span className="absolute">{label}</span>
                <div className="text-transparent">{label}</div>
            </div>
            <div 
                ref={secondIconRef}
                className={`
                    bg-accent flex items-center justify-center h-full aspect-square 
                    origin-right absolute right-0
                `}
            >
                {Icon 
                    ? <Icon className="stroke-[1.2] size-[1.3em]" /> 
                    : <Plus className="stroke-[1.2] size-[1.3em]" />
                }
            </div>
        </a>
    )
}