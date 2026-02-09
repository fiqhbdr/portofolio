import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // GitHub GraphQL API untuk mendapatkan pinned repositories
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN || ''}`,
      },
      body: JSON.stringify({
        query: `
          query {
            user(login: "fiqihbadrian") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    name
                    description
                    url
                    openGraphImageUrl
                    homepageUrl
                    primaryLanguage {
                      name
                      color
                    }
                    stargazerCount
                    forkCount
                  }
                }
              }
            }
          }
        `,
      }),
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const data = await response.json();
    const pinnedRepos = data.data.user.pinnedItems.nodes;

    return NextResponse.json({ repos: pinnedRepos });
  } catch (error) {
    console.error('Error fetching GitHub pins:', error);
    
    // Fallback data jika API gagal - 6 repos yang di-pin di GitHub
    return NextResponse.json({
      repos: [
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
      ]
    });
  }
}
