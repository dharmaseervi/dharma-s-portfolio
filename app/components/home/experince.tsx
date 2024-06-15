"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { SpotLight } from "three";
import { Spotlight } from "../ui/Spotlight";

const skills = [
    {
        name: "JavaScript",
        icon: "/icons/javascript_dark.svg",
    },
    {
        name: "React",
        icon: "/icons/reacts_dark.svg",
    },
    {
        name: "Node.js",
        icon: "/icons/nodejs_dark.svg",
    },
    {
        name: "Tailwind CSS",
        icon: "/icons/tailwindcss_dark.svg",
    },
    {
        name: "Next.js",
        icon: "/icons/nextjs_dark.svg",
    },
    {
        name: ".Env",
        icon: "/icons/dotenv.svg",
    },
    {
        name: "mongodb",
        icon: "/icons/mongodb_dark.svg",
    },
    {
        name: "zod",
        icon: "/icons/zod.svg",
    },
    {
        name: "amazon s3",
        icon: "/icons/amazons3.svg",
    },
    {
        name: "algolia",
        icon: "/icons/algolia.svg",
    },
    {
        name: "expo",
        icon: "/icons/expo.svg",
    },
    {
        name: "express",
        icon: "/icons/express.svg",
    },
    {
        name: "razorpay",
        icon: "/icons/razorpay.svg",
    },
    {
        name: "visualstudio",
        icon: "/icons/visualstudio.svg",
    },
    {
        name: "macos",
        icon: "/icons/macos.svg",
    },
    {
        name: "framer",
        icon: "/icons/framer.svg",
    },
];

export default function ToolExperience() {
    return (
        <div className="bg-black text-white min-h-screen py-10">
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <div className="">
                        <p className="uppercase">tech stack</p>
                    </div>
                </motion.h1>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" px-4 py-10 text-center "
                >
                    <div className="flex flex-wrap justify-center items-center gap-8 pt-20 ">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative group w-14 h-14 lg:w-40 lg:h-40 dark:bg-gray-800 bg-white rounded-sm shadow-lg transform hover:scale-105 transition-transform duration-300 border border-black dark:border-x-gray-950 "
                            >
                                <div className="absolute inset-0 flex items-center justify-center  rounded-lg  duration-300">
                                    <img src={skill.icon} alt={skill.name} className="w-16 h-16 rounded-md" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white bg-blue-900 dark:bg-transparent rounded-md p-2 dark:text-white text-lg font-semibold">{skill.name}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </LampContainer>
        </div>
    );
}
