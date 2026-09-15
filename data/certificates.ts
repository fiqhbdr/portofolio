export type Certificate = {
  slug: string;
  org: string;
  title: string;
  year: string;
  date: string;
  tags: string[];
  url: string;
};

// Certificates, most recent first.
export const certificates: Certificate[] = [
  {
    slug: "inercorp-basis-data",
    org: "InerCorp",
    title: "Uji Profisiensi Berbasis Industri Keilmuan Sistem Basis Data",
    year: "2026",
    date: "2026",
    tags: ["Database", "SQL"],
    url: "https://inercorp.com/verify/certificate/CERT/UJI-P/2026/8178-EIMN",
  },
  {
    slug: "dicoding-microsoft-fabric",
    org: "Dicoding Indonesia",
    title: "Penerapan Data Science dengan Microsoft Fabric",
    year: "2026",
    date: "2026",
    tags: ["Data Science", "Microsoft Fabric"],
    url: "https://www.dicoding.com/certificates/QLZ99JR3MZ5D",
  },
  {
    slug: "hackerrank-sql-basic",
    org: "HackerRank",
    title: "SQL (Basic)",
    year: "2026",
    date: "Issued May 2026",
    tags: ["SQL"],
    url: "https://www.hackerrank.com/certificates/be32de179670",
  },
  {
    slug: "simplilearn-cyber-security",
    org: "Simplilearn",
    title: "Introduction to Cyber Security",
    year: "2026",
    date: "Issued May 2026",
    tags: ["Cyber Security"],
    url: "https://www.simplilearn.com/",
  },
  {
    slug: "dicoding-dasar-pemrograman-web",
    org: "Dicoding Indonesia",
    title: "Belajar Dasar Pemrograman Web",
    year: "2026",
    date: "Issued Jan 2026 · Valid until Jan 2029",
    tags: ["Web Development"],
    url: "https://www.dicoding.com/certificates/N9ZO28M1RPG5",
  },
  {
    slug: "dicoding-dasar-ai",
    org: "Dicoding Indonesia",
    title: "Belajar Dasar AI",
    year: "2025",
    date: "Issued Oct 2025 · Valid until Oct 2028",
    tags: ["Artificial Intelligence"],
    url: "https://www.dicoding.com/certificates/KEXL21390ZG2",
  },
];
