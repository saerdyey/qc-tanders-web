import Image from "next/image";
import { photos } from "@/lib/images";

type Props = {
  size: number;
  priority?: boolean;
  className?: string;
};

export function Logo({ size, priority, className }: Props) {
  return (
    <Image
      src={photos.logo.src}
      alt={photos.logo.alt}
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
