import { readdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import { captionFor } from "./captions";

// Every image dropped into public/images shows up on the site automatically:
//   merch_*.jpg   → the merch section
//   the logo      → skipped
//   anything else → the photo gallery
// The folder is read at build time, so rebuild (or redeploy) after adding photos.

export type MediaImage = {
  file: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

const folder = join(process.cwd(), "public", "images");
const imageExt = /\.(jpe?g|png|webp|avif)$/i;
const logoFile = "qc-tanders-rc-logo.jpg";

export const isMerchFile = (file: string) => /^merch_/i.test(file);

async function listImages(): Promise<MediaImage[]> {
  "use cache";
  const files = (await readdir(folder)).filter((f) => imageExt.test(f));
  return Promise.all(
    files.map(async (file) => {
      const { width = 1200, height = 900, orientation } = await sharp(join(folder, file)).metadata();
      // EXIF orientations 5–8 are rotated 90°, so width and height swap on screen.
      const rotated = (orientation ?? 1) >= 5;
      return {
        file,
        src: `/images/${encodeURIComponent(file)}`,
        width: rotated ? height : width,
        height: rotated ? width : height,
        alt: captionFor(file),
      };
    }),
  );
}

export async function getGalleryPhotos() {
  const images = await listImages();
  return images
    .filter((img) => img.file !== logoFile && !isMerchFile(img.file))
    .sort((a, b) => a.file.localeCompare(b.file));
}

export async function getMerchImages() {
  const images = await listImages();
  return images
    .filter((img) => isMerchFile(img.file))
    .sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));
}
