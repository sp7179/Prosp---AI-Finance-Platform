/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },

  redirects:[
    {
      source: "/accounts",
      destination: "/",
      permanent: true,
    },
  ]
};

export default nextConfig;