"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Spotlight } from "../ui/Spotlight";
import Image from "next/image"; // Import the Image component from next/image
import Link from "next/link";
import { Boxes } from "../ui/background-boxes";
import { Button } from "../ui/moving-border";

export function InfiniteMovingCardsDemo() {
    const handleEmailClick = () => {
        window.location.href = "mailto:dharmaseervijb18239@gmail.com";
    };

    const handleCallClick = () => {
        window.location.href = "tel:+919902464181";
    };

    return (
        <>
            <div className="h-full pt-10 relative w-full overflow-hidden bg-white dark:bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-white dark:bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <Boxes />
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

                <div className="py-8 z-50 text-white flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-3 text-black dark:text-white">Get in Touch</h2>
                    <div className="flex space-x-4 mb-4">
                        <Button
                            onClick={handleEmailClick}
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                            </svg>
                            Email
                        </Button>
                        <Button
                            onclick={handleCallClick}
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900  text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            call
                        </Button>

                    </div>

                    <div className="flex space-x-4 mb-2">
                        {socialMediaLogos.map((logo, index) => (
                            <Link className="bg-white p-2 rounded-md" key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                                <Image src={logo.src} alt={logo.alt} width={24} height={24} className="object-contain" />
                            </Link>
                        ))}
                    </div>

                    <div className="text-sm  text-black dark:text-white-100">
                        &copy; {new Date().getFullYear()} dharmaseervi. All rights reserved.
                    </div>
                </div>
            </div>
        </>
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
    { src: "/icons/x.png", alt: "Twitter", link: "https://www.twitter.com/dharmaseervi" },
    { src: "/icons/instagram_icon.png", alt: "Instagram", link: "https://www.instagram.com/dharmaxseervi" },
    { src: "/icons/linkedin.png", alt: "LinkedIn", link: "https://www.linkedin.com/in/dharmaseervi" },
    { src: "/icons/git.png", alt: "GitHub", link: "https://www.github.com/dharmaseervi" },
];

export default InfiniteMovingCardsDemo;
