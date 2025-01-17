/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
         hostname: "media.istockphoto.com",
         port: "",
          pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
