"use client";

import { motion, AnimatePresence } from "framer-motion";
import { House, BookOpen, ChevronDown, CalendarDays, ClipboardList, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 
import { useEffect, useState } from "react";

export default function Navbar({ 
  showMobileNav, 
  activeTab, 
  setActiveTab 
}) {
  const [show, setShow] = useState(false); 
  const [isReady, setIsReady] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
      setShow(true);
    }, 2000); 

    let lastScroll = 0;

    const handleScroll = () => {
      if (!isReady) return;
      const currentScroll = window.scrollY;

      if (currentScroll <= 30) {
        setIsAtTop(true);
        setShow(true);
      } else {
        setIsAtTop(false);
        if (currentScroll > lastScroll && currentScroll > 150) {
          setShow(false); 
        } else {
          setShow(true);  
        }
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
    { id: "Beranda", label: "BERANDA", href: "/" },
    { id: "Tentang", label: "TENTANG", href: "/about" },
    { id: "Kegiatan", label: "KEGIATAN", href: "/activities" },
    { id: "Details", label: "DETAILS", href: "/details" },
  ];

  if (!isReady) return null;

  return (
    <>
      {/* ─── TOMBOL PEMICU PANAH DESKTOP ─── */}
      <AnimatePresence>
        {!show && !isAtTop && (
          <motion.button
            initial={{ opacity: 0, y: -30, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -30, x: "-50%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => setShow(true)}
            className="hidden md:flex fixed top-0 left-1/2 z-[9999] bg-white/95 backdrop-blur-md border border-t-0 border-[#6F4E37]/10 px-7 py-2.5 rounded-b-2xl shadow-[0_10px_30px_rgba(111,78,55,0.06)] text-[#6F4E37] font-bold text-xs items-center gap-2 cursor-pointer select-none"
          >
            <span>Buka Navigasi</span>
            <ChevronDown size={14} className="animate-bounce text-[#D4AF37]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── 1. NAVBAR DESKTOP (DENGAN IDENTITAS SEKOLAH) ─── */}
      <div 
        className={`hidden md:flex inset-x-0 z-[9999] justify-center items-center px-6 pointer-events-none transition-all duration-500 ${
          isAtTop ? "absolute top-2 w-full" : "fixed top-3"
        }`}
      >
        <AnimatePresence mode="wait">
          {show && (
            <motion.nav 
              layout
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
              className={`pointer-events-auto w-full grid grid-cols-3 items-center rounded-[2.5rem] transition-all duration-500 ${
                isAtTop 
                  ? "max-w-7xl px-10 py-3 bg-transparent text-white" 
                  : "max-w-5xl px-8 py-2.5 bg-white/95 backdrop-blur-3xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-slate-800"
              }`}
            >
              {/* KOLOM KIRI: LOGO + NAMA SEKOLAH */}
              <div className="flex justify-start select-none group/logo">
                <Link href="/" className="flex items-center gap-3">
                  <div className={`transition-all duration-300 group-hover/logo:scale-105 ${
                    isAtTop ? "p-0 bg-transparent" : "p-1.5 border border-white/10 bg-white rounded-xl shadow-sm"
                  }`}>
                    <Image 
                      src="/logo/logo.png" 
                      alt="Logo TE" 
                      width={36} 
                      height={36} 
                      className="object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]" 
                      priority 
                    />
                  </div>
                  
                  {/* Container Teks Vertikal */}
                  <div className="flex flex-col justify-center leading-none">
                    <span className={`font-black text-2xl tracking-tight transition-colors duration-500 ${
                      isAtTop ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF5D6] to-[#D4AF37]" : "text-[#6F4E37]"
                    }`}>
                      TE<span className="text-[#D4AF37]">.</span>
                    </span>
                    <span className={`text-[9px] font-bold tracking-[0.18em] uppercase mt-0.5 transition-colors duration-500 ${
                      isAtTop ? "text-stone-300/90" : "text-slate-500"
                    }`}>
                      SMKN 3 Manado
                    </span>
                  </div>
                </Link>
              </div>

              {/* KOLOM TENGAH: MENU UTAMA */}
              <div className="flex justify-center">
                <ul className={`flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${
                  isAtTop ? "bg-white/[0.04]" : "bg-[#6F4E37]/5 border border-[#6F4E37]/10"
                }`}>
                  {menuItems.map((item) => {
                    const isActive = activeTab === item.id;

                    return (
                      <li key={item.id} className="relative">
                        <Link
                          href={item.href}
                          onClick={() => setActiveTab(item.id)}
                          className={`relative z-10 block px-5 py-2 text-xs font-bold tracking-[0.12em] transition-colors duration-300 rounded-full ${
                            isActive 
                              ? isAtTop ? "text-[#6F4E37]" : "text-white"
                              : isAtTop ? "text-stone-300 hover:text-white" : "text-slate-500 hover:text-[#6F4E37]"
                          }`}
                        >
                          {item.label}
                        </Link>
                        
                        {isActive && (
                          <motion.span
                            layoutId="activeDesktopTab"
                            className="absolute inset-0 rounded-full -z-10 shadow-sm"
                            style={{
                              background: isAtTop 
                                ? "linear-gradient(to right, #ffffff, #FFF5D6)" 
                                : "linear-gradient(to right, #6F4E37, #8B6347)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* KOLOM KANAN: TOMBOL GABUNG */}
              <div className="flex justify-end items-center">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link 
                    href="https://forms.gle/your-form-link"
                    target="_blank"
                    className={`px-6 py-2.5 rounded-full text-xs font-black tracking-[0.1em] flex items-center gap-2 transition-all duration-300 ${
                      isAtTop 
                        ? "bg-white text-black hover:bg-stone-100" 
                        : "bg-[#6F4E37] border border-[#6F4E37] text-white hover:bg-[#543b29]"
                    }`}
                  >
                    GABUNG
                    <ArrowRight size={13} className="opacity-80" />
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* ─── 2. MOBILE NAVIGATION ─── */}
      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            initial={{ y: 80, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 80, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="md:hidden fixed left-1/2 bottom-5 z-[9999] w-[92vw] max-w-md bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(111,78,55,0.12)] rounded-[2.2rem] px-2.5 py-2 flex items-center justify-between"
          >
            <div className="flex w-full justify-between items-center relative px-1">
              <MobileNavItem href="/" id="Beranda" icon={<House size={20} />} label="Beranda" activeTab={activeTab} setActiveTab={setActiveTab} />
              <MobileNavItem href="/about" id="Tentang" icon={<BookOpen size={20} />} label="Tentang" activeTab={activeTab} setActiveTab={setActiveTab} />
              
              <div className="flex items-center justify-center px-1 shrink-0 select-none">
                <div className="w-[38px] h-[38px] border border-[#6F4E37]/10 bg-white shadow-sm rounded-full flex items-center justify-center">
                  <Image src="/logo/logo.png" alt="TE Mobile" width={18} height={18} className="object-contain" priority />
                </div>
              </div>

              <MobileNavItem href="/activities" id="Kegiatan" icon={<CalendarDays size={20} />} label="Kegiatan" activeTab={activeTab} setActiveTab={setActiveTab} />
              <MobileNavItem href="/details" id="Details" icon={<ClipboardList size={20} />} label="Details" activeTab={activeTab} setActiveTab={setActiveTab} isSpotlight={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavItem({ href, id, icon, label, activeTab, setActiveTab, isSpotlight = false }) {
  const isActive = activeTab === id;

  return (
    <Link 
      href={href} 
      onClick={() => setActiveTab(id)}
      className="flex-1 flex flex-col items-center justify-center relative py-2.5 rounded-2xl min-w-[60px] transition-all duration-300"
    >
      <motion.div 
        whileTap={{ scale: 0.85 }}
        className={`relative z-10 flex items-center justify-center transition-all duration-300 ${
          isActive ? "text-white scale-110" : isSpotlight ? "text-[#D4AF37]" : "text-slate-400"
        }`}
      >
        {icon}
      </motion.div>

      <span className={`text-[9px] font-black tracking-wider uppercase mt-1 z-10 transition-colors duration-300 ${
        isActive ? "text-[#6F4E37]" : isSpotlight ? "text-[#B38F24] font-bold" : "text-slate-400/80 font-medium"
      }`}>
        {label}
      </span>
      
      {isActive && (
        <motion.span 
          layoutId="activeMobileIndicator" 
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="absolute top-1.5 w-10 h-10 bg-gradient-to-br from-[#6F4E37] to-[#8B6347] rounded-full -z-0 shadow-[0_6px_16px_rgba(111,78,55,0.3)]" 
        />
      )}
    </Link>
  );
}