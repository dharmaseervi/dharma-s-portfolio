"use client";

import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

export function TracingBeamDemo() {

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {fullStackContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <div className="flex items-center mb-4">
              <img
                src={item.icon}
                alt="Logo"
                className="h-8 w-8 mr-2 rounded-full"
              />
              <h2 className="bg-black text-white rounded-full text-sm px-4 py-1">
                {item.badge}
              </h2>
            </div>
            <div className="text-sm prose prose-sm dark:prose-invert">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              {item?.image && (
                <div className="relative h-80 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt="Blog Thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const fullStackContent = [

    {
      title: "Exploring Next.js for Modern Web Development",
      date: "June 15, 2024",
      description: (
        <>
          <p>
            Next.js has gained significant popularity among developers for building modern web applications. In this blog, we&apos;ll
            delve into what Next.js is, its key features, advantages for developers, and practical examples of its implementation.
          </p>
          <h4 className="font-bold mb-2">Key Features:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Server-side Rendering (SSR)</li>
            <li>Static Site Generation (SSG)</li>
            <li>Automatic Code Splitting</li>
            <li>API Routes</li>
          </ul>
          <h4 className="font-bold mb-2">Advantages:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Improved Performance and SEO</li>
            <li>Simplified Development</li>
            <li>Flexible Data Fetching</li>
            <li>Great Developer Experience</li>
          </ul>
          <h4 className="font-bold mb-2">Practical Examples:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>E-commerce Website</li>
            <li>Blog Platform</li>
            <li>Dashboard Application</li>
          </ul>
          <p>
            Next.js is a powerful framework for modern web development, offering robust features and enhancing developer productivity. Whether you&apos;re building a simple website or a complex web application, Next.js provides the tools needed to deliver exceptional user experiences efficiently.
          </p>
        </>
      ),
      badge: "Next.js",
      image: "/nextjs-thumb.png",
      icon: '/icons/nextjs_dark.svg'
    },
    {
      title: "Mastering the MERN Stack: A Comprehensive Guide",
      date: "June 16, 2024",
      description: (
        <>
          <p>
            The MERN stack—MongoDB, Express.js, React, and Node.js—is a popular choice for full-stack web development. In this guide, we&apos;ll
            explore each component of the MERN stack, their roles, advantages, and how they work together to build scalable web applications.
          </p>
          <h4 className="font-bold mb-2">Components of the MERN Stack:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>MongoDB: NoSQL database for flexible data storage</li>
            <li>Express.js: Web framework for Node.js for building APIs</li>
            <li>React: Frontend library for building user interfaces</li>
            <li>Node.js: JavaScript runtime for server-side applications</li>
          </ul>
          <h4 className="font-bold mb-2">Advantages of the MERN Stack:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Full JavaScript Stack</li>
            <li>Scalability</li>
            <li>Community Support</li>
            <li>Flexibility</li>
          </ul>
          <h4 className="font-bold mb-2">Practical Applications:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Social Media Platforms</li>
            <li>Real-time Applications</li>
            <li>E-commerce Solutions</li>
          </ul>
          <p>
            The MERN stack offers a powerful combination of technologies for building modern web applications. Whether you&apos;re a startup, enterprise, or developer looking to expand your skill set, mastering the MERN stack provides the tools needed to create robust, scalable, and efficient web solutions.
          </p>
        </>
      ),
      badge: "MERN Stack",
      image: "/mern.png",
      icon: '/icons/reacts_dark.svg'
    },
    {
      title: "Embracing New Tools and Technologies in Web Development",
      date: "June 17, 2024",
      description: (
        <>
          <p>
            Web development is constantly evolving with new tools and technologies emerging to streamline processes and enhance user experiences. In this blog, we&apos;ll
            explore some of the latest tools and technologies gaining traction in the industry and how they are reshaping modern web development practices.
          </p>
          <h4 className="font-bold mb-2">New Tools and Technologies:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Tailwind CSS: Utility-first CSS framework</li>
            <li>GraphQL: Query language for APIs</li>
            <li>Deno: Secure runtime for JavaScript and TypeScript</li>
            <li>Vite: Next-generation frontend build tool</li>
            <li>Jamstack: Architecture focusing on JavaScript, APIs, and Markup</li>
          </ul>
          <h4 className="font-bold mb-2">Benefits and Use Cases:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Tailwind CSS: Rapid styling with utility classes</li>
            <li>GraphQL: Efficient data fetching with strongly typed schema</li>
            <li>Deno: Secure runtime with built-in TypeScript support</li>
            <li>Vite: Fast development and optimized build times</li>
            <li>Jamstack: Improved site performance, security, and scalability</li>
          </ul>
          <h4 className="font-bold mb-2">Integration and Adoption:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Tool Integration with React and other frameworks</li>
            <li>Adoption Strategies based on project requirements</li>
          </ul>
          <p>
            As web development continues to evolve, staying updated with new tools and technologies is crucial for developers seeking to innovate and deliver cutting-edge solutions. By embracing these advancements, developers can enhance productivity, improve user experiences, and stay ahead in the competitive landscape of modern web development.
          </p>
        </>
      ),
      badge: "New Technologies",
      image: "/newtech.jpeg",
      icon: '/icons/tailwindcss_dark.svg'
    },

];