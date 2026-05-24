/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === "true";
const hasCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const repoName = "seven-sisters-english-school-website";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages && !hasCustomDomain ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages && !hasCustomDomain ? `/${repoName}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
