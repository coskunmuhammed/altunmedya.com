/** @type {import('next').NextConfig} */
// Force trigger redeploy for Vercel
const nextConfig = {
    output: "standalone",
};

export default nextConfig;
