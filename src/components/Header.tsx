"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Crypto Taxes", href: "#" },
    { name: "Free Tools", href: "#" },
    { name: "Resource Center", href: "#" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b  ">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href={"/"}>
              <Image
                alt="logo"
                src={"/logo.png"}
                width={100}
                height={100}
                objectFit="contain"
                className=""
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium"
              >
                Get Started
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
          <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium mt-4">
            Get Started
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
