"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Sparkles, Clock, Users, Compass, Star } from "lucide-react";

export default function Kegiatan() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <section id="#kegiatan" className="relative py-28 md:py-36 bg-gradient-to-b from-[#F3EEE5] via-[#FAF6F0] to-[#FFFDFB] overflow-hidden">
      
      {/* ─── AMBIENT GLOW YANG SELARAS DENGAN ABOUT ─── */}
      <div className="absolute top-1/4 left-[-5%] w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-5%] w-[500px] h-[500px] bg-[#6F4E37]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ─── HEADER SECTION ─── */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-4 select-none">
            <span className="h-[1px] w-8 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-[#B38F24] uppercase">
              Our Movement
            </span>
            <span className="h-[1px] w-8 bg-gradient-to-l from-[#D4AF37] to-transparent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#6F4E37] tracking-tight leading-tight">
            Aktivitas & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B6347] to-[#D4AF37]">Pelayanan Kami</span>
          </h2>
          <p className="text-stone-600/90 text-sm md:text-base mt-4 leading-relaxed">
            Rangkaian kegiatan rutin dan perayaan besar Team Evangelisasi untuk membangun iman rohani serta kebersamaan yang solid.
          </p>
        </div>

        {/* ─── GRID UTAMA UTAMA (2 BAGIAN) ─── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          
          {/* KOLOM KIRI: KEGIATAN RUTIN TIMELINE (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-black tracking-[0.2em] text-[#B38F24] uppercase mb-6 flex items-center gap-2 pl-2">
              <Clock size={14} /> Agenda Rutin Organisasi
            </h3>

            {/* Item 1: Doa Pagi & Pulang */}
            <motion.div variants={itemVariants} className="flex gap-4 md:gap-6 p-5 rounded-2xl bg-white/75 border border-stone-200/60 shadow-[0_4px_20px_rgba(111,78,55,0.02)] hover:bg-white hover:shadow-[0_20px_40px_rgba(111,78,55,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#6F4E37]/5 flex items-center justify-center text-[#6F4E37] shrink-0 group-hover:bg-[#6F4E37] group-hover:text-white transition-all duration-300">
                <Calendar size={20} className="text-[#D4AF37] group-hover:text-white" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-[#B38F24] uppercase">Setiap Hari Sekolah</span>
                <h4 className="text-base font-black text-[#6F4E37] mt-0.5">Doa Pagi dan Pulang</h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">Mengawali dan mengakhiri aktivitas belajar mengajar di SMKN 3 Manado dengan menyerahkan seluruh kehidupan ke dalam tangan Tuhan.</p>
              </div>
            </motion.div>

            {/* Item 2: Kreatifitas (DIUBAH) */}
            <motion.div variants={itemVariants} className="flex gap-4 md:gap-6 p-5 rounded-2xl bg-white/75 border border-stone-200/60 shadow-[0_4px_20px_rgba(111,78,55,0.02)] hover:bg-white hover:shadow-[0_20px_40px_rgba(111,78,55,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#6F4E37]/5 flex items-center justify-center text-[#6F4E37] shrink-0 group-hover:bg-[#6F4E37] group-hover:text-white transition-all duration-300">
                <Sparkles size={20} className="text-[#D4AF37] group-hover:text-white" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-[#B38F24] uppercase">Awal Minggu</span>
                <h4 className="text-base font-black text-[#6F4E37] mt-0.5">Kreatifitas Seni Rohani</h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">Wadah pengembangan bakat dan talenta musik, banners, rebana, Qwayers/cheers, hingga pembentukan karakter Worship Leader agar siap memimpin jalannya pujian dan penyembahan yang penuh urapan.</p>
              </div>
            </motion.div>

            {/* Item 3: Hubmas (DIUBAH) */}
            <motion.div variants={itemVariants} className="flex gap-4 md:gap-6 p-5 rounded-2xl bg-white/75 border border-stone-200/60 shadow-[0_4px_20px_rgba(111,78,55,0.02)] hover:bg-white hover:shadow-[0_20px_40px_rgba(111,78,55,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#6F4E37]/5 flex items-center justify-center text-[#6F4E37] shrink-0 group-hover:bg-[#6F4E37] group-hover:text-white transition-all duration-300">
                <Users size={20} className="text-[#D4AF37] group-hover:text-white" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-[#B38F24] uppercase">Awal Bulan</span>
                <h4 className="text-base font-black text-[#6F4E37] mt-0.5">Hubungan Masyarakat (Hubmas)</h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">Aksi kunjungan kasih dan persekutuan yang diadakan langsung dari rumah ke rumah. Melalui ibadah, kita dapat mengenal lebih dekat keluarga dari teman-teman seiman dan mempererat tali kekeluargaan.</p>
              </div>
            </motion.div>

            {/* Item 4: Doa & Sharing */}
            <motion.div variants={itemVariants} className="flex gap-4 md:gap-6 p-5 rounded-2xl bg-white/75 border border-stone-200/60 shadow-[0_4px_20px_rgba(111,78,55,0.02)] hover:bg-white hover:shadow-[0_20px_40px_rgba(111,78,55,0.05)] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#6F4E37]/5 flex items-center justify-center text-[#6F4E37] shrink-0 group-hover:bg-[#6F4E37] group-hover:text-white transition-all duration-300">
                <Compass size={20} className="text-[#D4AF37] group-hover:text-white" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-[#B38F24] uppercase">Akhir Bulan</span>
                <h4 className="text-base font-black text-[#6F4E37] mt-0.5">Doa & Sharing Kebersamaan</h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">Ruang hangat untuk mencurahkan isi hati, saling memberikan saran solusi atas masalah teman seiman, dan dikuatkan dalam doa fajar/syafaat.</p>
              </div>
            </motion.div>

          </div>

          {/* KOLOM KANAN: KEGIATAN BESAR / BIG EVENTS (5 COLS) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xs font-black tracking-[0.2em] text-[#B38F24] uppercase mb-6 flex items-center gap-2 pl-2">
              <Star size={14} className="text-[#D4AF37]" /> Major Celebration Event
            </h3>

            <div className="grid gap-6">
              
              {/* Event 1: KKR Natal */}
              <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl bg-stone-900 aspect-[16/10] shadow-[0_15px_35px_rgba(111,78,55,0.1)] border border-white">
                <Image 
                  src="/kegiatan/natal/natal.webp"
                  alt="KKR Natal TE"
                  fill
                  className="object-cover object-center opacity-60 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="px-2.5 py-0.5 bg-[#D4AF37] text-stone-900 text-[9px] font-black uppercase rounded-md tracking-wider inline-block mb-2">Annual Mega Event</div>
                  <h4 className="text-lg font-black text-white">KKR Natal Sekolah</h4>
                  <p className="text-xs text-stone-200 mt-1">Ibadah perayaan kelahiran Kristus.</p>
                </div>
              </motion.div>

              {/* Event 2: KKR Paskah */}
              <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl bg-stone-900 aspect-[16/10] shadow-[0_15px_35px_rgba(111,78,55,0.1)] border border-white">
                <Image 
                  src="/kegiatan/paskah/paskah.webp"
                  alt="KKR Paskah TE"
                  fill
                  className="object-cover object-center opacity-60 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="px-2.5 py-0.5 bg-[#D4AF37] text-stone-900 text-[9px] font-black uppercase rounded-md tracking-wider inline-block mb-2">Sacred Celebration</div>
                  <h4 className="text-lg font-black text-white">KKR Paskah Sekolah</h4>
                  <p className="text-xs text-stone-200 mt-1">Merenungkan pengorbanan di salib kemurahan serta merayakan kemenangan kebangkitan Yesus Kristus.</p>
                </div>
              </motion.div>

              {/* Event 3: Bible Camp */}
              <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl bg-stone-900 aspect-[16/10] shadow-[0_15px_35px_rgba(111,78,55,0.1)] border border-white">
                <Image 
                  src="/kegiatan/bc/bc.webp"
                  alt="Bible Camp TE"
                  fill
                  // Tambahkan baris di bawah ini:
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center opacity-60 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="px-2.5 py-0.5 bg-[#6F4E37] text-[#FFF5D6] text-[9px] font-black uppercase rounded-md tracking-wider inline-block mb-2">Discipleship Camp</div>
                  <h4 className="text-lg font-black text-white">Bible Camp </h4>
                  <p className="text-xs text-stone-200 mt-1">Retret alam terbuka intensif untuk pembentukan karakter kepemimpinan Kristen.</p>
                </div>
              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}