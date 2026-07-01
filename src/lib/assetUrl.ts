// Assets are served from Lovable's CDN. On the lovable.app preview/published
// URL, the /__l5e/... paths resolve directly. On custom domains / GitHub Pages,
// we need the absolute origin so the browser hits the CDN.
const CDN_ORIGIN = "https://jesunimofe.lovable.app";

export const assetUrl = (asset: { url: string }): string => {
  if (!asset?.url) return "";
  if (/^https?:\/\//i.test(asset.url)) return asset.url;
  if (typeof window !== "undefined" && window.location.hostname.endsWith("lovable.app")) {
    return asset.url;
  }
  return `${CDN_ORIGIN}${asset.url}`;
};
