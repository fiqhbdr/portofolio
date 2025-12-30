import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div>


      <section className="min-h-screen md:h-screen w-[90%] mx-auto pb-20 flex flex-col justify-center items-start md:translate-y-[-80px]" data-aos="fade-up">
      <span className="inline-block bg-red-400 text-white px-4 py-1 rounded-full text-xs font-poppins font-bold mb-6 mt-0" data-aos="zoom-in">
        BEGINNER
      </span>
      <h1 className="text-3xl md:text-5xl font-extrabold font-poppins leading-tight text-gray-800 dark:text-[#e5d9c3] transition-colors" data-aos="fade-up" data-aos-delay="200">HELLO I'M<br />FIQIH BADRIAN</h1>
      <p className="text-lg md:text-xl mt-4 text-gray-600 dark:text-gray-200 transition-colors" data-aos="fade-up" data-aos-delay="400">Developer, Designer</p>
      <div className="hidden md:block position absolute mt-40 right-0 transform -translate-y-1/3">
                <Image
                  src="/images/logo.png"
                  width={230}
                  height={200}
                  alt="profile"
                  className="rounded-full"
                />
      </div>
      </section>


      <section className="w-[90%] mx-auto mb-20 bg-white dark:bg-[#1e2a47] p-6 md:p-8 rounded-xl md:-translate-y-20 shadow-md transition-colors" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-5 transition-colors" data-aos="fade-up">About Me</h1>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed transition-colors" data-aos="fade-up" data-aos-delay="200">
          I am Fiqih Badrian, a passionate developer and designer dedicated to creating innovative digital experiences. With a strong foundation in both development and design, I strive to bridge the gap between functionality and aesthetics. My goal is to deliver seamless and engaging solutions that captivate users and drive success for businesses.
        </p>
      </section>


      <section className='mb-20 w-[90%] mx-auto' data-aos="fade-up">
        <h1 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center flex justify-center items-center gap-2 transition-colors' data-aos="fade-up">
          My Project <FaGithub />
        </h1>
        <div className='card-container flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-8 mt-8'>
          <Link href="https://github.com/fiqihbadrian/Python-Game-Loncat" target='_blank'><div className='card-item bg-white dark:bg-[#1e2a47] p-4 rounded-lg w-full sm:w-80 md:w-auto shadow-md transition-colors' data-aos="zoom-in" data-aos-delay="200">
            <Image src="/images/azx.png" width={300} height={200} alt="Project 1" className='rounded-lg w-full h-auto'/>
            <h2 className='text-lg md:text-xl font-semibold text-gray-900 dark:text-white mt-2 transition-colors'>AZXChat</h2>
            <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base transition-colors'>Chat web using socketio and nextjs</p>
          </div></Link>
          <Link href="https://github.com/fiqihbadrian/sistem-manajemen-printer" target='_blank'><div className='card-item bg-white dark:bg-[#1e2a47] p-4 rounded-lg w-full sm:w-80 md:w-auto shadow-md transition-colors' data-aos="zoom-in" data-aos-delay="400">
            <Image src="/images/smp.png" width={300} height={200} alt="Project 2" className='rounded-lg w-full h-auto'/>
            <h2 className='text-lg md:text-xl font-semibold text-gray-900 dark:text-white mt-2 transition-colors'>Sistem Manajemen Printer</h2>
            <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base transition-colors'>Website PHP untuk mengelola data</p>
          </div></Link>
        </div>
      </section>


      <section className='mb-40 w-[90%] mx-auto' data-aos="fade-up">
        <h1 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center transition-colors' data-aos="fade-up">Certificate</h1>
        <div className='card-container flex justify-center gap-4 md:gap-8 mt-8'>
          <Link href="https://www.dicoding.com/certificates/KEXL21390ZG2" target='_blank'><div className='card-item bg-white dark:bg-[#1e2a47] p-4 rounded-lg w-full sm:w-80 md:w-auto shadow-md transition-colors' >
            <Image src="/images/dicoding1/dicoding1_page-0001.jpg" width={300} height={200} alt="Project 1" className='rounded-lg w-full h-auto'/>
            <h2 className='text-lg md:text-xl font-semibold text-gray-900 dark:text-white mt-2 text-center transition-colors'>Dicoding -  Dasar AI</h2>
          </div></Link>
        </div>
      </section>


    </div>
  );
}
