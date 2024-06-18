'use client'
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

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
    name: "MongoDB",
    icon: "/icons/mongodb_dark.svg",
  },
  {
    name: "Zod",
    icon: "/icons/zod.svg",
  },
  {
    name: "Amazon S3",
    icon: "/icons/amazons3.svg",
  },
  {
    name: "Algolia",
    icon: "/icons/algolia.svg",
  },
  {
    name: "Expo",
    icon: "/icons/expo.svg",
  },
  {
    name: "Express",
    icon: "/icons/express.svg",
  },
  {
    name: "Razorpay",
    icon: "/icons/razorpay.svg",
  },
  {
    name: "Visual Studio",
    icon: "/icons/visualstudio.svg",
  },
  {
    name: "macOS",
    icon: "/icons/macos.svg",
  },
  {
    name: "Framer",
    icon: "/icons/framer.svg",
  },
];

const ToolExperience = () => {
  return (
    <div className="bg-black text-white min-h-screen ">
      <LampContainer >
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <div className="">
            <p className="uppercase">Tech Stack</p>
          </div>
        </motion.h1>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 py-10 text-center flex justify-center lg:justify-end"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 pt-10 lg:pt-20">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group w-16 h-16 lg:w-40 lg:h-40 dark:bg-gray-800 bg-white rounded-sm shadow-lg transform hover:scale-105 transition-transform duration-300 border border-black dark:border-x-gray-950"
              >
                <div className="absolute inset-0 flex items-center justify-center rounded-lg duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 lg:w-16 lg:h-16 rounded-md"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white bg-blue-900 dark:bg-transparent rounded-md p-2 dark:text-white text-sm lg:text-lg font-semibold">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default ToolExperience;
