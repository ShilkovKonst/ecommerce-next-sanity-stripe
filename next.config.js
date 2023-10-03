/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        logging: {
            level: 'verbose'
        }
    },
    images: {
        domains: ['cdn.sanity.io']
    }
}

module.exports = nextConfig
