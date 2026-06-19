export default function About() {
  return (
    <section id="about" className="py-20 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center">

        <img
          src="/kegiatan.jpg"
          className="rounded-2xl shadow-md"
        />

        <div>
          <h2 className="text-3xl font-bold text-[#6F4E37]">
            Apa Itu TE?
          </h2>

          <p className="mt-4 text-gray-700">
            Team Evangelisasi adalah wadah bagi siswa Kristen di SMK Negeri 3 Manado untuk bertumbuh dalam iman, membangun persekutuan, dan melayani Tuhan melalui kegiatan rohani dan sosial.
          </p>
        </div>

      </div>
    </section>
  );
}