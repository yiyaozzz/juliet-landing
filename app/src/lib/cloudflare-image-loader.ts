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
    return src;
  }

  const params = new URLSearchParams({ width: width.toString() });
  if (quality) {
    params.append("quality", quality.toString());
  }

  return `/cdn-cgi/image/${params.toString()}/${normalizeSrc(src)}`;
}
