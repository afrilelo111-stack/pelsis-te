export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center">
      
      <div className="bg-black/60 w-full h-full absolute"></div>

      <div className="relative text-center text-white px-4">
        <p className="text-sm mb-2">SMK Negeri 3 Manado</p>

        <h1 className="text-4xl md:text-6xl font-bold">
          TEAM EVANGELISASI
        </h1>

        <p className="mt-4 text-lg">
          Beri Yang Terbaik Untuk Kemuliaan Tuhan
        </p>

        <p className="mt-3 text-sm max-w-xl mx-auto">
          Komunitas siswa Kristen yang bertumbuh dalam iman, melayani dengan kasih, dan menjadi terang di sekolah.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <a href="#about" className="bg-white text-black px-5 py-2 rounded-full">
            Tentang TE
          </a>

          <a
            href="https://forms.gle/your-form-link"
            className="bg-[#D4AF37] px-5 py-2 rounded-full"
            target="_blank"
          >
            Gabung Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}