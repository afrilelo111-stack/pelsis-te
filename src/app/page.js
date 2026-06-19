"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyJoin from "@/components/WhyJoin";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Beranda");
  const [showMobileNav, setShowMobileNav] = useState(true);

  // 1. Sistem Auto-Hide Mobile Nav Saat Scroll (Lebih Mulus & Kebal Guncangan)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Hanya sembunyikan jika scroll ke bawah melampaui 120px
          if (currentScrollY > lastScrollY && currentScrollY > 120) {
            setShowMobileNav(false);
          } else if (currentScrollY < lastScrollY) {
            setShowMobileNav(true);
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Intersection Observer dengan Batas (Margin) yang Presisi untuk Grid Navbar
  useEffect(() => {
    const sections = ["beranda", "about", "whyjoin"];
    
    const tabMapping = {
      beranda: "Beranda",
      about: "Tentang",
      whyjoin: "Kegiatan",
    };

    const observerOptions = {
      root: null,
      // Disesuaikan agar tab berganti tepat saat bagian utama section menyentuh area pandang laptop
      rootMargin: "-25% 0px -55% 0px", 
      threshold: 0.05,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tabName = tabMapping[entry.target.id];
          if (tabName) setActiveTab(tabName);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Variasi Animasi Reveal yang Mewah & Elastis (Spring)
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } // Efek Cinematic Ultra-Smooth
    }
  };

  return (
    <main className="relative min-h-screen bg-[#FFFDFB] text-slate-800 antialiased selection:bg-[#D4AF37]/20 selection:text-[#6F4E37] overflow-x-hidden scroll-smooth">
      
      {/* Navbar Adaptif Premium */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        showMobileNav={showMobileNav} 
      />
      {/* SECTION 1: HERO */}
      <div id="beranda" className="w-full scroll-mt-0">
        <Hero />
      </div>

      {/* SECTION 2: ABOUT (Diberi Jarak Aman scroll-mt Supaya Tidak Tertutup Navbar Melayang) */}
      <motion.div 
        id="about" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        variants={fadeInUp}
        className="relative z-10 bg-[#FFFDFB] scroll-mt-24"
      >
        <About />
      </motion.div>

      {/* SECTION 3: WHY JOIN */}
      <motion.div 
        id="whyjoin" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        variants={fadeInUp}
        className="relative z-10 bg-white scroll-mt-24"
      >
        <WhyJoin />
      </motion.div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}