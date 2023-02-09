/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "orr.prestonator.com",
				port: "",
				pathname: "/uploads/**",
			},
		],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
