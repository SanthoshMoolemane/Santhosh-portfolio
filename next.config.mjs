/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  basePath: "/Santhosh-portfolio",
  // assetPrefix: "/Santhosh-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
