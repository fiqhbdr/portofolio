"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';

type Repository = {
  name: string;
  description: string;
  url: string;
  openGraphImageUrl: string | null;
  homepageUrl?: string;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  stargazerCount: number;
  forkCount: number;
};

// Static pinned repositories data
const pinnedRepos: Repository[] = [
  {
    name: "Azxchat",
    description: "Chat web using nextjs and socket.io",
    url: "https://github.com/fiqihbadrian/Azxchat",
    openGraphImageUrl: "https://opengraph.githubassets.com/1/fiqihbadrian/Azxchat",
    primaryLanguage: { name: "JavaScript", color: "#f1e05a" },
    stargazerCount: 2,
    forkCount: 0
  },
  {
    name: "sistem-manajemen-printer",
    description: "Sistem Manajemen Printer berbasis PHP untuk mengelola data printer yang diservis.",
    url: "https://github.com/fiqihbadrian/sistem-manajemen-printer",
    openGraphImageUrl: "https://opengraph.githubassets.com/1/fiqihbadrian/sistem-manajemen-printer",
    primaryLanguage: { name: "PHP", color: "#4F5D95" },
    stargazerCount: 2,
    forkCount: 0
  },
  {
    name: "Python-Game-Loncat",
    description: "Game sederhana yang di buat menggunakan bahasa python dan package pygame",
    url: "https://github.com/fiqihbadrian/Python-Game-Loncat",
    openGraphImageUrl: "https://opengraph.githubassets.com/1/fiqihbadrian/Python-Game-Loncat",
    primaryLanguage: { name: "Python", color: "#3572A5" },
    stargazerCount: 1,
    forkCount: 0
  },
  {
    name: "acc-jambu-2",
    description: "CRUD Web Nextjs",
    url: "https://github.com/fiqihbadrian/acc-jambu-2",
    openGraphImageUrl: "https://opengraph.githubassets.com/1/fiqihbadrian/acc-jambu-2",
    primaryLanguage: { name: "TypeScript", color: "#3178c6" },
    stargazerCount: 2,
    forkCount: 0
  },
  {
    name: "cemil",
    description: "Website berbasis NextJs menggunakan DaisyUI",
    url: "https://github.com/fiqihbadrian/cemil",
    openGraphImageUrl: "https://opengraph.githubassets.com/1/fiqihbadrian/cemil",
    primaryLanguage: { name: "JavaScript", color: "#f1e05a" },
    stargazerCount: 2,
    forkCount: 0
  },
  {
    name: "todo-list",
    description: "Simple todo list application",
    url: "https://github.com/fiqihbadrian/todo-list",
    openGraphImageUrl: "https://opengraph.githubassets.com/1/fiqihbadrian/todo-list",
    primaryLanguage: { name: "HTML", color: "#e34c26" },
    stargazerCount: 1,
    forkCount: 0
  }
];

export default function ProjectsSection() {
  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-purple-50/50 to-purple-50 dark:from-slate-900 dark:via-gray-900 dark:to-gray-900'>
      <div className="container mx-auto max-w-7xl">
        <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white text-center flex justify-center items-center gap-3 mb-10 transition-colors' data-aos="fade-up">
          My Projects <FaGithub />
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {pinnedRepos.map((repo, index) => (
                <Link href={repo.url} target='_blank' key={repo.name}>
                  <div className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2' data-aos="zoom-in" data-aos-delay={200 + index * 100}>
                    {/* Image or Placeholder */}
                    {repo.openGraphImageUrl ? (
                      <div className="w-full h-48 relative rounded-lg mb-4 overflow-hidden">
                        <Image 
                          src={repo.openGraphImageUrl} 
                          alt={repo.name}
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className='w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center'>
                        <FaGithub className='text-white text-6xl opacity-50' />
                      </div>
                    )}

                    {/* Repo Info */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className='text-xl font-semibold text-gray-900 dark:text-white transition-colors flex-1'>
                        {repo.name}
                      </h3>
                      <FaExternalLinkAlt className="text-gray-400 dark:text-gray-500 text-sm mt-1 flex-shrink-0 ml-2" />
                    </div>

                    <p className='text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 transition-colors'>
                      {repo.description || 'No description available'}
                    </p>

                    {/* Stats & Language */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      {repo.primaryLanguage && (
                        <div className="flex items-center gap-1">
                          <span 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: repo.primaryLanguage.color }}
                          ></span>
                          <span>{repo.primaryLanguage.name}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <span>{repo.stargazerCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCodeBranch />
                        <span>{repo.forkCount}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center" data-aos="fade-up">
              <Link 
                href="https://github.com/fiqihbadrian"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaGithub className="text-xl" />
                <span>View All on GitHub</span>
              </Link>
            </div>
      </div>
    </section>
  );
}
