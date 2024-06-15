"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Spotlight } from "../ui/Spotlight";


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
        </div>
    );
}

const testimonials = [
    {
        image: <img src="/aws.webp" alt="AWS" className="w-24 h-24 object-contain mx-4" />,
    },
    {
        image: <img src="/tailwind.webp" alt="Tailwind CSS" className="w-24 h-24 object-contain mx-4" />,
    },
    {
        image: <img src="/framer.webp" alt="Framer" className="w-24 h-24 object-contain mx-4" />,
    },
    {
        image: <img src="/node.webp" alt="Node.js" className="w-24 h-24 object-contain mx-4" />,
    },
    {
        image: <img src="/react.webp" alt="React" className="w-24 h-24 object-contain mx-4" />,
    },
    {
        image: <img src="/sanity.svg" alt="Sanity" className="w-24 h-24 object-contain mx-4" />,
    },
    {
        image: <img src="/vercel.webp" alt="Vercel" className="w-24 h-24 object-contain mx-4" />,
    },
    {
        image: <img src="/nextjs2.svg" alt="Next.js" className="w-24 h-24 object-contain mx-4" />,
    },
    {
        image: <img src="/figma2.svg" alt="Figma" className="w-24 h-24 object-contain mx-4" />,
    },
];
