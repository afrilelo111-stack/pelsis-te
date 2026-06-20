"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart, Cross, CalendarDays, Award, ShieldCheck, Flame, Bookmark } from "lucide-react";

export default function About() {
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
        
        {/* ─── KOLOM KIRI: THE LUXURY TRIPLE FOTO PORTFOLIO COLLAGE ─── */}
        <motion.div variants={itemVariants} className="lg:col-span-5 relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center justify-center">
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

          {/* FLOATING GLASS INSIGNIA (Diperbarui agar super kontras dan mudah dibaca) */}
          <div className="absolute bottom-2 left-[-2%] p-4 bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex items-center gap-3.5 z-40 max-w-[240px] transform select-none hover:scale-105 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6F4E37] to-[#8B6347] flex items-center justify-center text-white shadow-md shrink-0">
              <Cross size={18} className="text-[#D4AF37]" />
            </div>
            <div className="leading-tight">
              <p className="text-[10px] font-black tracking-[0.2em] text-[#B38F24] uppercase">
                Soli Deo
              </p>
              <p className="text-xs font-black text-[#6F4E37] mt-0.5">
                Bertumbuh & Bersinar
              </p>
            </div>
          </div>        
          </motion.div>

        {/* ─── KOLOM KANAN: PANEL VISI & MISI ─── */}
        <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-center">
          
          <div className="flex items-center gap-3 mb-6 select-none">
            <span className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.35em] text-[#B38F24] uppercase">
              STRATEGI & TUJUAN
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#6F4E37] tracking-tight leading-[1.12] mb-6">
            Visi & Misi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F4E37] via-[#8B6347] to-[#D4AF37]">
              Organisasi Kami
            </span>
          </h2>

          {/* ── VISI SECTION ── */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/80 to-white/40 border border-white shadow-[0_20px_40px_rgba(111,78,55,0.05)] mb-10 overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Sparkles size={120} className="text-[#D4AF37]" />
            </div>
            <h3 className="text-xs font-black tracking-[0.2em] text-[#D4AF37] uppercase mb-3 flex items-center gap-2">
              <Flame size={14} /> VISI TE
            </h3>
            <p className="text-lg md:text-xl font-bold text-[#6F4E37] leading-relaxed italic">
              &ldquo;Membina karakter setiap siswa kristen melalui persekutuan dan pelayanan untuk menjadi saksi-saksi Kristus sebagai penggenapan amanat agung&rdquo;
            </p>
          </div>

          {/* ── MISI SECTION ── */}
          <h3 className="text-xs font-black tracking-[0.2em] text-[#B38F24] uppercase mb-6 pl-2">
            MISI ORGANISASI
          </h3>

          <div className="grid gap-4">
            {/* Misi 1 */}
            <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/40 border border-stone-200/50 hover:bg-white transition-all duration-300 group/item">
              <div className="w-10 h-10 rounded-xl bg-[#6F4E37]/5 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover/item:bg-[#6F4E37] group-hover/item:text-white transition-all duration-300">
                <Bookmark size={20} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#6F4E37] uppercase tracking-wider mb-1">Hubungan Pribadi</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Membina setiap anggota untuk membangun hubungan pribadi dengan Tuhan melalui pengajaran dan pemuridan.
                </p>
              </div>
            </div>

            {/* Misi 2 */}
            <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/40 border border-stone-200/50 hover:bg-white transition-all duration-300 group/item">
              <div className="w-10 h-10 rounded-xl bg-[#6F4E37]/5 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover/item:bg-[#6F4E37] group-hover/item:text-white transition-all duration-300">
                <Heart size={20} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#6F4E37] uppercase tracking-wider mb-1">Pelayanan Kasih</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Membina setiap anggota untuk memberikan pelayanan kasih disekelilingnya.
                </p>
              </div>
            </div>

            {/* Misi 3 */}
            <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/40 border border-stone-200/50 hover:bg-white transition-all duration-300 group/item">
              <div className="w-10 h-10 rounded-xl bg-[#6F4E37]/5 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover/item:bg-[#6F4E37] group-hover/item:text-white transition-all duration-300">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#6F4E37] uppercase tracking-wider mb-1">Integritas Organisasi</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Membangun jiwa berorganisasi yang tertib, handal dan bertanggung jawab pada Tuhan dan organisasi.
                </p>
              </div>
            </div>
          </div>

          {/* BADGE JAMINAN KUALITAS */}
          <div className="border-t border-stone-300/60 mt-10 pt-8 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#B38F24]">
                <CalendarDays size={16} />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400">Rutin & Terjadwal</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#B38F24]">
                <Award size={16} />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400">Terakreditasi Sekolah</span>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}