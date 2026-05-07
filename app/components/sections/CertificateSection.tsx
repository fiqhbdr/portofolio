import Image from 'next/image';
import Link from 'next/link';

export default function CertificateSection() {
  const certificates = [
    {
      name: "SQL (Basic)",
      organization: "HackerRank",
      url: "https://www.hackerrank.com/certificates/be32de179670",
      credentialId: "be32de179670",
      issued: "May 2026",
      skills: "SQL"
    },
    {
      name: "Introduction to Cyber Security",
      organization: "Simplilearn",
      url: "https://simpli.link/cyber-security",
      credentialId: "10194254",
      issued: "May 2026",
      skills: "Cyber Security"
    },
    {
      name: "Belajar Dasar Pemrograman Web",
      organization: "Dicoding Indonesia",
      url: "https://www.dicoding.com/certificates/N9ZO28M1RPG5",
      credentialId: "N9ZO28M1RPG5",
      issued: "Jan 2026",
      valid: "Jan 2029",
      image: "/images/dicoding1/dicoding1_page-0002.jpg",
      skills: "Web Development"
    },
    {
      name: "Belajar Dasar AI",
      organization: "Dicoding Indonesia",
      url: "https://www.dicoding.com/certificates/KEXL21390ZG2",
      credentialId: "KEXL21390ZG2",
      issued: "Oct 2025",
      valid: "Oct 2028",
      image: "/images/dicoding1/dicoding1_page-0001.jpg",
      skills: "Artificial Intelligence (AI)"
    }
  ];

  return (
    <section className='py-16 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 via-pink-50/50 to-pink-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-950'>
      <div className="container mx-auto max-w-7xl">
        <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white text-center mb-10 transition-colors' data-aos="fade-up">
          Certificate
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center'>
          {certificates.map((cert, index) => (
            <Link key={index} href={cert.url} target='_blank' className='w-full max-w-sm'>
              <div className='bg-white dark:bg-[#1e2a47] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col'>
                {cert.image && (
                  <Image 
                    src={cert.image} 
                    width={300} 
                    height={200} 
                    alt={`${cert.organization} - ${cert.name}`} 
                    className='rounded-lg w-full h-auto mb-4' 
                    loading="lazy" 
                    quality={75} 
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                )}
                {!cert.image && (
                  <div className='bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg w-full h-32 mb-4 flex items-center justify-center'>
                    <p className='text-gray-600 dark:text-gray-300 font-semibold text-center text-sm'>{cert.organization}</p>
                  </div>
                )}
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white transition-colors mb-2'>{cert.name}</h3>
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>{cert.organization}</p>
                <p className='text-xs text-gray-500 dark:text-gray-500 mb-2'>Issued: {cert.issued}</p>
                {cert.valid && (
                  <p className='text-xs text-gray-500 dark:text-gray-500 mb-2'>Valid until: {cert.valid}</p>
                )}
                <p className='text-xs text-purple-600 dark:text-purple-400 font-medium mt-auto'>{cert.skills}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
