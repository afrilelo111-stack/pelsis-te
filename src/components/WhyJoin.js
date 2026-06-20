"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Award, Sparkles, ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "Bertumbuh Dalam Iman",
    desc: "Bukan sekadar rutinitas rohani, ini tempat nyata untuk memperdalam pengenalan akan Tuhan melalui firman dan doa bersama yang menguatkan.",
    icon: ShieldCheck,
    color: "from-[#8B6347] to-[#6F4E37]",
  },
  {
    title: "Komunitas Positif",
    desc: "Temukan lingkungan pertemanan sehat (circle) yang saling mendukung, menjaga dari pergaulan negatif, dan membawa dampak baik bagi masa depanmu.",
    icon: HeartHandshake,
    color: "from-[#D4AF37] to-[#B38F24]",
  },
  {
    title: "Belajar Melayani",
    desc: "Asah potensi kepemimpinan dan talenta terbaikmu. Belajar menjadi Worship Leader, pemain musik, tim multimedia, hingga manajemen organisasi.",
    icon: Award,
    color: "from-[#8B6347] to-[#D4AF37]",
  },
  {
    title: "Menjadi Berkat",
    desc: "Ambil peran nyata menjadi terang di sekolah melalui pelayanan altar dan aksi sosial anjangsana dari rumah ke rumah yang berdampak luas.",
    icon: Sparkles,
    color: "from-[#6F4E37] to-[#D4AF37]",
  },
];

export default function WhyJoin() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 70, damping: 16 } 
    }
  };

  return (
    <section id="#whyjoin" className="relative py-28 md:py-36 bg-[#FAF8F5] overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ─── HEADER SECTION ─── */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-4 select-none">
            <span className="h-[1px] w-6 bg-[#D4AF37]/60" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-[#B38F24] uppercase">
              {"Join Our Family"}
            </span>
            <span className="h-[1px] w-6 bg-[#D4AF37]/60" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#6F4E37] tracking-tight leading-tight">
            Mengapa Harus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B6347] to-[#D4AF37]">Bergabung?</span>
          </h2>
          <p className="text-stone-500 text-sm md:text-base mt-4 leading-relaxed font-medium">
            Masa sekolah adalah waktu terbaik untuk bertumbuh. Di sini, kamu tidak berjalan sendirian—kita berproses bersama untuk menemukan tujuan hidup yang bermakna.
          </p>
        </div>

        {/* ─── CARDS GRID ─── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {reasons.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="group relative p-8 rounded-3xl bg-white border border-stone-200/50 shadow-[0_4px_25px_rgba(111,78,55,0.02)] hover:shadow-[0_24px_50px_rgba(111,78,55,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Circle */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] flex items-center justify-center text-white mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-[15px] bg-[#FAF8F5] group-hover:bg-transparent flex items-center justify-center text-[#6F4E37] group-hover:text-white transition-colors duration-300">
                      <IconComponent size={22} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-black text-[#6F4E37] tracking-tight group-hover:text-[#8B6347] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-xs md:text-[13px] mt-2.5 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Bottom Line */}
                <div className="w-0 h-[3px] bg-gradient-to-r from-[#8B6347] to-[#D4AF37] absolute bottom-0 left-8 rounded-full group-hover:w-16 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ─── CALL TO ACTION BUTTON (TOMBOL GABUNG) ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-20 flex flex-col items-center gap-4"
        >
          <p className="text-stone-600 text-xs md:text-sm font-semibold tracking-wide">
            {"Siap mengambil langkah pertama untuk berdampak?"}
          </p>
          
          <button 
            onClick={() => window.open("https://link-pendaftaran-kamu.com", "_blank")}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#6F4E37] text-white font-black text-sm rounded-2xl shadow-[0_10px_25px_rgba(111,78,55,0.2)] hover:bg-[#5A3E2B] hover:shadow-[0_15px_30px_rgba(111,78,55,0.3)] transition-all duration-300"
          >
            {"Gabung Bersama Kami"}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            
            {/* Soft border glow animation effect */}
            <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}