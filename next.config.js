/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/bunker",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
