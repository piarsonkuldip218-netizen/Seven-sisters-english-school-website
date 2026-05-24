/**
 * asset() prefixes /public asset paths with basePath when deploying to GitHub Pages.
 * Use this for next/image (unoptimized), <img>, and metadata.icons references.
 */

const isGithubPages = process.env.GITHUB_PAGES === "true";
const hasCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const repoName = "Seven-sisters-english-school-website";
const prefix = isGithubPages && !hasCustomDomain ? `/${repoName}` : "";

export function asset(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${prefix}${path}`;
}
