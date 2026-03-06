import dynamic from 'next/dynamic';
import HeroSection from './components/sections/HeroSection';

// Lazy load sections yang tidak ada di atas viewport
const AboutSection = dynamic(() => import('./components/sections/AboutSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-gray-500">Loading...</div></div>,
});

const ProjectsSection = dynamic(() => import('./components/sections/ProjectsSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-gray-500">Loading...</div></div>,
});

const CertificateSection = dynamic(() => import('./components/sections/CertificateSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-gray-500">Loading...</div></div>,
});

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificateSection />
    </div>
  );
}
