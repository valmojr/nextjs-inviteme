/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '/**'
            }
        ],
    },
    experimental: {
        forceSwcTransforms: true,
    },
}

module.exports = nextConfig
