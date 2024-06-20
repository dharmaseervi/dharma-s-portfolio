"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";
import Link from "next/link";

const transition = {
  type: "spring",
  damping: 20,
  stiffness: 100,
};

export default function NavbarMenu() {
  return (
    <Navbar className="top-2" />
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="works">
          <div className="flex flex-col space-y-4 text-sm">
            <p>Web Dev</p>
            <p >Interface Design</p>
            <p >Search Engine Optimization</p>
            <p >App dev</p>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="text-sm grid lg:grid-cols-2 lg:w-full lg:gap-10 gap-4 p-4"
          >
            <ProductItem
              title="Nextcart"
              href="https://mern-stack-ecommerce-orpin.vercel.app"
              src="/nextcart.png"
              description="A comprehensive e-commerce platform built with the MERN stack."
            />
            <ProductItem
              title="Laxmi Pipe Centre"
              href="https://www.laxmipipecentre.com"
              src="/lpc.png"
              description="Official website for Laxmi Pipe Centre, featuring products and services."
            />
            <ProductItem
              title="Dharmaseervi Portfolio"
              href="https://dharma-portfolio-inky.vercel.app/"
              src="/portfolio.png"
              description="Showcase of my projects and skills in web development."
            />
            <ProductItem
              title="Nextcart Admin"
              href="https://nextcart-admin-three.vercel.app"
              src="/nextcartadmin.png"
              description="Admin panel for managing products and orders in Nextcart."
            />
            <ProductItem
              title="Weather App"
              href="https://weather-app-ruddy-seven.vercel.app/"
              src="/weather.png"
              description="A web application providing real-time weather updates."
            />
            <ProductItem
              title="Caresync Pro"
              href="https://caresync-pro.onrender.com"
              src="/caresyncpro.png"
              description="A platform for syncing and managing healthcare data efficiently."
            />
          </motion.div>
        </MenuItem>
        <HoveredLink href="#blog">Blog</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="theme">
          <div className="flex flex-col space-y-4 text-sm">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme('light')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
            >
              Light Mode
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme('dark')}
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
            >
              Dark Mode
            </motion.button>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
