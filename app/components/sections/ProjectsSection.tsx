import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function ProjectsSection() {
  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-purple-50/50 to-purple-50 dark:from-slate-900 dark:via-gray-900 dark:to-gray-900'>
      <div className="container mx-auto max-w-7xl">
        <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white text-center flex justify-center items-center gap-3 mb-10 transition-colors' data-aos="fade-up">
          My Project <FaGithub />
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Link href="https://github.com/fiqihbadrian/Python-Game-Loncat" target='_blank'>
            <div className='bg-white dark:bg-[#1e2a47] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full' data-aos="zoom-in" data-aos-delay="200">
              <div className='w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center'>
                <h4 className='text-white text-2xl font-bold text-center px-4'>Python Game<br/>Loncat</h4>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors'>Python Game Loncat</h3>
              <p className='text-gray-600 dark:text-gray-300 text-base transition-colors'>Game sederhana menggunakan Python</p>
            </div>
          </Link>
          <Link href="https://github.com/fiqihbadrian/azxchat" target='_blank'>
            <div className='bg-white dark:bg-[#1e2a47] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full' data-aos="zoom-in" data-aos-delay="300">
              <Image src="/images/azx.png" width={300} height={200} alt="AZXChat" className='rounded-lg w-full h-auto mb-4' loading="lazy" quality={80}/>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors'>AZXChat</h3>
              <p className='text-gray-600 dark:text-gray-300 text-base transition-colors'>Chat web using socketio and nextjs</p>
            </div>
          </Link>
          <Link href="https://github.com/fiqihbadrian/sistem-manajemen-printer" target='_blank'>
            <div className='bg-white dark:bg-[#1e2a47] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full' data-aos="zoom-in" data-aos-delay="400">
              <Image src="/images/smp.png" width={300} height={200} alt="Sistem Manajemen Printer" className='rounded-lg w-full h-auto mb-4' loading="lazy" quality={80}/>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors'>Sistem Manajemen Printer</h3>
              <p className='text-gray-600 dark:text-gray-300 text-base transition-colors'>Website PHP untuk mengelola data</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
