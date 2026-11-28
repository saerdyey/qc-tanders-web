import Image from "next/image";
import { photos } from "@/lib/images";

type Props = {
  size: number;
  // Above-the-fold logos load right away instead of lazily.
  eager?: boolean;
  className?: string;
};

export function Logo({ size, eager, className }: Props) {
  return (
    <Image
      src={photos.logo.src}
      alt={photos.logo.alt}
      width={size}
      height={size}
      loading={eager ? "eager" : undefined}
      className={className}
    />
  );
}
