import { getMerchImages, type MediaImage } from "./media";

// Product info for each merch_*.jpg in public/images, keyed by filename.
// A merch photo without an entry still appears, with a generic name.
// Leave `price` out to show "Message for price".
type MerchInfo = {
  name: string;
  description: string;
  price?: number;
  details?: string[];
  badge?: string;
};

const merchInfo: Record<string, MerchInfo> = {
  "merch_1.jpg": {
    name: "Solid Brotherhood Tee",
    description:
      "Black oversized tee. QC Tanders script on the chest; the full skull, chain and city skyline print on the back with “Solid Brotherhood Forever”.",
    details: ["Front + back print", "Black", "Oversized fit"],
    badge: "New drop",
  },
};

export type MerchItem = MerchInfo & {
  slug: string;
  image: MediaImage;
};

export async function getMerch(): Promise<MerchItem[]> {
  const images = await getMerchImages();
  return images.map((image) => {
    const slug = image.file.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const number = image.file.match(/\d+/)?.[0];
    const info = merchInfo[image.file] ?? {
      name: `Club Merch${number ? ` #${number}` : ""}`,
      description: "Official QC Tanders RC support gear. Message us for sizes and availability.",
    };
    return { ...info, slug, image };
  });
}

export function formatPrice(value?: number) {
  return value === undefined ? "Message for price" : `₱${value.toLocaleString("en-PH")}`;
}
