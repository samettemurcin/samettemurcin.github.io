/** Resolve a path under `public/` for both dev (PUBLIC_URL=/) and GitHub Pages subpaths. */
export function publicAsset(path) {
  const base = process.env.PUBLIC_URL || '';
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
