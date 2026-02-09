export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-blue-50/50 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-slate-900">
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
  );
}
