"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-[#6F4E37] text-stone-100 overflow-hidden border-t border-white/5 mt-20">
      
      {/* ─── DESAIN CURVE / WAVE TOP DIVIDER ─── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 bg-transparent">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] fill-white dark:fill-slate-900">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      {/* Efek Cahaya Ambient Premium di Latar Belakang */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-8 relative z-10">
        
        {/* ─── BAGIAN UTAMA (GRID LAYOUT) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* KOLOM 1: BRANDING & DESKRIPSI (5 Kolom) */}
          <div className="md:col-span-5 flex flex-col items-start gap-5">
            <div className="flex items-center gap-3.5 group select-none cursor-pointer">
              <div className="relative w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <Image 
                  src="/logo/logo.png" 
                  alt="Logo TE Footer" 
                  fill
                  sizes="56px"
                  className="object-contain p-2 filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:rotate-6"
                />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-black text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF5D6] to-[#D4AF37]">
                  {"TE"}<span className="text-[#D4AF37]">.</span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-300/90 mt-1.5">
                  {"Team Evangelisasi"}
                </span>
              </div>
            </div>
            <p className="text-stone-300/90 text-sm leading-relaxed max-w-sm font-medium">
              {"Wadah persekutuan siswa Kristen SMK Negeri 3 Manado untuk saling membangun iman, mengasah potensi pelayanan, dan menjadi berkat nyata di lingkungan sekolah."}
            </p>
          </div>

          {/* KOLOM 2: QUICK LINKS (3 Kolom) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-black tracking-widest text-[#D4AF37] uppercase bg-white/5 py-1 px-3 rounded-md w-max border border-white/5">
              {"Tautan Pintas"}
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-semibold">
              <li>
                <Link href="#beranda" className="text-stone-300 hover:text-white flex items-center gap-0 hover:gap-1.5 transition-all duration-300 group">
                  <span className="w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-2"></span>
                  {"Beranda"}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-stone-300 hover:text-white flex items-center gap-0 hover:gap-1.5 transition-all duration-300 group">
                  <span className="w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-2"></span>
                  {"Tentang Kami"}
                </Link>
              </li>
              <li>
                <Link href="#kegiatan" className="text-stone-300 hover:text-white flex items-center gap-0 hover:gap-1.5 transition-all duration-300 group">
                  <span className="w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-2"></span>
                  {"Kegiatan"}
                </Link>
              </li>
              <li>
                <Link href="#whyjoin" className="text-stone-300 hover:text-white flex items-center gap-0 hover:gap-1.5 transition-all duration-300 group">
                  <span className="w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-2"></span>
                  {"Mengapa Bergabung"}
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: CONTACT & SOCIALS (4 Kolom) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-black tracking-widest text-[#D4AF37] uppercase bg-white/5 py-1 px-3 rounded-md w-max border border-white/5">
              {"Sekretariat & Kontak"}
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-stone-300 font-semibold">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span className="leading-relaxed transition-colors duration-300 group-hover:text-white">
                  {"SMK Negeri 3 Manado, Jl. Kleak, Kota Manado, Sulawesi Utara"}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={16} className="text-[#D4AF37] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <a href="mailto:te.smkn3manado@gmail.com" className="transition-colors duration-300 group-hover:text-white">
                  {"te.smkn3manado@gmail.com"}
                </a>
              </li>
            </ul>

            {/* Ikon Sosial Media Premium SVG */}
            <div className="flex items-center gap-3.5 mt-3">
              {/* INSTAGRAM */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:bg-white hover:text-[#6F4E37] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* YOUTUBE */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:bg-white hover:text-[#6F4E37] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* ─── BAGIAN BAWAH (COPYRIGHT & BACK TO TOP) ─── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 text-xs font-bold text-stone-400">
          <p className="tracking-wide text-center sm:text-left">
            {"© 2026 Team Evangelisasi SMKN 3 Manado. All rights reserved."}
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white text-stone-300 hover:text-[#6F4E37] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300"
          >
            <span>{"Kembali ke Atas"}</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}