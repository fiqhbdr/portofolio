import Image from "next/image";

const certs = [
  {
    org: "HackerRank",
    orgColor: "#1EA5FF",
    title: "SQL (Basic)",
    date: "Issued May 2026",
    year: "2026",
    img: "/images/Certified/SQLbasic.png",
    tags: ["SQL"],
  },
  {
    org: "Simplilearn",
    orgColor: "#1EA5FF",
    title: "Introduction to Cyber Security",
    date: "Issued May 2026",
    year: "2026",
    img: "/images/Certified/cyber.png",
    tags: ["Cyber Security"],
  },
  {
    org: "Dicoding Indonesia",
    orgColor: "#1EA5FF",
    title: "Belajar Dasar Pemrograman Web",
    date: "Issued Jan 2026 · Valid until Jan 2029",
    year: "2026",
    img: "/images/Certified/dasarpemrograman.png",
    tags: ["Web Development"],
  },
  {
    org: "Dicoding Indonesia",
    orgColor: "#1EA5FF",
    title: "Belajar Dasar AI",
    date: "Issued Oct 2025 · Valid until Oct 2028",
    year: "2025",
    img: "/images/Certified/dasarai.jpg",
    tags: ["Artificial Intelligence"],
  },
  {
    org: "UBSI Bogor",
    orgColor: "#1EA5FF",
    title: "Uji Profisiensi Berbasis Industri Keilmuan Sistem Basis Data",
    date: "2026",
    year: "2026",
    img: "/images/Certified/Uji Profisiensi Berbasis Industri Keilmuan Sistem Basis Data - UBSI Bogor 2026.png",
    tags: ["Database", "SQL"],
  },
  {
    org: "Microsoft",
    orgColor: "#1EA5FF",
    title: "Penerapan Data Science dengan Microsoft Fabric",
    date: "2026",
    year: "2026",
    img: "/images/Certified/Penerapan Data Science dengan Microsoft Fabric.png",
    tags: ["Data Science", "Microsoft Fabric"],
  },
];

export default function CertificateSection() {
  return (
    <section id="certificates" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="orb orb-1" style={{ top: "auto", bottom: "-10%", right: "-5%" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 lg:mb-24 reveal">
          <span className="font-mono-custom text-xs tracking-[.2em] uppercase text-[#8D8D8D]">03</span>
          <h2 className="font-display text-6xl lg:text-8xl font-bold text-[#F5F1EA] mt-2" style={{ fontStyle: "italic" }}>Certificates</h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-[1px] bg-[rgba(255,255,255,.08)] hidden md:block" />

          <div className="space-y-16">
            {certs.map((c, i) => (
              <div key={i} className={`relative pl-0 md:pl-20 cert-item ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}>
                <div className="hidden md:block timeline-line" />
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-40 flex-shrink-0">
                    <Image src={c.img} alt={c.title} width={240} height={160} className="w-full aspect-[3/2] object-cover border border-[rgba(255,255,255,.08)]" loading="lazy" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#1EA5FF] font-mono-custom text-xs tracking-wider uppercase">{c.org}</span>
                      <span className="text-[#8D8D8D] text-xs font-mono-custom">· {c.year}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#F5F1EA] mb-2">{c.title}</h3>
                    <p className="text-[#8D8D8D] text-sm mb-3">{c.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-mono-custom border border-[rgba(255,255,255,.1)] text-[#8D8D8D]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
