"use client";

import { motion, AnimatePresence } from "framer-motion";
import { House, BookOpen, Image as ImageIcon, Volume2, VolumeX, ChevronDown,User } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 
import { useEffect, useState } from "react";

export default function Navbar({ 
  showMobileNav, 
  activeTab, 
  setActiveTab, 
  isPlaying, 
  toggleMusic 
}) {
  const [show, setShow] = useState(false); 
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
      setShow(true);
    }, 2500); 

    let lastScroll = 0;

    const handleScroll = () => {
      if (!isReady) return;
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 120) {
        setShow(false); 
      } else {
        setShow(true);  
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isReady]);

  const menuItems = [
    { id: "Home", label: "HOME", href: "/" },
    { id: "About", label: "ABOUT", href: "/about" },
    { id: "WhyJoin", label: "WHY JOIN", href: "/whyjoin" },
  ];

  if (!isReady) return null;

  return (
    <>
      {/* ─── TOMBOL PEMICU PANAH DESKTOP (DI TENGAH ATAS LAYAR) ─── */}
      <AnimatePresence>
        {!show && (
          <motion.button
            initial={{ opacity: 0, y: -30, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -30, x: "-50%" }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            onClick={() => setShow(true)}
            className="hidden md:flex fixed top-0 left-1/2 z-[9999] bg-white/95 backdrop-blur-md border border-t-0 border-[#6F4E37]/20 px-6 py-2 rounded-b-2xl shadow-[0_8px_25px_rgba(111,78,55,0.05)] hover:bg-[#6F4E37]/5 text-[#6F4E37] font-bold text-xs items-center gap-1.5 cursor-pointer select-none group transition-all"
            title="Buka Navigasi"
          >
            <span>Buka Navigasi</span>
            <ChevronDown size={14} className="animate-bounce group-hover:translate-y-0.5 transition-transform text-[#D4AF37]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── 1. NAVBAR DESKTOP MELAYANG GAYA PREMIUM (50% PUTIH) ─── */}
      <div className="hidden md:flex fixed top-4 inset-x-0 z-[9999] justify-center items-center px-6 pointer-events-none">
        <AnimatePresence>
          {show && (
            <motion.nav 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", stiffness: 120, damping: 22, mass: 1.1 }}
              className="pointer-events-auto w-full max-w-4xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_20px_50px_rgba(111,78,55,0.08)] rounded-[2.5rem] px-6 py-3 flex justify-between items-center border-white/40"
            >
              {/* Kiri: Logo & Identitas (Sentuhan Cokelat & Emas) */}
              <Link href="/" className="flex items-center gap-3 select-none group/logo cursor-pointer">
                <div className="p-2 border border-[#6F4E37]/10 shadow-sm rounded-xl bg-white group-hover/logo:scale-105 transition-transform duration-300">
                  <Image 
                    src="/logo/logo.png" 
                    alt="Logo TE"
                    width={22} 
                    height={22}
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="font-black text-[#6F4E37] tracking-tight text-base md:text-lg">
                  TE <span className="text-[#D4AF37] font-black group-hover/logo:text-[#c49f2e] transition-colors">SMKN 3</span>
                </span>
              </Link>

              {/* Kanan: Menu Navigasi & Musik Highlight */}
              <div className="flex items-center gap-4">
                <ul className="flex items-center gap-1.5 bg-[#6F4E37]/5 p-1 rounded-full border border-[#6F4E37]/10">
                  {menuItems.map((item) => {
                    const isActive = activeTab === item.id;

                    return (
                      <li key={item.id} className="relative">
                        <Link
                          href={item.href}
                          onClick={() => setActiveTab(item.id)}
                          className={`relative z-10 block px-5 py-2 text-xs font-bold tracking-wider transition-colors duration-300 rounded-full ${
                            isActive ? "text-[#6F4E37]" : "text-slate-500 hover:text-[#6F4E37]"
                          }`}
                        >
                          {item.label}
                        </Link>
                        
                        {isActive && (
                          <motion.span
                            layoutId="activeDesktopTab"
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            className="absolute inset-0 bg-[#6F4E37]/10 border border-[#6F4E37]/20 rounded-full z-0"
                          />
                        )}
                      </li>
                    );
                  })}
                </ul>

                {/* HIGHLIGHT UTAMA: Kontrol Musik Desktop (20% GOLD / EMAS) */}
                <button 
                  onClick={toggleMusic}
                  className="flex items-center gap-2 px-5 py-2 text-xs font-black tracking-wider text-white bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:from-[#e5be47] hover:to-[#bc8b1a] shadow-md shadow-[#D4AF37]/20 rounded-full transition-all active:scale-95 duration-200 cursor-pointer h-[34px]"
                >
                  {isPlaying ? (
                    <>
                      <Volume2 size={14} className="animate-pulse" />
                      <span>ON</span>
                    </>
                  ) : (
                    <>
                      <VolumeX size={14} />
                      <span>MUSIC</span>
                    </>
                  )}
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* ─── 2. MOBILE NAVIGATION (PUTIH 50% DENGAN CITRA RASA COKELAT & GOLD) ─── */}
      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="md:hidden fixed left-1/2 z-50 bottom-6 bg-white/95 backdrop-blur-2xl border border-white/60 shadow-[0_24px_60px_rgba(111,78,55,0.1)] rounded-[2.5rem] px-4.5 py-2.5 flex gap-4 text-slate-400 items-center max-w-[94vw] w-max"
          >
            {/* LOGO MINI MOBILE */}
            <Link href="/" className="flex items-center shrink-0 select-none pl-0.5">
              <motion.div 
                whileTap={{ scale: 0.92 }}
                className="p-1.5 border border-[#6F4E37]/10 shadow-xs rounded-xl bg-white flex items-center justify-center active:bg-slate-50"
              >
                <Image 
                  src="/logo-kelas.png" 
                  alt="Logo Mobile"
                  width={16} 
                  height={16}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Pembatas Cokelat Halus */}
            <span className="w-[1px] h-4 bg-gradient-to-b from-[#6F4E37]/10 via-[#6F4E37]/30 to-[#6F4E37]/10" />

            {/* Menu Utama Tab Navigasi */}
            <div className="flex items-center gap-3.5">
              <MobileNavItem href="/" id="Home" icon={<House size={18} />} label="Home" activeTab={activeTab} setActiveTab={setActiveTab} />
              <MobileNavItem href="/about" id="About" icon={<BookOpen size={18} />} label="About" activeTab={activeTab} setActiveTab={setActiveTab} />
              <MobileNavItem href="/whyjoin" id="WhyJoin" icon={<User size={18} />} label="Why Join" activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            
            {/* Pembatas Kanan */}
            <span className="w-[1px] h-4 bg-gradient-to-b from-[#6F4E37]/10 via-[#6F4E37]/30 to-[#6F4E37]/10" />

            {/* Kontrol Musik HP */}
            <button 
              onClick={toggleMusic}
              className={`flex flex-col items-center gap-1.5 py-0.5 px-1.5 select-none transition-colors duration-300 active:scale-90 cursor-pointer ${
                isPlaying ? "text-[#D4AF37] font-bold" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <div className="h-[18px] flex items-center justify-center">
                {isPlaying ? (
                  <Volume2 size={18} className="animate-pulse text-[#D4AF37]" />
                ) : (
                  <VolumeX size={18} className="text-slate-400" />
                )}
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest leading-none">
                {isPlaying ? "On" : "Music"}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavItem({ href, id, icon, label, activeTab, setActiveTab }) {
  const isActive = activeTab === id;

  return (
    <Link 
      href={href} 
      onClick={() => setActiveTab(id)}
      className={`flex flex-col items-center gap-1.5 relative py-0.5 px-1.5 select-none transition-colors duration-300 ${
        isActive ? "text-[#6F4E37] font-black" : "text-slate-400 hover:text-[#6F4E37]"
      }`}
    >
      <motion.div 
        whileTap={{ scale: 0.9 }} 
        className="h-[18px] flex items-center justify-center"
      >
        {icon}
      </motion.div>
      <span className="text-[8px] font-black uppercase tracking-widest leading-none">{label}</span>
      
      {isActive && (
        <motion.span 
          layoutId="activeGlow" 
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className="absolute -bottom-[11px] w-4 h-[3px] bg-[#D4AF37] rounded-full shadow-[0_-2px_10px_rgba(212,175,55,0.4)]" 
        />
      )}
    </Link>
  );
}