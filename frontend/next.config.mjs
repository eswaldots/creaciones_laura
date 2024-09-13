/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['three'],
  
	    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
            {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1234',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
 