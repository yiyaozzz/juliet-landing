const normalizeSrc = (src: string) => (src.startsWith("/") ? src.slice(1) : src);

export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (process.env.NODE_ENV === "development") {
    const url = new URL(src, "http://localhost");
    url.searchParams.set("width", String(width));
    if (quality) {
      url.searchParams.set("quality", String(quality));
    }

    if (src.startsWith("http://") || src.startsWith("https://")) {
      return url.href;
    }

    return `${url.pathname}${url.search}`;
  }

  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }

  return `/cdn-cgi/image/${params.join(",")}/${normalizeSrc(src)}`;
}
