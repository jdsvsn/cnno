```typescript
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {Icon} from 'lucide-react';
import clsx from 'clsx';

export default function CnnoLandingPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/60142899656`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="sticky top-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-sm py-4"
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">CNNO</h1>
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#home" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-300">
                About us
              </a>
            </li>
            <li>
              <a href="#products" className="text-white hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-300">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>
      <motion.main
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex-1"
      >
        <section id="home" className="h-screen bg-gradient-to-r from-[#3b82f6] to-[#1e293b] flex items-center justify-center">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-9xl font-bold text-white"
          >
            CNNO
          </motion.h1>
        </section>
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-7xl font-bold"
            >
              About us
            </motion.h2>
            <p className="text-lg">
              CNNO is a cinnamon roll business that provides delicious and fresh cinnamon rolls to our customers.
            </p>
          </div>
        </section>
        <section id="products" className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-7xl font-bold"
            >
              Products
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white shadow-md p-4"
              >
                <h3 className="text-lg font-bold">Cinnamon Roll</h3>
                <p className="text-sm">Our signature cinnamon roll, made with love and care.</p>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-white shadow-md p-4"
              >
                <h3 className="text-lg font-bold">Cinnamon Roll with Cream Cheese</h3>
                <p className="text-sm">Our cinnamon roll with a delicious cream cheese topping.</p>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="bg-white shadow-md p-4"
              >
                <h3 className="text-lg font-bold">Cinnamon Roll with Caramel</h3>
                <p className="text-sm">Our cinnamon roll with a sweet caramel topping.</p>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-7xl font-bold"
            >
              Contact us
            </motion.h2>
            <p className="text-lg">
              Get in touch with us to learn more about our cinnamon rolls.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#3b82f6] text-white px-4 py-2 rounded-md"
            >
              <Icon name="message-square" size={20} className="mr-2" /> Send us a message
            </button>
          </div>
        </section>
      </motion.main>
      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto">
          <p className="text-white text-sm">
            2024 CNNO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
```