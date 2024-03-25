/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            },
            {
                protocol: 'https',
                hostname: 'stimpulsacdnprod.blob.core.windows.net'
            },
        ],
        unoptimized: true,
    },
};

export default nextConfig;
