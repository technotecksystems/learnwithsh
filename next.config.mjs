/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/student-portal",
        destination: "/portal",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
