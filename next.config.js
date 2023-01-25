/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploads-ssl.webflow.com",
        port: "",
        pathname: "/63a0aa6e91ca3f2ab8073072/**",
      },
    ],
  },
};

module.exports = nextConfig;
