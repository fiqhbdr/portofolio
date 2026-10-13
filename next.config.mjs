/** @type {import('next').NextConfig} */
import path from "node:path";
import loadWebpack from "next/dist/compiled/webpack/bundle5.js";

// Next keeps its own webpack copy and only hands it to the config through this
// factory, so the plugin has to be taken from there rather than from a direct
// webpack dependency this project does not have.
const { webpack } = loadWebpack();

const nextConfig = {
  images: {
    remotePatterns: [],
    // AVIF first: the generated covers are flat colour and type, which AVIF
    // compresses far better than the WebP fallback.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // The Open Graph card reads font files off disk with a path built at runtime,
    // so the tracer cannot see them. Naming the folder keeps the files next to
    // the route in the deployment output.
    outputFileTracingIncludes: {
      "/opengraph-image": ["./assets/og/**/*"],
      "/projects/[slug]/opengraph-image": ["./assets/og/**/*"],
      "/projects/[slug]/cover": ["./assets/og/**/*"],
    },
  },

  webpack: (config, { isServer }) => {
    // Next's client entry requires this module unconditionally, and it carries
    // polyfills for Array.prototype.at, Object.hasOwn, Object.fromEntries,
    // String.prototype.trimStart and friends. Every one of them is guarded by a
    // feature check, so none of them run here, but all 11KB still has to be
    // parsed on every visit. The browserslist below already excludes every
    // engine that lacks them, so the module is pointed at an empty file.
    //
    // Client only: the module is only ever imported from client entry points,
    // and leaving the server build alone keeps the replacement away from
    // anything that resolves it for a different reason.
    //
    // Matched on the request rather than through resolve.alias, because Next
    // imports it as a relative path (`../build/polyfills/polyfill-module`), so
    // an alias keyed on the package path would never be consulted.
    if (!isServer) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /polyfills[\\/]polyfill-module$/,
          path.resolve(process.cwd(), "lib/noPolyfills.js"),
        ),
      );
    }

    return config;
  },
};

export default nextConfig;
