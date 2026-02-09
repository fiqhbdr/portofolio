import Image from 'next/image';
import Link from 'next/link';

export default function CertificateSection() {
  return (
    <section className='py-16 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 via-pink-50/50 to-pink-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-950'>
      <div className="container mx-auto max-w-7xl">
        <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white text-center mb-10 transition-colors' data-aos="fade-up">
          Certificate
        </h2>
        <div className='flex flex-wrap justify-center gap-6'>
          <Link href="https://www.dicoding.com/certificates/KEXL21390ZG2" target='_blank' className='w-full max-w-sm'>
            <div className='bg-white dark:bg-[#1e2a47] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300'>
              <Image src="/images/dicoding1/dicoding1_page-0001.jpg" width={300} height={200} alt="Certificate Dasar AI" className='rounded-lg w-full h-auto mb-4' loading="lazy" quality={75}/>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white text-center transition-colors'>Dicoding - Dasar AI</h3>
            </div>
          </Link>
          <Link href="https://www.dicoding.com/certificates/N9ZO28M1RPG5" target='_blank' className='w-full max-w-sm'>
            <div className='bg-white dark:bg-[#1e2a47] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300'>
              <Image src="/images/dicoding1/dicoding1_page-0002.jpg" width={300} height={200} alt="Certificate Dicoding" className='rounded-lg w-full h-auto mb-4' loading="lazy" quality={75}/>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white text-center transition-colors'>Dicoding Certificate</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
