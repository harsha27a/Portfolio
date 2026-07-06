/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/Portfolio" : "";

const nextConfig = {
  reactStrictMode: true,
  ...(isGitHubPages && {
    output: "export",
    basePath,
    assetPrefix: `${basePath}/`,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
