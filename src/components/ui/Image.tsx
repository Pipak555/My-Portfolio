import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function Image({ 
  src, 
  alt, 
  fallback = "/placeholder.svg",
  className,
  ...props 
}: ImageProps) {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      className={cn(className)}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
}
