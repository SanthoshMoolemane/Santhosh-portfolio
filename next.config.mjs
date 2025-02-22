/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  basePath: "/Santhosh-portfolio",
  assetPrefix: "/Santhosh-portfolio/",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.output.publicPath = "/Santhosh-portfolio/_next/";
    return config;
  },
};

export default nextConfig;
