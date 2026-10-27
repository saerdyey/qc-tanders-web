import { getGalleryPhotos } from "@/lib/media";
import { site } from "@/lib/site";
import { ShuffleGallery } from "./ShuffleGallery";

export async function PhotoGallery() {
  const photos = await getGalleryPhotos();
  if (photos.length === 0) return null;
  return (
    <section className="section section-alt" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="tape">From the road</p>
            <h2 id="gallery-heading">Nights in QC</h2>
          </div>
          <a href={site.social.facebook} target="_blank" rel="noopener" className="text-link">
            More on Facebook →
          </a>
        </div>
        <ShuffleGallery
          photos={photos.map(({ src, width, height, alt }) => ({ src, width, height, alt }))}
        />
      </div>
    </section>
  );
}
