"use client";

import { motion, AnimatePresence } from "framer-motion";
import { House, BookOpen, ChevronDown, CalendarDays, ClipboardList, ArrowRight, HelpCircle } from "lucide-react";
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
    { id: "Beranda", label: "BERANDA", href: "#beranda" },
    { id: "Tentang", label: "TENTANG", href: "#about" },
    { id: "Kegiatan", label: "KEGIATAN", href: "#kegiatan" },
    { id: "WhyJoin", label: "MENGAPA", href: "#whyjoin" },
    { id: "Details", label: "DETAILS", href: "#details" },
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
            <span>{"Buka Navigasi"}</span>
            <ChevronDown size={14} className="animate-bounce text-[#D4AF37]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── 1. NAVBAR DESKTOP ─── */}
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
              {/* LOGO DESKTOP */}
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
                  <div className="flex flex-col justify-center leading-none">
                    <span className={`font-black text-2xl tracking-tight transition-colors duration-500 ${
                      isAtTop ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF5D6] to-[#D4AF37]" : "text-[#6F4E37]"
                    }`}>
                      {"TE"}<span className="text-[#D4AF37]">.</span>
                    </span>
                    <span className={`text-[9px] font-bold tracking-[0.18em] uppercase mt-0.5 transition-colors duration-500 ${
                      isAtTop ? "text-stone-300/90" : "text-slate-500"
                    }`}>
                      {"SMKN 3 Manado"}
                    </span>
                  </div>
                </Link>
              </div>

              {/* MENU DESKTOP */}
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
                          className={`relative z-10 block px-4 py-2 text-xs font-bold tracking-[0.12em] transition-colors duration-300 rounded-full ${
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

              {/* KANAN DESKTOP */}
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
                    {"GABUNG"}
                    <ArrowRight size={13} className="opacity-80" />
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* ─── 2. MOBILE NAVIGATION (DENGAN LOGO DI KIRI + INDIKATOR COKELAT) ─── */}
      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            initial={{ y: 80, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 80, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="md:hidden fixed left-1/2 bottom-5 z-[9999] w-[94vw] max-w-md bg-white border border-stone-200/80 shadow-[0_15px_40px_rgba(111,78,55,0.08)] rounded-[2rem] px-4 py-2 flex items-center gap-2"
          >
            {/* LOGO DI SISI KIRI (MENGHARGAI REFERENSI GAMBAR) */}
            <div className="flex items-center pl-1 pr-3 border-r border-stone-200/80 shrink-0 select-none">
              <div className="w-[34px] h-[34px] border border-stone-100 bg-stone-50 rounded-full flex items-center justify-center shadow-inner">
                <Image 
                  src="/logo/logo.png" 
                  alt="TE Mini Logo" 
                  width={18} 
                  height={18} 
                  className="object-contain" 
                  priority 
                />
              </div>
            </div>

            {/* CONTAINER UTAMA ITEM NAVIGASI */}
            <div className="flex flex-1 justify-between items-center">
              <MobileNavItem 
                href="#beranda" 
                id="Beranda" 
                icon={<House size={19} strokeWidth={isActiveTab("Beranda") ? 2.5 : 2} />} 
                label="HOME" 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
              />
              <MobileNavItem 
                href="#about" 
                id="Tentang" 
                icon={<BookOpen size={19} strokeWidth={isActiveTab("Tentang") ? 2.5 : 2} />} 
                label="ABOUT" 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
              />
              <MobileNavItem 
                href="#kegiatan" 
                id="Kegiatan" 
                icon={<CalendarDays size={19} strokeWidth={isActiveTab("Kegiatan") ? 2.5 : 2} />} 
                label="EVENT" 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
              />
              <MobileNavItem 
                href="#whyjoin" 
                id="WhyJoin" 
                icon={<HelpCircle size={19} strokeWidth={isActiveTab("WhyJoin") ? 2.5 : 2} />} 
                label="WHY" 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
              />
              <MobileNavItem 
                href="#details" 
                id="Details" 
                icon={<ClipboardList size={19} strokeWidth={isActiveTab("Details") ? 2.5 : 2} />} 
                label="DETAILS" 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  function isActiveTab(tabId) {
    return activeTab === tabId;
  }
}

// ─── SUB-KOMPONEN ITEM NAV MOBILE (WARNA AKTIF COKELAT PREMIUM) ───
function MobileNavItem({ href, id, icon, label, activeTab, setActiveTab }) {
  const isActive = activeTab === id;

  return (
    <Link 
      href={href} 
      onClick={() => setActiveTab(id)}
      className="flex-1 flex flex-col items-center justify-center relative pt-2 pb-1.5 min-w-[48px] select-none text-center transition-all duration-200"
    >
      {/* Warna ikon berubah menjadi cokelat jika aktif */}
      <div className={`transition-all duration-300 ${
        isActive ? "text-[#6F4E37] scale-105" : "text-stone-400"
      }`}>
        {icon}
      </div>

      {/* Warna teks berubah menjadi cokelat jika aktif */}
      <span className={`text-[9px] font-extrabold tracking-wider uppercase mt-1 transition-colors duration-300 ${
        isActive ? "text-[#6F4E37]" : "text-stone-400"
      }`}>
        {label}
      </span>
      
      {/* Garis penanda bawah diubah warnanya menjadi cokelat premium */}
      {isActive && (
        <motion.div 
          layoutId="activeMobileLineIndicator" 
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          className="absolute bottom-0 w-5 h-[3px] bg-[#6F4E37] rounded-full shadow-[0_2px_6px_rgba(111,78,55,0.3)]" 
        />
      )}
    </Link>
  );
}