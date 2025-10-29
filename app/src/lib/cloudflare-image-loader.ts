const normalizeSrc = (src: string) => (src.startsWith("/") ? src : `/${src}`);

export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (process.env.NODE_ENV !== "development") {
    const params = [`width=${width}`];
    if (quality) {
      params.push(`quality=${quality}`);
    }

    if (src.startsWith("http://") || src.startsWith("https://")) {
      return `/cdn-cgi/image/${params.join(",")}/${src}`;
    }

    return `/cdn-cgi/image/${params.join(",")}${normalizeSrc(src)}`;
  }

  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  return normalizeSrc(src);
}
