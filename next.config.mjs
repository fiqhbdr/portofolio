/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    // The Open Graph card reads font files off disk with a path built at runtime,
    // so the tracer cannot see them. Naming the folder keeps the files next to
    // the route in the deployment output.
    outputFileTracingIncludes: {
      "/opengraph-image": ["./assets/og/**/*"],
      "/projects/[slug]/opengraph-image": ["./assets/og/**/*"],
    },
  },
};

export default nextConfig;
