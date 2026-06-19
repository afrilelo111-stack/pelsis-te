"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart, Cross, CalendarDays, Award } from "lucide-react";

export default function About() {
  // Animasi Stagger Konten untuk Efek Membuka Halaman yang Halus
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 65, damping: 18 } 
    }
  };

  return (
    <section id="about" className="relative py-28 md:py-44 bg-gradient-to-b from-[#FDFBF9] via-[#FAF6F0] to-[#F3EEE5] overflow-hidden">
      
      {/* ─── PREMIUM BACKGROUND AMBIENT GLOW ─── */}
      <div className="absolute top-10 right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/5 to-[#6F4E37]/0 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-[#6F4E37]/5 to-[#D4AF37]/0 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-20 px-6 md:px-12 items-center"
      >
        
        {/* ─── KOLOM KIRI: THE LUXURY TRIPLE FOTO PORTFOLIO COLLAGE (5 COLS) ─── */}
        <motion.div variants={itemVariants} className="lg:col-span-5 relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center justify-center">
          
          {/* ORNAMEN BINGKAI GEOMETRIS ABSTRAK DI BELAKANG */}
          <div className="absolute inset-4 rounded-[2.5rem] border border-[#D4AF37]/10 pointer-events-none z-0" />
          
          {/* FOTO 1: JANGKAR UTAMA */}
          <div className="absolute top-[5%] left-0 w-[64%] h-[68%] rounded-[2.2rem] overflow-hidden shadow-[0_25px_50px_rgba(111,78,55,0.12)] border border-white/60 group z-20 transition-all duration-700 -rotate-3 hover:rotate-0 hover:scale-[1.03] hover:z-40 hover:shadow-[0_30px_60px_rgba(111,78,55,0.22)]">
            <Image
              src="/kegiatan/jumat.png" 
              alt="Persekutuan TE Utama"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out"
              sizes="(max-w-1024px) 50vw, 30vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent mix-blend-multiply" />
          </div>

          {/* FOTO 2: SATELLIT ATAS */}
          <div className="absolute top-0 right-[-2%] w-[42%] h-[40%] rounded-[1.8rem] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white/50 group z-30 transition-all duration-700 rotate-2 hover:rotate-0 hover:scale-[1.04] hover:z-40 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]">
            <Image
              src="/kegiatan/doa.jpeg" 
              alt="Aktivitas Pendalaman Alkitab TE"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out"
              sizes="(max-w-1024px) 30vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* FOTO 3: FONDASI BAWAH */}
          <div className="absolute bottom-[8%] right-[2%] w-[52%] h-[45%] rounded-[2rem] overflow-hidden shadow-[0_25px_45px_rgba(111,78,55,0.15)] border border-white/60 group z-10 transition-all duration-700 -rotate-1 hover:rotate-0 hover:scale-[1.03] hover:z-40 hover:shadow-[0_35px_60px_rgba(111,78,55,0.25)]">
            <Image
              src="/kegiatan/paskah.jpeg" 
              alt="Pelayanan Sosial Komunitas TE"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out"
              sizes="(max-w-1024px) 35vw, 22vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent mix-blend-multiply" />
          </div>

          {/* FLOATING GLASS INSIGNIA */}
          <div className="absolute bottom-2 left-[-2%] p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl flex items-center gap-3.5 z-40 max-w-[240px] transform select-none hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6F4E37] to-[#8B6347] flex items-center justify-center text-white shadow-md shrink-0">
              <Cross size={18} className="text-[#D4AF37]" />
            </div>
            <div className="leading-tight">
              <p className="text-[9px] font-black tracking-[0.2em] text-[#FFF5D6] uppercase">Soli Deo</p>
              <p className="text-sm font-black text-white mt-0.5">Bertumbuh & Bersinar</p>
            </div>
          </div>
          
        </motion.div>

        {/* ─── KOLOM KANAN: PRESTIGE TYPOGRAPHY PANEL (7 COLS) ─── */}
        <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-center">
          
          <div className="flex items-center gap-3 mb-6 select-none">
            <span className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.35em] text-[#B38F24] uppercase">
              FOUNDATION OF FAITH
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#6F4E37] tracking-tight leading-[1.12] mb-6">
            Rumah Bertumbuh Bagi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F4E37] via-[#8B6347] to-[#D4AF37]">
              Generasi Emas Kristus
            </span>
          </h2>

          <p className="text-stone-600/90 text-sm md:text-base leading-relaxed mb-9 font-normal max-w-2xl">
            Team Evangelisasi (TE) hadir sebagai pelukan hangat persekutuan rohani di tengah kesibukan akademik <strong>SMK Negeri 3 Manado</strong>. Kami berkomitmen untuk memuridkan, membimbing, dan mempersiapkan siswa-siswi Kristen agar tidak hanya unggul dalam keahlian duniawi, tetapi juga kokoh mengakar pada karakter Kristus yang berani memancarkan kasih.
          </p>

          {/* GRID KARTU VISI MISI YANG SUDAH DIPERBARUI */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            
            {/* Kartu Komitmen 1: Doa & Sharing (BARU) */}
            <div className="relative p-6 rounded-3xl bg-white/40 border border-stone-200/50 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-[0_20px_40px_rgba(111,78,55,0.04)] hover:-translate-y-1 group/card">
              <div className="w-10 h-10 rounded-xl bg-[#6F4E37]/5 text-[#6F4E37] flex items-center justify-center mb-4 group-hover/card:bg-[#6F4E37] group-hover/card:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={18} className="text-[#D4AF37]" />
              </div>
              <h4 className="text-sm font-black text-[#6F4E37] uppercase tracking-wider">Doa & Sharing</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                Wadah terbuka untuk berdoa bersama dan saling berbagi beban hidup. Di sini kita bebas menceritakan masalah serta mendapatkan saran, solusi, dan dukungan moril yang menguatkan dari teman-teman seiman.
              </p>
            </div>

            {/* Kartu Komitmen 2: Pelayanan Sosial */}
            <div className="relative p-6 rounded-3xl bg-white/40 border border-stone-200/60 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-[0_20px_40px_rgba(111,78,55,0.04)] hover:-translate-y-1 group/card">
              <div className="w-10 h-10 rounded-xl bg-[#6F4E37]/5 text-[#6F4E37] flex items-center justify-center mb-4 group-hover/card:bg-[#6F4E37] group-hover/card:text-white transition-all duration-300 shadow-sm">
                <Heart size={18} className="text-[#D4AF37]" />
              </div>
              <h4 className="text-sm font-black text-[#6F4E37] uppercase tracking-wider">Pelayanan Sosial</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">Bergerak aktif keluar dari dinding sekolah untuk menyebarkan berkat cinta kasih lewat aksi sosial kemanusiaan.</p>
            </div>
          </div>

          {/* BADGE JAMINAN KUALITAS KOMUNITAS */}
          <div className="border-t border-stone-300/60 pt-7 flex flex-wrap items-center gap-8 md:gap-14">
            
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#B38F24]">
                <CalendarDays size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black text-[#6F4E37] tracking-tight">Rutin & Konsisten</span>
                <span className="text-[9px] font-bold tracking-wider uppercase text-stone-400 mt-0.5">Ibadah & Persekutuan</span>
              </div>
            </div>

            <div className="hidden sm:block w-[1px] h-8 bg-stone-300/80" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#B38F24]">
                <Award size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black text-[#6F4E37] tracking-tight">Karakter Unggul</span>
                <span className="text-[9px] font-bold tracking-wider uppercase text-stone-400 mt-0.5">Berdampak Bagi Sekolah</span>
              </div>
            </div>

          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}