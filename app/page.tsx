import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import ColorBends from '@/components/ColorBends';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900" data-aos="fade-up">
        <div className="absolute inset-0 w-full h-full opacity-80">
          <ColorBends
            rotation={45}
            speed={0.15}
            colors={["#29fbff","#f4435e"]}
            transparent
            autoRotate={0}
            scale={0.8}
            frequency={0.8}
            warpStrength={0.8}
            mouseInfluence={0.5}
            parallax={0.3}
            noise={0.05}
          />
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-red-400 text-white px-4 py-1 rounded-full text-xs font-poppins font-bold mb-6" data-aos="zoom-in">
                BEGINNER
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins leading-tight text-gray-800 dark:text-[#e5d9c3] transition-colors" data-aos="fade-up" data-aos-delay="200">
                HELLO I'M<br />FIQIH BADRIAN
              </h1>
              <p className="text-xl lg:text-2xl mt-6 text-gray-600 dark:text-gray-200 transition-colors" data-aos="fade-up" data-aos-delay="400">
                Developer, Designer
              </p>
            </div>
            <div className="hidden lg:flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="300">
              <Image
                src="/images/logo.png"
                width={280}
                height={280}
                alt="profile"
                className="rounded-full shadow-lg"
                priority
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-blue-50/50 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-slate-900" data-aos="fade-up">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white/70 dark:bg-[#1e2a47]/70 backdrop-blur-sm p-8 lg:p-10 rounded-xl shadow-md transition-colors">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors" data-aos="fade-up">
              About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors" data-aos="fade-up" data-aos-delay="200">
              I am Fiqih Badrian, a passionate developer and designer dedicated to creating innovative digital experiences. With a strong foundation in both development and design, I strive to bridge the gap between functionality and aesthetics. My goal is to deliver seamless and engaging solutions that captivate users and drive success for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-purple-50/50 to-purple-50 dark:from-slate-900 dark:via-gray-900 dark:to-gray-900' data-aos="fade-up">
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

      {/* Certificate Section */}
      <section className='py-16 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 via-pink-50/50 to-pink-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-950' data-aos="fade-up">
        <div className="container mx-auto max-w-7xl">
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white text-center mb-10 transition-colors' data-aos="fade-up">
            Certificate
          </h2>
          <div className='flex justify-center'>
            <Link href="https://www.dicoding.com/certificates/KEXL21390ZG2" target='_blank' className='w-full max-w-sm'>
              <div className='bg-white dark:bg-[#1e2a47] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300'>
                <Image src="/images/dicoding1/dicoding1_page-0001.jpg" width={300} height={200} alt="Certificate 1" className='rounded-lg w-full h-auto mb-4' loading="lazy" quality={75}/>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white text-center transition-colors'>Dicoding - Dasar AI</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
