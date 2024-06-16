"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Spotlight } from "../ui/Spotlight";
import MagicButton from "./magic-button";
import Image from "next/image"; // Import the Image component from next/image
import Link from "next/link";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black-200 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                className=""
            />
            <div className="absolute bottom-0 w-full py-4 bg-gray-800 text-white flex flex-col items-center">
                <div className="flex space-x-4 mb-2">
                    {socialMediaLogos.map((logo, index) => (
                        <Link key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                            <Image src={logo.src} alt={logo.alt} width={24} height={24} className="object-contain" />
                        </Link>
                    ))}
                </div>
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} dharmaseervi. All rights reserved.
                </div>
            </div>
        </div>
    );
}

const testimonials = [
    { image: <Image src="/aws.webp" alt="AWS" width={96} height={96} className="object-contain mx-4" /> },
    { image: <Image src="/tailwind.webp" alt="Tailwind CSS" width={96} height={96} className="object-contain mx-4" /> },
    { image: <Image src="/framer.webp" alt="Framer" width={96} height={96} className="object-contain mx-4" /> },
    { image: <Image src="/node.webp" alt="Node.js" width={96} height={96} className="object-contain mx-4" /> },
    { image: <Image src="/react.webp" alt="React" width={96} height={96} className="object-contain mx-4" /> },
    { image: <Image src="/sanity.svg" alt="Sanity" width={96} height={96} className="object-contain mx-4" /> },
    { image: <Image src="/vercel.webp" alt="Vercel" width={96} height={96} className="object-contain mx-4" /> },
    { image: <Image src="/nextjs2.svg" alt="Next.js" width={96} height={96} className="object-contain mx-4" /> },
    { image: <Image src="/figma2.svg" alt="Figma" width={96} height={96} className="object-contain mx-4" /> },
];

const socialMediaLogos = [
    { src: "/icons/x.png", alt: "Twitter", link: "https://www.twitter.com" },
    { src: "/icons/instagram_icon.png", alt: "Instagram", link: "https://www.instagram.com" },
    { src: "/icons/linkedin.png", alt: "LinkedIn", link: "https://www.linkedin.com" },
    { src: "/icons/git.png", alt: "GitHub", link: "https://www.github.com" },
];
