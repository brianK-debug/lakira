import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  title,
  width = 800,
  height = 600,
  className = '',
  priority = false,
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title || alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      quality={80}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 100vw"
    />
  );
}
