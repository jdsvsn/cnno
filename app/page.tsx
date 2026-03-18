"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ShoppingCart,
  Coffee,
  Users,
  Heart,
  Phone,
  MapPin,
  Check,
} from "lucide-react";
import { clsx } from "clsx";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Menu", href: "#menu" },
  { name: "Features", href: "#features" },
  { name: "Locations", href: "#locations" },
  { name: "Contact", href: "#contact" },
];

const features = [
  {
    title: "Handmade Daily",
    desc: "Small batches baked every morning with love and the finest cinnamon.",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    title: "Signature Glaze",
    desc: "Our secret glaze balances sweetness and spice for a memorable bite.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Seasonal Specials",
    desc: "Limited-time flavors that celebrate local ingredients and holidays.",
    icon: <Check className="w-6 h-6" />,
  },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [counters, setCounters] = useState({
    rollsSold: 0,
    customers: 0,
    locations: 0,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animated counters
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 1600;
    const from = { rollsSold: 0, customers: 0, locations: 0 };
    const to = { rollsSold: 18532, customers: 8421, locations: 12 };

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      setCounters({
        rollsSold: Math.floor(from.rollsSold + (to.rollsSold - from.rollsSold) * ease),
        customers: Math.floor(from.customers + (to.customers - from.customers) * ease),
        locations: Math.floor(from.locations + (to.locations - from.locations) * ease),
      });
      if (t < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const stagger = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };

  return (
    <main className="min-h-screen bg-cream-50 text-brown-900 selection:bg-brown-300 selection:text-white scroll-smooth">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-40">
        <div className="backdrop-blur-sm bg-white/40 dark:bg-brown-900/30 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brown-700/90 flex items-center justify-center text-cream-50 font-bold text-lg">
                  CN
                </div>
                <div className="hidden sm:block">
                  <span className="font-heading text-xl tracking-tight">CNNO</span>
                  <div className="text-sm text-brown-700/70">Cinnamon Rolls & Co.</div>
                </div>
              </a>

              <nav className="hidden md:flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-brown-800 hover:text-brown-900 transition-all text-sm"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/0142899656"
                  className="ml-2 inline-flex items-center gap-2 bg-brown-700/95 text-cream-50 px-4 py-2 rounded-md shadow hover:scale-105 transform transition"
                >
                  <Phone className="w-4 h-4" />
                  Order via WhatsApp
                </a>
              </nav>

              <div className="md:hidden flex items-center">
                <button
                  aria-label="menu"
                  onClick={() => setMenuOpen((s) => !s)}
                  className="p-2 rounded-md bg-white/60 backdrop-blur-sm border border-white/10"
                >
                  {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="md:hidden"
              >
                <div className="px-5 pb-5">
                  <div className="flex flex-col gap-3 mt-3">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-3 rounded-md text-brown-900 bg-white/50 backdrop-blur-sm"
                      >
                        {link.name}
                      </a>
                    ))}
                    <a
                      href="https://wa.me/0142899656"
                      className="block px-4 py-3 rounded-md text-cream-50 bg-brown-700/95 text-center"
                    >
                      <Phone className="inline-block w-4 h-4 mr-2" /> WhatsApp: 014-2899656
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Animated gradient background */}
          <motion.div
            animate={{ scale: [1, 1.03, 1], rotate: [0, 1, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-brown-600 via-brown-500 to-cream-100 opacity-90"
            style={{ mixBlendMode: "multiply" }}
          />
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-15"
            viewBox="0 0 800 800"
            fill="none"
          >
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#FFF7ED" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#7C4A2D" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <circle cx="400" cy="400" r="350" fill="url(#g)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: mounted ? 1 : 0, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block rounded-lg px-3 py-1 bg-cream-50/80 text-brown-800 font-medium">
                Fresh • Warm • Minimal
              </div>

              <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl leading-none tracking-tight text-brown-900">
                CNNO
                <br />
                Cinnamon Rolls that
                <motion.span
                  initial={{ scale: 0.98 }}
                  animate={{ scale: 1.03 }}
                  transition={{ duration: 1, yoyo: Infinity }}
                  className="block text-brown-700 mt-2"
                >
                  make mornings memorable.
                </motion.span>
              </h1>

              <p className="max-w-xl text-brown-800/80 text-lg">
                Minimal design, maximal flavor. Hand-rolled cinnamon goodness with a signature
                glaze and seasonal surprises. Crafted daily, loved always.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/0142899656"
                  className="inline-flex items-center gap-3 bg-brown-700 text-cream-50 px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order via WhatsApp
                </a>

                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 text-brown-800 border border-brown-200 px-4 py-2 rounded-lg hover:bg-brown-50 transition"
                >
                  View Menu
                </a>
              </div>

              <div className="flex items-center gap-6 mt-4">
                <div>
                  <div className="text-2xl font-semibold text-brown-900">{counters.rollsSold.toLocaleString()}</div>
                  <div className="text-sm text-brown-700/80">Rolls sold</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-brown-900">{counters.customers.toLocaleString()}</div>
                  <div className="text-sm text-brown-700/80">Happy customers</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-brown-900">{counters.locations}</div>
                  <div className="text-sm text-brown-700/80">Locations</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative flex items-center justify-center"
            >
              {/* Glass card mockup */}
              <div className="w-full max-w-md p-6 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-2xl transform hover:-translate-y-2 transition">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-brown-700/80">Limited Batch</div>
                    <h3 className="font-heading text-2xl text-brown-900">Cinna-Classic Roll</h3>
                    <p className="mt-2 text-brown-800/80">
                      Our classic roll with brown sugar, butter, and a creamy signature glaze.
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-2xl font-semibold text-brown-900">$4.50</span>
                      <a
                        href="https://wa.me/0142899656"
                        className="ml-2 inline-flex items-center gap-2 px-3 py-2 bg-brown-700 text-cream-50 rounded-md hover:scale-105 transition"
                      >
                        <ShoppingCart className="w-4 h-4" /> Order
                      </a>
                    </div>
                  </div>
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-brown-700 to-brown-500 flex items-center justify-center text-cream-50 text-lg font-bold">
                    CN
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="p-3 bg-white/30 rounded-lg text-center">
                    <div className="text-sm text-brown-800 font-medium">Crisp Edges</div>
                    <div className="text-xs text-brown-700/70">Baked to perfection</div>
                  </div>
                  <div className="p-3 bg-white/30 rounded-lg text-center">
                    <div className="text-sm text-brown-800 font-medium">Fluffy Center</div>
                    <div className="text-xs text-brown-700/70">Light & airy</div>
                  </div>
                  <div className="p-3 bg-white/30 rounded-lg text-center">
                    <div className="text-sm text-brown-800 font-medium">Glaze</div>
                    <div className="text-xs text-brown-700/70">Signature sweet balance</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section - Light */}
      <section id="menu" className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {["Classic", "Caramel Pecan", "Maple Apple"].map((item, idx) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { delay: idx * 0.08 } },
                }}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/10 shadow hover:shadow-lg transform hover:scale-102 transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-brown-900">{item}</h4>
                    <p className="text-sm text-brown-700/80 mt-1">
                      A delightful choice with perfectly balanced cinnamon.
                    </p>
                  </div>
                  <div className="text-brown-700/80 text-lg font-medium">$4.50</div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-2 text-sm rounded-md bg-brown-50 text-brown-800 border border-brown-100 hover:bg-brown-100 transition">
                    Details
                  </button>
                  <a
                    href="https://wa.me/0142899656"
                    className="ml-auto px-3 py-2 rounded-md bg-brown-700 text-cream-50 hover:scale-105 transition inline-flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Order
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features - Dark */}
      <section id="features" className="py-20 bg-brown-900 text-cream-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="max-w-xl">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="font-heading text-4xl md:text-5xl"
              >
                The CNNO difference
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-4 text-brown-100/90"
              >
                We focus on craft, consistency, and the kind of taste that brings people back.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="p-5 rounded-xl bg-white/8 backdrop-blur-sm border border-white/6 hover:bg-white/12 transition transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-md bg-white/10">{f.icon}</div>
                    <div>
                      <div className="font-medium text-cream-50">{f.title}</div>
                      <div className="text-sm text-brown-100/80">{f.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Counters */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-8 bg-white/60 backdrop-blur-sm border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5">
              <Users className="w-12 h-12 text-brown-700" />
              <div>
                <div className="text-sm text-brown-700">Trusted by</div>
                <div className="text-2xl font-semibold text-brown-900">{counters.customers.toLocaleString()} customers</div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brown-900">{counters.rollsSold.toLocaleString()}</div>
                <div className="text-sm text-brown-700">Rolls sold</div>
              </div>
              <div className="border-l h-8 border-brown-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-brown-900">{counters.locations}</div>
                <div className="text-sm text-brown-700">Locations</div>
              </div>
            </div>

            <a
              href="https://wa.me/0142899656"
              className="inline-flex items-center gap-3 bg-brown-700 text-cream-50 px-5 py-3 rounded-md hover:scale-105 transition"
            >
              <Phone className="w-4 h-4" />
              Order via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Locations - Alternating Dark/Light Rhythm */}
      <section id="locations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <h3 className="font-heading text-3xl text-brown-900 mb-8">Find us</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-cream-50 border border-brown-50">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brown-700 mt-1" />
                <div>
                  <div className="font-semibold text-brown-900">Main Street Bakery</div>
                  <div className="text-sm text-brown-700/80">123 Main St • Open 7:00 - 17:00</div>
                  <a
                    href="https://wa.me/0142899656"
                    className="mt-4 inline-flex items-center gap-2 px-3 py-2 bg-brown-700 text-cream-50 rounded-md"
                  >
                    <Phone className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-brown-900 text-cream-50 border border-white/6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-cream-50 mt-1" />
                <div>
                  <div className="font-semibold text-cream-50">Market Corner</div>
                  <div className="text-sm text-cream-200/80">Open weekends • Fresh batches</div>
                  <a
                    href="https://wa.me/0142899656"
                    className="mt-4 inline-flex items-center gap-2 px-3 py-2 bg-cream-50 text-brown-900 rounded-md"
                  >
                    <Phone className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brown-700 to-brown-500 text-cream-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-10 md:p-16 bg-white/10 backdrop-blur-sm border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-heading">Craving warmth? Let's bake it.</h2>
              <p className="mt-2 text-brown-100/90 max-w-lg">
                Place a quick order via WhatsApp and get fresh rolls picked or delivered from the
                nearest location.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/0142899656"
                className="inline-flex items-center gap-3 bg-cream-50 text-brown-900 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
              >
                <Phone className="w-5 h-5" />
                Order on WhatsApp
              </a>
              <a
                href="#menu"
                className="px-4 py-3 rounded-lg border border-white/20 text-cream-50 hover:bg-white/10 transition"
              >
                See Menu
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brown-700 text-cream-50 flex items-center justify-center font-bold">CN</div>
              <div>
                <div className="font-semibold text-brown-900">CNNO</div>
                <div className="text-sm text-brown-700/80">Cinnamon Rolls & Co. — All rights reserved.</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-brown-700 hover:text-brown-900 text-sm">
                Privacy
              </a>
              <a href="#" className="text-brown-700 hover:text-brown-900 text-sm">
                Terms
              </a>
              <a
                href="https://wa.me/0142899656"
                className="inline-flex items-center gap-2 bg-brown-700 text-cream-50 px-3 py-2 rounded-md"
              >
                <Phone className="w-4 h-4" />
                014-2899656
              </a>
            </div>
          </div>

          <div className="mt-6 text-sm text-brown-700/70">
            © {new Date().getFullYear()} CNNO. Crafted with care and cinnamon.
          </div>
        </div>
      </footer>
    </main>
  );
}