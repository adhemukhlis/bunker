/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	output: 'export',
	basePath: '/bunker',
	images: {
		unoptimized: true
	}
}

module.exports = nextConfig
