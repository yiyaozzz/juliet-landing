const normalizeSrc = (src: string) => (src.startsWith("/") ? src.slice(1) : src)

export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const isDev = process.env.NODE_ENV === "development"
  const enableCloudflareResizing =
    process.env.NEXT_PUBLIC_ENABLE_CF_IMAGE_RESIZING === "true"

  if (!isDev && enableCloudflareResizing) {
    const params = [`width=${width}`];
    if (quality) {
      params.push(`quality=${quality}`);
    }

    if (src.startsWith("http://") || src.startsWith("https://")) {
      return `/cdn-cgi/image/${params.join(",")}/${src}`
    }

    return `/cdn-cgi/image/${params.join(",")}/${normalizeSrc(src)}`
  }

  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src
  }

  return `/${normalizeSrc(src)}`
}
