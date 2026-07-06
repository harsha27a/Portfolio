const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix public folder paths for GitHub Pages (/Portfolio/...) */
export function publicPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
