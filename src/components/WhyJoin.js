const items = [
  "Bertumbuh Dalam Iman",
  "Komunitas Positif",
  "Belajar Melayani",
  "Menjadi Berkat",
];

export default function WhyJoin() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-[#6F4E37]">
          Mengapa Bergabung?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {items.map((item, i) => (
            <div key={i} className="p-6 shadow-md rounded-2xl text-center">
              <p className="font-semibold text-gray-800">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}